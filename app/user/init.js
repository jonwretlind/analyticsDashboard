// file:app/user/init.js
const passport = require('passport')

// views / templates
const view = "dashboard" // the "theme"
const view_path = './views/' + view // the "theme" path
const express = require('express')
global.VIEW = view;
let message

function initUser (app) {
  // Routes
  app.get('/profile', passport.authenticationMiddleware(), renderProfile)
  app.get('/login', renderLogin)
  app.post('/login',
    passport.authenticate('local', {  successRedirect: '/?dev=true',
                                      failureRedirect: '/login?login=false' }
    )
  )
}



function renderProfile (req, res) {
  console.log("User Profile")
  res.render('profile', {
    username: res.user.username
  })
}

function renderLogin (req, res) {
  console.log("Login to " + VIEW + " framework.")
  res.render('login', { message: message, title: "Login",  view: VIEW })
}

module.exports = initUser
