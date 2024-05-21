"use client";
import { useTransform, useViewportScroll, motion } from "framer-motion";
import "./header.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import AboutMe from "../about/AboutMe";
export default function Header() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 0]);
  const y2 = useTransform(scrollY, [0, 500], [0, -700]);

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const headerRef = useRef(null);
  const handleScrollClick = () => {
    gsap.to(headerRef, { scrollTo: 500, duration: 1 });
  };

  return (
    <motion.div ref={headerRef} className="relative">
      <div className="overlay z-0 absolute w-full h-screen opacity-5 overflow-hidden"></div>
      <motion.div className="flex items-center justify-center flex-col w-full h-screen gap-5">
        <h1 className="md:text-9xl font-bold ">VASKRSIJE PANIC</h1>
        <h1 className="md:text-6xl leading-loose ">
          Software Engineer, Front End & App Developer
        </h1>
        <div className="mt-10">
          <span className="">
            <ArrowDown
              onClick={handleScrollClick}
              className="text-[#c5fb45] animate-pulse border border-[#c5fb45] w-10 h-20 rounded-full cursor-pointer"
            />
          </span>
        </div>
      </motion.div>
    <motion.div>
      <motion.div>
        <AboutMe />
      </motion.div>
      <motion.div>

      </motion.div>
    </motion.div>
    </motion.div>
  );
}
