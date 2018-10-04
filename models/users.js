var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dateJoined: { type: Date, default: Date.now },
    currentCity: String
});

var User = mongoose.model('User', UserSchema);
module.exports = User;