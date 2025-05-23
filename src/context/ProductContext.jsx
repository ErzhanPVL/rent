import { createContext, useEffect, useState } from "react";
import React from "react";
export const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [copyofProducts, setCopyOfProducts] = useState([])
  useEffect(() => {
    fetch("https://rentback-0v37.onrender.com/api/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setCopyOfProducts(data)
      });
  }, []);

  return (
    <ProductsContext.Provider value={{products, copyofProducts, setProducts}}>
      {children}
    </ProductsContext.Provider>
  );
};
