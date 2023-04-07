import ProfileCard from "../components/ProfileCard";
import RepoCards from "../components/Repos/RepoCards";
import Collabs from "../components/Collabs"
import dynamic from "next/dynamic"
import { useState, useMemo, SetStateAction } from "react";

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

  return (
    <>
      <div className="min-h-screen md:p-6 p-0 dark:bg-gray-900">
        <div className="flex justify-center h-1/3 flex-wrap">
          <ProfileCard />
        </div>
        <div className="h-1/3">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold dark:text-gray-400 p-4">Portfolio</h2>
        <div className="flex">
          <h3 className={`cursor-pointer lg:text-4xl md:text-3xl text-2xl font-light mr-10 dark:text-gray-400 p-4 ${projects === "personal" && "text-blue-500 dark:text-blue-500"}`} onClick={() => projectHandler("personal")}>Personal</h3>
          <h3 className={`cursor-pointer lg:text-4xl md:text-3xl text-2xl font-light  dark:text-gray-400 p-4 ${projects === "collabs" && "text-blue-500 dark:text-blue-500"}`} onClick={() => projectHandler("collabs")}>Collaborations</h3>
        </div>
        </div>
        <div className="h-1/3">
        <div className="flex flex-wrap justify-center h-1/2">
          {projects === "personal" && repoCards}
          {projects === "collabs" && collabs}
        </div>
        </div>
      </div>
    </>
  );
};

export default dynamic (() => Promise.resolve(Portfolio), {ssr: false})