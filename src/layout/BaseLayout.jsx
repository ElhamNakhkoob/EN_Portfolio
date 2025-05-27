import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function BaseLayout() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6 md:pt-6 bg-[#302E29]">
        <Outlet />
      </main>
    </div>
  );
}
