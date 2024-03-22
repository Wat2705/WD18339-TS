'use client';
import { Navbar } from 'flowbite-react';
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <Navbar fluid>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/about">About</NavLink>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
