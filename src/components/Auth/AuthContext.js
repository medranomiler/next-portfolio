import React, { createContext, useState, useEffect } from 'react'


export const AuthContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {}
})

  
export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log("user logged in")
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}
