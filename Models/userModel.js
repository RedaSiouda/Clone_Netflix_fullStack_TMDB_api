const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    username: String,
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;