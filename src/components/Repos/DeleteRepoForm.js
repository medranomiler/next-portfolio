import React, { ReactEventHandler, useState } from 'react'
import useFetchRepos from "../../../hooks/useFetchRepos"
import { BsTrash3Fill } from "react-icons/bs"

const DeleteRepoForm = () => {
    const [ repoData, loading ] = useFetchRepos()
    const [selectedRepo, setSelectedRepo] = useState('')
  
    const deleteRepo = async (e) => {
      e.preventDefault();
      if(confirm(`Are you sure you want to delete ${selectedRepo} ?`)){
        const adminId = localStorage.getItem("adminId")
      const response = await fetch('/api/admin', {
        method: 'DELETE',
        body: JSON.stringify({ name: selectedRepo, adminId }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const { message, error } = await response.json()
      if (response.ok) {
        alert(message)
      }else{
        alert(error)
      }
    }
    else return
    };
  
    const handleRepoChange = (e) => {
      setSelectedRepo(e.target.value)
    }
  return (<>
    <h1 className="text-4xl text-gray-900 dark:text-white">Delete A Project</h1>
    <form onSubmit={deleteRepo} className="py-8 text-gray-900 dark:text-white flex flex-col items-center space-y-4">
    <select className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" onChange={handleRepoChange}>
    {(repoData.map((repo) => (
          <option key={repo.name}>{repo.name}</option>
        )))}
    </select>
    <button type="submit" className="cursor-pointer bg-red-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2"><BsTrash3Fill
                        className="w-4 h-4 mr-2 -ml-1"
                        aria-hidden="true"
                      />Delete</button>
    </form>
  </>)
}

export default DeleteRepoForm

