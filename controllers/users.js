const express = require('express')
const router = express.Router()

const jwt = require('jwt-simple')

const passport = require('../config/passport')
const config = require('../config/config')

const mongoose = require('../models/User')
const User = mongoose.model('User')

router.post('/', (req, res) => {
    if(req.body.username && req.body.password){
        let newUser = {
            username: req.body.username,
            password: req.body.password,
            dateJoined: req.body.dateJoined,
            currentCity: req.body.currentCity
        }
        User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          User.create(newUser)
            .then(user => {
              if (user) {
                let payload = { id: newUser.id }
                let token = jwt.encode(payload, config.jwtSecret)
                res.json({ token })
              } else {
                res.sendStatus(401)
              }
            })
        } else {
          res.sendStatus(401)
        }
      })
  } else {
    res.sendStatus(401)
  }
})

module.export = router