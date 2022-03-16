const React = require('react')

class Show extends React.Component {
   render () {
    const { product } = this.props;
    return (
        <div>
           <link rel="stylesheet" href="/css/app.css"/>  
          <h1>Products show page</h1>
           The { this.props.product.pName } is { this.props.product.pDescription }.{' Price is $'}{ this.props.product.pPrice}<br/><br/>
           {this.props.product.pQty > 0 ? ' Quantity is ' + this.props.product.pQty : "**OUT OF STOCK**"} <br/><br/>

            <nav>
                <a href={`/products/${product._id}/edit`}>  
                  <button>Edit This Product</button>
                </a>

                <a href="/products">
                <button>Back</button>
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