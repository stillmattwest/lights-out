import './App.css';

import Header from './components/Header/Header';
import LightGrid from './components/LightGrid/LightGrid';
import GameControls from './components/GameConrols/GameControls';
import Modal from './components/Modal/Modal';
import PuzzleModal from './components/Modal/PuzzleModal';
import PuzzleIndicatior from './components/PuzzleIndicator/PuzzleIndicatior';


function App() {

  return (
    <>
      <Header />
      <LightGrid />
      <GameControls />
      <PuzzleIndicatior />
      <Modal />
      <PuzzleModal />
    </>
  )
}

export default App
