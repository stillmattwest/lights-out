import "./LightGrid.css";
import { useState, useEffect, useCallback } from "react";
import LightSquare from "../LightSquare/LightSquare";

import puzzles from "../../puzzles/puzzles";

import { useGameContext } from "../../context/GameContext";

const LightGrid = () => {
  const {
    start,
    setStart,
    selectedPuzzle,
    setModalMessage,
    setShowModal,
    reset,
    setReset,
  } = useGameContext();

  const [grid, setGrid] = useState([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!reset) {
      resetGrid();
      return;
    }

    if (!start) {
      return;
    } else {
      if (!started) {
        startGame();
        return;
      }
    }

    checkForWin();
  }, [start, started, reset]);

  const resetGrid = () => {
    let emptyGrid = [];
    for (let row = 0; row < 5; row++) {
      let newRow = [];
      for (let col = 0; col < 5; col++) {
        newRow.push(false);
      }
      emptyGrid.push(newRow);
    }
    setStarted(false);
    setReset(true);
    setGrid(emptyGrid);
  };

  const buildSelectedPuzzle = () => {
    const currentPuzzle = Object.values(puzzles).find(
      (puzzle) => puzzle.name === selectedPuzzle
    );

    const puzzleGrid = currentPuzzle.grid;

    let newGrid = [...grid.map((row) => [...row])];
    puzzleGrid.forEach((square) => {
      const row = square[0];
      const col = square[1];
      newGrid[row][col] = true;
    });

    setGrid(newGrid);
  };

  const toggleSquareHandler = useCallback((e) => {
    setGrid((prevGrid) => {
      const row = e.target.getAttribute("row") - 1;
      const col = e.target.getAttribute("col") - 1;
      let newGrid = [...prevGrid.map((row) => [...row])];
      newGrid[row][col] = !newGrid[row][col];
      newGrid = toggleNeighbors(row, col, newGrid);
      setGrid(newGrid);
    });
  }, []);

  const toggleNeighbors = (row, col, newGrid) => {
    // neighbor above
    if (newGrid[row - 1]) {
      newGrid[row - 1][col] = !newGrid[row - 1][col];
    }
    //neighbor below
    if (newGrid[row + 1]) {
      newGrid[row + 1][col] = !newGrid[row + 1][col];
    }
    // neighbor left
    if (newGrid[row][col - 1] !== undefined) {
      newGrid[row][col - 1] = !newGrid[row][col - 1];
    }
    // neighbor right
    if (newGrid[row][col + 1] !== undefined) {
      newGrid[row][col + 1] = !newGrid[row][col + 1];
    }

    return newGrid;
  };

  const checkForWin = () => {
    const winState = grid.every((row) => row.every((cell) => !cell));
    if (winState) {
      setStarted(false);
      setStart(false);

      setModalMessage("You Win!");
      setShowModal(true);
    }
  };

  const startGame = () => {
    buildSelectedPuzzle();
    setStarted(true);
  };

  if (grid) {
    return (
      <>
        <div className="container">
          {grid.map((row, rowIndex) => {
            return row.map((isLit, colIndex) => {
              return (
                <LightSquare
                  isLit={isLit}
                  row={rowIndex + 1}
                  col={colIndex + 1}
                  key={`${rowIndex + 1}-${colIndex + 1}`}
                  toggleSquareHandler={toggleSquareHandler}
                  start={start}
                />
              );
            });
          })}
        </div>
      </>
    );
  } else {
    return <p>No Grid</p>;
  }
};

export default LightGrid;
