import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../storeAndContext/UserProvider'
import styles from './navbar.module.css'

export default function NavBar() {
  const { user } = useContext(UserContext)
  return (
    <div className={styles.container}>
      <div>
        <h2>LOGO</h2>
      </div>
      <div className={styles.liContainer}>
        <li>
          <NavLink to="/home" className={styles.navlink}>
            HOME
          </NavLink>
        </li>
        {user ? (
          <li>
            <NavLink to="/profile" className={styles.navlink}>
              PROFILE
            </NavLink>
          </li>
        ) : (
          ''
        )}
        <li>
          <NavLink to="/login" className={styles.navlink}>
            LOGIN
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={styles.navlink}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={styles.navlink}>
            CONTACT
          </NavLink>
        </li>
      </div>
    </div>
  )
}
