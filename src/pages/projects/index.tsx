import React, { useContext } from "react"
import Link from "next/link"
import { AuthContext } from "../../components/Auth/AuthContext"
import LoginWall from '../../components/Auth/LoginWall'


const ManageRepos = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="max-w-screen h-screen py-12 px-4 space-y-4 relative flex flex-col items-center bg-slate-50 dark:bg-gray-950">
      {loggedIn? (
        <>
        <Link href="/projects/update" className="w-full max-w-[600px] text-center text-4xl p-4 rounded-lg border border-slate-100 hover:bg-slate-100 shadow font-bold dark:text-gray-400 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-slate-100"><h1>Update A Project</h1></Link>
        <Link href="/projects/new" className="w-full max-w-[600px] text-center text-4xl p-4 rounded-lg border border-slate-100 hover:bg-slate-100 shadow font-bold dark:text-gray-400 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-slate-100"><h1>Create A Project</h1></Link>
        <Link href="/projects/delete" className="w-full max-w-[600px] text-center text-4xl p-4 rounded-lg border border-slate-100 hover:bg-slate-100 shadow font-bold dark:text-gray-400 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-slate-100"><h1>Delete A Project</h1></Link>
        </>
        ) : (
        <LoginWall />
        )}
    </div>
  )
}

export default ManageRepos