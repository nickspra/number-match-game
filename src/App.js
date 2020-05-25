// eslint-disable-next-line
import React, {useState} from 'react';
import Game from './ components/Game';
import './App.css';

const NumberMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame = {() => setGameId(gameId +1)}/>
};

function App() {
  return <NumberMatch/>
}


export default App;
