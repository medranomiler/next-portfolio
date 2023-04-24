import React, { useState } from 'react'
import useFetchRepos from "../../../hooks/useFetchRepos"

const DeleteRepoForm = () => {
    const [ repoData, loading ] = useFetchRepos()
    const [selectedRepo, setSelectedRepo] = useState('')
  
    const deleteRepo = async (e) => {
      e.preventDefault();
      if(confirm(`Are you sure you want to delete ${selectedRepo} ?`)){
      const response = await fetch('/api/repos', {
        method: 'DELETE',
        body: JSON.stringify({ name: selectedRepo }),
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
    <button type="submit" className="w-1/2 cursor-pointer p-2 bg-red-600 rounded text-white">Delete</button>
    </form>
  </>)
}

export default DeleteRepoForm

