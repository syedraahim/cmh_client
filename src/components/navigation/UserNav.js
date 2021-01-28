import React from "react";
import {Link} from "react-router-dom";

const UserNav = () => {
  return (
    <nav className="navbar navbar-default navbar-top sidenavbar">
      <ul className= "nav flex-column font-weight-bold ">
        <li className= "nav-item">
          <Link to= "/user/history" className= "nav-link">USER HISTORY</Link>
        </li>
        <li className= "nav-item">
          <Link to= "/user/password" className= "nav-link">PASSWORD RESET</Link>
        </li>
        <li className= "nav-item">
          <Link to= "/user/accountinfo" className= "nav-link">ACCOUNT DETAILS</Link>
        </li>
      </ul>
    </nav>  
  ) 
  }

export default UserNav;