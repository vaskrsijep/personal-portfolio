"use client";

import { useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Marquee() {
  const container = useRef(null);
  const textPathRef = useRef<SVGTextPathElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

//   useEffect(() => {
//     scrollYProgress.on("change", (e) => {
//       texts.current.forEach((text, i) => {
//         text?.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%");
//       });
//     });
//   });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      textPathRef.current?.setAttribute(
        "startOffset",
        -40 + e * 40 + "%"
      );
    });
  }, [scrollYProgress]);

  return (
    <div ref={container} className="pt-[10em]">
      <svg viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text
          className="md:text-2xl text-4xl uppercase text-white"
          style={{ color: "white" }}
        >
          {[...Array(1)].map((_, i) => {
            return (
              <textPath
                key={i}
                ref={(ref) => {
                  textPathRef.current = ref;
                }}
                href="#curve"
                startOffset={i * 150 + "%"}
                fill="white"
              >
                My projects
              </textPath>
            );
          })}
        </text>
      </svg>
    </div>
  );
}
