import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../storeAndContext/UserProvider'

export default function NavBar() {
  const { user } = useContext(UserContext)
  return (
    <div>
      <li>
        <NavLink to="/home">HOME</NavLink>
      </li>
      {user ? (
        <li>
          <NavLink to="/profile">PROFILE</NavLink>
        </li>
      ) : (
        ''
      )}
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
