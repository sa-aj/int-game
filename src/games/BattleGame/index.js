import React, {useRef} from 'react'
//import { browserHistory } from 'react-router'

function handleClick(history,username1,username2) {
  history.push('/battle-game/result');
  history.push({
    pathname: '/battle-game/result',
    state: { 
      username1: username1.current.value,
      username2: username2.current.value
    }
  })
}
function BattleGame(props) {
  const { history } = props;
  const username1 = useRef(null);
  const username2 = useRef(null);
  return(
    <div class="container">
      <div class="col-lg-12">
        <div class="text-center h4">Players</div>
        <div class="col-lg-6 float-left">
          <div>Player One</div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">git username</span>
            </div>
            <input type="text" ref={username1} class="form-control" id="basic-url" aria-describedby="basic-addon3" />
          </div>
        </div>
        <div class="col-lg-6 float-right">
          <div>Player Two</div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">git username</span>
            </div>
            <input type="text" ref={username2} class="form-control" id="basic-url" aria-describedby="basic-addon3" />
          </div>
        </div>
        <div style={{clear:'both'}} class="text-center pt-2">
          <button type="button" class="btn" style={{backgroundColor:"#000",color:"#fff",width:"170px",letterSpacing:"3px"}} onClick={()=> handleClick(history,username1,username2)}>SUBMIT</button>
        </div>
      </div>
    </div>
  )
}

export default BattleGame;