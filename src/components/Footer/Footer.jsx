import { useState } from "react";
import "./Footer.css";
import { BestProduct } from "../BestProduct/BestProduct";
import { TotalProducts } from "../TotalProducts/TotalProducts";
import { TotalCarts } from "../TotalCarts/TotalCarts";
import { AveragePrice } from "../AveragePrice/AveragePrice";
import { TotalRevenue } from "../TotalRevenue/TotalRevenue";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <footer>
      <aside>
        <ul className={`metricas ${isOpen ? "metricas--open" : ""}`}>
          <li className="metrica">
            <span>Total de productos: </span>
            <TotalProducts />
          </li>
          <li className="metrica">
            <span>Total de pedidos: </span>
            <TotalCarts />
          </li>
          <li className="metrica">
            <span>Precio promedio: </span>
            <AveragePrice />
          </li>
          <li className="metrica">
            <span>Ingresos totales: </span>
            <TotalRevenue />
          </li>
          <li className="metrica">
            <span>Producto más vendido: </span>
            <BestProduct />
          </li>
        </ul>
      </aside>

      <button
        onClick={toggleMenu}
        className={`btn ${isOpen ? "btn--open" : ""}`}
      >
        {isOpen ? "Cerrar" : "Métricas"}
      </button>
    </footer>
  );
};
