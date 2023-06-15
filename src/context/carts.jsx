/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const CartsContext = createContext();

export function CartsProvider({ children }) {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/carts/");
        const data = await response.json();
        setCarts(data);
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
    <CartsContext.Provider
      value={{
        carts,
        setCarts,
        loading,
        error,
      }}
    >
      {children}
    </CartsContext.Provider>
  );
}
