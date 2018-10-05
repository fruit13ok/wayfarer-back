var mongoose = require('../db/connection')

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true,
    },
    dateJoined: { 
        type: Date, 
        default: Date.now },
    currentCity: String
});

mongoose.model('User', UserSchema);
module.exports = mongoose