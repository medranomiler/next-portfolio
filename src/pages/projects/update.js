import React from 'react'
import { useContext } from "react"
import RepoForm from "../../components/Repos/RepoForm"
import { AuthContext } from "../../components/AuthContext"
import LoginWall from '../../components/LoginWall'

const NewRepo = () => {
    const { loggedIn } = useContext(AuthContext);

    


  return (
    <div className="max-w-screen h-screen py-12 p-4 relative flex flex-col items-center bg-slate-50 dark:bg-gray-950">
      {loggedIn? (
        <RepoForm />
      ) : (
        <LoginWall />
        )}
    </div>
  )
}

export default NewRepo

