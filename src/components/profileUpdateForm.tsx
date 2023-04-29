import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';

const ProfileUpdateForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const token = localStorage.getItem('token')
    const body = {
      username,
      password,
      bio,
      profilePhoto,
      token
    };

    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      setMessage('Profile updated successfully!');
    } catch (error) {
      console.error(error);
      setMessage("Error updating profile");
    }
  };

  return (<>
    {message && <p className="text-red-500">{message}</p>}
    <h1 className="text-4xl text-gray-900 dark:text-white">Update Profile</h1>
    <form className="p-4 relative flex flex-col items-center max-w-[400px] w-full" onSubmit={handleSubmit}>
   <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"  type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
    <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" type="text" placeholder="profile photo url" value={profilePhoto} onChange={(e) => setProfilePhoto(e.target.value)}/>
    <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" type="text" placeholder="bio" value={bio} onChange={(e) => setBio(e.target.value)}/>
    <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-violet-500 rounded-lg hover:bg-black dark:hover:bg-gray-800">
      Update
      <FiLogIn className="w-5 h-5 ml-2 -mr-1" />
</button>

    </form>
   </>);
};

export default ProfileUpdateForm;
