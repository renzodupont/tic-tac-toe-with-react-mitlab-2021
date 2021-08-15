import "./App.css";
import { useState } from "react";
import { Alert, Container } from "react-bootstrap";

import Player from "./components/Player";
import Board from "./components/Board";

const winnerValues = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [boardValues, setBoardValues] = useState(new Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);

  const checkIfPlayerWins = (player, board) => {
    // Loops through possible combinations. If one found, player wins
    for (let combination of winnerValues) {
      const [a, b, c] = combination;
      if (board[a] === player && board[b] === player && board[c] === player) {
        setGameOver(true);
        return;
      }
    }
    setCurrentPlayer((prevPlayer) => (prevPlayer === 0 ? 1 : 0));
  };

  const setPlayerMove = (index) => {
    if (boardValues[index] === null) {
      boardValues[index] = currentPlayer;
      setBoardValues(boardValues);
      checkIfPlayerWins(currentPlayer, boardValues);
    }
  };

  const restart = () => {
    setCurrentPlayer(0);
    setBoardValues(new Array(9).fill(null));
    setGameOver(false);
  };

  return (
    <Container>
      <Player
        gameOver={gameOver}
        currentPlayer={currentPlayer === 0 ? "X" : "O"}
        restart={restart}
      ></Player>
      <Board
        gameOver={gameOver}
        currentBoard={boardValues}
        setPlayerMove={setPlayerMove}
      ></Board>
      <Alert variant="dark" className={"alert-border-top small-font"}>
        <a
          href="https://github.com/renzodupont"
          target="_blank"
          rel="noreferrer"
        >
          Follow me in GitHub
        </a>
      </Alert>
    </Container>
  );
}

export default App;
