const express = require('express')
const router = express.Router()

// jwt token and its methods
const jwt = require('jwt-simple')
//passport auth methods we wrote
const passport = require('../config/passport')
// secret key to unlock and lock
const config = require('../config/config')
// require user to crud users
const mongoose = require('../models/users')
const User = mongoose.model('User')


//  /users/signup
router.post('/signup', (req, res) => {
    // if they gave us both move forward
    if (req.body.email && req.body.password) {
      let newUser = {
        email: req.body.email,
        password: req.body.password
      }
      // find user based on email
      User.findOne({ email: req.body.email })
        .then((user) => {
            // if doesnt exist create new one
          if (!user) {
            User.create(newUser)
              .then(user => {
                  // if succ create a user
                if (user) {
                    // create payload if succ
                  let payload = { id: newUser.id }
                  // create jwt with payload
                  let token = jwt.encode(payload, config.jwtSecret)
                  // after create send it back
                  res.json({ token })
                } else {
                    // user was not made
                  res.sendStatus(401).json({err:'Try Again.'})
                }
              })
          } else {
              // user was already in db
            res.sendStatus(401).json({err:'User already exists.'})
          }
        })
    } else {
        // doesnt have an email or psw
      res.sendStatus(401).json({err:'Invalid username or password.'})
    }
  })

  // /users/login
  router.post('/login', (req, res) => {
    // if they gave us both email and password
    if (req.body.email && req.body.password) {
      // find by email
      User.findOne({ email: req.body.email }).then(user => {
        // if we found a user
        if (user) {
          // if user password == req password
          if (user.password === req.body.password) {
            // then they are authorized 
            // make payload
            let payload = { id: user.id }
            // create token
            let token = jwt.encode(payload, config.jwtSecret)
            // send them the token
            res.json({ token })
          } else {
            res.sendStatus(401).json({err:'Try Again.'})
          }
        } else {
          res.sendStatus(401).json({err:'User or password not found.'})
        }
      })
    } else {
      res.sendStatus(401).json({err:'Invalid username or password.'})
    }
  })
  

module.exports = router