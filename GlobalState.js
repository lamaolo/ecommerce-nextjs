import React, { useReducer, createContext } from "react";

export const CartContext = createContext();

const initialState = {
  cart: [],
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case "DELETE_ITEM": {
      return {
        ...state,
        cart: [
          ...state.cart.filter(
            (item) => item.uniqueId !== action.payload.uniqueId
          ),
        ],
      };
    }
    case "ADD_PRODUCTS": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {props.children}
    </CartContext.Provider>
  );
};
