import { useContext } from "react";
import { CartsContext } from "../../context/carts";

export function TotalCarts() {
  const { carts } = useContext(CartsContext);
  return <span>{carts.length}</span>;
}
