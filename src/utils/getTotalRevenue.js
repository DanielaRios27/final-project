export function getTotalRevenue(products, carts) {
  let totalIngresos = 0;

  // Iterar sobre cada carrito
  carts.forEach((cart) => {
    // Iterar sobre los productos dentro del carrito
    cart.products.forEach((productInCart) => {
      // Buscar el producto correspondiente en el array de productos
      const product = products.find((p) => p.id === productInCart.productId);

      if (product) {
        // Multiplicar la cantidad del producto por su precio y sumar al total de ingresos
        totalIngresos += productInCart.quantity * product.price;
      }
    });
  });

  return totalIngresos;
}
