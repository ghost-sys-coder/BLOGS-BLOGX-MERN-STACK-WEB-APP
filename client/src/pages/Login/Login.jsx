import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  let notify;

  const login = async (event) => {
    event.preventDefault();
    
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    });

    if (response.ok) {
      navigate("/")
    } else {
      notify = toast.error("wrong credentials, please try again..!!")
    }
  }

  return (
    <section className="login">
      <div className="container">
            <Toaster
                toastOptions={{
                  style:{
                    fontSize: "1.4rem"
                  }
                }}
             />
            <h1 className='heading'>login</h1>
        <form onSubmit={login} className="form" id="form">
          <input
            type="text"
            name='username'
            id='username'
            placeholder='username...'
            value={username}
            onChange={(event)=> setUsername(event.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder='enter password...' 
            value={password}
            onChange={(event)=> setPassword(event.target.value)}
            />
            <button onClick={notify} type='submit'>log in</button>
        </form>
        </div>
    </section>
  )
}

export default Login