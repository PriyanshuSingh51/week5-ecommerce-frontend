import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <nav
      style={{
        background: "#222",
        padding: "15px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>

      <Link to="/products" style={{ color: "white" }}>
        Products
      </Link>

      <Link to="/cart" style={{ color: "white" }}>
        Cart ({cartItems.length})
      </Link>

      <Link to="/wishlist" style={{ color: "white" }}>
        Wishlist
      </Link>

      <Link to="/login" style={{ color: "white" }}>
        Login
      </Link>
    </nav>
  );
}

export default Header;