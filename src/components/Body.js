import resList from "../utils/mockdata";
import ResCard from "./ResCard";
import React from "react";
import { useState } from "react";

const Body = () => {
  const [ListofRes, setListofRes] = useState(resList);

  return (
    <div>
      <div className="filter-btn">
        <button
          className="btn"
          onClick={() => {
            const filteredList = ListofRes.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListofRes(filteredList)
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
