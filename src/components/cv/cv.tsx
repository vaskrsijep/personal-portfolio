"use client";
import Button from "../button/Button";
import { motion } from "framer-motion";
export default function CV() {
  return (
    <div>
      <div className="flex items-center gap-10 justify-center flex-col font-light mx-auto my-0 w-full h-screen relative">
        <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-[#c5fb45] rounded-full blur-[200px]"></div>
        <motion.p initial={{opacity: 0, y: -100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}} className="md:w-3/4 text-center md:px-32 text-3xl leading-relaxed">
          My CV provides a detailed insight into my professional skills,
          projects I have worked on, and the experiences I have gained over the
          years. Download my CV to learn more about my qualifications and past
          achievements.
        </motion.p>
<motion.div initial={{opacity: 0, y: 100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}}>
        <Button link="/projects" color="bg-white" text="Download CV" />
</motion.div>
      </div>
    </div>
  );
}
