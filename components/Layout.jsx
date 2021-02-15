import Head from "next/head";
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
      <Head>
        <title>Pasteleria Bakery ─ Next Js</title>
        <meta
          name="description"
          content="Proyecto de prueba de una página tipica de ecommerce realizado con Next.js, usando las caracteristicas principales de este framework."
        />
        <meta
          name="keywords"
          content="Lucero Amaolo, Nextjs, SSG, Pasteleria, Bakery"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="author" content="Lucero Amaolo" />
        <meta name="title" content="Pasteleria Bakery ─ Next Js" />
      </Head>
      <Header />
      {children}
      {state.cart.length > 0 && showCart && <CartIcon />}
      <Footer />
    </>
  );
};

export default Layout;
