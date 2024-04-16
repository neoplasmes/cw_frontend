import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { createPortal } from "react-dom";
import { LoginDialog } from "./LoginDialog";




const NavigationLink = (props) => {
  const {pathName, pageName} = props;

  return(
    <li className="navbar-item">
      <NavLink 
      to={pathName}>
        {pageName}
      </NavLink>
    </li>
  );
}


const Navbar = () => {

  return (
    <nav className="navbar margin-global">
      <ul className="navbar-group">
        <NavigationLink pageName={"Главная"} pathName={"/"}/>
        <NavigationLink pageName={"Курсы"} pathName={"/courses"}/>
      </ul>
      <div className="navbar-auth">
        <div className="navbar-auth-button">Вход</div>
        <div className="navbar-auth-button">Регистрация</div>
      </div>
      {createPortal(<>
        <LoginDialog />
      </>, document.body)}
    </nav>
  )
}


export default Navbar;