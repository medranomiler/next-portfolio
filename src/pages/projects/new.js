import React from 'react'
import { useState, useContext } from "react"
import RepoForm from "../../components/Repos/RepoForm"
import Link from "next/link"
import { AuthContext } from "../../components/AuthContext"

const NewRepo = () => {
    const { loggedIn } = useContext(AuthContext);

    


  return (
    <div className="max-w-screen h-screen py-12 p-4 relative flex flex-col items-center bg-slate-50 dark:bg-gray-950">
      {loggedIn? (
        <RepoForm />
      ) : (
          <>
          <h1 className="text-2xl">Login to continue </h1>
          <p className="text-blue-400 hover:text-blue-700"><Link href="/login">go to login page</Link></p>
          </>
        )}
    </div>
  )
}

export default NewRepo

