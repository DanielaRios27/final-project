import { useState } from "react";
import "./Footer.css";

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
            <span>20</span>
          </li>
          <li className="metrica">
            <span>Total de pedidos: </span>
            <span>20</span>
          </li>
          <li className="metrica">
            <span>Precio promedio: </span>
            <span>$185</span>
          </li>
          <li className="metrica">
            <span>Ingresos totales: </span>
            <span>$2067</span>
          </li>
          <li className="metrica">
            <span>Producto más vendido: </span>
            <span>Chaqueta full hd</span>
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
