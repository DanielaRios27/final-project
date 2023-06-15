/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Error NO se pudo cargar la información");
        throw new Error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        loading,
        error,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
