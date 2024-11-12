import React from "react";

const Restart_Modal = ({ onCancel, onRestart }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />

      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="flex flex-col items-center justify-center w-full h-[266px] border py-[67px] bg-darkNavy">
          <h1 className="text-silver text-[40px] font-bold">ROUND TIED</h1>
          <div className="flex justify-center mt-8 gap-4 w-full">
            <button
              className="w-[139px] h-[52px] bg-silver shadow-inner-bottom5 rounded-[10px]"
              onClick={onCancel}
            >
              <span className="font-bold text-[16px]">NO, CANCEL</span>
            </button>
            <button
              className="w-[153px] h-[52px] bg-lightYellow shadow-inner-bottom6 rounded-[10px]"
              onClick={onRestart}
            >
              <span className="font-bold text-[16px]">YES, RESTART</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restart_Modal;
