import RepoMenu from "./RepoMenu";
import TopicIcons from "./TopicIcons"



const RepoCard = ({ repo }) => {


  return (
    <>

<div className="w-80 h-96 m-8 p-4 flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
    <RepoMenu repoLink={repo.html_url} deployedUrl={repo.deployedUrl} moreInfo={repo.name} />
  <div className="h-1/4 flex items-center justify-center ">
      <p className="text-center py-2 text-4xl font-bold dark:text-gray-400">{repo.name}</p>
  </div>
    <div className="h-1/2 flex items-start">
    <p className="m-4 font-light text-sm text-gray-700 dark:text-gray-400">{repo.description}</p>
    </div>
    <div className="h-1/4 flex justify-center items-start flex-wrap dark:text-gray-400">
          {repo.topics.map((topic) => {
            return <TopicIcons topic={topic} />
          })}
            </div>
</div>
</>
  )
};


export default RepoCard;

