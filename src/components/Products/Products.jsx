/* eslint-disable react/prop-types */
import "./Products.css";

export function Products({ products }) {
  return (
    <div className="products">
      <ul>
        {products.slice(0, 20).map((product) => {
          return (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <div>
                <strong>{product.title}</strong> -{" "}
                <span className="products__price">${product.price}</span>
              </div>
              <div>
                <p>{product.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
