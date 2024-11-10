import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.svg";
import Button_x_o from "../components/Button_x_o";

const Main_Page = () => {
  const [selectedMark, setSelectedMark] = useState("X");
  const navigate = useNavigate();

  const handleStartGame = (mode) => {
    navigate("/game", { state: { selectedMark, mode } });
  };

  return (
    <div className="flex flex-col mt-[215px] items-center w-full min-h-screen">
      <img src={logo} alt="logo icon" className="w-18 h-8" />
      <Button_x_o
        selectedMark={selectedMark}
        setSelectedMark={setSelectedMark}
      />
      <div className="flex flex-col w-[460px] h-[67px]">
        <button
          className="mt-10 shadow-inner-bottom1 bg-[#F2B137] font-bold text-[20px] p-[17px] rounded-[15px] hover:bg-[#FFC860]"
          onClick={() => handleStartGame("CPU")}
        >
          NEW GAME (VS CPU)
        </button>
        <button
          className="mt-10 shadow-inner-bottom2 bg-[#A8BFC9] font-bold text-[20px] p-[17px] rounded-[15px] hover:bg-[#DBE8ED]"
          onClick={() => handleStartGame("PLAYER")}
        >
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </div>
  );
};

export default Main_Page;
