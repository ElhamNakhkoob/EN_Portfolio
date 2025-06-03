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
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Skills</h1>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-semibold mb-4 capitalize text-center sm:text-left">
            {category}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {items.map(({ name, icon }) => (
              <div
                key={name}
                className="flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={icon}
                  alt={name}
                  className="w-12 h-12 mb-2 object-contain"
                />
                <p className="text-sm text-center">{name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skils;
