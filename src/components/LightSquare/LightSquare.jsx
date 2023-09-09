import './LightSquare.css';

const LightSquare = (props) => {
    return (
        <div className={`light-square ${props.isLit ? 'lit' : ''}`} row={props.row} col={props.col} onClick={props.toggleSquareHandler}>

        </div>
    )

}

export default LightSquare;