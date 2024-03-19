import { useState } from "react";
import Card from "./Card.jsx";
import CartItem from "./CartItem.jsx";
import "/node_modules/bootstrap/dist/css/bootstrap.css/";
function App() {
  let products = [
    {
      id: 1,
      name: "iPhone",
      image: "https://picsum.photos/200/200",
      price: 50000,
    },
    {
      id: 2,
      name: "iWatch",
      image: "https://picsum.photos/200/200",
      price: 70000,
    },
    {
      id: 3,
      name: "iPad",
      image: "https://picsum.photos/200/200",
      price: 70000,
    },
    {
      id: 4,
      name: "Mackbook Pro",
      image: "https://picsum.photos/200/200",
      price: 200000,
    },
    {
      id: 5,
      name: "iPen",
      image: "https://picsum.photos/200/200",
      price: 2000,
    },
    {
      id: 6,
      name: "iCloth",
      image: "https://picsum.photos/200/200",
      price: 3000,
    },
  ];
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  let addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };
  let removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    setTotal(total - product.price);
  };
  return (
    <div clasName="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="row">
            <div className="col-lg-12">
              <h1>Products</h1>
            </div>
          </div>
          <div className="row">
            {products.map((product, index) => {
              return (
                <Card key={index} product={product} addToCart={addToCart} cart={cart}/>
              );
            })}
          </div>
        </div>
        <div className="col-lg-3">
          <h1>Cart</h1>
          {cart.length == 0 ? (
            <h4>No Items in Cart</h4>
          ) : (
            <>
              <ol class="list-group list-group-numbered">
                {cart.map((item, index) => {
                  return (
                    <CartItem
                      key={index}
                      item={item}
                      removeFromCart={removeFromCart}
                    />
                  );
                })}
              </ol>
              <h1>Total:Rs.{total}</h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
