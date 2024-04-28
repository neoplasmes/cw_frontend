import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData, useRouteLoaderData } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../context/AuthProvider";
import axios from "../../axios/axios";


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
  const {auth, setAuth} = useAuth();

  const handleLogout = () => {
    console.log(1);

    axios.get("/logout", {withCredentials: true})
    .then((response) => {
      if (response.status === 204) {
        localStorage.removeItem("username");
        setAuth({accessToken: null});
      }
    })
  }

  return (
    <nav className="navbar">
      <ul className="navbar-group">
        <NavigationLink pageName={"Главная"} pathName={"/"}/>
        <NavigationLink pageName={"Курсы"} pathName={"/education"}/>
      </ul>
      <div className="navbar-auth">
          {!auth.accessToken ? 
            <>
              <NavigationLink pageName={"Вход"} pathName={"/login"}/>
              <NavigationLink pageName={"Регистрация"} pathName={"/registration"}/>
            </> : 
            <>
              <h1>welcome {localStorage.getItem("username")}</h1>
              <div className="navbar-logout" onClick={handleLogout}>logout</div>
            </>}
      </div>
    </nav>
  )
}


export default Navbar;