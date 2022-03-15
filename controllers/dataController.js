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
      },
      show(req, res, next){
        console.log("data controller show")
        Product.findById(req.params.id, (err, foundProduct)=>{
          if(err){
            res.status(404).send({
              msg: err.message
            })
          } else {
            res.locals.data.product = foundProduct
            next()
          }
        })
      },
      update(req, res, next){
        console.log("data controller update")
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProduct) => {
          if(err){
            res.status(404).send({
              msg: err.message
            })
          } else {
            res.locals.data.product = updatedProduct
            next()
          }
        });
      },
      destroy(req, res, next){
        console.log("data controller delete")
        Product.findByIdAndRemove(req.params.id, (err, product) => {
          if(err){
            res.status(404).send({
              msg: err.message
            })
          } else {
            res.locals.data.product = product
            next()
          }
        });
      },
      buy(req, res, next){
        console.log("data controller buy")
        Product.findByIdAndUpdate(req.params.id, {$inc: {pQty: -1}}, { new: true }, (err, buyProd) => {
          if(err){
            res.status(404).send({
              msg: err.message
            })
          } else {
            res.locals.data.product = buyProd
            next()
          }
        });
      }
     
}

module.exports = dataController