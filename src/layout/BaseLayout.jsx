import { Outlet } from "react-router-dom";
import MainSideBar from "../components/sidebar/MainSideBar";

export default function BaseLayout() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <MainSideBar />
      <main className="flex-1 overflow-auto p-6 pt-24 md:pt-6 bg-[#302E29]">
        <Outlet />
      </main>
    </div>
  );
}
