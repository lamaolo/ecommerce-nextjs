import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-fetch";
import styled, { css } from "styled-components";

import { CartContext } from "../../GlobalState";
import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";

const Wrapper = styled.div`
  height: calc(100vh - 165px);
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.product !== null &&
    css`
      background: url(${props.product.foto});
    `}
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.URL}/api/products`);
  const { products } = await response.json();

  /**
   * Las rutas estáticas neceistan un array de objetos con el formato:
   * [{ params: { id: 'IdARenderarAcá } }]
   *
   * Por cada _id de la base de datos, añado un objeto de esos al arrary 'paths'
   */
  const paths = products.map(({ _id }) => ({ params: { id: _id } }));

  return {
    // Todos los paths posibles generados estáticamente
    paths,
    // Mostrar 404 para las que no se generaron.
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // 'params' contiene el id dinámico.
  // /producto/1 => params.id == 1;

  const response = await fetch(
    `https://pasteleria-ecommerce-nextjs.lamaolo.vercel.app/api/product/${params?.id}`
  );
  const product = await response.json();

  return { props: { product } };
};

const Producto = ({ product: { product } }) => {
  return (
    <Layout>
      <Wrapper product={product}>
        <ProductDetail product={product} />
      </Wrapper>
    </Layout>
  );
};

export default Producto;
