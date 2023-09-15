
import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGameContext = () => {
    return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
    const [start, setStart] = useState(false);
    const [reset,setReset] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showPuzzleModal, setShowPuzzleModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [selectedPuzzle, setSelectedPuzzle] = useState('Center Three');


    const value = {
        start,
        setStart,
        reset,
        setReset,
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
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};



