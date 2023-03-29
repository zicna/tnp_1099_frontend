import React from 'react'
import styles from './profileLayout.module.css'
import { NavLink, Outlet } from 'react-router-dom'

export default function ProfileLayout() {
  return (
    <div className={styles.container}>
      <div>
        <NavLink to="/profile">LOGO</NavLink>
      </div>
      <div>
        <li>
          <NavLink to="/profile/earnings">EARNINGS</NavLink>
        </li>
        <li>
          <NavLink to="/profile/trips">TRIPS</NavLink>
        </li>
        <li>
          <NavLink to="/profile/expenses">EXPENSES</NavLink>
        </li>
        
        <Outlet />
      </div>
    </div>
  )
}

// !  <Outlet />
// * this allows to specific component to be rendered on URL '/profile/...something... besides <ProfileLayout />'
