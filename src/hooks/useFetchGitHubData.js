import { useState, useEffect } from "react";

function useFetchGitHubData() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      const url = "https://api.github.com/users/medranomiler/repos";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setRepos([
        data[0],
        data[9],
        data[19],
        data[14],
        data[3],
        data[4],
        data[12],
        data[18],
      ]);
      setLoading(false);
    }

    fetchGitHubData();
  }, []);

  return [repos, loading];
}

export default useFetchGitHubData;
