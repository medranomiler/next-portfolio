import RepoCard from "./RepoCard"
import useFetchRepos from "../../../hooks/useFetchRepos";

const RepoCards = () =>{

  const [ repoData ] = useFetchRepos()
  const personalRepos = repoData.filter(repo => !["devstr", "jate", "space-defence"].includes(repo.name))


  return (
    <>   
      {(personalRepos.map((repo) => ( 
        <RepoCard key={repo.name} repo={repo}/>
      )))}
    </>
  );
};

export default RepoCards;






