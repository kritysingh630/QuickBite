import { CDN_URL } from "../utils/constants";
import React from "react";

const ResCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;

  return (
    <div className="res-card">
      <img className="res-logo" alt=" " src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default ResCard;
