import React, { useState } from "react";
import "./signup.css"

function Signup() {
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: signupUsername,
        password: signupPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setSignupUsername("");
    setSignupPassword("");
  };

  return (
    <div className="signupForm">
        <div className="card">
      <h1>Signup</h1>
      <form className="form" onSubmit={handleSignupSubmit}>
        <input
          value={signupUsername}
          name="signupUsername"
          onChange={(e) => setSignupUsername(e.target.value)}
          type="text"
          placeholder="Username"
          required
        />
        <input
          value={signupPassword}
          name="signupPassword"
          onChange={(e) => setSignupPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />
        <button class="submit" type="submit">Signup</button>
      </form>
      </div>
    </div>
  );
}

export default Signup;
