import { useRef } from "react";
import "./myexpertise.css";
import { useInView, motion } from "framer-motion";
import { useTranslations } from "next-intl";
export default function MyExpertise() {
  const t = useTranslations("aboutMeSection");
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

  const phrase = t("phrase1");
  const phrase2 = t("phrase2");
  const phrase3 = t("phrase3");
  const phrase4 = t("phrase4");

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
    <div className="flex p-[2em] gap-20 md:flex-row flex-col my-10 py-10  text-black md:max-w-7xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold"
      >
        {t("heading")}
      </motion.p>
      <div className="">
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
