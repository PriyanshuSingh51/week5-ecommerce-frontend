import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/Header";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />

      <div style={{ padding: "20px" }}>
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <h3>Cart is Empty</h3>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid gray",
                  margin: "10px 0",
                  padding: "10px",
                }}
              >
                <h3>{item.name}</h3>

                <p>₹{item.price}</p>

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                >
                  -
                </button>

                <span
                  style={{
                    margin: "0 10px",
                  }}
                >
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                >
                  +
                </button>

                <br />
                <br />

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>
              </div>
            ))}

            <h2>Total: ₹{total}</h2>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;