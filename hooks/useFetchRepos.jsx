import React from 'react'
import { useState, useEffect, useContext } from "react"
import { AuthContext } from '@/components/Auth/AuthContext'



function useFetchRepos(){
    const [repoData, setrepoData ] = useState([])
    const [loading, setLoading] = useState(true)
    const { loggedIn } = useContext(AuthContext)

    useEffect(() => {
        async function fetchReposFromDb(){
          const adminId = localStorage.getItem('adminId')
        // const url = `https://darrenmedrano.vercel.app/api/admin?adminId=${adminId}`
        const res = await fetch(`/api/admin?adminId=${adminId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await res.json()

         


        const repositoryData = data.length > 0 && data.map(item => ({
          deployedUrl: item.deployedUrl,
          description: item.description,
          html_url: item.html_url,
          image: item.image,
          name: item.name,
          topics: item.topics,
          category: item.category
        }))
        setLoading(false)
        setrepoData(repositoryData)

    }
    fetchReposFromDb()
  }, [loggedIn])

  return [repoData, loading]
}

export default useFetchRepos