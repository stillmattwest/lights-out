import './PuzzleIndicator.css';

const PuzzleIndicatior = (props) => {
    return(
    <div className='puzzle-name-container'>
        <p className='puzzle-name neon-blue'>{`Selected Puzzle: ${props.puzzleName}`}</p>
    </div>

    )

}

export default PuzzleIndicatior;