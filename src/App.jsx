import './App.css';

import { useState } from 'react';

import Header from './components/Header/Header';
import LightGrid from './components/LightGrid/LightGrid';
import StartButton from './components/StartButton/StartButton';
import Modal from './components/Modal/Modal';

function App() {

  const [start, setStart] = useState(false);
  const [showModal,setShowModal] = useState(false);
  const [modalMessage,setModalMessage] = useState('');

  const startButtonClickHandler = () => {
    setStart(true);
  }

  const endGame = () => {
    setStart(false);
  }

  const toggleModalHandler = () => {
    setShowModal(!showModal);
  }

  const setModalMessageHandler = (msg) => {
    setModalMessage(msg);
  }

  return (
    <>
      <Header />
      <LightGrid start={start} endGame={endGame} toggleModal={toggleModalHandler} setModalMessage={setModalMessageHandler} />
      <StartButton onClick={startButtonClickHandler} />
      <Modal isOpen={showModal} toggleModal={toggleModalHandler}>
        <p>{modalMessage}</p>
      </Modal>
    </>
  )
}

export default App
