import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      <h3>{product.name}</h3>

      <p>Brand: {product.brand}</p>

      <p>Category: {product.category}</p>

      <h4>₹{product.price}</h4>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;