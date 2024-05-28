import Link from "next/link";
import React from "react";

interface ProjectProps {
  index: number;
  title: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
  tip: string[];
  link: string;
  text: string;
}

const Project: React.FC<ProjectProps> = ({
  index,
  title,
  manageModal,
  tip,
  link,
  text,
}) => {
  return (
    <Link href={`/projects/${link}`}
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="group flex w-full justify-between items-center gap-5 flex-col sm:flex-row sm:py-12 sm:px-24 px-5 py-10 border-t border-muted cursor-pointer transition-all duration-400 hover:opacity-50 last:border-b"
    >
      <div className="w-full flex items-start flex-col p-0 m-0 gap-3">
        <h2 className="md:text-6xl text-4xl font-medium transition-all duration-400 sm:group-hover:-translate-x-10 group-hover:opacity-50 text-black">{title}</h2>

      </div>
      <div>
        <p className="text-xl font- transition-all duration-400 sm:group-hover:translate-x-10 group-hover:opacity-50">{text}</p>
      </div>
    </Link>
  );
  
};

export default Project;
