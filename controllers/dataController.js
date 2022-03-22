const Product= require('../models/products.js');
const User= require('../models/users.js');

const dataController = {
    index(req, res, next){
        Product.find({}, (err, allProducts) => {
          if(err){
            res.status(404).send({
              msg: err.message
            })
          }else {
            res.locals.data.products = allProducts
            next()
          }
        });
      },
      userIndex(req, res, next){
        User.find({}, (err, allUsers) => {
          if(err){
            res.status(404).send({
              msg: err.message
            })
          }else {
            res.locals.data.users = allUsers
            next()
          }
        });
      },
      create(req, res, next){
        // Use Model to create Product Document
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
        Product.findByIdAndUpdate(req.params.id, {$inc: {pQty: -1}}, { new: true }, (err, buyProd) => {
            if(err){
            res.status(404).send({
              msg: err.message
            })
          } else {
            res.locals.data.product = buyProd          
            const cartInfo = {
                itemName: buyProd.pName,
                price: buyProd.pPrice,
                quantity: 1
              }

              const filter = { userName: 'Sri Kemburu'};
              const update = { "$push": {"shopCart": cartInfo}};
              const opts = { new: true};

              // Converting object to JSON string
              var str = JSON.stringify(cartInfo, null, 4);

                User.findOneAndUpdate(filter, update, opts, (err,updatedUser) => {
                if(err){
                  res.status(404).send({
                    msg: err.message
                  })
                } else {
                  res.locals.data.user = updatedUser
                  next()
                } 
              })

            next()
          } 
        });

    }   //buy
}

module.exports = dataController