import { useContext, useEffect } from "react";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import { CartContext } from "../GlobalState";
/*
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Contact from "../components/Contact";*/
/*
export const getStaticProps = async (context) => {
  const response = await fetch(`${process.env.URL}/api/products`);
  const data = await response.json();
  console.log("data: ", data);
  return {
    props: {
      data: data,
    },
  };
};
*/
export default function Home() {
  return (
    <>
      <Head>
        <title>Pasteleria Next.js</title>
      </Head>
      /<h1>Hola</h1>
      {/* <Hero />
      <Products products={data?.products} />
      <Contact /> */}
    </>
  );
}
