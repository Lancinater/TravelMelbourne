let express = require('express');
let Post = require('../models/postModel').Post;
let uniqID = require('uniqid');
let router = express.Router();

// route for getting all the posts
router.get('/', async (req, resp) => {
    let posts = await Post.find();
    resp.send(posts);
})

// route for creating a new post
router.post('/', async (req, resp) => {
    let reqBody = req.body;
    let imagePath;
    if(reqBody.imageURL){
        imagePath = reqBody.imageURL;
    }else{
        imagePath = req.file.path.substring(req.file.path.indexOf('images'), req.file.path.length);
    }
    let newPost = new Post({
        id: uniqID(),
        title: reqBody.title,
        date: new Date(),
        description: reqBody.description,
        text: reqBody.text,
        country: reqBody.country,
        imageURL: imagePath
    })
    await newPost.save();
    resp.send('Post created');
})

// route for deleting a post
router.delete('/:id', async (req, resp) => {
    await Post.deleteOne({id: req.params.id});
    resp.send('Post deleted');
})

// route for getting a single post
router.get('/:id', async (req, resp) => {
    let id = req.params.id;
    let post = await Post.findOne({id: id});
    resp.send(post);
})

// route for updating a post
router.put('/:id', async (req, resp) => {
    let id = req.params.id;
    await Post.updateOne({id: id}, req.body);
    resp.send('Post updated');
})

module.exports = router;