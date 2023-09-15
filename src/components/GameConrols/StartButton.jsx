import { useGameContext } from "../../context/GameContext";



const StartButton = () => {
    const { start,setStart,setReset } = useGameContext();

    const renderButton = () => {
        return !start?
        <button className='start-button neon-blue' onClick={() => setStart(true)}>Begin Game</button>
        :
        <button className='start-button neon-blue' onClick={() => setReset(false)}>Reset</button>
    }

    return renderButton();

}


export default StartButton;