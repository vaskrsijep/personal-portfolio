"use client";
import gsap from "gsap";
import { useEffect } from "react";

export default function MouseMove() {
  // gsap.set(".flair", { xPercent: -50, yPercent: -50 });

  // let xTo = gsap.quickTo(".flair", "x", { duration: 0.5, ease: "power3" });
  // let yTo = gsap.quickTo(".flair", "y", { duration: 0.5, ease: "power3" });

  // window.addEventListener("mousemove", (e) => {
  //     xTo(e.clientX);
  //     yTo(e.clientY);
  // });

  useEffect(() => {
    gsap.set(".flair", { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
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
