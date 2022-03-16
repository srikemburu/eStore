const React = require('react');

    class Index extends React.Component {
      render() {
          const { products } = this.props;
          return (
                  <div>
                      <link rel="stylesheet" href="/css/app.css"/>  
                      <h1>Products Index Page</h1>
                        {this.props.products.map((product,i) => {
                            return <li key={i}>
                            {product.pName}
                            {' '}is {' '}{product.pDescription}.{' Price is $'}{product.pPrice}.{' Quantity is '}{product.pQty}
                             <br/><br/>
                            <a href= {`/products/${product.id}`}>
                                <img src={product.pImg}  width="200" height="200"/>
                            </a>   
                            <br/><br/>
                            </li>
                            })
                        }
                        <nav>    
                             <a href="/products/new">Create a New product</a>
                         </nav>
                  </div>
          );
      }
    }

    module.exports = Index;