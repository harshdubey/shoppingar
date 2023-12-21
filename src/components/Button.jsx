import React from "react";

const Button = ({ color, bgColor, text, borderRadius, type, size }) => {
  return (
    <button
      type={type}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
