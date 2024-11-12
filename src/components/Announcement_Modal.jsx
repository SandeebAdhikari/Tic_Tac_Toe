import React from "react";
import { useNavigate } from "react-router-dom";
import IconX from "/assets/icon-x.svg";
import IconO from "/assets/icon-o.svg";

const Announcement_Modal = ({ winner, currentPlayerMark, onNextRound }) => {
  const navigate = useNavigate();

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

  const handleQuit = () => {
    navigate("/");
  };

  if (!winner) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />

      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="flex flex-col items-center justify-center w-full h-[266px] py-[45px] bg-darkNavy">
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
              onClick={handleQuit}
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
      </div>
    </>
  );
};

export default Announcement_Modal;
