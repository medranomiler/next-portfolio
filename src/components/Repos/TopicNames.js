import { useState, useEffect} from 'react'

const Topics = ({topic}) => {
    const [topicNames, setTopicNames] = useState(null)

    useEffect(() => {
        if (topic === "chakra-ui") {

              setTopicNames(<li key={topic} className="font-light">Chakra UI</li>)
            
          }
          else if (topic === "github") {

              setTopicNames(<li key={topic} className="font-light">GitHub Pages</li>)
            
          }
          else if (topic === "heroku") {

              setTopicNames(<li key={topic} className="font-light">Heroku</li>)
        
          }
          else if (topic === "nextjs") {

              setTopicNames(<li key={topic} className="font-light">Next.JS</li>)
        
          }
          else if (topic === "react") {

              setTopicNames(<li key={topic} className="font-light">React</li>)
        
          }
          else if (topic === "vercel") {

              setTopicNames(<li key={topic} className="font-light">Vercel</li>)
        
          }
          else if (topic === "openai") {

              setTopicNames(<li key={topic} className="font-light">OpenAI</li>)
        
          }
          else if (topic === "typescript") {

              setTopicNames(<li key={topic} className="font-light">TypeScript</li>)
        
          }
          else if (topic === "js") {

              setTopicNames(<li key={topic} className="font-light">JavaScript</li>)
        
          }
          else if (topic === "bootstrap") {

              setTopicNames(<li key={topic} className="font-light">Bootstrap CSS</li>)
        
          }
          else if (topic === "mysql") {

              setTopicNames(<li key={topic} className="font-light">MySQL</li>)
        
          }
          else if (topic === "expressjs") {

              setTopicNames(<li key={topic} className="font-light">Express.JS</li>)
        
          }
          else if (topic === "nodejs") {

              setTopicNames(<li key={topic} className="font-light">Node.JS</li>)
        
          }
          else if (topic === "mongodb") {

              setTopicNames(<li key={topic} className="font-light">MongoDB</li>)
        
          }
          else if (topic === "tailwindcss") {

              setTopicNames(<li key={topic} className="font-light">Tailwind CSS</li>)
        
          }
          else if (topic === "graphql") {

              setTopicNames(<li key={topic} className="font-light">GraphQL</li>)
        
          }
          else if (topic === "stripe") {

              setTopicNames(<li key={topic} className="font-light">Stripe</li>)
        
          }
          else if (topic === "godaddy") {

              setTopicNames(<li key={topic} className="font-light">GoDaddy</li>)
        
          }
          else if (topic === "adobeillustrator") {

              setTopicNames(<li key={topic} className="font-light">Adobe Illustrator</li>)
        
          }
        }, [topic])

return(
    <>
    {topicNames}
    </>
)
}

export default Topics