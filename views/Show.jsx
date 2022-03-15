const React = require('react')

const buttonStyle = {
    background: 'pink',
    width : '10%',
    display : 'block',
    color : 'red',
    font : '50px',
    margin : '10px',
    padding : '10px 20px',
    border: '4px solid black',
  }

class Show extends React.Component {
   render () {
    //const fruit = this.props.fruit
    //console.log("in Show fruit: " + fruit)
    const { product } = this.props;
    return (
        <div>
           <link rel="stylesheet" href="/css/app.css"/>  
          <h1>Products show page</h1>
           The { this.props.product.pName } is { this.props.product.pDescription }.{' Price is $'}{ this.props.product.pPrice}.{' Quantity is '}{ this.props.product.pQty}<br/><br/>

            <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                <input type="submit" value="DELETE"/>
            </form>
            <br/>



            <nav>
                <a href={`/products/${product._id}/edit`}>  
                  <button>Edit This Product</button>
                </a>
            </nav>
            <br/>
            <nav> 
                <a href="/products">
                <button>Back</button>
                </a>    
            </nav>
            <br/>

            <form action={`/products/${this.props.product._id}?_method=PATCH`} method="POST">
            {this.props.product.pQty > 0 ? <input type="submit" value="BUY"/> : null}
            </form>


         
        </div>
      );
    }
 }
 module.exports  = Show;