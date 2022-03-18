require('dotenv').config()
const Product = require('./models/products');

//connect to database
const db = require('./models/db')

const seedProducts = [   
      {
        pName: 'Beans',
        pDescription: 'A small pile of beans. Buy more beans for a big pile of beans.',
        pImg: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
        pPrice: 5,
        pQty: 99
      },
      {
        pName: 'Bones',
        pDescription: 'It\'s just a bag of bones.',
        pImg: 'http://bluelips.com/prod_images_large/bones1.jpg',
        pPrice: 25,
        pQty: 0
      }, 
      {
        pName: 'Bins',
        pDescription: 'A stack of colorful bins for your beans and bones.',
        pImg: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
        pPrice: 7000,
        pQty: 1
      }
]

  const seedDB = async () => {
      await Product.insertMany(seedProducts)
  }

  seedDB().then(() => {
      db.close()
  })