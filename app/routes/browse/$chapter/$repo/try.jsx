import { Tablist } from "~/components";
import { useRepo } from "./_util";

function Try() {
  const repo = useRepo();
  return (
    <>
      <Tablist tabs={repo.tabs} current="try" />
      <div className="bg-blue-100 h-full flex flex-col">
        <iframe
          className="border-4 border-double border-blue-700 bg-white m-2 flex-grow"
          src={repo.build}
        />
      </div>
    </>
  );
}

export default Try;
