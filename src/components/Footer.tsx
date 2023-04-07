import { FaGithub } from "react-icons/fa";
import { ImMail4, ImLinkedin} from "react-icons/im";
import { BsFillChatDotsFill } from "react-icons/bs"
import Link from "next/link"
const Footer: React.FC = () =>{
    return(

<footer className="bg-white dark:bg-gray-900 border-t  border-gray-200 dark:border-gray-700">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">Darren Medrano™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="mailto:medranomiler@gmail.com"><ImMail4 className="h-8 w-8 mx-5"/></Link>
        </li>
        <li>
            <Link href="https://linkedin.com/in/darrenmedrano" ><ImLinkedin className="h-8 w-8 mx-5"/></Link>
        </li>
        <li>
            <Link href="https://github.com/medranomiler"><FaGithub className="h-8 w-8 mx-5"/></Link>
        </li>
        <li>
            <Link href="/build" className="hover:underline"><BsFillChatDotsFill className="h-8 w-8 mx-5"/></Link>
        </li>
    </ul>
    </div>
</footer>

    )
}

export default Footer