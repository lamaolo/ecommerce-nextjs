import React from "react";
import Link from "next/link";
import styled from "styled-components";
import ProductCarousel from "./ProductCarousel";

const Wrapper = styled.section`
  padding: 20px 0;
  background: url("/bg-products.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Products = ({ products }) => {
  return (
    <>
      <section style={{ padding: "50px" }} className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="subtitle">Conoce nuestros productos</h2>
          </div>
        </div>
      </section>

      <Wrapper
        style={{ margin: "0 auto", padding: "50px 0" }}
        className="wrapper"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 carousel-wrapper">
              <ProductCarousel products={products} />
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <Link href="/productos">
            <button type="button" className="btn btn-block btn-primary">
              <a>Ver todos</a>
            </button>
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

export default Products;
