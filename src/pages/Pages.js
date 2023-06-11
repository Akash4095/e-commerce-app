import React from "react";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/flashDeals/flashDeals";

const Pages = ({productItems, addToCart}) => {
  return (
    <>
      <Home />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
    </>
  );
};

export default Pages;
