let express = require('express');
let app = express();
let Post = require('./models/postModel').Post;
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/travels');

let post1 = new Post({
    id: '1',
    title: 'Post 1',
    date: new Date(),
    description: 'This is the first post',
    text: 'This is the first post',
    country: 'USA',
    imageURL: 'https://via.placeholder.com/150'
});

post1.save().then(() => {
    console.log('Post saved');
});

app.use(express.static('../public'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

