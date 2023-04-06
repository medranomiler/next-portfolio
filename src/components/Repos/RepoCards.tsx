import useFetchGitHubData from "../../hooks/useFetchGitHubData"
import React, { useEffect, useRef } from 'react';
import RepoCard from "./RepoCard";
import SlideIn from "../../hooks/SlideIn"
import { Spinner } from "@chakra-ui/react"

const RepoCards = () =>{
const [repos, loading] = useFetchGitHubData();

return (
<>   
  {(repos.map((repo) => ( 
  <SlideIn key={repo}>
  <RepoCard  repo={repo}/>
  </SlideIn>
  )))}
  </>
)

}

export default RepoCards;





