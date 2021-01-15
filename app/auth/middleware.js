// file:app/auth/middleware.js
// used to check authentication status

function authenticationMiddleware () {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      console.log("is authenticated")
      return next()
    }
    console.log("not authenticated")
    res.redirect('/?login=false')
  }
}

module.exports = authenticationMiddleware
