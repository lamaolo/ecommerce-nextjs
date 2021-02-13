import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../GlobalState";
import Link from "next/link";

const Icon = styled.div`
  height: 60px;
  width: 60px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  color: white;
  background: #852d14;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 0px 15px black;
  z-index: 9999;
  & p {
    margin: 0;
  }
`;

export default function CartIcon() {
  const [state, dispatch] = useContext(CartContext);

  return (
    <Link href="/carrito">
      <a>
        <Icon>
          <p>
            <i className="fas fa-shopping-cart"></i> {state.cart.length}
          </p>
        </Icon>
      </a>
    </Link>
  );
}
