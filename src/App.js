import React from 'react';
import GameBegins from './components/GameBegins'
import TicTacToe from './games/TicTacToe'
import BattleGame from './games/BattleGame';
import BattleGameResult from './games/BattleGame/result';
import BattleGameRepos from './games/BattleGame/repos';
import Header from './components/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Header/>
        <Route exact path="/" component={GameBegins} /> 
        <Route exact path="/tic-tac-toe" component={TicTacToe} />
        <Route exact path="/battle-game" component={BattleGame} />
        <Route exact path="/battle-game/result" component={BattleGameResult} />
        <Route exact path="/battle-game/repos" component={BattleGameRepos} />
    </Router>
  );
}

export default App;
