import './GameControls.css';
import StartButton from './StartButton';
import PuzzleSelectButton from './PuzzleSelectButton';

const GameControls = (props) => {
    return (
        <div className='button-container'>
            <PuzzleSelectButton />
            <StartButton />

        </div>
    )


}

export default GameControls;