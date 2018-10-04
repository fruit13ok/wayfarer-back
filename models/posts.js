var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    User = require('./users');
    City = require('./cities');

var PostSchema = new Schema({
    dateCreated: String,
    body: String,
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    title: String,
    city: [{
        type: Schema.Types.ObjectId,
        ref: 'City'
    }]
});

var Post = mongoose.model('Post', PostSchema);
module.export = Post;