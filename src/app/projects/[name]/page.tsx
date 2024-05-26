"use client";
import { projects } from "@/lib/constants";
import { motion } from "framer-motion";

export default function ProjectPage({ params }: { params: { name: string } }) {
  const project = projects.find((project) => project.url === params.name);

  console.log(params.name);
  if (!params.name) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-9xl">
        Project not found
      </div>
    );
  }

  if (!project) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-9xl flex-col gap-3">
        Project not found
        <a
          href="/projects"
          className="text-3xl text-[#c5fb45] border-b border-[#c5fb45] py-3"
        >
          Go back
        </a>
      </div>
    );
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
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1 flex items-start justify-start flex-col gap-3">
            <p className="text-xl opacity-20 uppercase">Role / Services</p>
            <div className="w-[300px] h-[1px] bg-[rgb(197,251,69)] opacity-50"></div>
            <p>
              {project.services.map((service) => (
                <div className="text-2xl font-thin">
                  {service}
                </div>

              ))}
            </p>
          </div>
          <div className="md:col-span-1 flex items-start justify-start flex-col gap-3">
            <p className="text-xl opacity-30 uppercase">Credits</p>
            <div className="w-[300px] h-[1px] bg-[rgb(197,251,69)] opacity-50"></div>
            <p className="text-2xl font-thin">
              {project.credits}
            </p>
          </div>
          <div className="md:col-span-1 flex items-start justify-start flex-col gap-3">
            <p className="text-xl opacity-30 uppercase">Location & Year</p>
            <div className="w-[300px] h-[1px] bg-[rgb(197,251,69)] opacity-50 flex items-center justify-center flex-row"></div>
            <p className="text-2xl font-thin">{project.location} & {project.year}</p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">

      </div>
    </motion.div>
  );
}
