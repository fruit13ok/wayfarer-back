const passport = require('passport')
const passportJWT = require('passport-jwt')
const ExtractJwt = passportJWT.ExtractJwt
const Strategy = passportJWT.Strategy

const config = require('./config')

const mongoose = require('../models/User')
const User = mongoose.model('User')

const params = {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = ()=>{
    var strategy = new Strategy(params, (payload, callback) => {
        var user = User.findById(payload.id) || null
        if (user){
            return callback(null, {
                id: user.id
            })
        }else{
            return callback(new Error("User not found"), null)
        }
    })
    passport.use(strategy)
    return {
        initilize: ()=>{
            return passport.initialize()
        },
        authenticate: ()=>{
            return passport.authenticate("jwt", {session:false})
        }
    }
}
