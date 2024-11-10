import React from "react";
import IconX from "/assets/icon-x.svg";
import IconO from "/assets/icon-o-outline.svg";

const Button_x_o = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[460px] h-[205px] bg-[#1F3641] mt-10 shadow-inner-bottom3 rounded-[15px]">
      <h2 className="my-6 text-silver text-[16px]">PICK PLAYER 1'S MARK</h2>
      <div className="flex items-center justify-center w-[412px] h-[72px] mb-[17px] rounded-[10px] bg-[#1A2A33] p-2">
        <button className="w-1/2 flex items-center justify-center p-3 hover:scale-105">
          <img src={IconX} alt="cross icon" className="w-8 h-8" />
        </button>
        <button className="w-1/2 flex items-center justify-center p-3 rounded-[10px] bg-silver hover:scale-105">
          <div className="flex items-center justify-center w-8 h-8 bg-[#1A2A33] rounded-full ">
            <div className="w-3 h-3 bg-silver rounded-full"></div>
          </div>
        </button>
      </div>
      <p className="text-silver text-[14px] mb-[24px]">
        REMEMBER: X GOES FIRST
      </p>
    </div>
  );
};

export default Button_x_o;
