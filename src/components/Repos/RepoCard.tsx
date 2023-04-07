import { FaReact, FaBootstrap, FaNode, FaCcStripe } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiVercel, SiTailwindcss, SiOpenai, SiChakraui, SiJavascript, SiNextdotjs, SiGithub, SiHeroku, SiTypescript, SiGraphql } from "react-icons/si";
import Link from "next/link"


interface Repo {
  name: string;
  description: string;
  topics: string[];
  html_url: string;
  image: string;
}

interface RepoCardProps {
  repo: Repo;
}

const RepoCard = ({ repo }: RepoCardProps) => {


  return (

<div className="w-96 h-96 m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 overflow-hidden p-5">
  {/* <a href={repo.html_url}>
    <img className="w-full h-1/2 object-cover" src={repo.image} alt="" />
  </a> */}
    <Link href={repo.html_url}>
  <div className="h-1/4">
      <p className="text-center text-3xl font-bold py-2 dark:text-gray-400">{repo.name}</p>
  </div>
    <div className="h-1/2">
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{repo.description}</p>
    </div>
    <div className=" h-1/4 flex justify-center flex-wrap dark:text-gray-400">
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
            </div>
            </Link>
</div>

  )
};


export default RepoCard;
