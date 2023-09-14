
import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGameContext = () => {
    return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
    const [start, setStart] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showPuzzleModal, setShowPuzzleModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [selectedPuzzle, setSelectedPuzzle] = useState('Center Three');

    // const startButtonClickHandler = () => {
    //     setStart(true);
    // }

    // const endGame = () => {
    //     setStart(false);
    // }

    // const toggleModalHandler = () => {
    //     setShowModal(!showModal);
    // }

    // const togglePuzzleModalHandler = () => {
    //     setShowPuzzleModal(!showPuzzleModal);
    // }

    // const setModalMessageHandler = (msg) => {
    //     setModalMessage(msg);
    // }

    // const setSelectedPuzzleHandler = (e) => {
    //     const selectedPuzzle = e.target.innerText;
    //     setSelectedPuzzle(selectedPuzzle);
    // }

    const ctx = {
        start,
        setStart,
        showModal,
        setShowModal,
        modalMessage,
        setModalMessage,
        selectedPuzzle,
        setSelectedPuzzle,
        showPuzzleModal,
        setShowPuzzleModal
    };

    return (
        <GameContext.Provider value={ctx}>
            {children}
        </GameContext.Provider>
    );
};



