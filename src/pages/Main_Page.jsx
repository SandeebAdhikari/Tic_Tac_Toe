import React from "react";
import logo from "/logo.svg";
import Button_x_o from "../components/Button_x_o";

const Main_Page = () => {
  return (
    <div className="flex flex-col mt-[215px] items-center w-full min-h-screen">
      <img src={logo} alt="logo icon" className="w-18 h-8" />
      <Button_x_o />
      <div className="flex flex-col w-[460px] h-[67px]">
        <button className="mt-10 shadow-inner-bottom1 bg-[#F2B137] font-bold text-[20px] p-[17px] rounded-[15px] shadow-b hover:bg-[#FFC860]">
          NEW GAME (VS CPU)
        </button>
        <button className="mt-10 shadow-inner-bottom2 bg-[#A8BFC9] font-bold text-[20px] p-[17px] rounded-[15px] shadow-b hover:bg-[#DBE8ED]">
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </div>
  );
};

export default Main_Page;
