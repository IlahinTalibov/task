import React from "react";
import "./style.css";

const ProgressBar = ({ progress = 0.5 }) => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress * 100}%` }}></div>
    </div>
  );
};

export default ProgressBar;
