import products from "../../mocks/products.json";
import { useFilters } from "../../hooks/useFilters";
import { Products } from "../../components/Products/Products";
import "./Home.css";

export const Home = () => {
  const { filterProducts } = useFilters();
  console.log(filterProducts);
  const filteredProducts = filterProducts(products);
  console.log(filteredProducts);
  return (
    <main>
      <Products products={filteredProducts} />
    </main>
  );
};
