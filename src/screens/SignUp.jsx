import React from "react";
import { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [data, setdata] = useState({
    name: "",
    password: "",
    email: "",
    location: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        password: data.password,
        email: data.email,
        location: data.location,
      }),
    });

    const json = await response.json();
    if (!json.success) {
      alert("Enter valid data")
      
    } 
  };

  const onchange = (e) => {
    setdata({...data, [e.target.name]: e.target.value});
  };
  return (
    <div className="container">
      <div className="signup">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <input
            name="name"
            value={data.name}
            type="text"
            placeholder="First Name"
            onChange={onchange}
          />
          <input
            name="email"
            value={data.email}
            type="email"
            placeholder="Email"
            
            onChange={onchange}
          />
          <input
            name="password"
            value={data.password}
            type="password"
            onChange={onchange}
            placeholder="Password"
          />
          <input
            name="location"
            value={data.location}
            type="text"
            placeholder="address"
            onChange={onchange}
          />
          
            <button type="submit" className="btn button">Sign Up</button>
            <Link><span className="text">Already a user? Log in</span></Link> 

          
        </form>
      </div>
    </div>
  );
};

export default SignUp;
