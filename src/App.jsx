import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Products */}
      <Route path="/products" element={<Products />} />

      {/* Product Details */}
      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      {/* Cart */}
      <Route path="/cart" element={<Cart />} />

      {/* Wishlist */}
      <Route
        path="/wishlist"
        element={<Wishlist />}
      />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Signup */}
      <Route path="/signup" element={<Signup />} />

      {/* Checkout */}
      <Route
        path="/checkout"
        element={<Checkout />}
      />
    </Routes>
  );
}

export default App;