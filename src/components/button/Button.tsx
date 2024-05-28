"use client";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Button({
  text,
  link,
  color,
}: {
  text: string;
  link: string;
  color: string;
}) {
  //   { link }: { link: string },
  //   { color }: { color: string }
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative">
      <a
        href={link}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`cursor-pointer px-10 -z-0 relative  py-5 font-normal rounded-full ${color}  uppercase text-xl `}
      >
        <motion.span className="relative z-10 text-white">{text}</motion.span>
      </a>
        <div
          className={` ${
            hovered
              ? "absolute bottom-[0%] w-20 h-full -right-20  transition-all duration-500 rounded-full"
              : "absolute bottom-[0%] w-20 h-full -right-0  transition-all duration-500 rounded-full"
          }`}
        />
    </div>
  );
}
