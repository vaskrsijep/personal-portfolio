"use client"
import {motion} from 'framer-motion';
import { useState } from 'react';
export default function Button(
  { text }: { text: string },
  { link }: { link: string }
) {
    const [hovered, setHovered] = useState(false);
  return (
    <div className="relative">
      <a
        href={link}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="cursor-pointer px-10 -z-0 inline-block relative overflow-hidden py-5 font-normal rounded-full bg-white text-[#0C0C0C] shadow-[0_1px_10px_rgba(0,0,0,0.1)] shadow-[#323131] uppercase text-xl "
      >
        <div className={`absolute bottom-0 right-0 w-0 h-0 rounded-[50%] transition-all duration-500 ${hovered ? "bg-[#c5fb45] w-[300%] h-[200%] -bottom-10 -right-10" : " bg-[#c5fb45]"}`}/>
        <motion.span className="relative z-10">{text}</motion.span>
      </a>
    </div>
  );
}
