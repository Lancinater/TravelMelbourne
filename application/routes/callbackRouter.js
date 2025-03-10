let express = require('express');
let callbackRequest = require('../models/callbackRequestModel').CallbackRequest;
let uniqID = require('uniqid');
let router = express.Router();
let authMiddleware = require('../middleware/roleAuth').roleAuth;

// route for getting all callback requests
router.get('/', authMiddleware, async (req, resp) => {
    resp.send(await callbackRequest.find());
});

// route for posting a new callback request
router.post('/', async (req, resp) => {
    let reqBody = req.body;
    let newCallbackRequest = new callbackRequest({
        id: uniqID(),
        phone: reqBody.phone,
        date: new Date()
    })
    await newCallbackRequest.save();
    resp.send('Callback request created');
})

// route for deleting a callback request
router.delete('/:id', authMiddleware, async (req, resp) => {
    await callbackRequest.deleteOne({id: req.params.id});
    resp.send('Callback request deleted');
})

module.exports = router;