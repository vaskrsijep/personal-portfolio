"use client";
import Contact from "@/components/contact/Contact";
import { projects } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function ImageR({ id }: { id: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <section className="imageAnim">
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <img className="imageEffect" src={`/images${id}`} alt="" onLoad={() => setIsLoaded(true)} />
      </motion.div>
    </section>
  );
}

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

  // const imageRef = useRef(null);

  return (
    <motion.div className="relative bg-accent text-accent-foreground">
      {/* <div className="fixed top-0 left-0 w-full h-full bg-muted blur-[100px] opacity-5 -z-0"></div> */}
      <div className="w-full flex items-center justify-center md:h-[60vh] pt-52 pb-20 relative overflow-hidden">
        <h1 className="md:text-9xl text-6xl flex-wrap px-10 text-center uppercase text-secondary font-bold">
          {project.name}
        </h1>
      </div>
      <div className="max-w-7xl mx-auto flex justify-center items-center bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1 flex items-start justify-start flex-col gap-3">
            <p className="text-xl text-secondary uppercase">Role / Services</p>
            <div className="w-[300px] h-[1px] bg-muted "></div>
            <div>
              {project.services.map((service, index) => (
                <div key={index} className="text-2xl font-light tracking-wide">
                  {service}
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-1 flex items-start justify-start flex-col gap-3">
            <p className="text-xl text-secondary uppercase">Credits</p>
            <div className="w-[300px] h-[1px] bg-muted "></div>
            <p className="text-2xl font-light tracking-wide">{project.credits}</p>
          </div>
          <div className="md:col-span-1 flex items-start justify-start flex-col gap-3">
            <p className="text-xl text-secondary uppercase">Location & Year</p>
            <div className="w-[300px] h-[1px] bg-muted  flex items-center justify-center flex-row"></div>
            <p className="text-2xl font-light tracking-wide">
              {project.location}, {project.year}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white w-full  my-36">
        <div>
            <ImageR id={project.thumb}/>
        </div>
      </div>

      <div className="flex items-start justify-between gap-20 md:flex-row flex-col md:py-10 py-5 md:px-20 md:pb-10 w-full px-5 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className=" flex items-start justify-start gap-10 flex-col"
        >
          <h2 className="text-3xl font-bold opacity-30">Description</h2>
          <p className="text-2xl font-normal tracking-wide leading-relaxed">
            {project.description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="flex items-start justify-start gap-10 flex-col"
        >
          <h2 className="text-3xl font-bold opacity-30">About</h2>
          <p className="text-2xl font-normal tracking-wide leading-relaxed">
            {project.about[0]}
          </p>
          <p className="text-2xl font-normal tracking-wide leading-relaxed">
            {project.about[1]}
          </p>
          <p className="text-2xl font-normal tracking-wide leading-relaxed">
            {project.about[2]}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
