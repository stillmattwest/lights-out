import "./LightGrid.css";
import { useState } from 'react';
import LightSquare from '../LightSquare/LightSquare';

const LightGrid = () => {

    let initialGrid = [];
    for (let row = 0; row < 5; row++) {
        let newRow = [];
        for (let col = 0; col < 5; col++) {
            newRow.push(false);
        }
        initialGrid.push(newRow);
    }

    const [grid, setGrid] = useState(initialGrid);

    const toggleSquareHandler = e => {
        const row = e.target.getAttribute("row") - 1;
        const col = e.target.getAttribute("col") - 1;
        const newGrid = [...grid.map(row => [...row])];
        newGrid[row][col] = !newGrid[row][col];
        setGrid(newGrid);
    }

    return (
        <div className="container">
            {grid.map((row, rowIndex) => {
                return (row.map((isLit, colIndex) => {
                    return (
                        <LightSquare isLit={isLit} row={rowIndex + 1} col={colIndex + 1} key={`${rowIndex}-${colIndex}`} toggleSquareHandler={toggleSquareHandler} />
                    )
                }))
            })}
        </div>
    )
}

export default LightGrid;