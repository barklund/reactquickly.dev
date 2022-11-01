import { Link } from "@remix-run/react";
import cx from "classnames";

function Tablist({ tabs, current }) {
  return (
    <nav className="flex flex-col sm:flex-row border-b-2">
      {tabs.map(({ link, label, ...rest }) => (
        <Link
          key={link}
          to={`../${link}`}
          className={cx(
            "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none",
            {
              "text-blue-500 border-b-2 border-blue-500 mb-[-2px]":
                current === link,
            }
          )}
          {...rest}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default Tablist;
