let express = require('express');
let email = require('../models/emailModel').Email;
let uniqID = require('uniqid');
let router = express.Router();

// route for getting all emails
router.get('/', async (req, resp) => {
    resp.send(await email.find());
});

// route for posting a new email request
router.post('/', async (req, resp) => {
    let reqBody = req.body;
    let newEmail = new email({
        id: uniqID(),
        name: reqBody.name,
        message: reqBody.message,
        email: reqBody.email,
        date: new Date()
    })
    await newEmail.save();
    resp.send('Accepted');
})

// route for deleting a callback request
router.delete('/:id', async (req, resp) => {
    await email.deleteOne({id: req.params.id});
    resp.send('Deleted');
})

module.exports = router;