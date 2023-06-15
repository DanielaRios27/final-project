import { useContext } from "react";
import { CartsContext } from "../../context/carts";
import { ProductsContext } from "../../context/products";
import { getTotalRevenue } from "../../utils/getTotalRevenue";

export function TotalRevenue() {
  const { carts } = useContext(CartsContext);
  const { products } = useContext(ProductsContext);
  const totalRevenue = getTotalRevenue(products, carts);
  return <span>${totalRevenue.toFixed(2)}</span>;
}
