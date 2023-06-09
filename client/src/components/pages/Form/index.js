import React, { useState } from 'react';
import './style.css';

function Form() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ username: loginUsername, password: loginPassword }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Assuming the API returns a success flag or token upon successful login
        if (data.success) {
          console.log('Login successful');
          console.log('Token:', data.token);
          
    
        } else {
          console.log('Login failed');
          console.log('Error:', data.error);
          // Handle login error, display an error message
        }
      })
      .catch((error) => {
        console.log('An error occurred during login:', error);
        // display an error message
      });
    
    // Handle login logic here
    console.log("Login form submitted");
    console.log("Username:", loginUsername);
    console.log("Password:", loginPassword);
    setLoginUsername('');
    setLoginPassword('');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    fetch("/api/user/signup",
    // fetch("/api/user/login",
      { method: "POST", body: JSON.stringify({ username: signupUsername, password: signupPassword }) })
      .then(res => res.json())
      .then(data => console.log(data))


    // Handle signup logic here
    console.log("Signup form submitted");
    console.log("Username:", signupUsername);
    console.log("Email:", signupEmail);
    console.log("Password:", signupPassword);
    setSignupUsername('');
    setSignupEmail('');
    setSignupPassword('');
  };

  return (
    <div>
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
        <button type="submit">Login</button>
      </form>

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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Form;



//Gary boilerplate code

// import React, { useState } from 'react';
// import './style.css';

// function Form() {
//   // Here we set two state variables for firstName and lastName using `useState`
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { name, value } = e.target;

//     // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
//     return name === 'firstName' ? setFirstName(value) : setLastName(value);
//   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();
//     setFirstName('');
//     setLastName('');
//   };

//   return (
//     <div>
//       <p>
//         Hello {firstName} {lastName}
//       </p>
//       <form className="form">
//         <input
//           value={firstName}
//           name="firstName"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="First Name"
//         />
//         <input
//           value={lastName}
//           name="lastName"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="Last Name"
//         />
//         <button type="button" onClick={handleFormSubmit}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Form;
