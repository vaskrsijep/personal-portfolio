"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./menu.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import ButtonList from "../MenuList";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocaleStore } from "@/lib/store/useLocaleStore";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);


export default function Menu() {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const locale = useLocaleStore((state) => state.locale);
  const setLocale = useLocaleStore((state) => state.setLocale);
  const tHeader = useTranslations("header");

  const mainToolBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);

  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 105 });

      tl.current = gsap
        .timeline({
          paused: true,
        })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen && tl.current) {
      tl.current.play();
    } else if (tl.current) {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  const menuLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const menuInfos = [
    {
      name: "Github",
      path: "https://github.com/vaskrsije",
      icon: "https://github.com/vaskrsije.png",
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/vaskrsije-panic/",
      icon: "https://www.linkedin.com/in/vaskrsije-panic/og-image.png",
    },
    {
      name: "Twitter",
      path: "https://twitter.com/vaskrsije",
      icon: "https://twitter.com/vaskrsije.png",
    },
    {
      name: "Email",
      path: "mailto:panicvaskrsije@example.com",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
    },
  ];

  useEffect(() => {
    const showAnim = gsap.from(mainToolBarRef.current, { 
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      }
    });

    // Scroll detection for logo change
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="menu-container relative overflow-hidden" ref={container}>
        
      <div ref={mainToolBarRef} className="menu-bar uppercase text-xl ">
        <div className="menu-logo">
          <Link href="/" ref={logoRef} className="transition-all duration-300">
            <span className={isScrolled ? "opacity-0 absolute" : "opacity-100"}>
              Vaskrsije Panic
            </span>
            <span className={isScrolled ? "opacity-100" : "opacity-0 absolute"}>
              VP
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`px-3 py-1.5 rounded-md font-medium transition-all duration-300 ${
                locale === "en"
                  ? "bg-primary text-white"
                  : "bg-transparent text-black/60 hover:text-black"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("sr")}
              className={`px-3 py-1.5 rounded-md font-medium transition-all duration-300 ${
                locale === "sr"
                  ? "bg-primary text-white"
                  : "bg-transparent text-black/60 hover:text-black"
              }`}
            >
              SR
            </button>
          </div>
          <div className="menu-open uppercase text-xl " onClick={toggleMenu}>
            <p>Menu</p>
          </div>
        </div>
      </div>
      <div className="menu-overlay text-xl">
        <div className="menu-overlay-bar">
          <div className="menu-logo uppercase">
            <Link href="/">Vaskrsije Panic</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`px-3 py-1.5 rounded-md font-medium transition-all duration-300 ${
                  locale === "en"
                    ? "bg-white text-primary"
                    : "bg-transparent text-white/70 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLocale("sr")}
                className={`px-3 py-1.5 rounded-md font-medium transition-all duration-300 ${
                  locale === "sr"
                    ? "bg-white text-primary"
                    : "bg-transparent text-white/70 hover:text-white"
                }`}
              >
                SR
              </button>
            </div>
            <div className="menu-close uppercase" onClick={toggleMenu}>
              <p>Close</p>
            </div>
          </div>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder">
                  <Link href={link.path} onClick={toggleMenu} className="menu-link font-bold">
                    {link.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="menu-info  text-2xl">
          <div className="menu-close-icon" onClick={toggleMenu}>
            <p>&times;</p>
          </div>
          <div className="menu-info-col">
            {menuInfos.map((info, index) => (
              <div className="menu-info-item" key={index}>
                <a href={info.path} className="menu-info-link ">
                  {info.name}
                </a>
              </div>
            ))}
          </div>
          <div className="flex-col md:flex md:flex-auto hidden">
            <p>panicvaskrsije@gmail.com</p>
            <p>+381 63 73 60 728</p>
          </div>
          <div className="menu-preview ">
            <p>View Showreel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
