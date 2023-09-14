import { useGameContext } from "../../context/GameContext";



const StartButton = () => {
    const { setStart } = useGameContext();
    return (
        <button className='start-button neon-blue' onClick={() => setStart(true)}>Begin Game</button>

    )
}

export default StartButton;