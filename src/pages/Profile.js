import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../storeAndContext/UserProvider'

export default function Profile() {
    const {user} = useContext(UserContext)
  return (
    <div>
      <div>{user.email}</div>
    </div>
  )
}
