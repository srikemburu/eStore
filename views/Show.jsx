const React = require('react')

class Show extends React.Component {
   render () {
   const { product } = this.props;
    return (
        <div>
           <link rel="stylesheet" href="/css/app.css"/>  
          <h1>Products show page</h1>
            <h3>
                The { this.props.product.pName } is { this.props.product.pDescription }.{' Price is $'}{ this.props.product.pPrice}<br/><br/>
                {this.props.product.pQty > 0 ? ' Quantity is ' + this.props.product.pQty : <p style={{color:"red"}}>"**OUT OF STOCK**"</p>} <br/>    
            </h3>

            <img src={this.props.product.pImg}  width="300" height="300"/> <br/><br/>

            <nav>
                <a href={`/products/${product._id}/edit`}>  
                  <button>Edit This Product</button>
                </a>
                <a href="/products">
                <button>Back to Index</button>
                </a>    
                <a href="/products/user">
                <button>Show Cart</button>
                </a>    
            </nav>

            <form style={{margin:"1%"}} action={`/products/${product._id}?_method=DELETE`} method="POST">
                <input type="submit" value="Delete"/>
            </form>
           
            <form action={`/products/${this.props.product._id}?_method=PATCH`} method="POST">
                 {this.props.product.pQty > 0 ? <input type="submit" value="Buy"/> : null}
            </form>
        </div>
      );
    }
 }
 module.exports  = Show;