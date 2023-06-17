import React, { useState } from "react";
import "./Login.css";
function Login() {
  // using userState for username, password, error
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if username and password are correct
    if (username === "GDSC_Lead" && password === "GDSC_Lead_2020") {
      console.log("Logged in successfully");
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-section">
      <div className="login">
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <h2 className="login-secondary-heading">Dashboard Access</h2>
          <div className="input-fields">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-input"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-fields">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" type="submit">
            {" "}
            Login{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
