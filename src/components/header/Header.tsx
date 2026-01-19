"use client";
import { useTransform, useViewportScroll, motion } from "framer-motion";
import "./header.css";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import gsap from "gsap";
import AboutMe from "../about/AboutMe";
import { useTranslations } from "next-intl";
import { useLocaleStore } from "@/lib/store/useLocaleStore";

export default function Header() {
  const tHeader = useTranslations("header");
  const locale = useLocaleStore((state) => state.locale);
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 0]);
  const y2 = useTransform(scrollY, [0, 500], [0, -700]);

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const headerRef = useRef(null);

  const handleScrollClick = () => {
    gsap.to(headerRef, { scrollTo: 500, duration: 1 });
  };

  return (
    <motion.div ref={headerRef} className="relative">
      <motion.div
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div className="absolute top-0 left-[50%] bg-primary text-primary-foreground md:px-5 md:py-3 py-2 px-4 translate-x-[-50%] rounded-b-3xl shadow-secondary shadow-[0_0px_4px_rgba(0,0,0,0.1)]">
          <h2 className="md:font-thin uppercase md:text-xl text-sm whitespace-nowrap">
            {tHeader("location")}
          </h2>
        </motion.div>
      </motion.div>
      <div className="w-full h-screen flex items-center justify-center md:flex-row flex-col gap-10">
        <div className="flex items-center justify-center w-full md:h-full m-0 md:px-10 gap-20">
          <div
            className={` flex items-center justify-center gap-20 flex-col flex-wrap md:w-1/2 w-full text-center`}
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-mitera leading-relaxed tracking-widest font-normal md:text-9xl text-4xl"
            >
              {locale === "sr" ? (
                <>
                  <span className="font-bold">{tHeader("titleBold")}</span>{" "}
                  <span className="font-normal">iskustva za tvoj biznis</span>
                </>
              ) : (
                <>
                  <span className="font-bold">{tHeader("titleBold")}</span>{" "}
                  <span className="font-normal">experiences for your business</span>
                </>
              )}
            </motion.h1>
          </div>
        </div>
        <div className="flex items-end justify-end w-full md:h-full m-0 md:px-10 md:py-10 px-5">
          <motion.div className="flex items-end justify-end flex-col md:w-1/3 gap-5 leading-loose">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="md:text-5xl text-2xl leading-loose md:text-right text-center"
            >
              {tHeader("subtitle")}
            </motion.h1>
          </motion.div>
        </div>
      </div>
      <motion.div>
        <motion.div>
          <AboutMe />
        </motion.div>
        <motion.div></motion.div>
      </motion.div>
    </motion.div>
  );
}
