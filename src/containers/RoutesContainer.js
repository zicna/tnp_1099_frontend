import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Welcome from '../pages/Welcome'
import Contact from '../pages/Contact'
import PageNotFound from '../pages/PageNotFound'
import Auth from '../pages/Auth/Auth'
import { UserContext } from '../storeAndContext/UserProvider'
import ProfileLayout from '../components/profileLayout/ProfileLayout'
import Trips from '../pages/Trips'
import Earnings from '../pages/Earnings'
import ExpenseContainer from '../pages/expense/ExpenseContainer'
import ExpenseList from '../pages/expense/ExpenseList'
import NewExpense from '../pages/expense/NewExpense'

export default function RoutesContainer() {
  const { user } = useContext(UserContext)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/home" element={<Home />}></Route>
        {/* <Route path="/profile" children={()=><Profile></Profile>}></Route> */}
        {user ? (
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<Profile />}></Route>
            <Route path="trips" element={<Trips />}></Route>
            <Route path="expenses" element={<ExpenseContainer />}>
              <Route path="all" element={<ExpenseList></ExpenseList>}></Route>
              <Route
                path="this-week"
                element={<ExpenseList></ExpenseList>}
              ></Route>
              <Route path="new" element={<NewExpense />}></Route>
            </Route>

            <Route path="earnings" element={<Earnings />}></Route>
          </Route>
        ) : (
          ''
        )}
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Auth></Auth>}></Route>
        {/* <Route path="*" element={<PageNotFound />}></Route> */}
      </Routes>
    </div>
  )
}
