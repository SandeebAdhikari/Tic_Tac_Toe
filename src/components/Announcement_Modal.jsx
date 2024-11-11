import React from "react";
import IconO from "/assets/icon-o.svg";

const Announcement_Modal = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[266] border py-[45px]">
      <h1 className="text-silver text-[16px] font-bold">OH NO, YOU LOST...</h1>
      <div className="flex gap-6 mt-4">
        <img src={IconO} alt="icon O" className="w-16 h-16" />
        <h1 className="font-bold text-[40px] text-lightYellow">
          TAKES THE ROUND
        </h1>
      </div>
      <div className="mt-6 flex gap-4">
        <button className="w-[76px] h-[52px] bg-silver shadow-inner-bottom5 rounded-[10px] item-center justify-center">
          {" "}
          <span className="font-bold text-[16px]">QUIT</span>
        </button>
        <button className="w-[146px] h-[52px] bg-lightYellow shadow-inner-bottom6 rounded-[10px] item-center justify-center">
          {" "}
          <span className="font-bold text-[16px]">QUIT</span>
        </button>
      </div>
    </div>
  );
};

export default Announcement_Modal;
