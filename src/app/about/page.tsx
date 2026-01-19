"use client";
import { useState } from "react";
import { delay, motion } from "framer-motion";
import Contact from "@/components/contact/Contact";
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations("aboutPage");

    const containerVariants = {
        hidden: {
            opacity: 1
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 2,
                delayChildren: 4
            },
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0,
        }
    }

    const [hovered, setHovered] = useState(false);
    const [hoveredSkills, setHoveredSkills] = useState(false);
    const [experienceHovered, setExperienceHovered] = useState(false);
    const [educationHovered, setEducationHovered] = useState(false);

    const backendList = ["NodeJS", "ExpressJS", "Django", "FastAPI", "GraphQL", "PostgreSQL", "MongoDB", "Python", "Flask", "PHP", "Java", "ArangoDB", ];
    const frontendList = ["ReactJS", "NextJS", "Tailwind CSS", "Bootstrap", "Material UI", "Chakra UI", "VueJS", "NuxtJS", "ViteJS", ];
    const softSkills = ["Problem Solving", "Technical documentation", "Slack", "Agile", "Teamwork", "Time management", "Task management", "Testing and validation", "Code review", "Astah", "Jira", "Photoshop", "Figma", "Adobe XD", "After Effects", "Vegas Pro", "Cinema 4D", "Git" ];
    const inProgressLists = ["Improving English Proficiency", "Enhancing UX/UI Design Skills", "Blockchain technology fundamentals" ];

    return (
        <div>
            <div className="w-full flex items-center justify-center py-32">
                <h1 className="md:text-9xl text-5xl font-bold uppercase">
                    {t("title")}
                </h1>
            </div>

            <div className="w-10/12 mx-auto flex items-start justify-start gap-10 flex-col">
                <h1 className="text-5xl">
                    {t("introHi")} <span className="text-primary font-bold">Vaskrsije</span>. <span className="animate-pulse">
                    👋</span>
                </h1>
                <p className="md:text-5xl text-3xl md:font-normal font-thin">
                    {t("introRole")}
                </p>
                <p className="md:text-5xl text-3xl md:font-normal font-thin">
                    {t("introLocation")}
                </p>
            </div>

            <div className="w-10/12 mx-auto flex items-start justify-start gap-10 flex-col py-20">
                <div className="w-full flex items-center justify-between gap-10 relative">

                <h1 className="md:text-6xl text-4xl font-bold cursor-pointer uppercase" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    {t("biographyHeading")} 
                </h1>
                <span className="w-full h-1 bg-primary relative">
                    <span className={` w-10 h-10 bg-primary absolute left-[0%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full transition-all duration-500 ease-in-out  ` + (hovered ? 'left-[100%] top-[50%] translate-x-[-50%] translate-y-[-50%]' : 'left-[0%] top-[50%] translate-x-[-50%] translate-y-[-50%]') }>

                    </span>
                </span>
                </div>
                <p className="text-2xl font-thin  md:text-3xl leading-snug">
                    {t("biographyP1")}
                </p>
                <p className="text-2xl font-thin md:text-3xl leading-snug">
                    {t("biographyP2")}
                </p>

                <div className="w-full flex items-center justify-between gap-10 relative pt-10">

                <h1 className="md:text-6xl text-4xl font-bold cursor-pointer uppercase" onMouseEnter={() => setEducationHovered(true)} onMouseLeave={() => setEducationHovered(false)}>
                    {t("educationHeading")} 
                </h1>
                <span className="w-full h-1 bg-primary relative">
                    <span className={` w-10 h-10 bg-primary absolute left-[0%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full transition-all duration-500 ease-in-out  ` + (educationHovered ? 'left-[100%] top-[50%] translate-x-[-50%] translate-y-[-50%]' : 'left-[0%] top-[50%] translate-x-[-50%] translate-y-[-50%]') }>

                    </span>
                </span>
                </div>

                <div>
                <p className="text-2xl font-thin  md:text-3xl leading-snug flex gap-2">
                {t("education1")} <sup className="text-sm"> {t("education1Years")}</sup>
                </p>
                </div>
                <div className="border-[#444] border w-full h-[1px]"  />
                <div>
                <p className="text-2xl font-thin  md:text-3xl leading-snug flex gap-2">
                {t("education2")} <sup className="text-sm"> {t("education2Years")}</sup>
                </p>
                </div>

                <div className="w-full flex items-center justify-between gap-10 relative pt-10">

                <h1 className="md:text-6xl text-4xl font-bold cursor-pointer uppercase" onMouseEnter={() => setExperienceHovered(true)} onMouseLeave={() => setExperienceHovered(false)}>
                    {t("experienceHeading")} 
                </h1>
                <span className="w-full h-1 bg-primary relative">
                    <span className={` w-10 h-10 bg-primary absolute left-[0%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full transition-all duration-500 ease-in-out  ` + (experienceHovered ? 'left-[100%] top-[50%] translate-x-[-50%] translate-y-[-50%]' : 'left-[0%] top-[50%] translate-x-[-50%] translate-y-[-50%]') }>

                    </span>
                </span>
                </div>

                <div>
                <p className="text-2xl font-thin  md:text-3xl leading-snug flex flex-col gap-1">
                  <span className="font-medium">{t("experience1")}</span>
                  <span className="text-lg md:text-xl text-black/70">{t("experience1Role")} - {t("experience1Location")}</span>
                  <sup className="text-sm"> {t("experience1Years")}</sup>
                </p>
                </div>
                <div className="border-[#444] border w-full h-[1px]"  />
                <div>
                <p className="text-2xl font-thin  md:text-3xl leading-snug flex flex-col gap-1">
                  <span className="font-medium">{t("experience2")}</span>
                  <span className="text-lg md:text-xl text-black/70">{t("experience2Role")}</span>
                  <sup className="text-sm"> {t("experience2Years")}</sup>
                </p>
                </div>
                <div className="border-[#444] border w-full h-[1px]"  />
                <div>
                <p className="text-2xl font-thin  md:text-3xl leading-snug flex gap-2">
                {t("experience3")} <sup className="text-sm"> {t("experience3Years")}</sup>
                </p>
                </div>
                <div className="border-[#444] border w-full h-[1px]"  />
                <div>
                <p className="text-2xl font-thin  md:text-3xl leading-snug flex gap-2">
                {t("experience4")} <sup className="text-sm"> {t("experience4Years")}</sup>
                </p>
                </div>



                <div className="w-full flex items-center justify-between gap-10 relative pt-10">

                <h1 className="md:text-6xl text-4xl font-bold cursor-pointer uppercase" onMouseEnter={() => setHoveredSkills(true)} onMouseLeave={() => setHoveredSkills(false)}>
                    {t("skillsHeading")} 
                </h1>
                <span className="w-full h-1 bg-primary relative">
                    <span className={` w-10 h-10 bg-primary absolute left-[0%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full transition-all duration-500 ease-in-out  ` + (hoveredSkills ? 'left-[100%] top-[50%] translate-x-[-50%] translate-y-[-50%]' : 'left-[0%] top-[50%] translate-x-[-50%] translate-y-[-50%]') }>

                    </span>
                </span>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10 w-full">
                    <div className="w-full flex items-center justify-center gap-10 flex-col">
                        <h2 className="text-4xl uppercase">
                            Frontend
                        </h2>
                        <motion.div initial="hidden" whileInView={"visible"} variants={containerVariants} className="flex items-center justify-start gap-3 font-thin text-3xl md:w-9/12 flex-wrap">
                            {
                                frontendList.map((item, index) => (
                                    <motion.p variants={itemVariants} initial="hidden" whileInView={"visible"} className="px-10 py-2 border text-secondary border-primary rounded-full" key={index}>
                                        {item}
                                    </motion.p>
                                ))
                            }

                        </motion.div>
                    </div>
                    <div className="w-full flex items-center justify-center gap-10 flex-col">
                    <h2 className="text-4xl uppercase">
                            Backend
                        </h2>
                        <motion.div initial="hidden" whileInView={"visible"  } variants={containerVariants} className="flex items-center justify-start gap-3 font-thin text-3xl md:w-9/12 flex-wrap">
                            {
                                backendList.map((item, index) => (
                                    <motion.p variants={itemVariants} initial="hidden" whileInView={"visible"} className="px-10 py-2 border text-secondary border-primary rounded-full" key={index}>
                                        {item}
                                    </motion.p>
                                ))
                            }

                        </motion.div>
                    </div>
                </div>


                <div className="grid md:grid-cols-2 grid-cols-1 gap-10 w-full pt-10">
                    <div className="w-full flex items-center justify-center gap-10 flex-col">
                        <h2 className="text-4xl uppercase">
                            {t("softSkillsHeading")}
                        </h2>
                        <motion.div initial="hidden" whileInView={"visible"} variants={containerVariants} className="flex items-center justify-start gap-3 font-thin text-3xl md:w-9/12 flex-wrap">
                            {
                                softSkills.map((item, index) => (
                                    <motion.p variants={itemVariants} initial="hidden" whileInView={"visible"} className="px-10 py-2 border text-secondary border-primary rounded-full" key={index}>
                                        {item}
                                    </motion.p>
                                ))
                            }

                        </motion.div>
                    </div>
                    <div className="w-full flex items-center justify-center gap-10 flex-col">
                    <h2 className="text-4xl uppercase">
                            {t("inProgressHeading")}
                        </h2>
                        <motion.div initial="hidden" whileInView={"visible"} variants={containerVariants} className="flex items-center justify-start gap-3 font-thin text-3xl md:w-9/12 flex-wrap">
                            {
                                inProgressLists.map((item, index) => (
                                    <motion.p variants={itemVariants} initial="hidden" whileInView={"visible"} className="px-10 py-2 border text-secondary border-primary rounded-full" key={index}>
                                        {item}
                                    </motion.p>
                                ))
                            }

                        </motion.div>
                    </div>
                </div>
            </div>
        <Contact />
        </div>
    );
}