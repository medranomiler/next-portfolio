import { Disclosure, Switch } from '@headlessui/react'
import { useContext, useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Link from "next/link"
import useColorMode from '../../hooks/useColorMode'
import { AuthContext } from './AuthContext'

export default function Navbar() {
  const [colorMode, setColorMode] = useColorMode();
  const { loggedIn, handleLogout } = useContext(AuthContext);

  const [navigation, setNavigation] = useState([
    { name: 'Home', href: '/', current: false },
    { name: 'Contact', href: '/contact', current: false }, 
    { name: 'Login', href: '/login', current: false},
  ]);

  useEffect(() => {
    if (loggedIn) {
      setNavigation(navigation => [
        ...navigation,
        { name: 'Create New Repo', href: '/repos/new', current: false },
        { name: 'Logout', href: '', current: false, onClick: handleLogout },
      ]);
    } else {
      setNavigation(navigation => navigation.slice(0, 3));
    }
  }, [loggedIn]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

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
                  </Link>
                  <Link href="/">
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={item.onClick}
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

              <div className="relative inline-flex items-center mr-2.5">
                <Switch
                  checked={colorMode === 'dark'}
                  onChange={() =>
                    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
                  }
                  className={`${colorMode === 'dark' ? 'bg-violet-500' : 'bg-gray-200'}
      relative inline-flex flex-shrink-0 h-[24px] w-[40px] border-2 border-transparent rounded-full cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Switch between light and dark mode</span>
                  <span
                    aria-hidden="true"
                    className={`${colorMode === 'dark' ? 'translate-x-[16px]' : 'translate-x-[0]'}
        inline-block h-[20px] w-[20px] rounded-full bg-white shadow-md transform transition ease-in-out duration-200`}
                  />
                </Switch>
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
