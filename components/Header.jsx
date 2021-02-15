import React, { useContext, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CartContext } from "../GlobalState";
import HamburgerMenu from "react-hamburger-menu";
import styled from "styled-components";

import TopBar from "./TopBar";

const HeaderContainer = styled.header`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99999;
`;

const Header = () => {
  const [state, dispatch] = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const nav = useRef(null);

  useEffect(() => {
    if (isOpen) {
      nav.current.classList.add("open");
    } else {
      nav.current.classList.remove("open");
    }
  }, [isOpen]);

  return (
    <HeaderContainer>
      <TopBar />
      <section className="py-4 Header">
        <div className="container">
          <Link href="/">
            <a className="Header-logo">
              <img width="80" src="/logo.png" alt="Logo" />
            </a>
          </Link>

          <nav ref={nav} className="Header-nav">
            <Link href="/">
              <a>Home</a>
            </Link>

            <Link href="/productos">
              <a>Productos</a>
            </Link>

            <Link href="/carrito">
              <a>Carrito {state.cart.length > 0 && `(${state.cart.length})`}</a>
            </Link>
          </nav>
          <div className="Hamburger">
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={() => setIsOpen(!isOpen)}
              width={30}
              strokeWidth={3}
              height={25}
              color={"#852d14"}
            />
          </div>
        </div>
        <span className="Header-decoration"></span>
        <style jsx>{`
          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
          }

          .Hamburger {
            display: none;
          }

          .Header {
            background: #ffff;
            position: relative;
            height: 90px;
          }

          .Header-decoration {
            background: url("/header-decoration.png") no-repeat scroll center
              center;
            height: 19px;
            width: 100%;
            position: absolute;
            left: 0px;
            right: 0;
            bottom: -18px;
            z-index: 30;
          }

          .Header-logo {
            display: flex;
            align-items: center;
          }

          .Header-logo:hover {
            text-decoration: none;
          }

          .Header-nav a,
          .title {
            font-size: 2rem;
            font-family: "Playfair Display", serif;
            color: #852d14;
            font-weight: 800;
          }

          .title {
            margin-left: 10px;
          }

          .Header-nav a {
            margin-left: 20px;
          }

          @media screen and (max-width: 600px) {
            .Hamburger {
              display: block;
              z-index: 10000;
            }

            .Header-nav {
              position: fixed;
              right: -100vw;
              top: 0;
              bottom: 0;
              width: 60vw;
              height: 100vh;
              max-width: 100%;
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              transition: all 0.45s ease-in-out;
              background: white;
              z-index: 900;
              box-shadow: -10px 0 10px rgba(0, 0, 0, 0.3);
            }

            .Header-nav a {
              margin: 10px 0;
              font-size: 3rem;
            }

            .Header-nav.open {
              right: 0vw;
               {
                /* top: 0; */
              }
            }
          }
        `}</style>
      </section>
    </HeaderContainer>
  );
};

export default Header;
