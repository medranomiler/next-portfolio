import { useState, useEffect } from "react";

function useFetchProfile() {
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");


useEffect(() => {
  async function fetchProfileData() {
    const token = localStorage.getItem('token')
    const response = await fetch('/api/profile',{
    method: 'POST',
    body: JSON.stringify({ token }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if(response.ok){
    const data = await response.json();
    setUsername(data.username);
    setBio(data.bio)
    setProfilePhoto(data.profilePhoto);
  }
}
  fetchProfileData();
}, [])

  return [username, bio, profilePhoto]
}

export default useFetchProfile;
