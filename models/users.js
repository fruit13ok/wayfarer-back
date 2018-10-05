var mongoose = require('../db/connection')

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    // dateJoined: { type: Date, default: Date.now },
    // currentCity: String
});

mongoose.model('User', UserSchema);
module.exports = mongoose