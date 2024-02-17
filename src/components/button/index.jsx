import React from "react";
import "./style.css";

const Button = ({
  children,
  variant = "primary",
  className = "",
  icon,
  iconPosition = "left",
  text,
  margin,
  padding,
  width,
  height,
  style,
  ...props
}) => {
  return (
    <button
      className={`button ${className} ${variant} ${iconPosition}`}
      style={{
        margin,
        padding,
        width,
        height,
        ...style,
      }}
      {...props}
    >
      {
        <>
          {icon && <span className="icon">{icon}</span>}
          {text}
        </>
      }
    </button>
  );
};

export default Button;
