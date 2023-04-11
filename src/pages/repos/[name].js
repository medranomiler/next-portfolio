import React from 'react'
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { FaReact, FaBootstrap, FaNode, FaCcStripe, FaLink } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiVercel, SiTailwindcss, SiOpenai, SiChakraui, SiJavascript, SiNextdotjs, SiGithub, SiHeroku, SiTypescript, SiGraphql } from "react-icons/si";



const Test = () => {
  const [repoData, setrepoData ] = useState({})
  const [loading, setLoading] = useState(true)

const router = useRouter()
const { name = ""} = router.query

  useEffect(() => {
        async function parseRepo(){
        const url = `https://darrenmedrano.vercel.app/api/repos?name=${name}`
        const res = await fetch(url)
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
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"/>
              </div>)} 
            {!loading && Object.keys(repoData).length > 0 && (
            <main className="min-h-screen md:p-6 p-0 dark:bg-gray-950 p-4">
              <div className="flex flex-col items-center">
                <h1 className="text-5xl font-bold dark:text-gray-400 p-4 rounded-xl border shadow border-gray-200 dark:bg-gray-900 dark:border-gray-700 font-bold mb-2 text-center w-full">
                {repoData.name}
                </h1>
                <div className="flex flex-col lg:flex-row lg:flex-wrap dark:text-gray-400 justify-center items-center">
                  <img src={repoData.image} alt="repo image" width="800px" className="rounded-xl border shadow border-gray-200 dark:bg-gray-900 dark:border-gray-700 my-4"/>
                  
                <div className="flex flex-col py-4 max-w-lg md:p-4">
                  <div className="flex justify-center my-4">
                  {repoData.topics && repoData.topics.map((topic) => {
    if (topic === "chakra-ui") {
      return (
          <SiChakraui key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
    if (topic === "github") {
      return (
          <SiGithub key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
    if (topic === "heroku") {
      return (
          <SiHeroku key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
    if (topic === "nextjs") {
      return (
          <SiNextdotjs key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
    if (topic === "react") {
      return (
          <FaReact key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
    if (topic === "vercel") {
      return (
          <SiVercel key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
    if (topic === "openai") {
      return (
          <SiOpenai key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
    if (topic === "typescript") {
      return (
          <SiTypescript key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
    if (topic === "js") {
      return (
          <SiJavascript key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
    if (topic === "bootstrap") {
      return (
          <FaBootstrap key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
    if (topic === "mysql") {
      return (
          <SiMysql key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
    if (topic === "expressjs") {
      return (
          <SiExpress key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
    if (topic === "nodejs") {
      return (
          <FaNode key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
    if (topic === "mongodb") {
      return (
          <SiMongodb key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
    if (topic === "tailwindcss") {
      return (
          <SiTailwindcss key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
    if (topic === "graphql") {
      return (
          <SiGraphql key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
    if (topic === "stripe") {
      return (
          <FaCcStripe key={topic} className="mx-3 h-14 w-14 md:h-20 md:w-20"/>
      );
    }
  })}
          </div>
          <div className="my-4 rounded-xl border shadow border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-4">
          <h2 className="text-4xl font-bold mb-2">Technologies</h2>
          <ul>
          {repoData.topics && repoData.topics.map((topic) => 
            (<li className="text-lg font-light mx-4" key={topic}>
              {topic}
            </li>))}
          </ul>
          </div>
          <div className="my-4 rounded-xl border shadow border-gray-200 p-4 dark:bg-gray-900 dark:border-gray-700">
          <h2 className="text-4xl font-bold mb-2">Description</h2>
          <p className="text-lg font-light mx-4 flex flex-wrap">{repoData.description}</p>
          </div>
          <div className="my-4 rounded-xl border shadow border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-4">
          <h2 className="text-4xl font-bold mb-2">Deployed URL</h2>
          {repoData.deployedUrl && (<Link href={repoData.deployedUrl} className="mx-4 flex cursor-pointer"><FaLink/><p className="text-md font-light ml-2 text-indigo-500">{repoData.deployedUrl}</p></Link>) }
          </div>
          <div className="my-4 rounded-xl border shadow border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-4">
          <h2 className="text-4xl font-bold mb-2">Repository URL</h2>
          {repoData.html_url && (<Link href={repoData.html_url} className="mx-4 flex cursor-pointer"><FaLink/><p className="text-md font-light ml-2 text-indigo-500">{repoData.html_url}</p></Link>) }

          </div>
          </div>
          </div>
          </div>
            </main>)}
        </>
    )
}

export default Test;