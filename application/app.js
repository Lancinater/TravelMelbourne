let express = require('express');
let app = express();
let Post = require('./models/postModel').Post;
let mongoose = require('mongoose');
let multer = require('multer');
let imageStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, '../public/images'),
    filename: (req, file, cb) => cb(null, file.originalname)
    
})

mongoose.connect('mongodb://localhost/travels');
app.use(express.json());
app.use(multer({storage: imageStorage}).single('imageFile'));

app.get('/posts', async (req, resp) => {
    let posts = await Post.find();
    resp.send(posts);
})



let id = 1;
app.post('/posts', async (req, resp) => {
    let reqBody = req.body;
    let imagePath;
    if(reqBody.imageURL){
        imagePath = reqBody.imageURL;
    }else{
        imagePath = req.file.path.substring(req.file.path.indexOf('images'), req.file.path.length);
    }
    let newPost = new Post({
        id: '' + id++,
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

app.use(express.static('../public'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
