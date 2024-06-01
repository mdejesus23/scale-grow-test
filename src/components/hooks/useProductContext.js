import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw Error("useProductContext me be used inside context provider");
  }

  return context;
};
