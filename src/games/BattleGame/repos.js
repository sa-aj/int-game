import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStar, faCodeBranch, faExclamationTriangle, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

function BattleGameRepos(props) {
  const { repos } = props.location.state;

  function goBack() {
    console.log(props.history.goBack())
  }
  return(
    <div class="container">
      <button class="btn ml-1 mb-2" style={{backgroundColor:'#000', color:'#fff'}} onClick={()=>goBack()}>
        <FontAwesomeIcon style={{color:"#fff"}} icon={faLongArrowAltLeft} />
      </button>
      <div className="row">
        {repos.map((data,i)=>{
          console.log(data)
          return (
            <div class="col-lg-3">
              <div class="p-4" style={{width:"200px",backgroundColor:"#EBEBEB",margin:"auto"}}>
                <div class="text-center h5">#{i+1}</div>
                <div class="pl-3 pr-3">
                  <img class="p-3" src={data.avatar_url} class="card-img-top" alt="..." />
                </div>
                <div class="text-center" style={{color:'red',fontWeight:'bold'}}>{data.login}</div>
                  <div>
                    <FontAwesomeIcon style={{color:"#F07373",width:'20px'}} icon={faUser} />
                    <span class="pl-2">{data.name}</span>
                  </div>
                  <div>
                    <FontAwesomeIcon style={{color:"#FFD809",width:'20px'}} icon={faStar} />
                    <span class="pl-2 pr-1">{data.stargazers_count}</span>
                    starts
                  </div>
                  <div>
                    <FontAwesomeIcon style={{color:"#B0D5F0",width:'20px'}} icon={faCodeBranch} />
                    <span class="pl-2 pr-1">{data.forks}</span>
                    forks
                  </div>
                  <div style={{cursor:'pointer'}}> 
                    <FontAwesomeIcon style={{color:"#EFABB1",width:'20px'}} icon={faExclamationTriangle} />
                    <span class="pl-2 pr-1">{data.open_issues}</span>
                    open issues
                  </div>
              </div>
            </div>
          )
      })}
      </div>
    </div>
  );
}

export default BattleGameRepos;