import React from 'react';
import GameBegins from './components/GameBegins'
import BattleGame from './games/BattleGame';
import BattleGameResult from './games/BattleGame/result';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/tic-tac-toe">Tic Tac Toe</Link>
          </li>
          <li>
            <Link to="/battle-game">Battle Game</Link>
          </li>
        </ul>

        <hr />
        <Route exact path="/tic-tac-toe" component={GameBegins} />
        <Route exact path="/battle-game" component={BattleGame} />
        <Route exact path="/battle-game/result" component={BattleGameResult} />
      </div>
    </Router>
  );
}

export default App;
