import React, { useEffect, useState } from "react";
import "./Card.css";
const Card = (props) => {
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);

  const loadData = async () => {
    var response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    response = await response.json();
    console.log(response[0], response[1]);
    setfooditem(response[0]);
    setfoodcat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="card">
      <img src="/" alt="" />
      <span className="card-title">sdfghjkl</span>
      <span className="card-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis beatae
        harum voluptates dolores asperiores adipisci corporis eos sunt, sint ea
        maiores facere neque non.
      </span>
      <div>
        <select name="" id=""></select>
        <select name="" id=""></select>
      </div>
    </div>
  );
};

export default Card;
