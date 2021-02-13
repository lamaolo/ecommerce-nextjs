import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../GlobalState";

import Header from "./Header";
import Footer from "./Footer";
import CartIcon from "./CartIcon";

const Layout = ({ children }) => {
  const [state, dispatch] = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const relativeUrl = window.location.pathname;
    relativeUrl.includes("/carrito") ? setShowCart(false) : setShowCart(true);
  }, []);

  return (
    <>
      <Header />
      {children}
      {state.cart.length > 0 && showCart && <CartIcon />}
      <Footer />
    </>
  );
};

export default Layout;
