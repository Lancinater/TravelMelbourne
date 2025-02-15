let express = require('express');
let app = express();
let Post = require('./models/postModel').Post;
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/travels');
app.use(express.json());

app.get('/posts', async (req, resp) => {
    let posts = await Post.find();
    resp.send(posts);
})

let id = 1;
app.post('/posts', async (req, resp) => {
    let reqBody = req.body;
    let newPost = new Post({
        id: '' + id++,
        title: reqBody.title,
        date: new Date(),
        description: reqBody.description,
        text: reqBody.text,
        country: reqBody.country,
        imageURL: reqBody.imageURL
    })
    await newPost.save();
    resp.send('Post created');
})

app.use(express.static('../public'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

