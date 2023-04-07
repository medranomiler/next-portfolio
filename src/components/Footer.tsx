import { FaGithub } from "react-icons/fa";
import { ImMail4, ImLinkedin} from "react-icons/im";
import { BsFillChatDotsFill } from "react-icons/bs"
const Footer: React.FC = () =>{
    return(

<footer className="bg-white dark:bg-gray-800 border-t  border-gray-200 dark:border-gray-700">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Darren Medrano™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="mailto:medranomiler@gmail.com"><ImMail4 className="h-8 w-8 mx-5"/></a>
        </li>
        <li>
            <a href="https://linkedin.com/in/darrenmedrano" ><ImLinkedin className="h-8 w-8 mx-5"/></a>
        </li>
        <li>
            <a href="https://github.com/medranomiler"><FaGithub className="h-8 w-8 mx-5"/></a>
        </li>
        <li>
            <a href="/build" className="hover:underline"><BsFillChatDotsFill className="h-8 w-8 mx-5"/></a>
        </li>
    </ul>
    </div>
</footer>

    )
}

export default Footer