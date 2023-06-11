import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route, Link } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import { useState } from "react";

function App() {
  const { productItems } = Data;
  const [cartItem, setCartItem] = useState([]);

  const addToCart = () => {
    const productExit = cartItem.find((item) => item.id === productExit.id);
    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === productExit.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Pages productItems={productItems} addToCart={addToCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
