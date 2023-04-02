import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from '../expenseLayout/expenseLayout.module.css'

export default function ExpenseNavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.liContainer}>
        <h3>Expense Nav Bar</h3>
        <div>
          <li>
            <NavLink to="/profile/expenses/all" className={styles.navlink}>List All</NavLink>
          </li>
        </div>
        <div>
          <li>
            <NavLink to="/profile/expenses/new" className={styles.navlink}>New expense</NavLink>
          </li>
        </div>
        <div>
          <li>
            <NavLink to="/profile/expenses/this-week" className={styles.navlink}>This Week</NavLink>
          </li>
        </div>
      </div>

      <Outlet className={styles.outlet} />
    </div>
  )
}
