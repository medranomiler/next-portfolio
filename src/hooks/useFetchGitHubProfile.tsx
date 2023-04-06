import { useState, useEffect } from "react";

function useFetchGitHubProfile() {
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");


useEffect(() => {
  async function fetchGitHubProfileData() {
    const url = "https://api.github.com/users/medranomiler"
    const response = await fetch(url);
    const data = await response.json();
    setUsername(data.name);
    setBio(data.bio);
  }
  fetchGitHubProfileData();
}, [])

  return [username, bio]
}

export default useFetchGitHubProfile;
