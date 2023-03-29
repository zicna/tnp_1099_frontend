import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../storeAndContext/UserProvider'
import ProfileNavBar from '../components/profileNavBar/ProfileNavBar'

export default function Profile() {
    const {user} = useContext(UserContext)
  return (
    <div>
      <ProfileNavBar></ProfileNavBar>
      <div>{user.email}</div>
    </div>
  )
}
