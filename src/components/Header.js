import React from 'react';
import { Link } from "react-router-dom";

function Header(){
  return(
    <div 
      style={{
        width:"100%",
        height:"50px",
        backgroundColor:"#563D7C",
        boxShadow:"0 3px 7px 0px #000",
        marginBottom:"5px"
      }}
    >
      <Link to="/">
        <div 
          style={{
            float:'left',
            border:'solid 0.04em #fff',
            borderRadius:"4px",
            height:"30px",
            width:"30px",
            textAlign:'center',
            margin:"10px 40px",
            color:"#fff",
            fontSize:"19px",
          }}
        >S</div>
      </Link>
    </div>
  )
} 

export default Header;