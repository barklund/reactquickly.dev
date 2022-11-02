import { Link } from "@remix-run/react";
import { useMemo } from "react";
import Chapter from "./Chapter";

function RepositoryMenu({ repositories, initiallyOpen = null }) {
  const chapters = useMemo(
    () =>
      Object.keys(repositories).map((id) => ({
        id,
        name: `Chapter ${parseInt(id.slice(2))}`,
        repositories: Object.keys(repositories[id]),
        initiallyOpen: initiallyOpen === id,
      })),
    [repositories]
  );
  return (
    <>
      <div className="max-h-screen overflow-auto xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-gray-900 flex-col shrink-0">
        <div className="hidden xl:flex justify-start p-6 items-center space-x-3">
          <Link to="/" className="text-2xl leading-6 text-white underline">
            ReactQuickly.dev
          </Link>
        </div>
        {chapters.map((chapter) => (
          <Chapter key={chapter.id} {...chapter} />
        ))}
      </div>
    </>
  );
}
export default RepositoryMenu;
