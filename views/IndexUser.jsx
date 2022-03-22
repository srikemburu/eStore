const React = require('react');

    class IndexUser extends React.Component {
      render() {
          const { users } = this.props;
          return (
                  <div>
                      <link rel="stylesheet" href="/css/app.css"/>  
                        {this.props.users.map((user,i) => {
                            return <ul key={i}>
                            
                                <h2>
                                    {'Shopping Cart Items'}<br/><br/>
                                </h2>

                                <h3>
                                {'User Name: '}{user.userName} {' '}<br/><br/>
                                </h3>

                            <table className="center">
                                <tr>
                                    <th>Item Name</th>
                                    <th>Item Price</th>
                                    <th>Item Quantity</th>
                                </tr>
                                
                                    {user.shopCart.map((cart,j) => {
                                        return <tr key={j}>
                                            <td>{cart.itemName}</td>
                                            <td>{cart.price}</td>
                                            <td>{cart.quantity}</td>
                                        </tr>               
                                        })
                                    }
                                </table>   

                                <a href="/products">
                                    <button>Back to Index</button>
                                </a>    

                            <br/><br/>
                            </ul>
                            })
                        }
                  </div>
          );
      }
    }

    module.exports = IndexUser;
