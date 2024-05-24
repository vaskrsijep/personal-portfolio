"use client";
import { projects } from "@/components/projects/Projects";
import {motion } from "framer-motion";

export default function ProjectPage({
    params,
  }: {
    params: { name: string };
  }) {
    const project = projects.find((project) => project.url === params.name);

    console.log(params.name);
    if (!params.name) {
        return <div className="w-full h-screen flex items-center justify-center text-9xl">Project not found</div>;
    }



    if (!project) {
        return <div className="w-full h-screen flex items-center justify-center text-9xl flex-col gap-3">Project not found
        <a href="/projects" className="text-3xl text-[#c5fb45] border-b border-[#c5fb45] py-3">Go back</a></div>;
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full flex items-center justify-center md:h-[60vh] h-screen relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[#c5fb45] blur-[200px] opacity-5 z-0"></div>
                <h1 className="md:text-9xl text-5xl px-10 text-center uppercase">
                    {project.name}
                </h1>
            </div>
            <div className="w-full flex justify-center items-center">
test
            </div>
        </motion.div>
    );
}
