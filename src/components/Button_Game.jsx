import React, { useState } from "react";
import IconX from "/assets/icon-x.svg";
import IconO from "/assets/icon-o.svg";
import IconXOutline from "/assets/icon-x-outline.svg";
import IconOOutline from "/assets/icon-o-outline.svg";

const Button_Game = ({ value, onClick, currentPlayerMark }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Determine the icon to display based on the cell value
  const icon = value === "X" ? IconX : value === "O" ? IconO : null;

  // Determine the outline icon based on the current player's turn
  const outlineIcon = currentPlayerMark === "X" ? IconXOutline : IconOOutline;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[140px] h-[140px] flex items-center justify-center bg-semiDarkNavy rounded-[15px] shadow-inner-bottom3 hover:scale-105"
    >
      {icon ? (
        <img src={icon} alt="icon" className="w-16 h-16" />
      ) : isHovered ? (
        <img src={outlineIcon} alt="hover icon" className="w-16 h-16" />
      ) : null}
    </button>
  );
};

export default Button_Game;
