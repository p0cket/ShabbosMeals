import React from 'react';
import AppBar from 'material-ui/AppBar';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <AppBar title="Shabbbbbos" />
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/Login">Login</NavLink>
      <br />
      <NavLink to="/Create">Create Meal</NavLink>
      <br />
      <NavLink to="/Profile">Profile</NavLink>
    </div>
  );
};

export default NavBar;
