import React from "react";
import "./style.css";
import { ReactComponent as Star } from "../../assets/icons/star.svg";

const Rating = ({ count = 3 }) => {
  return (
    <div className="rating-star">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          className="star"
          key={index}
          style={{ color: index < count ? "black" : "#C5C5C5" }}
        />
      ))}
    </div>
  );
};

export default Rating;
