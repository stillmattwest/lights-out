import './App.css';

import { useState } from 'react';

import Header from './components/Header/Header';
import LightGrid from './components/LightGrid/LightGrid';
import GameControls from './components/GameConrols/GameControls';
import Modal from './components/Modal/Modal';
import PuzzleModal from './components/Modal/PuzzleModal';

function App() {

  const [start, setStart] = useState(false);
  const [showModal,setShowModal] = useState(false);
  const [showPuzzleModal,setShowPuzzleModal] = useState(true);
  const [modalMessage,setModalMessage] = useState('');
  const [selectedPuzzle,setSelectedPuzzle] = useState('Center Three');

  const startButtonClickHandler = () => {
    setStart(true);
  }

  const endGame = () => {
    setStart(false);
  }

  const toggleModalHandler = () => {
    setShowModal(!showModal);
  }

  const togglePuzzleModalHandler = () => {
    setShowPuzzleModal(!showPuzzleModal);
  }

  const setModalMessageHandler = (msg) => {
    setModalMessage(msg);
  }

  const setSelectedPuzzleHandler = (e) => {
    const selectedPuzzle = e.target.innerText;
    setSelectedPuzzle(selectedPuzzle);
  }

  return (
    <>
      <Header />
      <LightGrid start={start} endGame={endGame} toggleModal={toggleModalHandler} setModalMessage={setModalMessageHandler} selectedPuzzle={selectedPuzzle} />
      <GameControls startButtonClickHandler={startButtonClickHandler} />
      <Modal isOpen={showModal} toggleModal={toggleModalHandler}>
        <p>{modalMessage}</p>
      </Modal>
      <PuzzleModal isOpen={showPuzzleModal} toggleModal={togglePuzzleModalHandler} setPuzzle={setSelectedPuzzleHandler}/>
    </>
  )
}

export default App
