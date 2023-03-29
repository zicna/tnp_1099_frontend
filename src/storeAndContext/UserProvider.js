import React, { createContext, useState } from 'react'

// * dummy data 
const obj = {
  dateOfBirth: '2023-03-28T00:00:00.000+00:00',
  email: 'ruby_master@example.com',
  gender: 'FEMALE',
  id: 3,
}
export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(obj)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

