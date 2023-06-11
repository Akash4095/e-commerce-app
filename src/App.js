import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route, Link } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import { useState } from "react";
import Cart from "./components/Cart/cart";

function App() {
  const { productItems } = Data;
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    console.log('product', product)
    const productExit = cartItem.find((item) => item.id === product.id);
    console.log('productExit', productExit)
    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    }else{
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  };

  const decreaseQty = (product) => {

    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <div className="App">
      <Header cartItem={cartItem}/>
      <Routes>
        <Route
          path="/"
          element={<Pages  productItems={productItems} addToCart={addToCart} />}
        />
          <Route
          path="/cart"
          element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />}
        />
      </Routes>
    </div>
  );
}

export default App;
