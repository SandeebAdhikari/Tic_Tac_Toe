import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "/logo.svg";
import IconX from "/assets/icon-x.svg";
import IconO from "/assets/icon-o.svg";
import Restart from "/assets/icon-restart.svg";
import Button_Game from "../components/Button_Game";
import Button_Score from "../components/Button_Score";

const Game_Page = () => {
  const location = useLocation();
  const { selectedMark, mode } = location.state;
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, Ties: 0 });
  const [winner, setWinner] = useState(null);

  const currentPlayerMark = isXTurn ? "X" : "O";
  const playerIcon = currentPlayerMark === "X" ? IconX : IconO;

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    if (!board.includes(null)) {
      return "TIE";
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayerMark;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);

    if (gameWinner) {
      if (gameWinner === "X" || gameWinner === "O") {
        setScores((prevScores) => ({
          ...prevScores,
          [gameWinner]: prevScores[gameWinner] + 1,
        }));
      } else if (gameWinner === "TIE") {
        setScores((prevScores) => ({
          ...prevScores,
          Ties: prevScores.Ties + 1,
        }));
      }
      setWinner(gameWinner);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  const getScoreLabels = () => {
    if (mode === "CPU") {
      if (selectedMark === "X") {
        return ["X (YOU)", "TIES", "O (CPU)"];
      } else {
        return ["X (CPU)", "TIES", "O (YOU)"];
      }
    } else {
      if (selectedMark === "X") {
        return ["X (P1)", "TIES", "O (P2)"];
      } else {
        return ["X (P2)", "TIES", "O (P1)"];
      }
    }
  };

  const scoreLabels = getScoreLabels();

  return (
    <div className="flex justify-center w-full min-h-screen ">
      <div className="mt-[139px] flex flex-col w-[460px] h-[623px]">
        <div className="flex items-center justify-between w-full">
          <img src={logo} alt="logo icon" className="w-18 h-8" />
          <button className="flex w-[140px] rounded-[10px] bg-semiDarkNavy px-[30px] py-[13px] gap-[13px] shadow-inner-bottom3">
            <img src={playerIcon} alt="player icon" className="w-5 h-5" />
            <p className="text-silver text-[16px] font-bold">TURN</p>
          </button>
          <button
            onClick={handleRestart}
            className="w-13 h-13 bg-silver rounded-[10px] p-4 shadow-inner-bottom4 hover:scale-105"
          >
            <img src={Restart} alt="restart icon" className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 my-[20px]">
          {board.map((value, index) => (
            <Button_Game
              key={index}
              value={value}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-[19px]">
          <Button_Score label={scoreLabels[0]} score={scores.X} />
          <Button_Score label={scoreLabels[1]} score={scores.Ties} />
          <Button_Score label={scoreLabels[2]} score={scores.O} />
        </div>

        {winner && (
          <div className="text-center mt-4 text-[24px] font-bold text-yellow">
            {winner === "TIE" ? "It's a Draw!" : `${winner} Wins!`}
          </div>
        )}
      </div>
    </div>
  );
};

export default Game_Page;
