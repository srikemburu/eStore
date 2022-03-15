const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component{
    render() {
      return (
        <DefaultLayout title="Edit Page"> 
        <link rel="stylesheet" href="/css/app.css"/>       
       {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
      
        <form action={`/products/${this.props.product._id}?_method=PUT`} method="POST">        
            Product Name: <input type="text" name="pName" defaultValue={this.props.product.pName}/><br/><br/>

            Product Description: <input type="text" name="pDescription"  defaultValue={this.props.product.pDescription}/><br/><br/>

            Product Image: <input type="text" name="pImg" defaultValue={this.props.product.pImg}/><br/><br/>

            Product Price: <input type="number" step="0.01" name="pPrice" defaultValue={this.props.product.pPrice}/><br/><br/>

            Product Quantity: <input type="number" name="pQty" defaultValue={this.props.product.pQty}/><br/><br/>
            <br/>
            
            <input type="submit" value="Submit Changes"/>
        </form>
        </DefaultLayout>
      )
    }
  }
  module.exports= Edit;