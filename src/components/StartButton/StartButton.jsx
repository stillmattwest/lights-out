import './StartButton.css';

const StartButton = (props) => {
    return (
        <div className='button-container'>
            <button className='start-button' onClick={props.onClick}>Begin Game</button>
        </div>

    )
}

export default StartButton;