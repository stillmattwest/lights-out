import './Modal.css';

import puzzles from '../../puzzles/puzzles';

const PuzzleModal = (props) => {
  //  Object.entries(puzzles).forEach(puzzle => console.log(`puzzle: ${puzzle[0]}, difficulty: ${puzzle[1].difficulty}`));
  const puzzleNames = Object.keys(puzzles).sort((a,b) => a-b);


    if (props.isOpen) {
        return (

            <div className='modal-overlay'>
                <div className='modal-content neon-blue'>
                    <div className='modal-controls'>
                        <button className="modal-close-button" onClick={props.toggleModal}> X</button>
                    </div>
                    <div className='modal-list-container'>
                        <h2 className='modal-h2'>Select Puzzle</h2>
                        <ul className='modal-puzzle-list'>
                            {puzzleNames.map((puzzle,indexVal) => <li key={`p${indexVal}`} onClick={props.setPuzzle}>{puzzles[puzzle].name}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

        )
    } else {
        return null;
    }
}

export default PuzzleModal;