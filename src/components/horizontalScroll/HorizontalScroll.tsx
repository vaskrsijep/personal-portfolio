"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import "./horizontalScroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const t = useTranslations("horizontalScroll");

  // Use first 6 projects for horizontal scroll
  const displayProjects = projects.slice(0, 6);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    // Skip horizontal scroll on mobile - stack vertically instead
    if (isMobile) {
      if (sectionRef.current) {
        gsap.set(sectionRef.current, {
          height: "auto",
        });
      }
      return;
    }

    if (!sectionRef.current || !containerRef.current || !cardsRef.current) return;

    const cards = cardsRef.current.children;
    if (cards.length === 0) return;

    // Wait for images and layout to settle
    const initScroll = () => {
      // Calculate card width properly - use getBoundingClientRect for accuracy
      const firstCard = cards[0] as HTMLElement;
      const cardRect = firstCard.getBoundingClientRect();
      const cardWidth = cardRect.width || 600;
      const gap = 30;
      const totalWidth = (cardWidth + gap) * (cards.length - 1) + cardWidth;
      const sectionHeight = window.innerHeight * 4; // 400vh

      console.log("Initializing horizontal scroll:", { cardWidth, totalWidth, sectionHeight });

      // Set container width
      containerRef.current!.style.width = `${totalWidth}px`;

      // Set section height
      sectionRef.current!.style.height = `${sectionHeight}px`;

      // Reset cards position
      gsap.set(cardsRef.current, {
        x: 0,
        clearProps: "all",
      });

      // Create timeline for horizontal scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${sectionHeight}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Animate horizontal movement
      tl.to(cardsRef.current, {
        x: -totalWidth,
        ease: "none",
      });

      // Snap functionality
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${sectionHeight}`,
        snap: {
          snapTo: 1 / (cards.length - 1),
          duration: { min: 0.2, max: 0.6 },
          delay: 0.1,
          ease: "power1.inOut",
        },
      });

      // Refresh ScrollTrigger after a short delay
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    };

    // Wait for images to load
    const images = cardsRef.current.querySelectorAll("img");
    let loadedImages = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
      // No images, initialize immediately
      setTimeout(initScroll, 100);
    } else {
      images.forEach((img) => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.addEventListener("load", () => {
            loadedImages++;
            if (loadedImages === totalImages) {
              initScroll();
            }
          });
          img.addEventListener("error", () => {
            loadedImages++;
            if (loadedImages === totalImages) {
              initScroll();
            }
          });
        }
      });

      if (loadedImages === totalImages) {
        setTimeout(initScroll, 100);
      }
    }
  }, { scope: sectionRef, dependencies: [isMobile, displayProjects.length] });

  const getImagePath = (projectUrl: string, imageName: string) => {
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

  return (
    <div
      ref={sectionRef}
      className={`relative w-full overflow-hidden bg-gradient-to-b from-[#f5f5f5] to-white horizontal-scroll-section ${
        isMobile ? "h-auto" : ""
      }`}
      style={!isMobile ? { height: "400vh" } : {}}
    >
      <div className={`${isMobile ? "relative" : "sticky top-0"} flex items-center ${isMobile ? "py-20" : "h-screen"}`}>
        <div className="w-full px-5 md:px-20 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold uppercase mb-4"
          >
            {t("heading")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-black/70 max-w-2xl"
          >
            {t("description")}
          </motion.p>
        </div>

        <div
          ref={containerRef}
          className={`${isMobile ? "relative w-full" : "absolute left-0"} flex ${isMobile ? "flex-col" : "items-center"} gap-[30px] px-5 md:px-20`}
          style={!isMobile ? { willChange: "transform", position: "relative" } : {}}
        >
          <div
            ref={cardsRef}
            className={`flex ${isMobile ? "flex-col" : ""} gap-[30px]`}
            style={!isMobile ? { willChange: "transform", position: "relative" } : {}}
          >
            {displayProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex-shrink-0 ${isMobile ? "w-full" : "w-[90vw] md:w-[600px]"} ${isMobile ? "h-auto" : "h-[70vh]"} bg-white rounded-3xl shadow-2xl overflow-hidden group cursor-pointer`}
              >
                <Link href={`/projects/${project.url}`}>
                  <div className="relative w-full h-[60%] overflow-hidden">
                    <Image
                      src={getImagePath(project.url, project.gallery[0] || "mobile1.png")}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 90vw, 600px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 md:p-8 h-[40%] flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-base md:text-lg text-black/70 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-black/50 uppercase tracking-wide">
                        {project.year}
                      </span>
                      <div className="flex gap-2">
                        {project.services.slice(0, 2).map((service, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
