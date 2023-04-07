import avatar from "../Assets/avatar.png"
import Image from "next/image"
import useFetchGitHubProfile from "../../hooks/useFetchGitHubProfile"



const ProfileCard = () => {
  const [username, bio] = useFetchGitHubProfile()


  return (
    <>
      <div className="bg-transparent lg:p-10 p-8">
        <div className="flex flex-wrap items-center justify-center">
          <Image className="w-40 mb-4 lg:mb-0 rounded-full" src={avatar} alt="profileImage" />
          <div className="lg:ml-20 md:ml-30 sm:ml-20 dark:text-gray-400">
            <p className="lg:text-6xl md:text-5xl text-4xl font-bold">{username}</p>
            <p className="font-light">{bio}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard;