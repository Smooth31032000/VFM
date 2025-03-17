import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="container max-w-lg mx-auto">
      <main className="flex flex-col justify-center items-center bg-primary h-screen relative p-7">
        <Outlet />
      </main>
    </div>
  );
}