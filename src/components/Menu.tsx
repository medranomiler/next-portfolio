import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaGithub } from "react-icons/fa";
import { ImMail4, ImLinkedin} from "react-icons/im"; 
import Link from "next/link"

type MenuProps = {
  label: string;
}

export default function Example({label}: MenuProps) {
  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-violet-500 px-4 py-2 text-sm font-medium text-white hover:bg-black dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {label}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
            <Link href="mailto:medranomiler@gmail.com"><Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ImMail4
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ImMail4
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Email
                  </button>
                )}
              </Menu.Item></Link>
              <Link href="https://linkedin.com/in/darrenmedrano" ><Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ImLinkedin
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ImLinkedin
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    LinkedIn
                  </button>
                )}
              </Menu.Item></Link>
            </div>
            <div className="px-1 py-1">
            <Link href="https://github.com/medranomiler"><Menu.Item>
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
                    GitHub
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

