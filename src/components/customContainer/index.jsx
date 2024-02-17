import React from "react";
import "./style.css";

const Container = ({
  children,
  className,
  margin,
  padding,
  maxWidth,
  width,
  height = "",
  justifyContent = "",
  alignItems = "",
  display,
  flexDirection = "row",
  style,
}) => {
  return (
    <div
      className={`customContainer ${className}`}
      style={{
        margin,
        padding,
        maxWidth,
        display,
        justifyContent,
        alignItems,
        flexDirection,
        width,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
