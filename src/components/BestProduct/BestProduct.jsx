import { useContext } from "react";
import { ProductsContext } from "../../context/products";
import { CartsContext } from "../../context/carts";

export function BestProduct() {
  const { products } = useContext(ProductsContext);
  const { carts } = useContext(CartsContext);
  let maxQuantity = 0;
  let maxProductId = null;

  for (const cart of carts) {
    for (const product of cart.products) {
      if (product.quantity > maxQuantity) {
        maxQuantity = product.quantity;
        maxProductId = product.productId;
      }
    }
  }

  const product = products.find((product) => product.id === maxProductId);

  if (product) {
    return <span>{product.title}</span>;
  }

  return <span>Producto no encontrado</span>;
}
