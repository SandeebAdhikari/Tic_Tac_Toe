import React from "react";
import IconX from "/assets/icon-x.svg";
import IconO from "/assets/icon-o.svg";

const Button_x_o = ({ selectedMark, setSelectedMark }) => {
  const handleToggle = (mark) => {
    setSelectedMark(mark);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[460px] h-[205px] bg-[#1F3641] mt-10 shadow-inner-bottom3 rounded-[15px]">
      <h2 className="my-6 text-silver text-[16px]">PICK PLAYER 1'S MARK</h2>
      <div className="flex items-center justify-center w-[412px] h-[72px] mb-[17px] rounded-[10px] bg-[#1A2A33] p-2">
        <button
          className={`w-1/2 flex items-center justify-center p-3 rounded-[10px] hover:scale-105 ${
            selectedMark === "X" ? "bg-[#1F3641] " : "bg-transparent"
          }`}
          onClick={() => handleToggle("X")}
        >
          <img src={IconX} alt="cross icon" className="w-8 h-8 " />
        </button>

        <button
          className={`w-1/2 flex items-center justify-center p-3 rounded-[10px] hover:scale-105 ${
            selectedMark === "O" ? "bg-[#1F3641]" : "bg-transparent"
          }`}
          onClick={() => handleToggle("O")}
        >
          <img src={IconO} alt="cross icon" className="w-8 h-8" />
        </button>
      </div>
      <p className="text-silver text-[14px] mb-[24px]">
        REMEMBER: X GOES FIRST
      </p>
    </div>
  );
};

export default Button_x_o;
