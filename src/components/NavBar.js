import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <li>
            <NavLink to="/home">HOME</NavLink>
        </li>
        <li>
            <NavLink to="/profile">PROFILE</NavLink>
        </li>
        <li>
            <NavLink to="/login">LOGIN</NavLink>
        </li>
        <li>
            <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
            <NavLink to="/contact">CONTACT</NavLink>
        </li>
    </div>
  )
}
