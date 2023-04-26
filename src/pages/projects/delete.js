import React, { useContext } from "react"
import DeleteRepoForm from "../../components/Repos/DeleteRepoForm"
import { AuthContext } from "../../components/Auth/AuthContext"
import LoginWall from '../../components/Auth/LoginWall'

const Delete = () => {
     const { loggedIn } = useContext(AuthContext);


  return (
    <div className="max-w-screen h-screen py-12 p-4 relative flex flex-col items-center bg-slate-50 dark:bg-gray-950">
      {loggedIn? (
        <DeleteRepoForm />
      ) : (
      <LoginWall />
        )}
    </div>
  )
}

export default Delete