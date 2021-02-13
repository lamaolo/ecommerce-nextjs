import React, { useContext } from "react";
import styled from "styled-components";
import { v4 as uiidv4 } from "uuid";

import useSearchProducts from "../hooks/useSearchProducts";
import { CartContext } from "../GlobalState";
import ProductCard from "./ProductCard";

const Title = styled.h1`
  font-size: 3.5rem;
  color: #852d14;
  font-weight: 800;
  font-family: "Playfair Display", serif;
`;

const Search = styled.div`
  width: 325px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  color: black;
  border-radius: 10px;
  border: 2px solid black;

  & i {
    margin-right: 10px;
    font-size: 1.2rem;
  }

  & input {
    width: 100%;
    font-size: 1.7rem;
    outline: none;
    border: none;
  }
`;

const ProductsWrapper = styled.div`
  display: grid;
  padding-bottom: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const ProductsList = ({ products }) => {
  const [setQuery, filteredProducts] = useSearchProducts(products);
  const [state, dispatch] = useContext(CartContext);

  const handleAddToCart = (product) => {
    const uniqueId = uiidv4();
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, uniqueId },
    });
  };

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section className="container my-5">
      <div className="row justify-content-center justify-content-md-start">
        <Title className="title text-center text-md-left">
          Todos los productos
        </Title>
      </div>

      <div className="row my-5 px-5 px-md-0 justify-content-center justify-content-md-start">
        <Search>
          <i className="fas fa-search"></i>
          <input
            onChange={handleInput}
            type="text"
            placeholder="Busca por un nombre..."
          />
        </Search>
      </div>

      <section className="row my-5">
        <ProductsWrapper className="Products-wrapper px-5 px-md-0">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                handleAddToCart={handleAddToCart}
                product={product}
                key={product._id}
              />
            ))
          ) : (
            <h2
              style={{
                gridColumn: "span 3",
                fontFamily: "Playfair Display, sans-serif",
              }}
            >
              No se encontró ningún producto con ese nombre.
            </h2>
          )}
        </ProductsWrapper>
      </section>
    </section>
  );
};

export default ProductsList;
