import { Link, Outlet, useParams } from "@remix-run/react";

import repositories from "~/config/repositories.json";

function Chapter() {
  const params = useParams();
  return (
    <>
      <section className="h-screen flex flex-col p-4">
        <h1 className="text-4xl mb-4">
          Chapter {parseInt(params.chapter.slice(2, 4), 10)}
        </h1>
        <ol className="flex flex-col gap-4">
          {Object.entries(repositories[params.chapter]).map(([name, info]) => (
            <li key={name} className="flex items-center gap-4 p-2 bg-blue-50">
              <Link
                to={`${name}/info`}
                className="text-xl font-mono flex-grow hover:underline"
              >
                {name}
              </Link>
              <Link to={`${name}/info`} className="hover:underline">
                About
              </Link>
              <Link to={`${name}/try`} className="hover:underline">
                Try
              </Link>
              <Link to={`${name}/browse`} className="hover:underline">
                Browse
              </Link>
              <Link
                target="_blank"
                to={info.content}
                className="hover:underline"
              >
                Download
              </Link>
            </li>
          ))}
        </ol>
      </section>
      <Outlet />
    </>
  );
}

export default Chapter;
