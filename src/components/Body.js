import ResCard from "./ResCard";
import React, { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListofRes, setListofRes] = useState([]);

  const [filteredRestaurant,setfilteredRestaurant]=useState([])

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.936118650994969&lng=77.62416721957396"
    );
    const json = await data.json();
    //Optional Chaining
    setListofRes(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //Conditional Rendering
  return ListofRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurant = ListofRes.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn"
          onClick={() => {
            const filteredList = ListofRes.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListofRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
