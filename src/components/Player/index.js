import { Alert } from "react-bootstrap";

function Player({ restart, gameOver, currentPlayer }) {
  return (
    <Alert
      variant="dark"
      className={
        gameOver ? "alert-border-bottom winner" : "alert-border-bottom"
      }
    >
      {!gameOver ? (
        <>
          Current Player:{" "}
          <h3 className={currentPlayer.toLowerCase()}>{currentPlayer}</h3>
        </>
      ) : (
        <div onClick={() => restart()}>
          <h3 className={`${currentPlayer.toLowerCase()}`}>
            {currentPlayer} wins!
          </h3>
          Click here to restart
        </div>
      )}
    </Alert>
  );
}

export default Player;
