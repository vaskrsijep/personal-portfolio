"use client";
import { ArrowRight, ArrowUpRight, ArrowUpRightIcon, LayoutGrid, List } from "lucide-react";
import "./projects.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../button/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/constants";
import gsap from "gsap";
import RoundedButton from "../button/Button";
import Project from "../Project";
import ProjectGrid from "./ProjectGrid";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Projects() {
  const useNaavigation = usePathname();
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  console.log(useNaavigation);

  const [hovered, setHovered] = useState(-1);

  // const [active, setActive] = useState(0);

  
  const container = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  let xMoveContainer = useRef<any>(null);
  let yMoveContainer = useRef<any>(null);
  let xMoveCursor = useRef<any>(null);
  let yMoveCursor = useRef<any>(null);
  let xMoveCursorLabel = useRef<any>(null);
  let yMoveCursorLabel = useRef<any>(null);
  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x: number, y: number) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (
    active: boolean,
    index: number,
    x: number,
    y: number
  ) => {
    moveItems(x, y);
    setModal({ active, index });
  };


  const sortedProjects = [...projects].sort(
    (a, b) => Number(b.year) - Number(a.year)
  );

  const getImagePath = (projectUrl: string, imageName: string) => {
    const placeholderProjects = [
      "maximonrealestate",
      "montat",
      "lawyertemplate",
      "peakitx",
      "panicdigital",
      "vunaperestoran",
      "nadatorte",
      "pekaramiki",
      "frizerskisaloniliev",
      "forestrywebsite",
      "salonauta",
      "nopanicanalysis"
    ];
    
    if (placeholderProjects.includes(projectUrl)) {
      return `/images/solveitx/${imageName}`;
    }
    
    return `/images/${projectUrl}/${imageName}`;
  };

  const displayProjects = useNaavigation === "/projects" 
    ? sortedProjects 
    : sortedProjects.slice(0, 3);

  return (
    <main
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className=" flex items-start flex-col pb-20 "
    >
      <div className="w-full flex items-center justify-between sm:px-20 px-5 sm:py-32 py-10">
        <h1 className="md:text-8xl text-5xl font-bold">My projects</h1>
        {useNaavigation === "/projects" && (
          <div className="flex items-center gap-2 bg-white rounded-full p-2 shadow-lg border border-black/5">
            <button
              onClick={() => setViewMode("list")}
              className={`p-3 rounded-full transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-primary text-white"
                  : "text-black/60 hover:bg-black/5"
              }`}
              aria-label="List view"
            >
              <List size={20} />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-3 rounded-full transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-primary text-white"
                  : "text-black/60 hover:bg-black/5"
              }`}
              aria-label="Grid view"
            >
              <LayoutGrid size={20} />
            </button>
          </div>
        )}
      </div>
      <div className={`w-full ${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-20" : "flex flex-col items-center justify-center mb-24 cursor-none"}`}>
        {viewMode === "grid" ? (
          displayProjects.map((project, index) => (
            <ProjectGrid
              key={index}
              index={index}
              title={project.name}
              link={project.url}
              text={project.description}
              year={project.year}
              imageUrl={getImagePath(project.url, project.gallery[0] || "mobile1.png")}
            />
          ))
        ) : (
          displayProjects.map((project, index) => (
            <Project
              index={index}
              title={project.name}
              manageModal={manageModal}
              key={index}
              tip={project.services}
              link={project.url}
              text={project.description}
              year={project.year}
            />
          ))
        )}
      </div>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className=" fixed top-[50%] left-[50%] bg-white pointer-events-none overflow-hidden z-0 rounded-[30px]"
        >

        </motion.div>
        <motion.div
          ref={cursor}
          className="w-[80px] h-[80px] bg-black/90 text-white fixed z-0 flex items-center justify-center text-xl font-thin pointer-events-none rounded-full"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className="w-[80px] h-[80px] bg-black/90 text-white fixed z-0 flex items-center justify-center text-xl pointer-events-none rounded-full"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          <ArrowUpRight size={20} />
        </motion.div>
        <div className="w-full flex items-center justify-center">
            <RoundedButton>
              <Link href="/projects" className="z-10 text-2xl uppercase font-medium">View all projects <sup>({projects.length})</sup></Link>
            </RoundedButton>
        </div>
      </>
    </main>
  );
}
