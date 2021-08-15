import { Alert, Col, Row } from "react-bootstrap";

const board = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

const Board = ({ gameOver, setPlayerMove, currentBoard }) => {
  const getBoardValue = (row, col) => {
    const boardMapping = board[row][col];
    return currentBoard[boardMapping];
  };

  const getBoardValueLabel = (row, col) => {
    return getBoardValue(row, col) === 0
      ? "X"
      : getBoardValue(row, col) === 1
      ? "O"
      : "";
  };

  const handlePlayerMove = (row, col) => {
    if (!gameOver) setPlayerMove(board[row][col]);
  };

  const rows = [0, 1, 2].map((row) => {
    return (
      <Row key={`row-${row}`} className={`board-row board-row-${row}`}>
        {[0, 1, 2].map((col) => {
          return (
            <Col
              key={`col-${board[row][col]}`}
              onClick={() => handlePlayerMove(row, col)}
              className={`board-box board-box-${row}-${col} 
                ${getBoardValue(row, col) !== null ? "selected" : ""} 
                ${gameOver ? "game-over" : ""}`}
            >
              <h3 className={getBoardValueLabel(row, col).toLowerCase()}>
                {getBoardValueLabel(row, col)}
              </h3>
            </Col>
          );
        })}
      </Row>
    );
  });

  return (
    <Alert variant="dark">
      <div className="board">{rows}</div>
    </Alert>
  );
};

export default Board;
