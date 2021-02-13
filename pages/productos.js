import fetch from "isomorphic-fetch";

import Layout from "../components/Layout";
import ProductsList from "../components/ProductsList";

export const getStaticProps = async (context) => {
  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
};

export default function Home({ data: { products } }) {
  return (
    <Layout>
      <ProductsList products={products} />
    </Layout>
  );
}
