import React, { useEffect, useState } from "react";
import Slider from "./Slider";

import "./Hero.css";
import Navabr from "./Navabr";
import Footer from "./Footer";
import Card from "./Card";

const Hero = () => {
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);
  const [search, setsearch] = useState("");

  const loadData = async () => {
    var response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    response = await response.json();
    
    setfooditem(response[0]);
    setfoodcat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="hero">
      <Navabr />
      <Slider />
      <div className="search-div">
        <form className="search" action="">
          <input
            value={search}
            placeholder="Search "
            type="search"
            onChange={(e) => {
              e.preventDefault();
              setsearch(e.target.value);
            }}
          />
          <button className="button" type="search">
            {" "}
            Search
          </button>
        </form>
      </div>
      {foodcat !== []
        ? foodcat.map((data) => {
            return (
              <div className="card-conatiner">
                <h3
                  style={{
                    margin: "2rem",
                    textDecoration: "underline",
                  }}
                >
                  {data.CategoryName}
                </h3>

                <div className="class">
                  {fooditem !== []
                    ? fooditem.map((item) => {
                        if (
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return (
                            <Card fooditems={item} options={item.options[0]} />
                          );
                        }
                      return ""
                      })
                    : ""}
                </div>
              </div>
            );
          })
        : ""}
      <Footer />;
    </div>
  );
};

export default Hero;
