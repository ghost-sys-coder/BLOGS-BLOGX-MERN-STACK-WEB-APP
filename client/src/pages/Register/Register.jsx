import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";


import "./Register.css"

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

 
  let notify;

  const registerUser = async (event) => {
    event.preventDefault();


    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      notify = toast.success("registration successful...!!"); 
      setUsername("");
      setPassword("");
    } else {
      notify = toast.error("registration failed...!!")
    }
  }

  return (
    <section className="register">
      <div className="container">
        <Toaster
          toastOptions={{
            style: {
              fontSize: "1.5rem"
            }
          }}
        />
        <h1 className="heading">register</h1>
        <form onSubmit={registerUser} action="/register" className="form" id="register-form">
          <input
            type="text"
            name='username'
            id="username"
            placeholder='username...' 
            value={username}
            onChange={(event)=> setUsername(event.target.value)}
            />
          <input
            type="text"
            name="password"
            id="password"
            placeholder='enter password...' 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
            <button onClick={notify} type='submit'>register</button>
        </form>
        </div>
    </section>
  )
}

export default Register