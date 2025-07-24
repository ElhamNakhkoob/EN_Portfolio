import { createHashRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Skils from "../pages/Skils";
import Contact from "../pages/Contact";
import ProjectOne from "../pages/projects/ProjectOne";
import ProjectTwo from "../pages/projects/ProjectTwo";
import ProjectThree from "../pages/projects/ProjectThree";

const router = createHashRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "skils", element: <Skils /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
      { path: "projects/project-one", element: <ProjectOne /> },
      { path: "projects/project-two", element: <ProjectTwo /> },
      { path: "projects/project-three", element: <ProjectThree /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
