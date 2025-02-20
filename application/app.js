let express = require('express');
let app = express();
let Post = require('./models/postModel').Post;
let mongoose = require('mongoose');
let multer = require('multer');
let imageStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, '../public/images'),
    filename: (req, file, cb) => cb(null, file.originalname)
    
})
let uniqID = require('uniqid');

mongoose.connect('mongodb://localhost/travels');
app.use(express.json());
app.use(multer({storage: imageStorage}).single('imageFile'));

// route for getting all the posts
app.get('/posts', async (req, resp) => {
    let posts = await Post.find();
    resp.send(posts);
})

// route for creating a new post
app.post('/posts', async (req, resp) => {
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
app.delete('/posts/:id', async (req, resp) => {
    await Post.deleteOne({id: req.params.id});
    resp.send('Post deleted');
})

// route for getting a single post
app.get('/posts/:id', async (req, resp) => {
    let id = req.params.id;
    let post = await Post.findOne({id: id});
    resp.send(post);
})

// route for updating a post
app.put('/posts/:id', async (req, resp) => {
    let id = req.params.id;
    await Post.updateOne({id: id}, req.body);
    resp.send('Post updated');
})

app.use(express.static('../public'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
