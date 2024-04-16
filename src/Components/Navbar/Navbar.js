import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";




const NavigationLink = (props) => {
  const {pathName, pageName} = props;

  return(
    <li className="navbar-item">
      <NavLink 
      to={pathName} 
      style={({isActive}) => {
        return {/*
          borderRadius: "1.25rem",
          backgroundColor: isActive ? "white" : "transparent",
          color: isActive ? "black" : "white"*/
        }
      }}>
        {pageName}
      </NavLink>
    </li>
  );
}


const Navbar = () => {

  return (
    <nav className="navbar margin-global">
      <ul className="navbar-group">
        <NavigationLink pageName={"Home"} pathName={"/"}/>
        <NavigationLink pageName={"Courses"} pathName={"/courses"}/>
      </ul>
      <div className="navbar-auth">
        logo
      </div>
    </nav>
  )
}


export default Navbar;