/* SAAFIRE PROJECT
 * ================================================
 * ANALYTICS DASHBOARD, PAGE ROUTER
 * Jon C. Wretlind
 * Senior Developer
 * Beyond Blue Media LLC
 * ================================================
 * @version 0.1
 */

 const express = require('express')
 const app = express()
 const bodyParser = require('body-parser')
 const pug = require('pug')


 // views / templates
 const view = "dashboard" // the "theme"
 const view_path = './views/' + view // the "theme" path
 global.VIEW = view;

function initRoutes( app ) {

  // for parsing forms, etc...
  app.use(bodyParser.urlencoded({ extended: true }));
  app.set('views', view_path )
  app.set('view engine', 'pug')

  app.get('/', renderWelcome)
  app.get("/chart", renderCharts)
  app.get("/ads", renderAds)

  // 404
  app.use(function (req, res, next) {
   res.status(404).send("404: Sorry can't find that!!")
  })

  //500
  app.use(function (err, req, res, next) {
   console.error(err.stack)
   res.status(500).send('500: Something broke!')
  })

}

// load homepage from views
function renderWelcome (req, res) {
  console.log("Welcome to Dashboard: " + USERNAME)
  res.render('index', { title: "Saafire Analytics Dashboard" , view: VIEW, username: USERNAME })
}

// renderCharts
function renderCharts (req, res) {
  console.log("Render Charts")
  res.render('inc/chart-test',{ title: "Chart Test", view: VIEW })
}

// Adwords
function renderAds (req, res) {
  const AdwordsUser = require('node-adwords').AdwordsUser;
  const AdwordsConstants = require('node-adwords').AdwordsConstants;

  let user = new AdwordsUser({
      developerToken: 'ptjHAOlkv4R6RdrtBVsylQ', //your adwords developerToken
      userAgent: 'Jon C. Wretlind Graphics', //any company name
      clientCustomerId: '758-827-0203', //the Adwords Account id (e.g. 123-123-123)
      client_id: '178364157751-k72vsu1o0t37rpvtssu27hvtf69o96h8.apps.googleusercontent.com', //this is the api console client_id
      client_secret: 'ouZCUYfEtB9BEPIoiPfX9lYO',
      refresh_token: '1/PEqwGzNW0JNj2jW9CH_4MLYYAsK5aRv9wwBK59YI_dN8ijIlip3U5lIYtB2gUCXa'
  });

  let campaignService = user.getService('CampaignService', 'v201809')

  //create selector
  let selector = {
      fields: ['Id', 'Name'],
      ordering: [{field: 'Name', sortOrder: 'ASCENDING'}],
      paging: {startIndex: 0, numberResults: AdwordsConstants.RECOMMENDED_PAGE_SIZE}
  }

  campaignService.get({serviceSelector: selector}, (error, result) => {
      //console.log(error, result);
      console.log("Welcome to RenderAds: " + USERNAME)
      res.render('index', { title: "Saafire Analytics Dashboard" , view: VIEW, username: USERNAME, result: JSON.stringify(result) })
  })
}

module.exports = initRoutes
