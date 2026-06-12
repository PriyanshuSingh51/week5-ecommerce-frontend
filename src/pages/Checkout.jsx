function Checkout() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>

      <input type="text" placeholder="Full Name" />
      <br /><br />

      <input type="text" placeholder="Address" />
      <br /><br />

      <input type="text" placeholder="Phone Number" />
      <br /><br />

      <button>Place Order</button>
    </div>
  );
}

export default Checkout;