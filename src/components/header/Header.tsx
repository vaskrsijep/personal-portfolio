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
      <div className="absolute top-0 left-[50%] bg-white md:px-5 md:py-3 py-2 px-4 translate-x-[-50%] rounded-b-3xl shadow-white shadow-[0_0px_10px_rgba(0,0,0,0.1)]">
        <h2 className="text-black md:font-thin uppercase md:text-xl text-sm">
        Located in Serbia.
        </h2>
      </div>
      <motion.div className="flex items-center justify-center flex-col w-full h-screen gap-5">
        {/* <h1 className="md:text-9xl font-bold leading-loose">VASKRSIJE PANIC</h1>
         */}
        <div className="flex items-center justify-between md:gap-5 gap-1 font-bold text-5xl md:text-9xl scaleAnim">
          <motion.span initial={{opacity: 0, y: -100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}}>V</motion.span>
          <motion.span initial={{opacity: 0, y: -100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}}>A</motion.span>
          <motion.span initial={{opacity: 0, y: -100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}}>S</motion.span>
          <motion.span initial={{opacity: 0, y: -100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}}>K</motion.span>
          <motion.span initial={{opacity: 0, y: -100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}}>R</motion.span>
          <motion.span initial={{opacity: 0, y: -100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}}>S</motion.span>
          <motion.span initial={{opacity: 0, y: -100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}}>I</motion.span>
          <motion.span initial={{opacity: 0, y: -100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}}>J</motion.span>
          <motion.span initial={{opacity: 0, y: -100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}}>E</motion.span>
          <span className="mx-2"></span>
          <motion.span initial={{opacity: 0, y: -100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}}>P</motion.span>
          <motion.span initial={{opacity: 0, y: -100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}}>A</motion.span>
          <motion.span initial={{opacity: 0, y: -100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}}>N</motion.span>
          <motion.span initial={{opacity: 0, y: -100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}}>I</motion.span>
          <motion.span initial={{opacity: 0, y: -100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}}>C</motion.span>
        </div>
        <motion.h1 initial={{opacity: 0, y: 50}}  whileInView={{opacity: 1, y:0}} transition={{duration: 1}} className="md:text-6xl text-2xl leading-loose opacity-50 font-thin">
          Software Engineer, Front End & App Developer
        </motion.h1>
        <div className="mt-10">
          <motion.span initial={{opacity: 0}}  whileInView={{opacity: 1}} transition={{duration: 1}} className="">
            <ArrowDown
              onClick={handleScrollClick}
              className="text-[#c5fb45] animate-pulse border border-[#c5fb45] w-10 h-20 rounded-full cursor-pointer"
            />
          </motion.span>
        </div>
      </motion.div>
      <motion.div>
        <motion.div>
          <AboutMe />
        </motion.div>
        <motion.div></motion.div>
      </motion.div>
    </motion.div>
  );
}
