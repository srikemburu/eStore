// instantiation
const express = require('express');

//Creates a new router object.
//You can add middleware and HTTP method routes (such as get, put, post, and so on) to router just like an application.

const router = express.Router();

// const viewController = require('./viewController.js')
// const dataController = require('./dataController.js')

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function (req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path)
    next()
  })


// add routes
// will handle any request that ends in /????
// depends on where the router is "use()'d"

// Index
router.get('/', function (req, res) {
    res.send(`<h1>router controller hello world</h1>`)
})

//router.get('/', dataController.index, viewController.index);


 // export router
module.exports = router; 