import React from "react";
import logo from "/logo.svg";
import IconX from "/assets/icon-x.svg";
import Restart from "/assets/icon-restart.svg";
import Button_Game from "../components/Button_Game";
import Button_Score from "../components/Button_Score";

const Game_Page = () => {
  return (
    <div className="flex justify-center w-full min-h-screen border">
      <div className="mt-[139px] flex flex-col w-[460px] h-[623px]">
        <div className="flex items-center justify-between w-full">
          <img src={logo} alt="logo icon" className="w-18 h-8" />
          <button className="flex w-[140px] rounded-[10px] bg-semiDarkNavy px-[30px] py-[13px] gap-[13px] shadow-inner-bottom3">
            <img src={IconX} alt="cross icon" className="w-5 h-5" />
            <p className="text-silver text-[16px] font-bold">TURN</p>
          </button>
          <button className="w-13 h-13 bg-silver rounded-[10px] p-4 shadow-inner-bottom4">
            <img src={Restart} alt="restart icon" className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 my-[20px]">
          {Array.from({ length: 9 }).map((_, index) => (
            <Button_Game key={index} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-[19px]">
          {Array.from({ length: 3 }).map((_, index) => (
            <Button_Score key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game_Page;
