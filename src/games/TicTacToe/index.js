import React, {useState} from 'react'
import rawData from '../../lib/rawData';
import cross from '../../images/cross.png';

function TicTacToe() {
  const [winner,updateWinner] = useState("Draw");
  const [player] = useState([{id:0,rowSum:0,colSum:0},{id:1,rowSum:0,colSum:0}]);
  const [gameState, updateGameState] = useState('active');
  const [activePlayer, setActivePlayer] = useState(0)
  const [TTTData,updateTTTData] = useState(rawData)

  function createMatrix() {
    let matrixBox = [];
    TTTData.map((data)=> {
      matrixBox.push(<br/>);
      data.map((info)=>{
        matrixBox.push(
          <div 
          style={{
            display:'inline-block',
            border:'solid 1px #000',
            width:30,
            height:30,
            backgroundColor:info.color,
            backgroundImage:`url:(${cross})`
          }}
          onClick={() => handleClick(info.row,info.col)}
          >
          </div>
        );
        return false
      });
      return false;
    })
    return matrixBox;
  }

  function checkWinner(user,row,col) {
    console.log(user,row,col)
    // if((row === 3 && col === 3) || (row === 3 && col === 6) || (row === 6 && col === 3)) {
    //   gameFinished(user);
    // }
    if(row === 0 && col === 3 || row === 3 && col === 0 ) {
      if(TTTData[0][0]['color'] == 'red') {
        gameFinished('Player 1');

      } else if(TTTData[0][0]['color'] == 'black') {
        gameFinished('Player 2');
      } else {
        return false;
      }
    }
    if((row+col === 6)  || (row+col === 9))  {
      gameFinished(user);
    }

    
  }


  function gameFinished(win) {
    setTimeout(function(){
      updateGameState('inactive');
      updateWinner(win+" Wins");
    },500)
  }

  function handleClick(row,col) {
    if(TTTData[row][col]['color']) {
      alert("Already Clicked")
      return false;
    }
    
    if(activePlayer == 0) {
      TTTData[row][col]['color'] = "red";
      player[0]['rowSum'] = player[0]['rowSum'] + row;
      player[0]['colSum'] = player[0]['colSum'] + col;
      checkWinner("Player 1",player[0]['rowSum'],player[0]['colSum']);
      updateTTTData(TTTData)
      setActivePlayer(1)
    } else {
      TTTData[row][col]['color'] = "black";
      player[1]['rowSum'] = player[1]['rowSum'] + row;
      player[1]['colSum'] = player[1]['colSum'] + col;
      checkWinner("Player 2",player[1]['rowSum'],player[1]['colSum']);
      updateTTTData(TTTData)
      setActivePlayer(0);
    }
    console.log(player)
  }

  function gameOver() {
    return(
      <React.Fragment>
      <div>gameOver</div>
      <div>{winner}</div>
      <button onClick={()=>window.location.reload()}>Reload</button>
      </React.Fragment>
    )
  }

  return(
    <div style={{textAlign:'center'}}>
      <div>Tic Tac Toe</div>
      {(gameState == 'active')?createMatrix():gameOver()}
    </div>
  )
}

export default TicTacToe;