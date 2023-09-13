import './GameControls.css';
import StartButton from './StartButton';
import PuzzleSelectButton from './PuzzleSelectButton';

const GameControls = (props) => {
    return(
        <div className='button-container'>
        <PuzzleSelectButton setPuzzle={props.selectPuzzle} onClick={props.selectPuzzleClickHandler}/>
        <StartButton onClick={props.startButtonClickHandler}/>
            
    </div>
    )
  

}

export default GameControls;