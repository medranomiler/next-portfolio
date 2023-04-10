import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from "next/image"
import { FaReact, FaBootstrap, FaNode, FaCcStripe } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiVercel, SiTailwindcss, SiOpenai, SiChakraui, SiJavascript, SiNextdotjs, SiGithub, SiHeroku, SiTypescript, SiGraphql } from "react-icons/si";



export default function Repo({ repo }) {

    const router = useRouter()
    const { id } = router.query
    console.log(repo.topics)
    return (
        <div className="">
            <Head>
                <title>{repo.id}</title>
            </Head>

            <main className="min-h-screen md:p-6 p-0 dark:bg-gray-950">
                <h1 className="text-5xl font-bold dark:text-gray-400 p-4">
                    {id}
                </h1>

                <img src={repo.image} alt="repo image" width="400px" />
                {repo.topics.map((topic) => {
            if (topic === "chakra-ui") {
              return (
                  <SiChakraui key={topic} className="mx-3 h-10 w-10"/>
              );
            }
            if (topic === "github") {
              return (
                  <SiGithub key={topic} className="mx-3 h-10 w-10"/>
              );
            }
            if (topic === "heroku") {
              return (
                  <SiHeroku key={topic} className="mx-3 h-10 w-10"/>
              );
            }
            if (topic === "nextjs") {
              return (
                  <SiNextdotjs key={topic} className="mx-3 h-10 w-10"/>
              );
            }
            if (topic === "react") {
              return (
                  <FaReact key={topic} className="mx-3 h-10 w-10"/>
              );
            }
            if (topic === "vercel") {
              return (
                  <SiVercel key={topic} className="mx-3 h-10 w-10"/>
              );
            }
            if (topic === "openai") {
              return (
                  <SiOpenai key={topic} className="mx-3 h-10 w-10"/>
              );
            }
            if (topic === "typescript") {
              return (
                  <SiTypescript key={topic} className="mx-3 h-10 w-10"/>
              );
            }
            if (topic === "js") {
              return (
                  <SiJavascript key={topic} className="mx-3 h-10 w-10"/>
              );
            }
            if (topic === "bootstrap") {
              return (
                  <FaBootstrap key={topic} className="mx-3 h-10 w-10"/>
              );
            }
            if (topic === "mysql") {
              return (
                  <SiMysql key={topic} className="mx-3 h-10 w-10"/>
              );
            }
            if (topic === "expressjs") {
              return (
                  <SiExpress key={topic} className="mx-3 h-10 w-10"/>
              );
            }
            if (topic === "nodejs") {
              return (
                  <FaNode key={topic} className="mx-3 h-10 w-10"/>
              );
            }
            if (topic === "mongodb") {
              return (
                  <SiMongodb key={topic} className="mx-3 h-10 w-10"/>
              );
            }
            if (topic === "tailwindcss") {
              return (
                  <SiTailwindcss key={topic} className="mx-3 h-10 w-10"/>
              );
            }
            if (topic === "graphql") {
              return (
                  <SiGraphql key={topic} className="mx-3 h-10 w-10"/>
              );
            }
            if (topic === "stripe") {
              return (
                  <FaCcStripe key={topic} className="mx-3 h-10 w-10"/>
              );
            }
          })}

            </main>
        </div>
    )
}


export async function getServerSideProps({ params }) {
    const req = await fetch(`http://darrenmedrano.vercel.app/${params.id}.json`);
    const data = await req.json();

    return {
        props: { repo: data },
    }
}