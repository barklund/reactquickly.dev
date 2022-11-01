import { Link } from "@remix-run/react";
import { Button, Tablist } from "~/components";
import { useRepo } from "./_util";
import { FaFlask, FaCloudDownloadAlt, FaFileCode } from "react-icons/fa";

function Info() {
  const repo = useRepo();
  return (
    <>
      <Tablist tabs={repo.tabs} current="info" />
      <section className="p-4">
        <h2 className="text-4xl">
          <code>{repo.id}</code>
        </h2>
        <p className="py-2 text-lg">
          This repository is an example from Chapter {repo.chapter} of{" "}
          <strong>React Quickly, 2nd ed</strong>.
        </p>
        <div className="mt-2 p-4 flex flex-col items-stretch w-max gap-8">
          <Button as={Link} to="../try" Icon={FaFlask}>
            Try it out
          </Button>
          <Button as={Link} to="../browse" Icon={FaFileCode}>
            Browse the files
          </Button>
          <Button
            as={Link}
            to={repo.content}
            target="_blank"
            Icon={FaCloudDownloadAlt}
          >
            Download source code
          </Button>
        </div>
      </section>
    </>
  );
}

export default Info;
