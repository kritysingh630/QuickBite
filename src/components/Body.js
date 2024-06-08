import ResCard from "./ResCard";
import React, { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListofRes, setListofRes] = useState([]);

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
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering
  return (ListofRes.length===0) ? <Shimmer/>:(
    <div>
      <div className="filter-btn">
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
        {ListofRes.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
