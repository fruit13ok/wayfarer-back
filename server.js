// require express and other modules
const 
express = require('express'),
mongoose = require('mongoose'),
Schema = mongoose.Schema,
parser = require('body-parser'),
cors = require('cors'),
passport = require('./config/passport')(),
userController = require('./controllers/userController')

const app = express()


app.use(cors())
app.use(parser.json())

//start up passport
app.use(passport.initialize())

// allow cross origin requests (optional)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/



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


app.use('/users', userController);

/*
 * HTML Endpoints
 */


// GET REQUESTS
app.get('/', function homepage(req, res) {
  res.send('hello');
});



// TEST FOR CREATE USER

// (req, res)=>{
//   db.User.create({
//     username: 'Steve',
//     password:'password',
//     dateJoined: '10/03/2018',
//     currentCity:'San Francisco, USA'
//   }, function(err, newUser){
//     if(err){
//       console.log('Error' + err)
//       return
//     }
//     else{
//       res.status(200).send('Working' + newUser)
//     }
//   })
// });

/*
 * JSON API Endpoints
 */



/**********
 * SERVER *
 **********/
app.listen(process.env.PORT || 3001, function() {
  console.log('Express server is up and running on http://localhost:3001/');
});