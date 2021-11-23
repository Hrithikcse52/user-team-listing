const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    full_name: String,
    email: String,
    number: Number,
    city: String,
    url: String,
});

module.exports = mongoose.model('user', userSchema);
