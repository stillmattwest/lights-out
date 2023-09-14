import './Modal.css';

import { useGameContext } from '../../context/GameContext';

import puzzles from '../../puzzles/puzzles';

const PuzzleModal = () => {

    const { showPuzzleModal, setShowPuzzleModal, selectedPuzzle, setSelectedPuzzle } = useGameContext();
    const puzzleNames = Object.keys(puzzles).sort((a, b) => a - b);


    if (showPuzzleModal) {
        return (

            <div className='modal-overlay'>
                <div className='modal-content'>
                    <div className='modal-controls'>
                        <button className="modal-close-button" onClick={() => setShowPuzzleModal(false)}> X</button>
                    </div>
                    <div className='modal-list-container'>
                        <h2 className='modal-h2'>Select Puzzle</h2>
                        <ul className='modal-puzzle-list'>
                            {puzzleNames.map((puzzle, indexVal) => <li key={`p${indexVal}`} className={puzzles[puzzle].name === selectedPuzzle ? 'neon-blue modal-selected' : ''} onClick={() => setSelectedPuzzle(puzzles[puzzle].name)}>{puzzles[puzzle].name}</li>
                            )}
                        </ul>
                        <button className='modal-button' onClick={() => setShowPuzzleModal(false)}>Set Puzzle</button>
                    </div>
                </div>
            </div>

        )
    } else {
        return null;
    }
}

export default PuzzleModal;