import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

import { FaReact, FaBootstrap, FaNode, FaCcStripe, FaLink } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiVercel, SiTailwindcss, SiOpenai, SiChakraui, SiJavascript, SiNextdotjs, SiGithub, SiHeroku, SiTypescript, SiGraphql } from "react-icons/si";



export default function Repo({ repo }) {

    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <Head>
                <title>{repo.id}</title>
            </Head>

            <main className="min-h-screen md:p-6 p-0 dark:bg-gray-950 p-4">
              <div className="flex flex-col items-center">
                <h1 className="text-5xl font-bold dark:text-gray-400 p-4 rounded-xl border shadow border-gray-200 dark:bg-gray-900 dark:border-gray-700 font-bold mb-2 text-center w-full">
                    {id}
                </h1>
                <div className="flex flex-col lg:flex-row lg:flex-wrap dark:text-gray-400 justify-center items-center">
                  <img src={repo.image} alt="repo image" width="800px" className="rounded-xl border shadow border-gray-200 dark:bg-gray-900 dark:border-gray-700"/>
                  
                <div className="flex flex-col py-4 max-w-lg md:p-4">
                  <div className="flex justify-center">
                {repo.topics.map((topic) => {
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
          {repo.topics.map((topic) => 
            (<li className="text-lg font-light mx-4" key={topic}>
              {topic}
            </li>))}
          </ul>
          </div>
          <div className="my-4 rounded-xl border shadow border-gray-200 p-4 dark:bg-gray-900 dark:border-gray-700">
          <h2 className="text-4xl font-bold mb-2">Description</h2>
          <p className="text-lg font-light mx-4 flex flex-wrap">{repo.description}</p>
          </div>
          <div className="my-4 rounded-xl border shadow border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-4">
          <h2 className="text-4xl font-bold mb-2">Deployed URL</h2>
          <Link href={repo.deployedUrl} className="mx-4 flex cursor-pointer"><FaLink/><p className="text-md font-light ml-2 text-indigo-500">{repo.deployedUrl}</p></Link>
          </div>
          </div>
          </div>
          </div>
            </main>
        </>
    )
}


export async function getServerSideProps({ params }) {
  const url = "darrenmedrano.vercel.app"
    const req = await fetch(`https://${url}/${params.id}.json`);
    const data = await req.json();

    return {
        props: { repo: data },
    }
}