# Mongoose Store

## This is a Product Inventory Manager with full CRUD using Mongoose
***

## Application Function
***
Mongoose Store is a Product Inventory Manager, an MVC application with **RESTful** Applications.

It has the following functionality:

1. Create Products
2. Edit Products
3. Delete Products
3. A Product Index page to show all Products
4. Show Page for Individual Products
5. Show Page has a Buy button which will reduce the number of items in stock by 1 each time it's pressed.

### The User Stories
***

1. When a user goes to the **/products** route they will see an index of product.The product info of each product rendered to the page. The index page has a **Create button** to create new products.

2. When a user clicks on the image of a product, they will be taken to that product's show page, and will display the product's name and image. This show page has an **Edit button** to make updates to the product, a **Delete Button** to delete a product. It also has a **Back to Index** button to go back to the index page. The **Buy** button will reduce the number of items in stock by 1 each time it's pressed until quantity gets to zero at which point it will display **Out of Stock** message and unrender the Buy button.

### Seed Data
***

I have put the seed data in a file called seed.js. By running **Node seed.js** in the terminal, the seed data gets loaded into the database.

### Technologies Used
***

1. JavaScript
2. HTML 5
3. CSS 3
4. JSX/Node
5. Express
6. Mongo DB/Mongoose

### How to Install Mosgoose Store
***

- Fork and clone this repository to you machine
- Change into the new directory
- Run **npm install** in a terminal
- Run **Mongod** after npm install finished
- Seed the database by running the command **node seed.js** in the terminal
- Run Nodemon after Mongod is finished to start the webserver
- Lastly, open a browser window, and navigate to **http:localhost:3000/products** to start the application

### Future plans for Mongoose Store
***

I would love to add user model, cart model, item model, and an order model to make this a fully functional eCommerce store.

### heroku link: https://skproducts.herokuapp.com/products
### github link: https://github.com/srikemburu/eStore
### github pages : https://srikemburu.github.io/eStore/
### youtube link: https://youtu.be/MNMZOaVz9Ak