"use client"
import { useState } from "react";

export default function About() {
    const [hovered, setHovered] = useState(false);
    const [hoveredSkills, setHoveredSkills] = useState(false);

    const backendList = ["NodeJS", "ExpressJS", "Django", "FastAPI", "GraphQL", "PostgreSQL", "MongoDB", "Python", "Flask", "PHP", "Java", "ArangoDB", ];

    const frontendList = ["ReactJS", "NextJS", "Tailwind CSS", "Bootstrap", "Material UI", "Chakra UI", "VueJS", "NuxtJS", "ViteJS", ];

    return (
        <div>
            <div className="w-full flex items-center justify-center py-32">
                <h1 className="md:text-9xl text-5xl font-bold uppercase">
                About me
                </h1>
            </div>

            <div className="w-10/12 mx-auto flex items-start justify-start gap-10 flex-col">
                <h1 className="text-5xl">
                    Hi, I am <span className="text-[#c5fb45] font-bold">Vaskrsije</span>. <span className="animate-pulse">
                    👋</span>
                </h1>
                <p className="md:text-5xl text-3xl md:font-normal font-thin">
                    I am a fullstack developer.
                </p>
                <p className="md:text-5xl text-3xl md:font-normal font-thin">
                    I am a 27-year-old software engineer based in the beautiful city of <span className="text-[#c5fb45] font-bold">Novi Sad, Serbia</span>.
                </p>
            </div>

            <div className="w-10/12 mx-auto flex items-start justify-start gap-10 flex-col py-20">
                <div className="w-full flex items-center justify-between gap-10 relative">

                <h1 className="md:text-6xl text-5xl font-bold cursor-pointer uppercase" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    Biography 
                </h1>
                <span className="w-full h-1 bg-[#c5fb45] relative">
                    <span className={` w-10 h-10 bg-[#c5fb45] absolute left-[0%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full transition-all duration-500 ease-in-out  ` + (hovered ? 'left-[100%] top-[50%] translate-x-[-50%] translate-y-[-50%]' : 'left-[0%] top-[50%] translate-x-[-50%] translate-y-[-50%]') }>

                    </span>
                </span>
                </div>
                <p className="text-2xl font-thin text-white/50 md:text-3xl leading-snug">
                A dynamic Full-stack Developer with over 7 years of comprehensive experience in designing, developing, and implementing state-of-the-art software solutions. My track record demonstrates success in optimizing databases, leading end-to-end project development, and smoothly integrating a variety of platforms for optimal functionality. My adeptness encompasses a broad spectrum of programming languages and frameworks, all built upon a robust academic foundation from Singidunum University, where I learned and practiced extensively.
                </p>
                <p className="text-2xl font-thin text-white/50 md:text-3xl leading-snug">
                I genuinely love what I do and work hard to deliver great results every time. I excel in team environments where open communication and mutual respect are valued. Although I primarily work with Next.js, having started with React and then transitioning to Next.js, I bring my best to every project I&apos;m part of.
                </p>


                <div className="w-full flex items-center justify-between gap-10 relative pt-10">

                <h1 className="md:text-6xl text-5xl font-bold cursor-pointer uppercase" onMouseEnter={() => setHoveredSkills(true)} onMouseLeave={() => setHoveredSkills(false)}>
                    Skills 
                </h1>
                <span className="w-full h-1 bg-[#c5fb45] relative">
                    <span className={` w-10 h-10 bg-[#c5fb45] absolute left-[0%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full transition-all duration-500 ease-in-out  ` + (hoveredSkills ? 'left-[100%] top-[50%] translate-x-[-50%] translate-y-[-50%]' : 'left-[0%] top-[50%] translate-x-[-50%] translate-y-[-50%]') }>

                    </span>
                </span>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10 w-full">
                    <div className="w-full flex items-center justify-center gap-10 flex-col">
                        <h2 className="text-4xl uppercase">
                            Frontend
                        </h2>
                        <div className="flex items-center justify-between gap-3 font-thin text-3xl md:w-9/12 flex-wrap">
                            {
                                frontendList.map((item, index) => (
                                    <p className="px-10 py-2 border text-white/50 border-white/50 rounded-full" key={index}>
                                        {item}
                                    </p>
                                ))
                            }

                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center gap-10 flex-col">
                    <h2 className="text-4xl uppercase">
                            Backend
                        </h2>
                        <div className="flex items-center justify-between gap-3 font-thin text-3xl md:w-9/12 flex-wrap">
                            {
                                backendList.map((item, index) => (
                                    <p className="px-10 py-2 border text-white/50 border-white/50 rounded-full" key={index}>
                                        {item}
                                    </p>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}