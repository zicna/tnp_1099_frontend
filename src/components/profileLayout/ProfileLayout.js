import React from 'react'
import styles from './profileLayout.module.css'
import { NavLink, Outlet } from 'react-router-dom'

export default function ProfileLayout() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <NavLink to="/profile" className={styles.logo}>USER LOGO</NavLink>
        </div>
        <div className={styles.liContainer}>
          <li>
            <NavLink to="/profile/earnings" className={styles.navlink}>EARNINGS</NavLink>
          </li>
          <li>
            <NavLink to="/profile/trips" className={styles.navlink}>TRIPS</NavLink>
          </li>
          <li>
            <NavLink to="/profile/expenses" className={styles.navlink}>EXPENSES</NavLink>
          </li>
        </div>
      </div>
        <Outlet />
    </>
  )
}

// !  <Outlet />
// * this allows to specific component to be rendered on URL '/profile/...something... besides <ProfileLayout />'
