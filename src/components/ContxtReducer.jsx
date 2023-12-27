import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          img: action.img,
          size: action.size,
          qty: action.qty,
          price: action.price,
        },
      ];

    case "REMOVE":
      let newarr = [...state];
      newarr.splice(action.id, 1);
      return newarr;

    case "UPDATE":
      let newarr1 = [...state];
      newarr1.find((food, index) => {
        if (food.id === action.id) {
          console.log(
            food.qty,
            parseInt(action.qty),
            action.price + food.price
          );
          newarr1[index] = {
            ...food,
            qty: parseInt(action.qty) + food.qty,
            price: action.price + food.price,
          };
        }
        return newarr1;
      });
      return newarr1;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartStateContext);
};
export const useDispatchCart = () => {
  return useContext(CartDispatchContext);
};
