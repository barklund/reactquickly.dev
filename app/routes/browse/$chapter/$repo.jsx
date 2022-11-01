import { Outlet } from "@remix-run/react";

function Repository() {
  return (
    <section className="h-screen flex flex-col">
      <Outlet />
    </section>
  );
}

export default Repository;
