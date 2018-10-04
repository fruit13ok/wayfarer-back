// require express and other modules
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// like django let user to upload image to uploads folder
// app.use(multer({ dest: './uploads/',
//   rename: function (fieldname, filename) {
//     return filename;
//   },
//  }));

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

// Allow Cross Origin Requests(CORS)
app.use(function(req, res, next) {
  res.header ("set Access-Control-Allow-Origin "*"");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  // res.sendFile(__dirname + '/views/index.html');
  res.send('hello');
});

// https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d
app.post('/api/photo',function(req,res){
  var newItem = new Item();
  newItem.img.data = fs.readFileSync(req.files.userPhoto.path);
  newItem.img.contentType = 'image/png';
  newItem.save();
 });

/*
 * JSON API Endpoints
 */



/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is up and running on http://localhost:3000/');
});