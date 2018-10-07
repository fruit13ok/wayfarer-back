const express = require('express')
const router = express.Router()


const jwt = require('jwt-simple')
const passport = require('../config/passport')
const config = require('../config/config')
const mongoose = require('../models/users')
const User = mongoose.model('User')
const bcrypt = require('bcrypt')

//  /users/signup
router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err,hash)=>{
      console.log(hash);

      if (req.body.username && hash) {
        let newUser = {
          username: req.body.username,
          password: hash,
          currentCity: req.body.currentCity
        }
        console.log(newUser)
        User.findOne({ username: req.body.username })
          .then((user) => {
            console.log('found user', user)
            if (!user) {
              console.log('creating new user')
              User.create(newUser)
                .then(user => {
                  console.log('making new user')
                  if (user) {
                    let payload = { id: newUser.id }
                    let token = jwt.encode(payload, config.jwtSecret)
                    res.json({ token })
                  } else {
                    res.sendStatus(401).json({err:'Try Again.'})
                  }
                })
            } else {              
              res.sendStatus(401).json({err:'User already exists.'})
            }
          })
      } else {        
        res.sendStatus(401).json({err:'Invalid username or password.'})
      }

    })

  })

  
  router.post('/login', (req, res) => {
    if (req.body.username && req.body.password) {
      User.findOne({ username: req.body.username })
      .then(user => {
        if (user) {          
          if (bcrypt.compare(req.body.password, user.password,(err,match)=>{console.log(match)
            if(err){
              return res.status(500).json({err})
            }
            
            let payload = { id: user.id }
            let token = jwt.encode(payload, config.jwtSecret)
            res.json({ token })
            // else if(match){
            //   const token = {username: user.username},
            //   "twilight"
            // }
          })) {              
            let payload = { id: user.id }            
            let token = jwt.encode(payload, config.jwtSecret)      
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
  
  router.get('/:name', (req, res) => {
    let name = req.params.name
    console.log("name: "+name)
    User.findOne({ username: name })
      .then(user => {
        console.log(user)
        res.send(user)
      })
      .catch(function(err) { 
        res.json(err)
      })
    });

module.exports = router