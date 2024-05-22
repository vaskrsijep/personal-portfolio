"use client";
import { ArrowRight } from "lucide-react";
import "./projects.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
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
      <div className="p-[2em]">
        <div>

        <h1 className="text-5xl font-bold uppercase">Just a projects:</h1>
        </div>
        <div>
          
        </div>
      
      </div>
    </div>
  );
}
