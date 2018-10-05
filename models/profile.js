var mongoose = require('../db/connection')
var user = require('./users')

// Reference user model to render data on /profile page because data is protected by passport

var UserSchema = new mongoose.Schema({
    username: {
        type: Schema.Types.ObjectId,
        ref: 'username'
    },
    password: {
        type: Schema.Types.ObjectId,
        ref: 'password'
    },
    dateJoined: {
        type: Schema.Types.ObjectId,
        ref: 'dateJoined'
    },
    currentCity:{
        type: Schema.Types.ObjectId,
        ref: 'currentCity'
    }
});

mongoose.model('User', UserSchema);
module.exports = mongoose