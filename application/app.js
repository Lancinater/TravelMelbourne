let express = require('express');
let app = express();
let mongoose = require('mongoose');
let multer = require('multer');
let postRouter = require('./routes/postRouter');
let callbackRouter = require('./routes/callbackRouter');
let CallbackRequest = require('./models/callbackRequestModel').CallbackRequest;

let imageStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, '../public/images'),
    filename: (req, file, cb) => cb(null, file.originalname)
})

let uniqID = require('uniqid');

mongoose.connect('mongodb://localhost/travels');
app.use(express.json());
app.use(multer({storage: imageStorage}).single('imageFile'));

app.use(express.static('../public'));
app.use('/posts', postRouter);
app.use('/callbackRequests', callbackRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
