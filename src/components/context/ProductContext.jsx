import { createContext, useReducer } from "react";

export const ProductContext = createContext();

const initialState = {
  products: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        products: action.payload,
      };
    case "CREATE_PRODUCT":
      return {
        products: [action.payload, ...state.products],
      };
    case "EDIT_PRODUCT":
      return {
        products: action.payload,
      };
    case "DELETE_PRODUCT":
      return {
        products: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
};

export const ProductContextProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
