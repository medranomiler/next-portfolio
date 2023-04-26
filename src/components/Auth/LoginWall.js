import React from 'react'
import LoginModal from "./LoginModal"
import { useState } from "react"

const LoginWall = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
    <LoginModal isVisible={isVisible} onClose={() => setIsVisible(false)} />
    <h1 className="text-4xl font-bold dark:text-gray-400">Login to continue</h1>
    <p className="text-2xl text-blue-400 hover:text-blue-700 cursor-pointer"
    onClick={()=> setIsVisible(true)}>Click here to login</p>
  </>
  )
}

export default LoginWall