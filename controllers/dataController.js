const Product= require('../models/products.js');

const dataController = {
    index(req, res, next){
        console.log("data controller index")
        Product.find({}, (err, allProducts) => {
          if(err){
            res.status(404).send({
              msg: err.message
            })
          }else {
            // console.log(allFruits)
            res.locals.data.products = allProducts
            next()
          }
        });
      },
      create(req, res, next){
        // Use Model to create Product Document
        console.log("data controller create")
        Product.create(req.body, (err, createdProduct) => {
            // Once created - respond to client
            if(err){
              res.status(404).send({
                msg: err.message
              })
            }else {
              res.locals.data.product = createdProduct
              next()
            }
        });
      }

}



module.exports = dataController