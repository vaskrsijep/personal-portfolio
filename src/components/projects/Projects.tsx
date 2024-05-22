"use client";
import { ArrowRight } from "lucide-react";
import "./projects.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
import {motion} from 'framer-motion'
export default function Projects() {
  const projects = [
    {
      name: "SolveITX",
      description: "Description 1",
      image: "/solveitx.png",
      url: "https://www.solveitx.com",
    },
    {
      name: "Hutly Estate",
      description: "Description 1",
      image: "/euro-exotics.png",
      url: "https://www.google.com",
    },
    {
      name: "Euro Exotics",
      description: "Description 1",
      image: "/euro-exotics.png",
      url: "https://www.euro-exotics.com",
    },
    {
      name: "Electronic Diary",
      description: "Description 1",
      image: "/euro-exotics.png",
      url: "https://www.google.com",
    },
  ]
  return (
    <div>
      <div className="p-[2em] py-[20em]">
        <div>

        <motion.h1 initial={{opacity: 0, y: 100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}} className="text-6xl flex font-bold uppercase">Just a projects:</motion.h1>
        </div>
        <div>

        </div>
      
      </div>
    </div>
  );
}
