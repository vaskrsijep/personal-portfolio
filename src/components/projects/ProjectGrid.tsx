import Link from "next/link";
import React from "react";
import Image from "next/image";

interface ProjectGridProps {
  index: number;
  title: string;
  link: string;
  text: string;
  year: string;
  imageUrl: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({
  index,
  title,
  link,
  text,
  year,
  imageUrl,
}) => {
  return (
    <Link
      href={`/projects/${link}`}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
          {year}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-base text-black/70 line-clamp-3 flex-1">
          {text}
        </p>
      </div>
    </Link>
  );
};

export default ProjectGrid;
