import ProfileCard from "../components/ProfileCard";
import Personals from "../components/Repos/Personals";
import Collabs from "../components/Repos/Collabs"
import dynamic from "next/dynamic"
import { useMemo } from "react";
import { Tab } from "@headlessui/react"


const Portfolio = () => {

  const personals = useMemo(() => {
    return <Personals />;
  }, []);
  const collabs = useMemo(() => {
    return <Collabs />;
  }, []);


  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  const categories = ["Personal", "Collaborations"]

  return (
    <>
      <div className="min-h-screen md:p-6 p-0 bg-slate-50 dark:bg-gray-950">
        <div className="flex justify-center h-1/3 flex-wrap">
          <ProfileCard />
        </div>
        <div className="h-1/3">
        <h2 className="lg:text-5xl md:text-4xl text-4xl font-bold dark:text-gray-400 text-center md:w-2/3 md:flex md:justify-center">Portfolio</h2>
        </div>
    <Tab.Group>
    <div className="flex justify-center w-full px-2.5 py-4 sm:px-0">
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 dark:bg-gray-800 p-1">
        {(categories).map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 px-4 text-sm font-medium leading-5 text-violet-500',
                'ring-white ring-opacity-60 ring-offset-0 ring-offset-white focus:outline-none focus:ring-0',
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
            {personals}
          </Tab.Panel>
          <Tab.Panel className="flex flex-wrap justify-center">
            {collabs}
          </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
      </div>
    </>
  );
};

export default dynamic (() => Promise.resolve(Portfolio), {ssr: false})
