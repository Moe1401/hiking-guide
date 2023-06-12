import React, { useState } from 'react';
import "./login.css"

function Login({ setCurrentPage, setUserId }) {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword,
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((data) => {
        setUserId(data.user.id)
        setCurrentPage("Profile")
      });
    setLoginUsername('');
    setLoginPassword('');
  };

  return (
    <div className='loginForm'>

        <div className="card">
          <h1>Login</h1>
      
          <form className="form" onSubmit={handleLoginSubmit}>
            <input
              value={loginUsername}
              name="loginUsername"
              onChange={(e) => setLoginUsername(e.target.value)}
              type="text"
              placeholder="Username"
              required
            />
            <input
              value={loginPassword}
              name="loginPassword"
              onChange={(e) => setLoginPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required style={{display:"block"}}
            />
            <button className="submit" type="submit">Login</button>
          </form>
      </div>
    </div>
  );
}

export default Login;
