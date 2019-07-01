import React, {useEffect,useState} from 'react'
import axios from 'axios';

function Loading() {
  return (
    <div class="container">
      <div class="text-center">
        <div class="spinner-grow" style={{width:'3rem',height:'3rem'}} role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div>Loading...</div>
      </div>
    </div>
  )
}

function BattleGameResult(props) {
  const { username1, username2}  = props.location.state;
  const [loading, updateLoading ] = useState(true)
  const [users,updateUser] = useState([]);
  const [user2,updateUser2] = useState([]);
  let winner = 0;
  useEffect(()=>{
    var id = "68f7121b3463423d9f90";
    var sec = "7501c822adaf89df5e134e85a78d8505e43a054e";
    var param = "?client_id=" + id + "&client_secret=" + sec;

    function getUserInfo (username1, username2) {
      const P1 = axios.get('https:/api.github.com/users/' + username1 + param)
      const P2 = axios.get('https:/api.github.com/users/' + username2 + param)
      return Promise.all( [P1, P2] );
    }
    function getRepos (username1,username2) {
      const P1 = axios.get('https:/api.github.com/users/' + username1 + '/repos' + param + '&per_page=100');
      const P2 = axios.get('https:/api.github.com/users/' + username2 + '/repos' + param + '&per_page=100');
      return Promise.all( [P1, P2] );
    }
    getUserInfo(username1, username2).then((res)=>{
      console.log(res)
      updateUser(...users,res);
      updateLoading(false);
    })

  },[]);

  if(loading) {
    return (
      <Loading />
    )
  } else {
    return(
      <div class="container">
        <div className="row">
          {users.map((user)=>{
            const { data } = user;
            winner = (winner<data.public_repos)?"Winner":"Loser";
            return (
              <div class="col-lg-6">
                <div class="card" style={{width:'18rem'}}>
                  <div>{winner}</div>
                  <img src={data.avatar_url} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">
                    {data.login}
                    </h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{data.name}</li>
                    <li class="list-group-item">{data.followers} followers</li>
                    <li class="list-group-item">{data.following} following</li>
                    <li class="list-group-item">{data.public_repos} repositories</li>
                  </ul>
                </div>
              </div>
            )
        })}
        </div>
        <div style={{clear:'both'}} class="text-center pt-2">
          <button type="button" class="btn btn-success" onClick={()=> props.history.push('/battle-game')}>Reset</button>
        </div>
      </div>
    )
  }
  
}
export default BattleGameResult;