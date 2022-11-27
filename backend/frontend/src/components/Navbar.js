import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UidContext } from "./appContext";
import { useSelector } from "react-redux";
import Logout from "./Log/Logout";
import Logo from './../styles/assets/img/heinLogo.png'

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/">
            <div className="logo">
              <img src={Logo} alt="logo"  style={{width: 50+"px", height: 50+"px" }}/>
              <h3>HeinFor</h3>
            </div>
          </NavLink>
        </div>
       

        {uid ? (
          <>
          <div>
            <ul  style={{marginLeft:200+"px"}}>
              <li  style={{marginRight:10+"px"}}>
                <a href="" >
                  <NavLink activeClassName="active" to={`/home`}>
                    Accueil   
                  </NavLink>
                </a>
              </li>
              <li  style={{marginRight:10+"px"}}>
                <a href="#evenement">
                  <NavLink activeClassName="active" to={`/events`}>
                    Evènnement
                  </NavLink>
                </a>
              </li>
              <li  style={{marginRight:10+"px"}}>
                <a href="#Pleinte">
                <NavLink activeClassName="active" to={`/complaints`}>
                  Plaintes
                </NavLink>
                  </a>
              </li>
              {
                userData.status === true ? 
                <li  style={{marginRight:10+"px"}}>
                <a href="#Users">
                <NavLink activeClassName="active" to={`/users`}>
                  Badges
                </NavLink>
                  </a>
              </li>
              : null
              }
            </ul>
        </div>
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink to="/profil">
                <h5> Bienvenu {userData.name} </h5>
              </NavLink>
            </li>
            <Logout />
          </ul>
          </>
        ) : (
          <ul>
            <li>
              <NavLink to="/home">
                <img src="./img/icons/login.svg" alt="login" style={{display:"inline-block", float:"right"}} /> <span>Login</span>
                <p> {uid}  </p>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
