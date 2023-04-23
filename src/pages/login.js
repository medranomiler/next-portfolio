import React from 'react'
import Router from "next/router"
import { useState } from "react"
import { useContext } from 'react';
import { AuthContext } from "../components/AuthContext"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { loggedIn, handleLogin, handleLogout } = useContext(AuthContext);


    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const response = await fetch('/api/signin', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        const { token } = await response.json();
  
        // Call handleLogin with token from response
        handleLogin(token);
        Router.push("/repos/new")
      } else {
        const { message } = await response.json();
        // Handle error
        setErrorMessage(message)
      }
    };


  return (
    <div className="max-w-screen py-36 p-4 relative flex flex-col items-center lg:m-16 aboutMe">
       {loggedIn? <button className="bg-gray-200 p-2 rounded" onClick={handleLogout}>Log Out</button> : 
       (<>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <h1 className="text-3xl">Login</h1>
        <form className="p-4 relative flex flex-col items-center max-w-[400px] w-full" onSubmit={handleFormSubmit}>
       <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-2"  type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-2" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
       Login
   </button>
        </form>
       </>)}
    </div>
  )
}

export default Login