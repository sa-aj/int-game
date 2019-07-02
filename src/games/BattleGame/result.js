import React, {useEffect,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers, faUserFriends, faCode } from '@fortawesome/free-solid-svg-icons'
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
  let winner = 0;
  const id = "68f7121b3463423d9f90";
  const sec = "7501c822adaf89df5e134e85a78d8505e43a054e";
  const param = "?client_id=" + id + "&client_secret=" + sec;

  useEffect(()=>{
    getUserInfo(username1, username2).then((res)=>{
      updateUser(...users,res);
      updateLoading(false);
    })
  },[]);

  function getUserInfo (username1, username2) {
    const P1 = axios.get('https:/api.github.com/users/' + username1 + param)
    const P2 = axios.get('https:/api.github.com/users/' + username2 + param)
    return Promise.all( [P1, P2] );
  }

  function getRepos (username) {
    return axios.get('https:/api.github.com/users/' + username + '/repos' + param + '&per_page=100');
  }

  function showRepos(loginId) {
    updateLoading(true);
    getRepos(loginId).then((res)=> {
      updateLoading(false);
      return props.history.push({
        pathname: '/battle-game/repos',
        state: { 
          repos:res.data,
        }
      });
    })
  }

  if(loading) {
    return (
      <Loading />
    )
  } else {
    return(
      <div class="container mt-4">
        <div className="row">
          {users.map((user,i)=>{
            const { data } = user;
            let winnerLabel = "";
            console.log(data.public_repos)
            if(winner < data.public_repos) {
              console.log("true")
              winner = data.public_repos;
              winnerLabel = "Winner"
            } else{
              winnerLabel = "Loser"
            }
            return (
              <div class="col-lg-6">
                <div class="p-4" style={{width:"200px",backgroundColor:"#EBEBEB",margin:"auto",float:(i%2)?"left":'right'}}>
                  <div class="text-center h5">{winnerLabel}</div>
                  <div class="pl-3 pr-3">
                    <img class="p-3" src={data.avatar_url} class="card-img-top" alt="..." />
                  </div>
                  <div class="text-center" style={{color:'red',fontWeight:'bold'}}>{data.login}</div>
                    <div>
                      <FontAwesomeIcon style={{color:"#F07373",width:'20px'}} icon={faUser} />
                      <span class="pl-2">{data.name}</span>
                    </div>
                    <div>
                      <FontAwesomeIcon style={{color:"#81C3F5",width:'20px'}} icon={faUsers} />
                      <span class="pl-2 pr-1">{data.followers}</span>
                      followers
                    </div>
                    <div>
                      <FontAwesomeIcon style={{color:"#ccc",width:'20px'}} icon={faUserFriends} />
                      <span class="pl-2 pr-1">{data.following}</span>
                      following
                    </div>
                    <div style={{cursor:'pointer'}} onClick={()=> showRepos(data.login)}> 
                      <FontAwesomeIcon style={{color:"#000",width:'20px'}} icon={faCode} />
                      <span class="pl-2 pr-1">{data.public_repos}</span>
                      repositories
                    </div>
                </div>
              </div>
            )
        })}
        </div>
        <div style={{clear:'both'}} class="text-center pt-2">
          <button type="button" class="btn" style={{backgroundColor:"#000",color:"#fff",width:"170px",letterSpacing:"3px"}} onClick={()=> props.history.push('/battle-game')}>RESET</button>
        </div>
      </div>
    )
  }
  
}
export default BattleGameResult;