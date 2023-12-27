import React, { useState } from "react";
import { AiOutlineClose, AiFillDelete } from "react-icons/ai";
// import { AiFillDelete } from 'react-icons/ai';
import ReactDom from "react-dom";
import { useDispatchCart, useCart } from "../components/ContxtReducer";
import "./Cart.css";

const Cart = ({ closeCart }) => {
  let data = useCart();
  console.log(data);
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return ReactDom.createPortal(
      <div className="cart-wrapper">
        <div className="cart">
          <p>Cart is empty</p>
          <button onClick={closeCart} className="button">
            close
          </button>
        </div>
      </div>,
      document.getElementById("root")
    );
  }
  let total = 0;


  return ReactDom.createPortal(
    <>
      <div className="cart-wrapper"></div>

      <div className="cart">
        <AiOutlineClose onClick={closeCart} className="cross" />
        {data.map((food, index) => {
          total = total + food.price;
          console.log(food.price);
          return (
            <div className=" items-container">
              <span className="items">{index + 1}</span>
              <span>
                <h3>{food.name}</h3>
              </span>
              <span>
                <h3>{food.qty}</h3>
              </span>
              <span>
                <h3>{food.size}</h3>
              </span>
              <span>
                <h3>{food.price}</h3>
              </span>
              <span>
                <AiFillDelete onClick={()=>{
                  dispatch({type: "REMOVE", index:index})
                }} className="delete" />
              </span>
            </div>
          );
        })}
        <br />
        <hr />
        <div className="total">
          <span>
            <h2>Total</h2>
          </span>
          <span>
            {" "}
            <h2>{total}/-</h2>
          </span>
        </div>

        <div className=" btn-container">
          <button className="button">Check Out</button>
        </div>
      </div>
    </>,
    document.getElementById("root")
  );
};

export default Cart;
