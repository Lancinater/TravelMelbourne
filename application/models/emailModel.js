let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EmailSchema = new Schema({
    id: String,
    email: String,
    name: String,
    message: String,
    date: Date
})

let Email = mongoose.model('Email', EmailSchema);

module.exports = {
    Email : Email
};