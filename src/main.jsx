import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FiltersProvider } from "./context/filters.jsx";
import { ProductsProvider } from "./context/products.jsx";
import { CartsProvider } from "./context/carts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <FiltersProvider>
      <CartsProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartsProvider>
    </FiltersProvider>
  </ProductsProvider>
);
