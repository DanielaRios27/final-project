import { Link } from "react-router-dom";
import "./Header.css";
import { Menu } from "../Icons";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className="logo">
        <span className="logo__title">
          <Link to="/">DR</Link>
        </span>
        <span className="logo__sub-title">Panel de control</span>
      </div>
      <nav className="nav">
        <ul
          className={`nav__list ${
            isOpen ? "nav__list--open" : "nav__list--close"
          }`}
        >
          <li className="nav__item" onClick={toggleMenu}>
            <Link to="/">Productos</Link>
          </li>
          <li className="nav__item" onClick={toggleMenu}>
            <a
              href="https://github.com/DanielaRios27/final-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositorio
            </a>
          </li>
        </ul>
        <div className="nav__menu" onClick={toggleMenu}>
          <Menu />
        </div>
      </nav>
    </header>
  );
};
