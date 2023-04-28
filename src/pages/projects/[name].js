import React from 'react'
import { useEffect, useState, useContext } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import TopicIcons from "../../components/Repos/TopicIcons"
import TopicNames from "../../components/Repos/TopicNames"
import { FaLink } from "react-icons/fa";
import { AuthContext } from "../../components/Auth/AuthContext"


const Project = () => {
  const [repoData, setrepoData] = useState({})
  const [loading, setLoading] = useState(true)
  const { loggedIn } = useContext(AuthContext);

  const router = useRouter()
  const { name = "" } = router.query

  useEffect(() => {
    async function parseRepo() {
      const adminId = localStorage.getItem('adminId')
      // const url = `http://localhost:3000/api/repos?name=${name}&adminId=${adminId}`
      const url = `https://darrenmedrano.vercel.app/api/repos?name=${name}&adminId=${adminId}`
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()

      const repositoryData = {
        deployedUrl: data.deployedUrl,
        description: data.description,
        html_url: data.html_url,
        image: data.image,
        name: data.name,
        topics: data.topics
      }
      setrepoData(repositoryData)
      setLoading(false)
    }
    parseRepo()
  }, [name])


  return (
    <>
      <Head>
        <title>{repoData.name}</title>
      </Head>
      {loading && (<div className="h-screen flex justify-center items-center bg-black">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" />
      </div>)}
      {!loading && Object.keys(repoData).length > 0 && (
        <main className="min-h-screen md:p-6 p-4 bg-slate-50 dark:bg-gray-950">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold dark:text-gray-400 p-4 rounded-xl border shadow border-gray-200 dark:bg-gray-900 dark:border-gray-700 font-bold mb-2 text-center w-full">
              {repoData.name}
            </h1>
            <div className="flex flex-col lg:flex-row lg:flex-wrap dark:text-gray-400 justify-center items-center">
              <img src={repoData.image} alt="repo image" width="800px" className="rounded-xl border shadow border-gray-200 dark:bg-gray-900 dark:border-gray-700 my-4" />

              <div className="flex flex-col py-4 max-w-lg md:p-4">
                <div className="flex justify-center my-4">
                  {repoData.topics && repoData.topics.map((topic) => {
                    return <TopicIcons key={topic} topic={topic} />
                  })}
                </div>
                <div className="my-4 rounded-xl border shadow border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-4">
                  <h2 className="text-4xl font-bold mb-2">Technologies</h2>
                  <ul>
                    {repoData.topics && repoData.topics.map((topic) => {
                     return <TopicNames key={topic} topic={topic} />
                    })}
                  </ul>
                </div>
                <div className="my-4 rounded-xl border shadow border-gray-200 p-4 dark:bg-gray-900 dark:border-gray-700">
                  <h2 className="text-4xl font-bold mb-2">Description</h2>
                  <p className="text-lg font-light mx-4 flex flex-wrap">{repoData.description}</p>
                </div>
                <div className="my-4 rounded-xl border shadow border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-4">
                  <h2 className="text-4xl font-bold mb-2">Deployed URL</h2>
                  {repoData.deployedUrl && (<Link href={repoData.deployedUrl} className="mx-4 flex cursor-pointer"><FaLink /><p className="text-md font-light ml-2 text-indigo-500">{repoData.deployedUrl}</p></Link>)}
                </div>
                <div className="my-4 rounded-xl border shadow border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-4">
                  <h2 className="text-4xl font-bold mb-2">Repository URL</h2>
                  {repoData.html_url && (<Link href={repoData.html_url} className="mx-4 flex cursor-pointer"><FaLink /><p className="text-md font-light ml-2 text-indigo-500">{repoData.html_url}</p></Link>)}
                </div>
                {loggedIn && (<>
                <div className="my-4 rounded-xl border shadow border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-4">
                  <h2 className="text-4xl font-bold mb-2">Actions</h2>
                  <div className="flex justify-center space-x-4">
                  <button className="cursor-pointer p-2 bg-yellow-400 rounded text-white"><Link href="/projects/update">Update</Link></button>
                  <button className="cursor-pointer p-2 bg-red-600 rounded text-white"><Link href="/projects/delete">Delete</Link></button>
                  </div>
                </div> </>)}
              </div>
            </div>
          </div>
        </main>)}
    </>
  )
}

export default Project;