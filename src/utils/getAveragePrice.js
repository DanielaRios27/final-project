export function averagePrice(products) {
  const prices = products.map((product) => product.price);
  const total = prices.reduce((sum, price) => sum + price, 0);
  const average = total / prices.length;
  return average.toFixed(2);
}
