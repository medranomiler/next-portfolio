import avatar from "../Assets/avatar.png"
import Image from "next/image"
import useFetchProfile from "../../hooks/useFetchProfile"
import { Lato } from "next/font/google"

const lato = Lato({
  weight: ['400' , '700'],
  subsets: [ 'latin']
})


const ProfileCard = () => {
  const [username, bio, profilePhoto] = useFetchProfile()


  return (
    <>
      <div className={`${lato.className} bg-transparent lg:p-10 py-8`}>
        <div className="flex flex-wrap items-center justify-center">
          <img className="w-44 mb-4 lg:mb-0 rounded-full" src={profilePhoto} alt="profileImage" />
          <div className="lg:ml-20 md:ml-30 sm:ml-20  dark:text-gray-400">
            <p className=" lg:text-7xl md:text-5xl text-5xl font-bold">{username}</p>
            <p className="font-light">{bio}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard;