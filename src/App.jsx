import './App.css';

import { useState } from 'react';

import Header from './components/Header/Header';
import LightGrid from './components/LightGrid/LightGrid';
import StartButton from './components/StartButton/StartButton';

function App() {

  const [start, setStart] = useState(false);

  const startButtonClickHandler = () => {
    setStart(true);
  }

  return (
    <>
      <Header />
      <LightGrid start={start} />
      <StartButton onClick={startButtonClickHandler} />
    </>
  )
}

export default App
