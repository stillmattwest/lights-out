import './Modal.css';

import { useGameContext} from '../../context/GameContext';

import puzzles from '../../puzzles/puzzles';

const PuzzleModal = () => {

    const { showPuzzleModal, setShowPuzzleModal, selectedPuzzle, setSelectedPuzzle, setReset} = useGameContext();
    const puzzleNames = Object.keys(puzzles).sort((a, b) => a - b);

    const setNewPuzzle = () => {
        setReset(false);
        setShowPuzzleModal(false);
    }


    if (showPuzzleModal) {
        return (

            <div className='modal-overlay'>
                <div className='modal-content'>
                    <div className='modal-controls'>
                        <button className="modal-close-button" onClick={() => setShowPuzzleModal(false)}> X</button>
                    </div>
                    <div className='modal-list-container'>
                        <h2 className='modal-h2'>Select Puzzle</h2>
                        {/* <ul className='modal-puzzle-list'>
                            {puzzleNames.map((puzzle, indexVal) => <li key={`p${indexVal}`} className={puzzles[puzzle].name === selectedPuzzle ? 'neon-blue modal-selected' : ''} onClick={() => setSelectedPuzzle(puzzles[puzzle].name)}>{puzzles[puzzle].name}</li>
                            )}
                        </ul> */}
                        <table className='puzzle-modal-table'>
                            <tbody>
                                <tr className='puzzle-modal-th-row'>
                                    <th>Puzzle</th>
                                    <th>Difficulty</th>
                                </tr>
                            {puzzleNames.map((puzzle,index) => {
                                const puzzleName = puzzles[puzzle]['name'];
                                const puzzleDifficulty = puzzles[puzzle]['difficulty'];
                                return( 
                                    <tr key={`pm-table-row${index+1}`} onClick={() => setSelectedPuzzle(puzzleName)} >
                                        <td>{puzzleName}</td>
                                        <td>{puzzleDifficulty}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                        <button className='modal-button' onClick={setNewPuzzle}>Set Puzzle</button>
                    </div>
                </div>
            </div>

        )
    } else {
        return null;
    }
}

export default PuzzleModal;