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

const Producto = () => {
  const [state, dispatch] = useContext(CartContext);
  const [product, setProduct] = useState(null);

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    /**
     * Este código es para evitar hacer un fetch. Si el usuario sigue el flujo de la página (navgeando por los <Link>), el 'producto'
     * Será scado desde el state, sino, si el usuario abre directamente la URL se hará un fetch.
     * De esta forma, si el usuario navega por la pagina, el tiempo de carga será instantaneo, si el usuario abre directamente la URL
     * Se deberá hacer un fetch asincrono y mostrar un loader.
     */
    if (id) {
      if (state.products.length > 1) {
        const filterProduct = state.products.filter((p) => p._id === id);
        setProduct(filterProduct[0]);
        console.log("product seteado desde state");
      } else {
        fetch(`${process.env.URL}/api/product/${id}`)
          .then((res) => res.json())
          .then((data) => setProduct(data.product))
          .catch((err) => console.log(err));
        console.log("product seteado desde fetch");
      }
    }
  }, [id]);

  return (
    <Layout>
      <Wrapper product={product}>
        <ProductDetail product={product} />
      </Wrapper>
    </Layout>
  );
};

export default Producto;
