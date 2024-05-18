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
  const description = useRef(null);
  const isInView = useInView(description);

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
    <div>
      <p className="text-center text-5xl font-bold">My Expertise</p>
      <div className="text-white">
        <div
          ref={description}
          className="flex justify-center md:px-20 md:py-20 py-10 px-5"
        >
          <div className="flex relative gap-50">
            <p className="md:text-5xl text-2xl font-normal">
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
        </div>
      </div>
    </div>
  );
}
