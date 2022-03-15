const React = require('react');

class New extends React.Component {
  render() {
    // return <div>New Page</div>;

    return (
    <div>
      {/* <link rel="stylesheet" href="/css/app.css"/>   */}
    <h1>New Product page</h1>
    {/* NOTE: action will be the route, method will be the HTTP verb */}
    {/* <form action="/eStore" method="POST"> */}
    <form action={`/new?_method=POST`} method="POST">
      Product Name: <input type="text" name="pName" /><br/><br/>
      Product Description: <input type="text" name="pDescription"/><br/><br/>
      Product Image: <input type="text" name="pImg" /><br/><br/>
      Product Price: <input type="number" name="pPrice"/><br/><br/>
      Product Quantity: <input type="number" name="pQuantity" /><br/><br/>
      <input type="submit" name="" value="Create Product"/>
    </form>
    </div>);
  }
}

module.exports = New;