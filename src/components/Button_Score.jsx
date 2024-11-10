import React from "react";

const Button_Score = ({ label, score }) => {
  return (
    <div className="w-[140px] h-[72px] rounded-[15px] bg-lightBlue">
      <div className="flex flex-col items-center w-full py-[13px]">
        <h2 className="text-darkNavy font-medium text-[14px]">{label}</h2>
        <h1 className="text-darkNavy font-bold text-[24px]">{score}</h1>
      </div>
    </div>
  );
};

export default Button_Score;
