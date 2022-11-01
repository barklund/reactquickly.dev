import { Outlet, useParams } from "@remix-run/react";
import { RepositoryMenu } from "~/components";
import repositories from "~/config/repositories.json";

function Browse() {
  const params = useParams();
  return (
    <main className="h-screen w-screen overflow-hidden flex items-center justify-center">
      <RepositoryMenu
        repositories={repositories}
        initiallyOpen={params.chapter}
      />
      <div className="flex-grow">
        <Outlet />
      </div>
    </main>
  );
}

export default Browse;
