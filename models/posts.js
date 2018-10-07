// var mongoose = require('mongoose'),
var mongoose = require('../db/connection'),
    Schema = mongoose.Schema;
    User = require('./users');
    City = require('./cities');

var PostSchema = new Schema({
    dateCreated: { type: Date, default: Date.now },
    body: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City'
    },
    image: { data: Buffer, contentType: String }
});

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;