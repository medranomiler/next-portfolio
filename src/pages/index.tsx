import ProfileCard from "../components/ProfileCard";
import RepoCards from "../components/Repos/RepoCards";
import Collabs from "../components/Collabs"
import dynamic from "next/dynamic"
import { useState, useMemo, SetStateAction } from "react";
import { Tab } from "@headlessui/react"


const Portfolio = () => {
  const [projects, setProjects] = useState("personal");

  const repoCards = useMemo(() => {
    return <RepoCards />;
  }, []);
  const collabs = useMemo(() => {
    return <Collabs />;
  }, []);

  function projectHandler(type: SetStateAction<string>) {
    setProjects(type);
  }

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  const categories = ["Personal", "Collaborations"]

  return (
    <>
      <div className="min-h-screen md:p-6 p-0 dark:bg-gray-950">
        <div className="flex justify-center h-1/3 flex-wrap">
          <ProfileCard />
        </div>
        <div className="h-1/3">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold dark:text-gray-400 p-4">Portfolio</h2>
        </div>
    <Tab.Group>
    <div className="flex justify-center w-full px-2.5 py-4 sm:px-0">
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 dark:bg-gray-800 p-1">
        {(categories).map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 px-4 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            {category}
          </Tab>
        ))}
      </Tab.List>
      </div>
      <Tab.Panels className="mt-2">
          <Tab.Panel className="flex flex-wrap justify-center">
            {repoCards}
          </Tab.Panel>
          <Tab.Panel className="flex flex-wrap justify-center">
            {collabs}
          </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>

    <div className="h-1/3">
        <div className="flex flex-wrap justify-center h-1/2">
        </div>
        </div>
      </div>
    </>
  );
};

export default dynamic (() => Promise.resolve(Portfolio), {ssr: false})
