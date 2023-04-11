import RepoCard from "./RepoCard"
import useFetchRepos from "../../../hooks/useFetchRepos";


const Collabs = () => {

    const [ repoData ] = useFetchRepos()
    const collabs = repoData.filter(repo => ["devstr", "jate", "space-defence"].includes(repo.name))

    return (
        <>
            {(collabs.map((repo) => (
                <RepoCard key={repo.name} repo={repo} />
            )))}
        </>
    )
}

export default Collabs;