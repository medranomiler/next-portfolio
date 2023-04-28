import React, { createContext, useState, useEffect } from 'react'


export const AuthContext = createContext({
  loggedIn: false,
  handleLogin: (token: string, adminId: string) => {},
  handleLogout: () => {},
});

interface AuthProviderProps{
  children: React.ReactNode,
}
  
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log("user logged in")
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (token: string, adminId: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('adminId', adminId);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('adminId');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}
