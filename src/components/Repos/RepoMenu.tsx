import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaGithub, FaLink } from "react-icons/fa";
import { ImInfo } from "react-icons/im"; 
import Link from "next/link"

type MenuProps = {
  repoLink: string;
  deployedUrl: string;
  moreInfo: string;
}

export default function RepoMenu({repoLink, deployedUrl, moreInfo}: MenuProps) {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="float-right">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 dark:text-gray-400">
  <path  stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 top-4 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
            <Link href="/"><Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ImInfo
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ImInfo
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    More Info
                  </button>
                )}
              </Menu.Item></Link>
              <Link href={deployedUrl} ><Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <FaLink
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <FaLink
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Deployed Page
                  </button>
                )}
              </Menu.Item></Link>
            </div>
            <div className="px-1 py-1">
            <Link href={repoLink}><Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <FaGithub
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <FaGithub
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    GitHub Repo
                  </button>
                )}
              </Menu.Item></Link>
              </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

