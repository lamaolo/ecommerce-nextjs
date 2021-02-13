import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../GlobalState";

import Layout from "../components/Layout";

const Carrito = () => {
  const [state, dispatch] = useContext(CartContext);
  const [total, setTotal] = useState(0);
  let totalAmount = 0;

  useEffect(() => {
    state.cart.map((item) => {
      totalAmount += item.precio;
    });

    setTotal(totalAmount);
  }, [state.cart]);

  const handleDelete = (item) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: {
        ...item,
      },
    });
  };

  return (
    <Layout>
      <section className="container my-5">
        <div className="row">
          <section className="col-12 col-md-6">
            <h2 className="title">Productos</h2>
            <ul className="Products-list">
              {state.cart.length > 0 ? (
                state.cart.map((item) => (
                  <li className="Product-item" key={item.uniqueId}>
                    <article className="Product">
                      <img src={item.foto} alt={item.nombre} />
                      <div className="Product-details">
                        <div className="Product-data">
                          <p className="Product-name">{item.nombre}</p>
                          <p className="Product-price">$ {item.precio}</p>
                        </div>
                        <div
                          onClick={() => handleDelete(item)}
                          className="Product-delete"
                        >
                          <i className="fas fa-times"></i>
                        </div>
                      </div>
                    </article>
                  </li>
                ))
              ) : (
                <h2>No hay ningún item en el carrito</h2>
              )}
            </ul>
          </section>
          <section className="col-12 col-md-6 my-5 my-md-0 pb-4 pb-md-0">
            {total > 0 && (
              <>
                <h2 className="title">Precio</h2>
                <h2 className="mb-4">
                  <strong>Total a pagar:</strong> ${total}
                </h2>
                <button className="btn btn-primary" type="button">
                  Pagar
                </button>
              </>
            )}
          </section>
        </div>
      </section>

      <style jsx>{`
        .Products-list {
          list-style: none;
          padding: 0;
          max-height: 400px;
          overflow-y: scroll;
        }

        .title {
          margin-bottom: 20px;
          font-family: "Playfair Display", serif;
          color: #852d14;
          font-weight: 800;
          font-size 3rem;
        }

        .Product-item {
          height: 70px;
          width: 100%;
          margin-bottom: 20px;
          border-radius: 8px;
          background: rgb(240, 240, 240);
          overflow: hidden;
        }

        .Product {
          display: grid;
          grid-template-columns: 120px 1fr;
          height: 100%;
          width: 100%;
          align-content: center;
          box-shadow: 0 0 10px black;
        }

        .Product img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .Product-details {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .Product-name {
          font-weight: 800;
        }

        .Product-data p {
          font-size: 1.7rem;
          margin: 0;
        }

        .Product-delete {
          cursor: pointer;
        }

        .Product-delete i {
          font-size: 1.7rem;
          color: black;
        }
      `}</style>
    </Layout>
  );
};

export default Carrito;
