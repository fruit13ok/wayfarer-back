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


// GET REQUESTS
app.get('/', function homepage(req, res) {
  res.send('hello');
});

// POST REQUESTS
// let newUser = req.body.username
app.post('/api/user/create',(req, res)=>{
  db.User.create({
    username: 'Steve',
    password:'password',
    dateJoined: '10/03/2018',
    currentCity:'San Francisco, USA'
  }, function(err, newUser){
    if(err){
      console.log('Error' + err)
      return
    }
    else{
      res.status(200).send('Working' + newUser)
    }
  })
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