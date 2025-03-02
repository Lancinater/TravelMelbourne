let express = require('express');
let User = require('../models/userModel').User;
let router = express.Router();
let bcrypt = require('bcrypt');
let auth = require('../controller/auth');

router.post('/login',async (req,resp) => {
    let email = req.body.email;
    let password = req.body.password;

    let users = await User.find().where({email: email});
    if(users.length > 0){
        let result = await bcrypt.compare(password, users[0].password);
        if(result){
            let token = auth.generateToken(users[0]);
            resp.cookie('auth_token', token);
            resp.send('Success');
        } else {
            resp.send('Failed');
        }
    }else{
        resp.send('Failed');
    }
});

router.post('/register',async (req,resp) => {
    let email = req.body.email;
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;

    let users = await User.find().where({email: email});
    if(users.length > 0){
        resp.send('User already exists');
    } else {
        if(password === confirmPassword){
            hashedPassword = await bcrypt.hash(password, 12);
            let user = new User({email: email, password: hashedPassword});
            await user.save();
            resp.send('Success');
        } else {
            resp.send('Passwords do not match');
        }
    }
}
);

module.exports = router;