// import React, { createContext, useState, useContext } from 'react'

// // Create context
// const AuthContext = createContext()

// // Provider component
// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)

//   const login = () => setIsLoggedIn(true)
//   const logout = () => setIsLoggedIn(false)

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// // Custom hook for easy use
// export const useAuth = () => useContext(AuthContext)

import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState(null)

  // Load saved session
  useEffect(() => {
    const savedRole = localStorage.getItem('userRole')
    const savedLogin = localStorage.getItem('isLoggedIn') === 'true'
    if (savedLogin && savedRole) {
      setIsLoggedIn(true)
      setUserRole(savedRole)
    }
  }, [])

  const login = (role) => {
    setIsLoggedIn(true)
    setUserRole(role)
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('userRole', role)
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUserRole(null)
    localStorage.clear()
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
