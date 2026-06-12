function Signup() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Signup</h1>

      <input type="text" placeholder="Name" />
      <br /><br />

      <input type="email" placeholder="Email" />
      <br /><br />

      <input type="password" placeholder="Password" />
      <br /><br />

      <button>Create Account</button>
    </div>
  );
}

export default Signup;