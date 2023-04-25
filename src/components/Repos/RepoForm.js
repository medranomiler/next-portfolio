import { useState } from "react"
import Router, { useRouter } from "next/router"
import useFetchRepos from "../../../hooks/useFetchRepos"
import { RxUpdate } from "react-icons/rx" 
import { MdPublish } from "react-icons/md"

const topicsArray = ["vercel", "nextjs", "github", "mongodb", "tailwindcss", "mysql", "expressjs", "nodejs", "chakra-ui", "heroku", "react", "openai", "typescript", "js", "bootstrap", "graphql", "stripe", "godaddy", "adobeillustrator"]

const RepoForm = () =>{
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [topics, setTopics] = useState([]);
    const [html_url, setHtml_url] = useState('')
    const [image, setImage] = useState('')
    const [deployedUrl, setDeployedUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedRepo, setSelectedRepo] = useState('')
    const [ repoData ] = useFetchRepos()
    const router = useRouter()

    const handleTopicChange = (event) => {
      const { value, checked } = event.target;
      if (checked) {
        setTopics((prevTopics) => [...prevTopics, value]);
      } else {
        setTopics((prevTopics) => prevTopics.filter((topic) => topic !== value));
      }
    };

    const handleRepoChange = (e) => {
      setSelectedRepo(e.target.value)
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        setLoading(true)
        const selectedTopics = topics.filter((topic) => topicsArray.includes(topic));
        const response = await fetch('/api/repos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, description, topics: selectedTopics , html_url, image, deployedUrl }),
        });
        const { error } = await response.json()
        
        if(!error){
            setLoading(false)
            Router.push(`/projects/${name}`)
        }
        else {
          setLoading(false)
          setErrorMessage(error);
        }
      };
      
      const handleUpdate = async (e) =>{
        e.preventDefault()
        setLoading(true)
        const selectedTopics = topics.filter((topic) => topicsArray.includes(topic))
        const repoToUpdate = repoData.find((repo) => repo.name === selectedRepo)
        const updatedFields = {}

          updatedFields.name = selectedRepo
        
        if (description !== repoToUpdate.description && description !== "") {
          updatedFields.description = description
        }
      
        if (selectedTopics !== repoToUpdate.topics && selectedTopics.length > 0) {
          updatedFields.topics = selectedTopics
        }
      
        if (html_url !== repoToUpdate.html_url && html_url !== "") {
          updatedFields.html_url = html_url
        }
      
        if (image !== repoToUpdate.image && image !== "") {
          updatedFields.image = image
        }
      
        if (deployedUrl !== repoToUpdate.deployedUrl && deployedUrl !== "") {
          updatedFields.deployedUrl = deployedUrl
        }

        if (Object.keys(updatedFields).length === 1) {
          setLoading(false)
          setErrorMessage("You must make at least one change before updating the project.")
          return
        }
      
        const response = await fetch(`/api/repos/`, {
          method: "PUT",
          headers: { "Content-Type" : "application/json" },
          body: JSON.stringify(updatedFields),
        })
      
        const { message, error } = await response.json()
      
        if (response.ok) {
          setLoading(false)
          alert(message)
          Router.push(`/projects/${selectedRepo}`)
        } else {
          setLoading(false)
          setErrorMessage(error);
        }
      }

return(<>
{router.pathname === "/projects/new" ?
(<>
    <h1 className="text-4xl text-gray-900 dark:text-white">Create A Project</h1>
        <form className="p-4 relative flex flex-col items-center md:w-1/3 lg:w-1/2 w-full"
        onSubmit={handleCreate}>

                <input type="text" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input type="text" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"  placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <div className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500">
            <label className="text-gray-500">top four technologies</label>
            <div className="w-full flex flex-wrap">
      {topicsArray.map((topic) => (
          <div key={topic} className="p-2">
            <input
              type="checkbox"
              id={topic}
              name={topic}
              value={topic}
              checked={topics.includes(topic)}
              onChange={handleTopicChange}
              className="mr-2 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor={topic}>{topic}</label>
          </div>
        ))}
        </div>
        </div>
            <input type="text" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" placeholder="repo url"
            value={html_url}
            onChange={(e) => setHtml_url(e.target.value)}
            />
            <input type="text" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" placeholder="image url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
            <input type="text" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" placeholder="deployed url"
            value={deployedUrl}
            onChange={(e) => setDeployedUrl(e.target.value)}
            />    
               {loading ? (<button disabled type="button" className="py-2.5 px-5 mt-4 sm:mt-6 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
              <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
              </svg>
              Loading...
            </button>) : <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-violet-500 rounded-lg hover:bg-black dark:hover:bg-gray-800"><MdPublish className="w-4 h-4 mr-2 -ml-1 text-white" />
       Create Project
   </button>}
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </>) : (
            <>
            <h1 className="text-4xl text-gray-900 dark:text-white">Update A Project</h1>
        <form className="p-4 relative flex flex-col items-center md:w-1/3 lg:w-1/2 w-full"
        onSubmit={handleUpdate}>
    <select className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" onChange={handleRepoChange}>
    {(repoData.map((repo) => (
          <option key={repo.name}>{repo.name}</option>
        )))}
    </select>
            <input type="text" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"  placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <div className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500">
            <label className="text-gray-500">top four technologies</label>
            <div className="w-full flex flex-wrap">
      {topicsArray.map((topic) => (
          <div key={topic} className="p-2">
            <input
              type="checkbox"
              id={topic}
              name={topic}
              value={topic}
              checked={topics.includes(topic)}
              onChange={handleTopicChange}
              className="mr-2 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor={topic}>{topic}</label>
          </div>
        ))}
        </div>
        </div>
            <input type="text" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" placeholder="repo url"
            value={html_url}
            onChange={(e) => setHtml_url(e.target.value)}
            />
            <input type="text" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" placeholder="image url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
            <input type="text" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" placeholder="deployed url"
            value={deployedUrl}
            onChange={(e) => setDeployedUrl(e.target.value)}
            />    
               {loading ? (<button disabled type="button" className="py-2.5 px-5 mt-4 sm:mt-6 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
              <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
              </svg>
              Loading...
            </button>) : <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-violet-500 rounded-lg hover:bg-black dark:hover:bg-gray-800">
            <RxUpdate className="w-4 h-4 mr-2 -ml-1 text-white" />
       Update Project
   </button>}
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </>
        )}     
        </>)
}

export default RepoForm
