let express = require('express');
let app = express();
let mongoose = require('mongoose');
let multer = require('multer');
let cookieParser = require('cookie-parser');
let postRouter = require('./routes/postRouter');
let callbackRouter = require('./routes/callbackRouter');
let emailRouter = require('./routes/emailRouter');
let userRouter = require('./routes/userRouter');
let auth = require('./controller/auth');
let checkToken = auth.checkToken;

let Post = require('./models/postModel').Post;
app.set('view engine', 'ejs');

let imageStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, '../public/images'),
    filename: (req, file, cb) => cb(null, file.originalname)
})

mongoose.connect('mongodb://localhost/travels');
app.use(express.json());
app.use(multer({storage: imageStorage}).single('imageFile'));
app.use(cookieParser());

app.use(express.static('../public'));
app.use('/posts', postRouter);
app.use('/callbackRequests', callbackRouter);
app.use('/emails', emailRouter);
app.use('/users', userRouter);
app.get('/landmark', async (req, resp)=>{
    let id = req.query.id;
    let post = await Post.findOne({id: id});
    resp.render('landmark', {
        title: post.title,
        imageURL: post.imageURL,
        text: post.text,
        date: post.date
    });
})

app.get('/admin', (req, resp) => {
    let token = req.cookies['auth_token'];
    if(token && checkToken(token)){
        resp.render('admin');
    } else {
        resp.redirect('/login');
    }
})

app.get('/login', (req, resp) => {
    let token = req.cookies['auth_token'];
    if(token && checkToken(token)){
        resp.redirect('/admin');
    } else {
        resp.render('login');
    }
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
