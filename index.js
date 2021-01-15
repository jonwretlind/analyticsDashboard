/* SAAFIRE PROJECT
 * ================================================
 * ANALYTICS DASHBOARD, NODE EXPRESS SERVER
 * Jon C. Wretlind
 * Senior Developer
 * Beyond Blue Media LLC
 * ================================================
 * @version 0.1.0a
 */

/* start SERVER */
const express = require('express')
const version = require('project-version')
var passport = require('passport')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const app = express()
const port = 3000
const server = require('http').Server(app)
const io = require('socket.io')(server)
global.USERNAME = ""
server.listen(port);

// authentication
const config = require('./app/config')

app.use(session({
  store: new RedisStore({
    url: config.redisStore.url,
  }),
  secret: config.redisStore.secret,
  cookie: {secure: true, maxAge:86400000},
  resave: false,
  saveUninitialized: false,
  logerrors: true
}))

app.use(passport.initialize())
app.use(passport.session())


//static index.html template
app.use(express.static(__dirname + '/public'))

//ROUTES
// get all the page routes
require('./app/auth').init(app)
require('./app/user').init(app)
require('./routes').routes(app)


app.listen(port, () => console.log('Server running on port ' + port))
console.log("Version: " + version)

//SOCKET.IO
// So server can communicate with frontend
io.on('connection', (socket) => {
  if (USERNAME) {
    console.log('A user, ' + USERNAME + ', is connected')
  };
});
