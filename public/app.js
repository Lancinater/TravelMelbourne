let mongoose = require('mongoose');

mongoose.connect('mongodb://Localhost//users').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('something is going wrong');
});