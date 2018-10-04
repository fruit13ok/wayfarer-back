const passport = require('./config/passport')()
const userController = require('./controllers/users.js')

app.use(passport.initialize())
app.use('/users', userController)