import React from 'react'
import { useState, useEffect } from "react"



function useFetchRepos(){
    const [repoData, setrepoData ] = useState([])

    useEffect(() => {
        async function fetchReposFromDb(){
        const url = "https://darrenmedrano.vercel.app/api/repos"
        const res = await fetch(url)
        const data = await res.json()


        const repositoryData = data.map(item => ({
          deployedUrl: item.deployedUrl,
          description: item.description,
          html_url: item.html_url,
          image: item.image,
          name: item.name,
          topics: item.topics
        }))
        
        setrepoData(repositoryData)
    }
    fetchReposFromDb()
  }, [])

  return [repoData]
}

export default useFetchRepos