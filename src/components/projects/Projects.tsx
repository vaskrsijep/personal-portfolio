"use client";
import { ArrowRight, ArrowUpRight, ArrowUpRightIcon } from "lucide-react";
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

  return (
    <main
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className=" flex items-start flex-col py-10"
    >
      <div>
        <h1 className="md:text-8xl text-5xl sm:py-20 sm:px-20 py-10 px-10 font-bold">My projects</h1>
      </div>
      <div className="w-full flex flex-col items-center justify-center mb-24">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.name}
              manageModal={manageModal}
              key={index}
              tip={project.services}
              link={project.url}
              text={project.description}
            />
          );
        })}
      </div>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="h-[300px] w-[500px] fixed top-[50%] left-[50%] bg-white pointer-events-none overflow-hidden z-0 rounded-[30px]"
        >
          <div
            style={{ top: index * -100 + "%" }}
            className="w-full h-full relative transition-top duration-500 ease-out"
          >
            {projects.map((project, index) => {
              const { thumb, classLists } = project;
              return (
                <div
                  className="h-full w-full flex items-center justify-center relative"
                  style={{ backgroundColor: classLists }}
                  key={`modal_${index}`}
                >
                  <Image
                    src={`/images${thumb}`}
                    width={1300}
                    height={1200}
                    alt="image"
                    className="h-full w-full absolute top-0 right-0 left-0 bottom-0"
                  />
                </div>
              );
            })}
          </div>
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
              <Link href="/projects/" className="z-10">View all projects</Link>
            </RoundedButton>
        </div>
      </>
    </main>
  );
}
