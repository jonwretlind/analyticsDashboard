// file:app/authenticate/init.js
const passport = require('passport')
//const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy
const authenticationMiddleware = require('./middleware')

const redis = require('redis')
var client = redis.createClient();

client.on("connect", function() {
  console.log("Connected to Redis.");
})

// Generate Password and encrypt
/*
const saltRounds = 10
const myPlaintextPassword = 'password'
const salt = bcrypt.genSaltSync(saltRounds)
const passwordHash = bcrypt.hashSync(myPlaintextPassword, salt)
*/
/*
const user = {
  username: 'test-user',
  password: 'password',
  id: 1
}
*/

passport.serializeUser(function (user, done) {
  done(null, user.username)
})

passport.deserializeUser(function (username, done) {
  findUser(username, done)
})


const finduser = (username, done) => {
  client.hgetall('user:test-user', function(err, user) {
    console.log(user)
    if (username === user.username) {
      // found user
      return done(null, user)
    } else {
      //could not find user
      return done(null, false)
    }
  })
}


function initPassport () {
  passport.use(new LocalStrategy(
    (username, password, done) => {
        console.log(username, password)
        finduser(username, function (err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, { message: 'Incorrect username.', username: user.username });
          }
          if (!user.password === password) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          USERNAME = user.username; // set global
          return done(null, user, { message: 'Success!', username: USERNAME });
        });


        // Always use hashed passwords and fixed time comparison
        /* bcrypt.compare(password, user.passwordHash, (err, isValid) => {
          if (err) {
            return done(err)
          }
          if (!isValid) {
            return done(null, false)
          }
          return done(null, user)
        })
      }) */
    }
  ))

  passport.authenticationMiddleware = authenticationMiddleware
}


module.exports = initPassport
