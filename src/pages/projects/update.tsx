import React from 'react'
import { useContext } from "react"
import RepoForm from "../../components/Repos/RepoForm"
import { AuthContext } from "../../components/Auth/AuthContext"
import LoginWall from '../../components/Auth/LoginWall'

const NewRepo = () => {
    const { loggedIn } = useContext(AuthContext);

  return (
    <div className="max-w-screen min-h-screen py-12 p-4 relative flex flex-col items-center bg-slate-50 dark:bg-gray-950">
      {loggedIn? (
        <RepoForm />
      ) : (
        <LoginWall />
        )}
    </div>
  )
}

export default NewRepo

