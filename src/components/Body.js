import resList from "../utils/mockdata";
import ResCard from "./ResCard";
import React from "react";

const Body = () => {
  return (
    <div>
      <div className="searchbox">
        <input type="text"></input>
        <button>Search</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
