import './PuzzleIndicator.css';

import { useGameContext } from '../../context/GameContext';

const PuzzleIndicatior = () => {
    const { selectedPuzzle } = useGameContext();
    return (
        <div className='puzzle-name-container'>
            <p className='puzzle-name neon-blue'>{`Selected Puzzle: ${selectedPuzzle}`}</p>
        </div>

    )

}

export default PuzzleIndicatior;