import { Menu, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import { HiDotsHorizontal } from "react-icons/hi"
import { FaGithub, FaLink } from "react-icons/fa";
import { ImInfo } from "react-icons/im"; 
import { BsTrash3Fill } from "react-icons/bs"
import Link from "next/link"
import { AuthContext } from '../Auth/AuthContext'
import Router from "next/router"

type MenuProps = {
  repoLink: string;
  deployedUrl: string;
  moreInfo: string;
}

// moreInfo is a the repo name

export default function RepoMenu({repoLink, deployedUrl, moreInfo}: MenuProps) {
  const { loggedIn } = useContext(AuthContext);

  const deleteRepo = async (e: any) => {
    e.preventDefault();
    const response = await fetch('/api/repos', {
      method: 'DELETE',
      body: JSON.stringify({ moreInfo }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const { message, error } = await response.json()
    if (response.ok) {
      alert(message)
    }else{
      alert(error)
    }
  };

  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="float-right">
          <HiDotsHorizontal className="h-6 w-6 dark:text-gray-400" />
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
            <Link href={`/projects/${moreInfo}`}><Menu.Item>
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

