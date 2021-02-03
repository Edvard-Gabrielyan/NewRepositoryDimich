import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";

let NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav-menu">
        <NavLink to="/profile" activeClassName="activ">
          Profile
        </NavLink>
      </div>
      <div className="nav-menu">
        <NavLink to="/dialogs" activeClassName="activ">
          Messages
        </NavLink>
      </div>
      <div className="nav-menu">
        News
      </div>
      <div className="nav-menu" >
        Musices
      </div>
      <div className="nav-menu">
        Settings
      </div>
    </nav>
  );
};

export default NavBar;
