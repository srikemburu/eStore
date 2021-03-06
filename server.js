// Import Modules and set up vars
require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;

//connect to database
const db = require('./models/db')
db.once('open', () => {
  console.log('connected to mongo')
})

//Initialize View Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

// Mount Express Middleware

//invoked for any requests passed to this router
app.use((req, res, next) => {
  res.locals.data = {}
  next()
}) // Creates res.locals.data

app.use(express.urlencoded({ extended: true })) // Creates req.body
app.use(methodOverride('_method')); // Allows us to override methods
app.use(express.static('public')); // Allows us to have Static Files

// Mounts our RESTFUL/INDUCES ROUTES at /fruits
// we can use this router inside of our server.js as Middleware

app.use('/products', require('./controllers/routeController.js')); 

// Listen on PORT
app.listen(PORT, () => {
  console.log('Listening on port ', PORT)
})
