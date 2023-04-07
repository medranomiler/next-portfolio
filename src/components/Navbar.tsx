import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import Link from "next/link"
import Image from "next/image"
import useColorMode from '../../hooks/useColorMode'

type NavItem = {
  name: string;
  href: string;
  current: boolean;
};

const navigation: NavItem[] = [
  { name: 'Home', href: '/', current: false },
  { name: 'Build', href: '/build', current: false }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const testUser = {
  name: "darren",
  balance: "1.00000000",
  userAddress: "xyzAbc123",
  photo: "https://media.licdn.com/dms/image/D5603AQEkZf1CFGufsg/profile-displayphoto-shrink_400_400/0/1678316144656?e=1686182400&v=beta&t=PLUvlQmzZxfuT6Leu1JZdo8cwupI7nuc3wVZDvJRD4o"
}

export default function Navbar() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Disclosure as="nav" className="dark:bg-gray-900 bg:white border-b  border-gray-200 dark:border-gray-700">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    {/* <Image
                    className="block h-8 w-auto lg:hidden dark:invert-[.3]"
                    src="/"
                    alt="Your Company"
                  /> */}
                  </Link>
                  <Link href="/">
                    {/* <Image
                    className="hidden h-8 w-auto lg:block dark:invert-[.3]"
                    src="/"
                    alt="Your Company"
                  /> */}
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'dark:text-slate-50 hover:bg-slate-100 dark:hover:bg-gray-900 dark:hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full dark:bg-gray-900 p-1 text-gray-400 hover:text-black  dark:hover:text-white"
                  onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
                >
                  <span className="sr-only">View notifications</span>
                  {colorMode === "light" ? <MoonIcon className="h-6 w-6" aria-hidden="true" /> : <SunIcon className="h-6 w-6" aria-hidden="true" /> }
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-900 dark:text-gray-400 hover:bg-gray-800 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
