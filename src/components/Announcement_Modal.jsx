import React from "react";
import IconX from "/assets/icon-x.svg";
import IconO from "/assets/icon-o.svg";

const Announcement_Modal = ({
  winner,
  currentPlayerMark,
  onNextRound,
  onQuit,
}) => {
  const icon = winner === "X" || winner === "PLAYER 1" ? IconX : IconO;
  const textColor =
    winner === "X" || winner === "PLAYER 1"
      ? "text-silver"
      : "text-lightYellow";

  const getAnnouncementText = () => {
    if (winner === "CPU") return "OH NO, YOU LOST";
    if (winner === "YOU") return "YOU WON";
    if (winner === "PLAYER 1") return "PLAYER 1 WINS!";
    if (winner === "PLAYER 2") return "PLAYER 2 WINS!";
    if (winner === "TIE") return "ROUND TIED";
    return "";
  };

  if (!winner) return null;

  return (
    <div className="flex flex-col items-center justify-center w-full h-[266px] border py-[45px]">
      <h1 className={`text-[16px] font-bold ${textColor}`}>
        {getAnnouncementText()}
      </h1>
      {winner !== "TIE" && (
        <div className="flex gap-6 mt-4">
          <img src={icon} alt="icon" className="w-16 h-16" />
          <h1 className={`font-bold text-[40px] ${textColor}`}>
            TAKES THE ROUND
          </h1>
        </div>
      )}
      <div className="mt-6 flex gap-4">
        <button
          className="w-[76px] h-[52px] bg-silver shadow-inner-bottom5 rounded-[10px]"
          onClick={onQuit}
        >
          <span className="font-bold text-[16px]">QUIT</span>
        </button>
        <button
          className="w-[146px] h-[52px] bg-lightYellow shadow-inner-bottom6 rounded-[10px]"
          onClick={onNextRound}
        >
          <span className="font-bold text-[16px]">NEXT ROUND</span>
        </button>
      </div>
    </div>
  );
};

export default Announcement_Modal;
