import React from 'react'
import { useState, useEffect } from "react"



function useFetchRepos(){
    const [repoData, setrepoData ] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchReposFromDb(){
          // const url = `http://localhost:3000/api/repos`
        const url = "https://darrenmedrano.vercel.app/api/repos"
        const res = await fetch(url)
        const data = await res.json()


        const repositoryData = data.map((item: { deployedUrl: string; description: string; html_url: string; image: string; name: string; topics: [string] }) => ({
          deployedUrl: item.deployedUrl,
          description: item.description,
          html_url: item.html_url,
          image: item.image,
          name: item.name,
          topics: item.topics
        }))
        setLoading(false)
        setrepoData(repositoryData)

    }
    fetchReposFromDb()
  }, [])

  return [repoData, loading]
}

export default useFetchRepos