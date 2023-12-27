import React, { useState } from "react";
import { useDispatchCart, useCart } from "./ContxtReducer";
import "./Card.css";
const Card = (props) => {
  const dispatch = useDispatchCart();
  let data = useCart();
  let options = props.options;

  let priceOptions = Object.keys(options);
  const [qty, setqty] = useState(1);
  const [size, setsize] = useState(priceOptions[Object.keys(priceOptions)[0]]);
  var finalPrice = qty * parseInt(options[size]);
  const handleQty = (e) => {
    setqty(e.target.value);
  }
  const handlecart = () => {
    let food = [];
    for (const item in food) {
      if (item.id === props.fooditems.id) {
        food = item;
        break;
      }}
      console.log(food);
      if (food != []) {
        if (food.size === size) {
          dispatch({
            type: "UPDATE",
            id: props.foodItems._id,
            price: finalPrice,
            qty: qty,
          });
          return
        }
        else{
          dispatch({
            type: "ADD",
            name: props.fooditems.name,
            description: props.fooditems.description,
            img: props.fooditems.img,
            qty: qty,
            size: size,
            price: finalPrice,
          });
          return
        }
        return
      }
    

    dispatch({
      type: "ADD",
      name: props.fooditems.name,
      description: props.fooditems.description,
      img: props.fooditems.img,
      qty: qty,
      size: size,
      price: finalPrice,
    });
    console.log(data);
  };
  return (
    <div className="card">
      <img className="card-img" src={props.fooditems.img} alt="" />
      <span className="card-title">{props.fooditems.name}</span>
      <span className="card-description">{props.fooditems.description}</span>
      <div>
        <select
          name=""
          id=""
          onChange={(e) => {
            setsize(e.target.value);
          }}
        >
          {priceOptions.map((data) => {
            return (
              <option key={data} value={data}>
                {data}
              </option>
            );
          })}
        </select>
        <select name="" id="" onChange={handleQty} >
        {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
        </select>
      </div>
      {finalPrice}/-
      <button className="button" type="button" onClick={handlecart}>
        Add to cart
      </button>
    </div>
  );
};

export default Card;
