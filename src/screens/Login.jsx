import React from "react";
import { useState } from "react";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";
const Login = () => {
  const [pass, setpass] = useState(true);
  const [data, setdata] = useState({
    password: "",
    email: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    const json = await response.json();
    if (!json.success) {
      console.log(json);
      alert("Enter valid login data");
    } else {
      alert("Login successful");
      localStorage.setItem("authToken", json.authToken);
     
    }
  };

  const showPassword = () => {
    if (pass){
      setpass(false);
    }
    else{
      setpass(true);
    }
  };

  const onchange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="login">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={onchange}
          />
          <input
            name="password"
            type={pass ? "password" : "text"}
            placeholder="Password"
            onChange={onchange}
          />
         <span className="check"> Show password <input type="checkbox" onClick={showPassword} /></span>
          <button type="submit" className="button">
            Login
          </button>
          <Link to="/ceateuser">
            <span className="text">Not a user? sign up</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
