const React = require('react');

class New extends React.Component {
  render() {
    return (
    <div >
        <link rel="stylesheet" href="/css/app.css"/>  
        <h1>New Product page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}    
        <form action={`/products/new?_method=POST`} method="POST">
          Product Name: <input type="text" name="pName" required/><br/><br/>
          Product Description: <input type="text" name="pDescription" required/><br/><br/>
          Product Image: <input type="text" name="pImg" required/><br/><br/>
          Product Price: <input type="number" step="0.01" name="pPrice" min="0" required/><br/><br/>
          Product Quantity: <input type="number" name="pQty" min="0" required/><br/><br/>
        <div>
          <input type="submit" name="" value="Create Product"/>
        </div>
        </form>
     </div>);
  }
}

module.exports = New;