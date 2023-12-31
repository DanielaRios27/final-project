import { useId } from "react";
import { useFilters } from "../../hooks/useFilters";
import "./Filters.css";

export function Filters() {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div className="filters__range">
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <div className="filters__numbers">
          <input
            type="range"
            id={minPriceFilterId}
            min="0"
            max="1000"
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
          />
          <span>${filters.minPrice}</span>
        </div>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="electronics">Electrónicos</option>
          <option value="jewelery">Joyas</option>
          <option value="men's clothing">Ropa de Hombres</option>
          <option value="women's clothing">Ropa de Mujer</option>
        </select>
      </div>
    </section>
  );
}
