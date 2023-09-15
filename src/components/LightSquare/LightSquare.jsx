import './LightSquare.css';

import { useGameContext } from '../../context/GameContext';

const LightSquare = (props) => {

    const { start } = useGameContext();

    const clickHander = (e) => {
        if (start) {
            props.toggleSquareHandler(e);
        }
    }
    return (
        <div className={`light-square ${props.isLit ? 'lit' : ''}`} row={props.row} col={props.col} onClick={(e) => clickHander(e)}>

        </div>
    )

}

export default LightSquare;