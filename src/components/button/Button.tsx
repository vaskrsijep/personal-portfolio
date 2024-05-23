"use client"
import {motion} from 'framer-motion';
import { useState } from 'react';
export default function Button(
  { text, link, color }: { text: string, link: string, color: string },
//   { link }: { link: string },
//   { color }: { color: string }
)
{
    const [hovered, setHovered] = useState(false);
  return (
    <div className="relative">
      <a
        href={link}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`cursor-pointer px-10 -z-0 inline-block relative overflow-hidden py-5 font-normal rounded-full ${color} text-[#0C0C0C] shadow-[0_1px_10px_rgba(0,0,0,0.1)] shadow-[#323131] uppercase text-xl `
  }>
        <div className={`absolute bottom-[0%] right-0 w-full h-0  transition-all duration-500 ${hovered ? "bg-[#c5fb45] w-full h-full bottom-0 right-0" : " bg-[#c5fb45]"}`}/>
        <motion.span className="relative z-10">{text}</motion.span>
      </a>
    </div>
  );
}
