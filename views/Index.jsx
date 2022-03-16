const React = require('react');

const buttonStyle = {
    background: 'pink',
    width : '15%',
    display : 'inline-block',
    color : 'red',
    // font : '100px',
    textalign: 'center',
    margin : '20px',
    padding : '10px 20px',
    border: '4px solid black',
  }

    class Index extends React.Component {
      render() {
          const { products } = this.props;
          return (
                  <div>
                      <link rel="stylesheet" href="/css/app.css"/>  
                      <h1>Products Index Page</h1>
                        <nav>    
                            <a href="/products/new">
                                 <button style={buttonStyle}>Create a New product</button>     
                            </a>
                             <br/><br/>
                        </nav>
                        {this.props.products.map((product,i) => {
                            return <ul key={i}>
                                <h3>
                            {product.pName}
                            {' '}is {' '}{product.pDescription}.{' Price is $'}{product.pPrice}.{' Quantity is '}{product.pQty}
                            </h3>
                             <br/><br/>
                            <a href= {`/products/${product.id}`}>
                                <img src={product.pImg}  width="200" height="200"/>
                            </a>   
                            <br/><br/>
                            </ul>
                            })
                        }
                  </div>
          );
      }
    }

    module.exports = Index;
