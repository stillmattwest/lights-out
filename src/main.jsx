import React from 'react'
import ReactDOM from 'react-dom/client'
import { GameProvider } from './context/GameContext';
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
)
