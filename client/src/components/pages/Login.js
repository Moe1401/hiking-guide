import React, { useState } from 'react';
import "./login.css"

function Login() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
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
          required
        />
        <button className="submit" type="submit">Login</button>
      </form>
      </div>
    </div>
  );
}

export default Login;
