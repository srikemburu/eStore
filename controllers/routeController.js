// instantiation
const express = require('express');

//Creates a new router object.
//You can add middleware and HTTP method routes (such as get, put, post, and so on) to router just like an application.

const router = express.Router();

const viewController = require('./viewController.js')
const dataController = require('./dataController.js')

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function (req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path)
    next()
  })

// add routes
// will handle any request that ends in /url_path
// depends on where the router is "use()'d"

// Index
router.get('/', dataController.index, viewController.index);

// New screen
router.get('/new', viewController.new);

// Delete
 router.delete('/:id', dataController.destroy, viewController.redirectHome);

// Update
 router.put('/:id', dataController.update, viewController.redirectShow);

// Create
router.post('/new', dataController.create, viewController.redirectHome);

// Edit
 router.get('/:id/edit', dataController.show, viewController.edit);

// Show
 router.get('/:id', dataController.show, viewController.show);

 // Buy
router.patch('/:id', dataController.buy, viewController.redirectShow);

 // export router
module.exports = router; 