let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    id: String,
    email: String,
    password: String,
})

let User = mongoose.model('User', UserSchema, 'users');
module.exports = {
    User: User
} 