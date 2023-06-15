import { useContext } from "react";
import { ProductsContext } from "../../context/products";
import { averagePrice } from "../../utils/getAveragePrice";

export function AveragePrice() {
  const { products } = useContext(ProductsContext);
  return <span>${averagePrice(products)}</span>;
}
