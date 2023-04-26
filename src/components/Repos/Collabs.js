import RepoCard from "./RepoCard"
import useFetchRepos from "../../../hooks/useFetchRepos";


const Collabs = () => {

    const [repoData, loading] = useFetchRepos()
    const collabs = repoData.filter(repo => ["devstr", "jate", "space-defence"].includes(repo.name))

    return (
        <>
            {loading ? (<>
                <div role="status" className="w-80 h-96 m-8 p-4 flex-shrink-0 border border-gray-200 rounded-lg shadow animate-pulse md:p-6 dark:border-gray-700 bg-gray-200 dark:bg-gray-900">
                    <span className="sr-only">Loading...</span>
                </div>
                <div role="status" className="w-80 h-96 m-8 p-4 flex-shrink-0 border border-gray-200 rounded-lg shadow animate-pulse md:p-6 dark:border-gray-700 bg-gray-200 dark:bg-gray-900">
                    <span className="sr-only">Loading...</span>
                </div>
                <div role="status" className="w-80 h-96 m-8 p-4 flex-shrink-0 border border-gray-200 rounded-lg shadow animate-pulse md:p-6 dark:border-gray-700 bg-gray-200 dark:bg-gray-900">
                    <span className="sr-only">Loading...</span>
                </div>
            </>
            ) : (
                <>
                    {(collabs.map((repo) => (
                        <RepoCard key={repo.name} repo={repo} />
                    )))}
                </>
            )}
        </>
    )
}

export default Collabs;