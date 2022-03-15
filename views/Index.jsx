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
                             <a href={`/products/${product.id}`}>{product.pName}</a>
                            {' '}is {' '}{product.pDescription}.{' Price is $'}{product.pPrice}.{' Quantity is '}{product.pQty}            

                            {/* <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                                 <input type="submit" value="DELETE"/>
                            </form>
                            <a href={`/products/${product._id}/edit`}>Edit This product</a> */}
                            <br/><br/>

                            </li>
                        })}

                        <nav>    
                             <a href="/products/new">Create a New product</a>
                         </nav>
                  </div>
          );
      }
    }

    module.exports = Index;
