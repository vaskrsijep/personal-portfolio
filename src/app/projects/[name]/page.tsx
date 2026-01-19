"use client";
import Contact from "@/components/contact/Contact";
import { projects } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const getImagePath = (projectUrl: string, imageName: string) => {
  // Use solveitx images as generic placeholder for projects without images
  const placeholderProjects = [
    "maximonrealestate",
    "montat",
    "lawyertemplate",
    "peakitx",
    "panicdigital",
    "vunaperestoran",
    "nadatorte",
    "pekaramiki",
    "frizerskisaloniliev",
    "forestrywebsite",
    "salonauta",
    "nopanicanalysis"
  ];
  
  if (placeholderProjects.includes(projectUrl)) {
    return `/images/solveitx/${imageName}`;
  }
  
  return `/images/${projectUrl}/${imageName}`;
};

const getVideoPath = (projectUrl: string, videoPath: string) => {
  // Use solveitx video as generic placeholder for projects without videos
  const placeholderProjects = [
    "maximonrealestate",
    "montat",
    "lawyertemplate",
    "peakitx",
    "panicdigital",
    "vunaperestoran",
    "nadatorte",
    "pekaramiki",
    "frizerskisaloniliev",
    "forestrywebsite",
    "salonauta",
    "nopanicanalysis"
  ];
  
  if (placeholderProjects.includes(projectUrl)) {
    return "/videos/solveitx.mp4";
  }
  
  return `/videos${videoPath}`;
};


export default function ProjectPage({ params }: { params: { name: string } }) {
  const project = projects.find((project) => project.url === params.name);
  const currentProjectFromLength = projects.indexOf(project!);

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
          className="text-3xl text-black/50 border-b border-black/50 py-3"
        >
          Go back
        </a>
      </div>
    );
  }
  return (
    <motion.div className="relative bg-white text-accent-foreground">
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
                <div key={index} className="text-2xl font-light tracking-wide w-[300px]">
                  {service}
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-1 flex items-start justify-start flex-col gap-3">
            <p className="text-xl text-secondary uppercase">Credits</p>
            <div className="w-[300px] h-[1px] bg-muted "></div>
            <p className="text-2xl font-light tracking-wide w-[300px]">{project.credits}</p>
          </div>
          <div className="md:col-span-1 flex items-start justify-start flex-col gap-3">
            <p className="text-xl text-secondary uppercase">Location & Year</p>
            <div className="w-[300px] h-[1px] bg-muted flex-wrap flex items-center justify-center flex-row"></div>
            <p className="text-2xl font-light tracking-wide w-[300px]">
              {project.location}, {project.year}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] w-full my-36 py-10 relative">

        <div className="container mx-auto relative">
          <div className="px-10">

          <Image src={`/images/device-mbp-16-lower-nonotch.png`} width={1920} height={1300} alt="" className="mx-auto z-10 relative w-full "  />
          <div className="md:w-[71%] w-[51.2%] h-[90%]  overflow-hidden absolute top-[47%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:rounded-t-3xl">

            <video src={getVideoPath(project.url, project.thumb)} autoPlay loop muted playsInline className=" object-cover h-full w-full" />
        </div>
          </div>
          </div>
      </div>

      <div className="flex items-start justify-between gap-20 md:flex-row flex-col md:py-10 py-5 md:px-20 md:pb-10 w-full px-5 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
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
          transition={{ duration: 0.5 }}
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

      <div className="w-full bg-[#f5f5f5] py-10">
        <div className="container mx-auto">
      <video src={getVideoPath(project.url, project.thumb)} autoPlay loop muted playsInline className=" object-cover h-full w-full rounded-xl" />
        </div>
      </div>

      <div className="w-full md:py-36 py-10">
        <div className="w-full mx-auto">
          <div className="flex items-center justift-between gap-5 md:flex-row flex-col">
              {
                project.gallery.slice(0, 2).map((image, index) => (
                  <div key={index} className="w-full ">
                  <Image src={getImagePath(project.url, image)} width={1920} height={1300} alt="" className="mx-auto z-0 relative w-full rounded-xl  "  />
                  </div>
                ))
              }
              </div>
        </div>
      </div>
      <div className="w-full bg-[#f5f5f5] py-10">
        <div className="container mx-auto">
          <div className="flex items-center justift-between gap-10 md:flex-row flex-col">

                  <div  className="w-full ">
                  <Image src={getImagePath(project.url, project.gallery[1])} width={1920} height={1300} alt="" className="mx-auto z-0 relative w-full rounded-xl "  />
                  </div>
              </div>
        </div>
      </div>
      <div className="w-full h-screen py-0">
        <div className="flex items-center justify-center w-full h-full relative">
            {projects.length > currentProjectFromLength + 1 ? (
              <Link href={`/projects/${projects[currentProjectFromLength + 1].url}`} className="text-primary text-3xl font-normal text-center flex items-center justify-center flex-col gap-5">
                <h2 className="md:text-3xl text-2xl font-medium relative z-20">
                Next Project
                </h2>
                <h2 className="md:text-9xl text-5xl font-bold relative z-20">
                {projects[currentProjectFromLength + 1].name}
                </h2>
                <div className="w-full h-full">
                <Image src={getImagePath(projects[currentProjectFromLength + 1].url, projects[currentProjectFromLength + 1].gallery[0])} width={1920} height={1300} alt={`${projects[currentProjectFromLength + 1].name}`} className="absolute -top-10 left-0 w-full h-full object-cover -z-0" />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-70 z-10">

                </div>
                </div>
              </Link>
            ) : (
              <Link href={`/projects/${projects[0].url}`} className="text-primary flex items-center justify-center flex-col gap-5">
                <h2 className="md:text-3xl text-2xl font-medium relative z-20">
                Next Project
                </h2>
                <h2 className="md:text-9xl text-5xl font-bold relative z-20">
                {projects[0].name}
                </h2>
                <div className="w-full h-full">
                <Image src={getImagePath(projects[0].url, projects[0].gallery[0])} width={1920} height={1300} alt={`${projects[0].name}`} className="absolute -top-10 left-0 w-full h-full object-cover -z-0" />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-70 z-10">
                </div>
                </div>
              </Link>
            )}
          
            </div>
      </div>
      <Contact/>
    </motion.div>
  );
}
