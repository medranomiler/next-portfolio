import RepoCard from "./RepoCard"
import useFetchRepos from "../../../hooks/useFetchRepos";

const Personals = () => {

  const [repoData, loading] = useFetchRepos()
  const personalRepos = repoData.length > 0 && repoData.filter(repo => ["personal"].includes(repo.category))


  return (
    <>
      {loading ? (
        <>
          <div role="status" className="w-80 h-96 m-8 p-4 flex-shrink-0 border border-gray-200 rounded-lg shadow animate-pulse md:p-6 dark:border-gray-700 bg-gray-200 dark:bg-gray-900">
            <span class="sr-only">Loading...</span>
          </div>
          <div role="status" className="w-80 h-96 m-8 p-4 flex-shrink-0 border border-gray-200 rounded-lg shadow animate-pulse md:p-6 dark:border-gray-700 bg-gray-200 dark:bg-gray-900">
            <span class="sr-only">Loading...</span>
          </div>
          <div role="status" className="w-80 h-96 m-8 p-4 flex-shrink-0 border border-gray-200 rounded-lg shadow animate-pulse md:p-6 dark:border-gray-700 bg-gray-200 dark:bg-gray-900">
            <span class="sr-only">Loading...</span>
          </div>
          <div role="status" className="w-80 h-96 m-8 p-4 flex-shrink-0 border border-gray-200 rounded-lg shadow animate-pulse md:p-6 dark:border-gray-700 bg-gray-200 dark:bg-gray-900">
            <span class="sr-only">Loading...</span>
          </div>
        </>
      ) : (
        <>
          {personalRepos.length > 0 && (personalRepos.map((repo) => (
            <RepoCard key={repo.name} repo={repo} />
          )))}
        </>
      )
      }
    </>
  )
}

export default Personals;






