import { useContext } from "react";
import { ProductsContext } from "../../context/products";

export function TotalProducts() {
  const { products } = useContext(ProductsContext);
  return <span>{products.length}</span>;
}
