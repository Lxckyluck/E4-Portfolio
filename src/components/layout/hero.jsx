"use client";

import { useRef } from "react";

import { motion } from "framer-motion";
import { heroIconList } from "@/components/layout/hero/heroIconList";

export default function Hero() {
  const constraintsRef = useRef(null);

  const OnClickButtonHero = () => {
    const aboutMeSection = document.getElementById("about-me");
    aboutMeSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={"animate-fade absolute z-40 top-44 mx-auto w-full inset-0"}>
      <div className={"md:flex w-full mx-auto max-w-6xl"}>
        <div className={"text-center max-w-3xl w-full min-h-[150px] my-16"}>
          <h1 className={"text-3xl text-white font-bold md:text-6xl py-2"}>
            Bienvenue sur mon portfolio
          </h1>
          <h1 className={"text-3xl text-white font-bold md:text-6xl"}>
            Je suis{" "}
            <span
              className={
                "bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent"
              }
            >
              Lucas
            </span>{" "}
            DENIS
          </h1>
          <h2 className={"text-sm md:text-xl text-gray-400 my-5"}>
            Étudiant - développeur Junior
          </h2>
          <button
            onClick={OnClickButtonHero}
            className="bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
          >
            <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            À propos de moi
          </button>
        </div>
        <div className={"max-w-3xl w-full block"}>
          <h1 className={"text-center font-bold text-4xl text-white py-4"}>
            mes outils et choix technologiques
          </h1>
          <div>
            <motion.div
              className={
                "w-[350px] h-[300px] md:w-[450px] md:h-[400px] mx-auto rounded-xl grid grid-rows-5 grid-cols-5 overflow-hidden bg-gray-800 rounded-30 shadow-[0_40px_80px_rgba(8,_112,_184,_0.7)]"
              }
              ref={constraintsRef}
            >
              {heroIconList.map((item, index) => (
                <motion.div
                  key={index}
                  className={`${item.style} hover:animate-pulse`}
                  initial={{ x: item.x, y: item.y }}
                  drag
                  dragConstraints={constraintsRef}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
