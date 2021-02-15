import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Card = styled.article`
  width: 100% !important;
  border-radius: 10px;
  overflow: hidden;
  background: #f1f1f1;
  & img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;

const CardBody = styled.section`
  padding: 15px;
  & h5 {
    font-family: "Playfair Display", serif;
    color: #852d14;
    font-weight: 800;
    font-size: 2.5rem;
  }

  & p {
    font-size: 1.6rem;
    &.price {
      font-family: "Playfair Display", serif;
      color: #852d14;
      margin: 0;
      font-size: 2.4rem;
    }
  }
`;

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card>
      <img src={product.foto} alt={product.nombre} />
      <CardBody>
        <h5>{product.nombre}</h5>
        <p>
          {product.descripcion.substring(0, 100) + "..."}{" "}
          <Link style={{ color: "#007bff" }} href={`/producto/${product._id}`}>
            <a>Ver más detalles</a>
          </Link>
        </p>

        <div className="mt-5 Precio d-flex justify-content-between align-items-center">
          <p className="price">$ {product.precio}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="btn btn-primary"
          >
            <i className="fas fa-shopping-cart mr-3"></i>
            Añadir al carrito
          </button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
