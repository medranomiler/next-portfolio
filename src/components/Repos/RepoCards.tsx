import useFetchGitHubData from "../../hooks/useFetchGitHubData";
import RepoCard from "./RepoCard";

interface Repo {
  id: number,
  name: string;
  description: string;
  topics: string[];
  html_url: string;
}

const RepoCards = () =>{
  const [repos, loading] = useFetchGitHubData();

  return (
    <>   
      {(repos.map((repo: Repo) => ( 
        <RepoCard key={repo.id} repo={repo}/>
      )))}
    </>
  );
};

export default RepoCards;






