"use client";
import { ArrowRight, ArrowUpRight, ArrowUpRightIcon } from "lucide-react";
import "./projects.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../button/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const projects = [
  {
    name: "SolveITX",
    description: "Description 1",
    image: "solveitx.png",
    url: "solveitx",
    classLists:
      "bg-blue-500 opacity-100 rounded-[5%] shadow-[0_3px_10px_rgba(0,0,0,0.2)] shadow-blue-500",
  },
  {
    name: "Hutly Estate",
    description: "Description 1",
    image: "euroexotics.png",
    url: "hutlyestate",
    classLists:
      "bg-yellow-500 opacity-100 rounded-[5%] shadow-[0_3px_10px_rgba(0,0,0,0.2)] shadow-yellow-500",
  },
  {
    name: "Euro Exotics",
    description: "Description 1",
    image: "euroexotics.png",
    url: "euroexotics",
    classLists:
      "bg-orange-500 opacity-100 rounded-[5%] shadow-[0_3px_10px_rgba(0,0,0,0.2)] shadow-orange-500",
  },
  {
    name: "Electronic Diary",
    description: "Description 1",
    image: "euroexotics.png",
    url: "euroexotics",
    classLists:
      "bg-blue-500 opacity-100 rounded-[5%] shadow-[0_3px_10px_rgba(0,0,0,0.2)] shadow-blue-500",
  },
];

export default function Projects() {
  const useNaavigation = usePathname();

  console.log(useNaavigation);

  const [hovered, setHovered] = useState(-1);

  const [active, setActive] = useState(0);

  
  const container = useRef(null);

  return (
    <div>
      <div className="pt-[10em] pb-[3em]">
        <div>
          {

          useNaavigation !== "/projects" ? (

          projects.slice(0, 3).map((project, index) => {
            return (
              <div key={index}>
                <div className="relative">
                  <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(-1)}
                    className="md:text-6xl text-4xl flex font-bold uppercase md:px-[2em] md:py-10 py-5 px-5 w-full before:w-full before:absolute before:bg-white before:bottom-0 before:left-0 before:h-0 before:transition-all before:duration-200 before:ease-in-out hover:before:h-full hover:before:transition-all hover:before:duration-200 hover:before:ease-in-out hover:text-black before:-z-10 hover:transition-all hover:duration-200 hover:ease-in-out cursor-pointer"
                  >
                    {project.name}
                  </motion.h1>
                  <div
                    className={`absolute top-0 md:right-10 right-5 md:w-[500px] md:h-[300px] w-[200px] h-[150px] rotate-12   ${
                      hovered === index ? project.classLists : "opacity-0"
                    }`}
                  >
                    <Image
                      src={`/images/${project.image}`}
                      alt={project.name}
                      width={1900}
                      height={1000}
                      className="w-full h-full object-cover p-5"
                    />
                  </div>
                </div>
                <div></div>
              </div>
            );
          })
          ) : (
            projects.map((project, index) => {
              return (
                <div key={index}>
                  <div className="relative">
                    <motion.h1
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(-1)}
                      className="md:text-6xl text-4xl flex font-bold uppercase md:px-[2em] md:py-10 py-5 px-5 w-full before:w-full before:absolute before:bg-white before:bottom-0 before:left-0 before:h-0 before:transition-all before:duration-200 before:ease-in-out hover:before:h-full hover:before:transition-all hover:before:duration-200 hover:before:ease-in-out hover:text-black before:-z-10 hover:transition-all hover:duration-200 hover:ease-in-out cursor-pointer"
                    >
                      {project.name}
                    </motion.h1>
                    <div
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(-1)}
                      className={`absolute top-0 md:right-10 right-5 md:w-[500px] md:h-[300px] w-[200px] h-[150px] rotate-12   ${
                        hovered === index ? project.classLists : "opacity-0"
                      }`}
                    >
                      <Link href={`/projects/${project.url}`}>
                      <ArrowUpRightIcon className="w-20 h-20 absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] bg-black rounded-full p-5" />
                      </Link>
                      <Image
                        src={`/images/${project.image}`}
                        alt={project.name}
                        width={1900}
                        height={1000}
                        className="w-full h-full object-cover p-5"
                      />
                    </div>
                  </div>
                  <div></div>
                </div>
              );
            })
          )
        }
        </div>
        {useNaavigation !== "/projects" ? (
          <div className="flex justify-center py-10">
            <Button
              link="/projects"
              color="bg-white"
              text="View All Projects"
            />
          </div>
        ) : null}
        <div></div>
      </div>
    </div>
  );
}
