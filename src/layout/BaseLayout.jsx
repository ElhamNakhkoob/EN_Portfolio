import { Outlet } from "react-router-dom";
import TopNavbar from "../components/sidebar/TopNavbar";

export default function BaseLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNavbar />
      <main className="flex-1 p-6 text-[#1e1e1e] bg-gradient-to-tl from-[#E3DBD7] to-white">
        <Outlet />
      </main>
    </div>
  );
}
