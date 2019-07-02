import React from 'react'
import { Link } from "react-router-dom";
function GameBegins() {
  return(
    <div>
      <div>
        - <Link to="/tic-tac-toe">Tic Tac Toe</Link>
      </div>
      <div>
        - <Link to="/battle-game">Battle Game</Link>
      </div>
    </div>
  )
}

export default GameBegins;