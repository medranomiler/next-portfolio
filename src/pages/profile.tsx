import React from 'react';
import ProfileUpdateForm from "../components/profileUpdateForm"

const ProfilePage = () => {
  return (
    <div className="max-w-screen h-screen p-4 py-36 relative flex flex-col items-center bg-slate-50 dark:bg-gray-950">
      <ProfileUpdateForm />
    </div>
  );
};

export default ProfilePage;