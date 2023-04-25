import React from 'react'
import Link from "next/link"

const LoginWall = () => {
  return (
    <>
    <h1 className="text-4xl font-bold dark:text-gray-400">Login to continue </h1>
    <p className="text-2xl text-blue-400 hover:text-blue-700"><Link href="/login">go to login page</Link></p>
  </>
  )
}

export default LoginWall