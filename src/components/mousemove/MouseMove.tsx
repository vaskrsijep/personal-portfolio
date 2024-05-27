"use client";
import gsap from "gsap";
import { useEffect } from "react";

export default function MouseMove() {


  useEffect(() => {
    gsap.set(".flair", { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseOverH1 = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "h1") {
        gsap.from(".flair", { scale: 0, duration: 0.5, ease: "power3", onStart: () => {
          gsap.to(".flair", { className: "+=activeh1", duration: 0.5, ease: "power3" });
        } });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="flair"
        
      ></div>
    </div>
  );
}
