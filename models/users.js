var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: String,
    password: String,
    // dateJoined: { type: Date, default: Date.now },
    // currentCity: String
});

var User = mongoose.model('User', UserSchema);
module.exports = User;