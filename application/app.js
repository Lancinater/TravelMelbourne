let express = require('express');
let app = express();
let Post = require('./models/postModel').Post;
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/travels');

app.get('/posts', async (req, resp) => {
    let posts = await Post.find();
    resp.send(posts);
})

app.use(express.static('../public'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

