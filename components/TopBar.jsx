import React, { useContext } from "react";

import { CartContext } from "../GlobalState";

const TopBar = () => {
  const [state, dispatch] = useContext(CartContext);

  return (
    <section className="topbar">
      <div className="container">
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>

          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <span className="line"></span>
        <a className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          <p>({state.cart.length})</p>
        </a>
      </div>
      <style jsx>{`
        .topbar {
          height: 35px;
          background: #852d14;
          z-index: 10001;
        }

        .container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          text-align: right;
        }

        i {
          color: white;
          font-size: 2rem;
          cursor: pointer;
        }

        .social-icons i {
          margin-left: 15px;
        }

        .cart-icon {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .cart-icon:hover {
          text-decoration: none;
        }

        .cart-icon p {
          margin: 0 0 0 10px;
          color: white;
          font-size: 1.6rem;
        }

        .line {
          margin: 0 25px;
          width: 1px;
          height: 60%;
          background: white;
        }
      `}</style>
    </section>
  );
};

export default TopBar;
