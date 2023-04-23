import React from 'react'
import { useState, useContext } from "react"
import Router from "next/router"
import Link from "next/link"
import { AuthContext } from "../../components/AuthContext"


const NewThought = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [topics, setTopics] = useState([]);
    const [html_url, setHtml_url] = useState('')
    const [image, setImage] = useState('')
    const [deployedUrl, setDeployedUrl] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const { loggedIn } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const topicsArray = topics.split(",").map((topic) => topic.trim());
        const response = await fetch('/api/repos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, description, topics: topicsArray , html_url, image, deployedUrl }),
        });
        const { error } = await response.json()
        
        if(!error){
            Router.push('/')
        }
        else {
          setErrorMessage(error);
        }
      };


  return (
    <div className="max-w-screen py-36 p-4 relative flex flex-col items-center lg:m-16 aboutMe">
      {loggedIn? (<>
    <h1 className="text-3xl">Create New Repo</h1>
        <form className="p-4 relative flex flex-col items-center md:w-1/3 lg:w-1/2 w-full"
        onSubmit={handleSubmit}>
            <input type="text" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-2" placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input type="text" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-2" placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <input type="text" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-2" placeholder="topics"
            value={topics}
            onChange={(e) => setTopics(e.target.value)}
            />
            <input type="text" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-2" placeholder="repo url"
            value={html_url}
            onChange={(e) => setHtml_url(e.target.value)}
            />
            <input type="text" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-2" placeholder="image url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
            <input type="text" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-2" placeholder="deployed url"
            value={deployedUrl}
            onChange={(e) => setDeployedUrl(e.target.value)}
            />    
               <button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
       Publish Repo
   </button>
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </>) : (
          <>
          <h1 className="text-2xl">Login to create a new repo </h1>
          <p className="text-blue-400 hover:text-blue-700"><Link href="/login">go to login page</Link></p>
          </>
        )}
    </div>
  )
}

export default NewThought
