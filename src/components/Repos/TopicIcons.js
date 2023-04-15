import { useState, useEffect} from 'react'
import { FaReact, FaBootstrap, FaNode, FaCcStripe } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiVercel, SiTailwindcss, SiOpenai, SiChakraui, SiJavascript, SiNextdotjs, SiGithub, SiHeroku, SiTypescript, SiGraphql, SiGodaddy, SiAdobeillustrator } from "react-icons/si";

const TopicIcons = ({topic}) => {
    const [topicIcon, setTopicIcons] = useState(null)

    useEffect(() => {
    if (topic === "chakra-ui") {

            setTopicIcons(<SiChakraui key={topic} className="mx-3 h-10 w-10"/>)

      }
      else if (topic === "github") {

            setTopicIcons(<SiGithub key={topic} className="mx-3 h-10 w-10"/>)
      }
      else if (topic === "heroku") {

            setTopicIcons(<SiHeroku key={topic} className="mx-3 h-10 w-10"/>)
      }
      else if (topic === "nextjs") {

            setTopicIcons(<SiNextdotjs key={topic} className="mx-3 h-10 w-10"/>)
      }
      else if (topic === "react") {

            setTopicIcons(<FaReact key={topic} className="mx-3 h-10 w-10"/>)
      }
      else if (topic === "vercel") {

            setTopicIcons(<SiVercel key={topic} className="mx-3 h-10 w-10"/>)
      }
      else if (topic === "openai") {

            setTopicIcons(<SiOpenai key={topic} className="mx-3 h-10 w-10"/>)
      }
      else if (topic === "typescript") {

            setTopicIcons(<SiTypescript key={topic} className="mx-3 h-10 w-10"/>)
      }
      else if (topic === "js") {

            setTopicIcons(<SiJavascript key={topic} className="mx-3 h-10 w-10"/>)
      }
      else if (topic === "bootstrap") {

            setTopicIcons(<FaBootstrap key={topic} className="mx-3 h-10 w-10"/>)
      }
      else if (topic === "mysql") {

            setTopicIcons(<SiMysql key={topic} className="mx-3 h-10 w-10"/>)
      }
      else if (topic === "expressjs") {

            setTopicIcons(<SiExpress key={topic} className="mx-3 h-10 w-10"/>)
      }
      else if (topic === "nodejs") {

            setTopicIcons(<FaNode key={topic} className="mx-3 h-10 w-10"/>)
      }
      else if (topic === "mongodb") {

            setTopicIcons(<SiMongodb key={topic} className="mx-3 h-10 w-10"/>)
      }
      else if (topic === "tailwindcss") {

            setTopicIcons(<SiTailwindcss key={topic} className="mx-3 h-10 w-10"/>)
      }
      else if (topic === "graphql") {

            setTopicIcons(<SiGraphql key={topic} className="mx-3 h-10 w-10"/>)
        
      }
      else if (topic === "stripe") {

            setTopicIcons(<FaCcStripe key={topic} className="mx-3 h-10 w-10"/>)

      }
      else if (topic === "godaddy") {

            setTopicIcons(<SiGodaddy key={topic} className="mx-3 h-10 w-10"/>)

      }
      else if (topic === "adobeillustrator") {
            setTopicIcons(<SiAdobeillustrator key={topic} className="mx-3 h-10 w-10"/>)
      }
    }, [topic])

  return (
      <>
    {topicIcon}
    </>
  )
}

export default TopicIcons