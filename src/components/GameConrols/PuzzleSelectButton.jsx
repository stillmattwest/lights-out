import { useGameContext } from "../../context/GameContext";



const PuzzleSelectButton = () => {
    const { setShowPuzzleModal } = useGameContext();
   
    return (
        <button className='puzzle-button neon-blue' onClick={() => setShowPuzzleModal(true)}>Select Puzzle</button>


    )
}

export default PuzzleSelectButton;