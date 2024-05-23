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
        className="cursor-pointer px-10 -z-0 inline-block relative overflow-hidden py-5 font-normal rounded-full bg-white text-[#0C0C0C] shadow-[0_1px_10px_rgba(0,0,0,0.1)] shadow-[#323131] uppercase text-xl "
      >
        <motion.span className="relative z-10">{text}</motion.span>
      </a>
    </div>
  );
}
