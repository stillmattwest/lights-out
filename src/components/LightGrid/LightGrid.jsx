import "./LightGrid.css";
import { useState, useEffect, useRef } from 'react';
import LightSquare from '../LightSquare/LightSquare';

import puzzles from '../../puzzles/puzzles';


const LightGrid = (props) => {

    let initialGrid = [];
    for (let row = 0; row < 5; row++) {
        let newRow = [];
        for (let col = 0; col < 5; col++) {
            newRow.push(false);
        }
        initialGrid.push(newRow);
    }

    const [grid, setGrid] = useState(initialGrid);
    const [started, setStarted] = useState(false);


    useEffect(() => {

        if (!props.start) {
            return;
        } else {
            if (!started) {
                startGame();
                return;
            }
        }

        checkForWin();

    }, [grid, props.start, started]);

    const toggleSquareHandler = e => {
        const row = e.target.getAttribute("row") - 1;
        const col = e.target.getAttribute("col") - 1;
        let newGrid = [...grid.map(row => [...row])];
        newGrid[row][col] = !newGrid[row][col];
        newGrid = toggleNeighbors(row, col, newGrid);
        setGrid(newGrid);
    }

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
    }

    const checkForWin = () => {
        const winState = grid.every(row => row.every(cell => !cell));
        if (winState) {
            props.endGame();
            setStarted(false);
            props.setModalMessage('You Win!');
            props.toggleModal();
        }

        console.log(`winState: ${winState}`);
    }

    const startGame = () => {
        // TODO make multiple possible starting game states
        const currentPuzzle = Object.values(puzzles).find(puzzle => puzzle.name === props.selectedPuzzle);
        // console.log(`currentPuzzle: ${currentPuzzle.name}`);
        const puzzleGrid = currentPuzzle.grid;
        let newGrid = [...grid.map(row => [...row])];
        puzzleGrid.forEach(square => {
            const row = square[0];
            const col = square[1];
            newGrid[row][col] = true;
        })


        // let newGrid = [...grid.map(row => [...row])];
        // newGrid[2][0] = !newGrid[2][1];
        // newGrid[2][2] = !newGrid[2][2];
        // newGrid[2][4] = !newGrid[2][4];
        setGrid(newGrid);
        setStarted(true);
    }

    return (
        <>
            <div className="container">
                {grid.map((row, rowIndex) => {
                    return (row.map((isLit, colIndex) => {
                        return (
                            <LightSquare isLit={isLit} row={rowIndex + 1} col={colIndex + 1} key={`${rowIndex + 1}-${colIndex + 1}`} toggleSquareHandler={toggleSquareHandler} />
                        )
                    }))
                })}
            </div>
        </>
    );

}

export default LightGrid;