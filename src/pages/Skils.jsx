import html from "../assets/images/html-5.png";
import css from "../assets/images/text.png";
import js from "../assets/images/java-script.png";
import ts from "../assets/images/typescript.png";
import react from "../assets/images/physics.png";
import bootstrap from "../assets/images/bootstrap.png";
import tailwind from "../assets/images/Untitled.png";
import github from "../assets/images/github(1).png";
import ai from "../assets/images/ai.png";
import next from "../assets/images/next.png";

import node from "../assets/images/node-js.png";
import express from "../assets/images/1646733543.webp";
import mongodb from "../assets/images/mongo.png";
import api from "../assets/images/api.png";
import sql from "../assets/images/sql-server.png";

import figma from "../assets/images/5968705.png";
import uxui from "../assets/images/17109357.png";

const skills = {
  frontend: [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "TypeScript", icon: ts },
    { name: "React - Redux", icon: react },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Tailwind", icon: tailwind },
    { name: "GitHub", icon: github },
    { name: "AI Generative", icon: ai },
    { name: "Next.js", icon: next },
  ],
  backend: [
    { name: "Node JS", icon: node },
    { name: "Express JS", icon: express },
    { name: "MongoDB", icon: mongodb },
    { name: "Restful API", icon: api },
    { name: "SQL", icon: sql },
  ],
  design: [
    { name: "Figma", icon: figma },
    { name: "UX/UI", icon: uxui },
  ],
};

const Skils = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-[#1e1e1e] p-8 mt-10">
      <h1 className="text-3xl font-bold mb-10">My Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold capitalize mb-6 border-b-2 border-[#662809] pb-2 w-full text-center">
              {category}
            </h2>
            <ul className="space-y-4">
              {items.map(({ name, icon }) => (
                <li key={name} className="flex items-center gap-3">
                  <img
                    src={icon}
                    alt={name}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-base">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skils;
