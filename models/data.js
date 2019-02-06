const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String, 
    age: Number
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);