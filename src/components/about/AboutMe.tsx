import { useRef } from "react";
import "./myexpertise.css";
import { useInView, motion } from "framer-motion";
export default function MyExpertise() {
  const MyExpertiseList = [
    {
      name: "Software Development",
      icon: "https://www.svgrepo.com/show/10468/software-developer.svg",
      description:
        "Experienced in both functional and OOP: Python, Java, JavaScript, TypeScript.",
    },
    {
      name: "Frontend Dev, React, NextJS",
      icon: "https://www.svgrepo.com/show/10468/software-developer.svg",
      description:
        "Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
    },
    {
      name: "React Native, Android, iOS",
      icon: "https://www.svgrepo.com/show/10468/software-developer.svg",
      description:
        "Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework.",
    },
  ];

  const phrase = "Hello! I'm a 27-year-old software engineer based in the beautiful city of Novi Sad. With a passion for technology and creativity, I bring innovative ideas to life through both front-end and back-end development as a freelance full-stack developer.";
  const phrase2 = "In addition to my technical skills, I am adept at design and video editing, ensuring a seamless and visually appealing user experience. My diverse skill set allows me to tackle a variety of projects, from building dynamic web applications to crafting engaging multimedia content.";
  const phrase3 = "As a dedicated professional, I am constantly exploring new technologies and methodologies to stay at the forefront of the industry. My goal is to deliver exceptional results that exceed client expectations and make a lasting impact.";
  const phrase4 = "Feel free to browse through my portfolio to see some of the exciting projects I have worked on. I look forward to the opportunity to collaborate and bring your ideas to life!";

  const description = useRef(null);
  const description2 = useRef(null);
  const description3= useRef(null);
  const description4= useRef(null);
  const isInView = useInView(description);
  const isInView2 = useInView(description2);
  const isInView3 = useInView(description3);
  const isInView4 = useInView(description4);

  const slideUpProjects = {
    initial: {
        y: "100%"
    },
    open: (i : number) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.01 * i}
    }),
    closed: {
        y: "100%",
        transition: {duration: 0.5}
    }
}

  return (
    <div className="flex p-[2em] gap-20 md:flex-row flex-col">
      <motion.p initial={{opacity: 0, y: 100}}  whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}} className="text-6xl font-bold">ABOUT ME</motion.p>
      <div className="text-white">
        <div
          className="flex justify-center flex-col gap-20  md:px-5"
        >
          <div ref={description} className="flex relative gap-50">
            <p className="md:text-4xl text-2xl font-thin">
              {phrase?.split(" ").map((word, index) => {
                return (
                  <span
                    key={index}
                    className="relative overflow-hidden inline-flex md:mr-[15px] mr-3 leading-snug"
                  >
                    <motion.span
                      variants={slideUpProjects}
                      custom={index}
                      animate={isInView ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </div>
          <div ref={description2} className="flex relative gap-50">
            <p className="md:text-4xl text-2xl font-thin">
              {phrase2?.split(" ").map((word, index) => {
                return (
                  <span
                    key={index}
                    className="relative overflow-hidden inline-flex md:mr-[15px] mr-3 leading-snug"
                  >
                    <motion.span
                      variants={slideUpProjects}
                      custom={index}
                      animate={isInView2 ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </div>
          <div ref={description3} className="flex relative gap-50">
            <p className="md:text-4xl text-2xl font-thin">
              {phrase3?.split(" ").map((word, index) => {
                return (
                  <span
                    key={index}
                    className="relative overflow-hidden inline-flex md:mr-[15px] mr-3 leading-snug"
                  >
                    <motion.span
                      variants={slideUpProjects}
                      custom={index}
                      animate={isInView3 ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </div>
          <div ref={description4} className="flex relative gap-50">
            <p className="md:text-4xl text-2xl font-thin">
              {phrase4?.split(" ").map((word, index) => {
                return (
                  <span
                    key={index}
                    className="relative overflow-hidden inline-flex md:mr-[15px] mr-3 leading-snug"
                  >
                    <motion.span
                      variants={slideUpProjects}
                      custom={index}
                      animate={isInView4 ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
