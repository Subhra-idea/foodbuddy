import React from "react";
import logo from "./assets/logo.png";
import "./Navbar.css";
import Cart from "../screens/Cart";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {  useCart } from "../components/ContxtReducer";


const Navabr = () => {
  let data = useCart();
  let length = Object.keys(data).length;

  const [appear, setappear] = useState(true);
  const [cart, setcart] = useState(false)  
  const closeCart=()=>setcart(false)
  const navigate = useNavigate();
  const sign_log = () => {
    setappear(false);

  };
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/")
  };
  return (<>
    {cart && <Cart closeCart={closeCart} />}
    <div className={appear ? "header" : "not"}>
      <nav className="navbar">
        <Link to="">
          <img className="logo" src={logo} alt="" />
        </Link>
        <div>
          <ul className="nav-menu">
            <Link to="/">
              {" "}
              <li className="nav-items">Home</li>
            </Link>
            {localStorage.getItem("authToken") ? (
              <Link to="/">
                {" "}
                <li className="nav-items">My orders</li>
              </Link>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="sign-log">
          {localStorage.getItem("authToken") ? (
            <div>
              
              {" "}
              <button onClick={()=>setcart(true)} className="button">
               My cart
               
               <span className="badge">{length}</span>
              </button>
          
            <Link to="/createuser">
              {" "}
              <button onClick={handleLogout} className="button">
                Log out
              </button>
            </Link>
            </div>
          ) : (
            <div>
              <Link to="/createuser">
                {" "}
                <button onClick={sign_log} className="button">
                  Sign up
                </button>
              </Link>
              <Link to="/login">
                {" "}
                <button onClick={sign_log} className="button">
                  Log in
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navabr;
