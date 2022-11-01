import { Link } from "@remix-run/react";

function RepoLink({ children, to }) {
  return (
    <Link
      className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52 font-mono"
      to={to}
    >
      <p className="text-base leading-4  ">{children}</p>
    </Link>
  );
}

export default RepoLink;
