import React, { useContext } from "react"
import DeleteRepoForm from "../../components/Repos/DeleteRepoForm"
import Link from "next/link"
import { AuthContext } from "../../components/AuthContext"

const Delete = () => {
     const { loggedIn } = useContext(AuthContext);


  return (
    <div className="max-w-screen h-screen py-12 p-4 relative flex flex-col items-center bg-slate-50 dark:bg-gray-950">
      {loggedIn? (
        <DeleteRepoForm />
      ) : (
      <>
        <h1 className="text-2xl">Login to continue </h1>
        <p className="text-blue-400 hover:text-blue-700"><Link href="/login">go to login page</Link></p>
      </>
        )}
    </div>
  )
}

export default Delete