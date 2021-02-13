import React, { useContext } from "react";
import { v4 as uiidv4 } from "uuid";
import { CartContext } from "../GlobalState";

const ProductDetail = ({ product }) => {
  const [state, dispatch] = useContext(CartContext);

  const handleAddToCart = (product) => {
    const uniqueId = uiidv4();
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, uniqueId },
    });
  };

  return (
    <section className="container">
      <article className="row">
        {!product ? (
          <div className="col-12 d-flex justify-content-center">
            <div
              style={{ width: "70px", height: "70px" }}
              className="spinner-border"
              role="status"
            ></div>
          </div>
        ) : (
          <>
            <div className="col-12 col-lg-6">
              <img
                className="Product-image"
                src={product.foto}
                alt={product.nombre}
              />
            </div>
            <aside className="col-12 col-lg-6 Product-details">
              <h1 className="Product-title">{product.nombre}</h1>
              <h2 className="Product-description my-4">
                {product.descripcion}
              </h2>
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="Product-price">$ {product.precio}</h2>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn btn-primary"
                  type="button"
                >
                  <i className="fas fa-shopping-cart mr-3"></i>
                  Añadir al carrito
                </button>
              </div>
            </aside>
          </>
        )}
      </article>

      <style jsx>{`
        .container {
          background: rgba(255, 255, 255, 0.8);
          padding: 50px;
          border-radius: 15px;
        }

        .Product-image {
          width: 100%;
          border-radius: 15px 0 0px 15px;
          padding: 0 20px 0 0;
          border-right: solid 2px #852d14;
        }

        .Product-title {
          font-family: "Playfair Display", serif;
          color: #852d14;
          font-weight: 800;
          font-size: 3.5rem;
        }

        .Product-description,
        .Product-price {
          color: black;
          font-family: "Playfair Display", serif;
          font-size: 2rem;
        }

        .Product-price {
          font-size: 3rem;
        }

        @media screen and (max-width: 992px) {
          .container {
            padding: 25px;
            margin: 25px;
            max-width: 400px;
          }

          .Product-image {
            margin-bottom: 20px;
            max-width: 500px;
            border-radius: 15px;
            padding: 0;
            border-right: none;
          }

          .Product-title {
            font-size: 3rem;
          }

          .Product-description,
          .Product-price {
            font-size: 1.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductDetail;
