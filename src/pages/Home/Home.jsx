import { useFilters } from "../../hooks/useFilters";
import { Products } from "../../components/Products/Products";
import { Filters } from "../../components/Filters/Filters";
import { ProductsContext } from "../../context/products";
import { useContext } from "react";
import "./Home.css";
import { Loader } from "../../components/Loader/Loader";

export const Home = () => {
  const { products, error, loading } = useContext(ProductsContext);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);
  return (
    <main>
      {loading ? (
        <Loader />
      ) : error ? (
        error
      ) : (
        <>
          <Filters />
          <section>
            <Products products={filteredProducts} />
          </section>
        </>
      )}
    </main>
  );
};
