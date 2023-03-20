import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import styles from "./repos.module.css";


const ActiveRepos = () => {
  const [repos, setRepos] = useState([]);


  useEffect(() => {
    const fetchRepos = async () => {
      const url = "https://api.github.com/users/medranomiler/repos?sort=pushed"
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setRepos(data);
    };
    fetchRepos();
  }, []);


  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Recent Repositories</h1>
      <div className={styles.eventListContainer}>
        <div className={styles.eventList}>
          {repos.length &&
            repos.slice(0, 6).map((repo) => (
              <div key={repo.id} className={styles.event}>
                <div className={styles.eventType}>{repo.name}</div>
                <div className={styles.eventPayload}>{repo.description}</div>
                <div className={styles.details}>
                  <span className={styles.language}>{repo.language}</span>
                  <span className={styles.stars}>
                    {repo.stargazers_count} stars
                  </span>
                  <span className={styles.updated}>
                    Updated on {new Date(repo.pushed_at).toLocaleDateString()}
                  </span>
                </div>
                <div className={styles.buttonContainer}>
                  <Button
                    as="a"
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg={"purple.600"}
                  >
                    visit
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveRepos;
