import Router from "next/router"
import { useRouter } from 'next/router'
import React, { useState, useContext } from 'react';
import { AuthContext } from "./AuthContext"
import { FiLogIn } from "react-icons/fi"


const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { loggedIn, handleLogin, handleLogout } = useContext(AuthContext);
    const router = useRouter()


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
        router.pathname === "/login" && Router.push("/")
      } else {
        const { message } = await response.json();
        // Handle error
        setErrorMessage(message)
      }
    };

    return (
        <>
        {loggedIn? <button className="bg-gray-200 p-2 rounded" onClick={handleLogout}>Log Out</button> : 
       (<>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <h1 className="text-4xl text-gray-900 dark:text-white">Login</h1>
        <form className="p-4 relative flex flex-col items-center max-w-[400px] w-full" onSubmit={handleFormSubmit}>
       <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"  type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-violet-500 rounded-lg hover:bg-black dark:hover:bg-gray-800">
          Login
          <FiLogIn className="w-5 h-5 ml-2 -mr-1" />
   </button>

        </form>
       </>)}
       </>)
}

export default LoginComponent