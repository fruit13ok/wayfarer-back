var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    dateJoined: String,
    currentCity: String
});

var User = mongoose.model('User', UserSchema);
module.export = User;