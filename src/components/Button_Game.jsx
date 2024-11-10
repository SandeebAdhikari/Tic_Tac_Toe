import React from "react";
import IconX from "/assets/icon-x.svg";
import IconO from "/assets/icon-o.svg";

const Button_Game = ({ value, onClick }) => {
  const icon = value === "X" ? IconX : value === "O" ? IconO : null;
  return (
    <button
      onClick={onClick}
      className="w-[140px] h-[140px] flex items-center justify-center bg-semiDarkNavy rounded-[15px] shadow-inner-bottom3 hover:scale-105"
    >
      {icon && <img src={icon} alt="icon" className="w-16 h-16" />}
    </button>
  );
};

export default Button_Game;
