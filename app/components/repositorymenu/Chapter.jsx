import { Link } from "@remix-run/react";
import cx from "classnames";
import { useState } from "react";
import RepoLink from "./RepoLink";

function Chapter({ id, name, repositories, initiallyOpen = false }) {
  const [isExpanded, setExpanded] = useState(initiallyOpen);
  return (
    <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
      <Link
        to={`/browse/${id}`}
        onClick={() => setExpanded((v) => !v)}
        className="focus:outline-none focus:text-indigo-400 text-left  text-white flex justify-between items-center w-full py-5 space-x-14  "
      >
        <p className="text-sm leading-5  uppercase">{name}</p>
        <svg
          className={cx("transform", { "rotate-180": !isExpanded })}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 15L12 9L6 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <section
        className={cx(
          "flex justify-start flex-col w-full md:w-auto items-start pb-1 ",
          { hidden: !isExpanded }
        )}
      >
        {repositories.map((repo) => (
          <RepoLink key={repo} to={`/browse/${id}/${repo}/info`}>
            {repo}
          </RepoLink>
        ))}
      </section>
    </div>
  );
}

export default Chapter;
