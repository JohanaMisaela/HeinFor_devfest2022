import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UidContext } from "./appContext";
import { useSelector } from "react-redux";
import Logout from "./Log/Logout";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/">
            <div className="logo">
              <img src="" alt="logo" />
              <h3>HeinFor</h3>
            </div>
          </NavLink>
        </div>
       
        <div>
            <ul  style={{marginLeft:200+"px"}}>
              <li  style={{marginRight:10+"px"}}>
                <a href="" >
                  <NavLink activeClassName="active" to={`/`}>
                    Accueil   
                  </NavLink>
                </a>
              </li>
              <li  style={{marginRight:10+"px"}}>
                <a href="#sec">
                  <NavLink activeClassName="active" to={`/events`}>
                    Evènnement
                  </NavLink>
                </a>
              </li>
              <li  style={{marginRight:10+"px"}}>
                <a href="">Contact</a>
              </li>
            </ul>
        </div>

        {uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink to="/profil">
                <h5> Bienvenu {userData.name} </h5>
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink to="/home">
                <img src="./img/icons/login.svg" alt="login" style={{display:"inline-block"}} /> <span>Login</span>
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
