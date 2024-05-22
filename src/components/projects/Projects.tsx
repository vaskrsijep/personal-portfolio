"use client";
import { ArrowRight } from "lucide-react";
import "./projects.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
export default function Projects() {
  const workItemsRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const workRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLElement | null>(null);
  const prevElementsRef = useRef<NodeListOf<HTMLElement> | null>(null);

  useEffect(() => {
    const workItems = document.querySelectorAll<HTMLElement>(".work-item");
    const work = document.querySelector<HTMLElement>(".work");
    const overlay = document.querySelector<HTMLElement>(".overlay");
    const prevElements = document.querySelectorAll<HTMLElement>(".prev");

    if (!workItems || !work || !overlay || !prevElements) return;

    workItemsRef.current = workItems;
    workRef.current = work;
    overlayRef.current = overlay;
    prevElementsRef.current = prevElements;

    overlay.style.top = "0%";
    overlay.style.left = "13.25%";
    document.querySelector<HTMLElement>("#prev-2")?.classList.add("active");

    const removeActiveClass = () => {
      prevElements.forEach(prev => {
        prev.classList.remove("active");
      });
    };

    workItems.forEach((item, index) => {
      item.addEventListener("mouseover", () => {
        removeActiveClass();
        const activePrev = document.querySelector<HTMLElement>("#prev-" + (index + 1));
        if (activePrev) {
          activePrev.classList.add("active");
        }
        
        work.classList.add("hovered");
        console.log(index);
        switch (index) {
          case 0:
            overlay.style.top = "150%";
            overlay.style.left = "50%";
            work.className = "work bgcolor-red hovered";
            break;
          case 1:
            overlay.style.top = "0%";
            overlay.style.left = "13.25%";
            work.className = "work bgcolor-blue hovered";
            break;
          case 2:
            overlay.style.top = "-50%";
            overlay.style.left = "-23.5%";
            work.className = "work bgcolor-green hovered";
            break;
          default:
        }
      });

      item.addEventListener("mouseout", () => {
        work.classList.remove("hovered");
        work.className = "work";
        overlay.style.top = "0%";
        overlay.style.left = "13.25%";
        removeActiveClass();
        document.querySelector<HTMLElement>("#prev-2")?.classList.add("active");
      });
    });

    return () => {
      workItems.forEach((item) => {
        item.removeEventListener("mouseover", () => {});
        item.removeEventListener("mouseout", () => {});
      });
    };
  }, []);

  return (
    <div>
      <div className="">
        <div className="work">
          <div className="overlay">
            <div className="prev" id="prev-1" >
              <Image className="imgCont" src="/images/solveitx.png" alt="SolveItX" width={1980} height={1020}></Image>
            </div>
            <div className="prev" id="prev-2" >
              <Image className="imgCont" src="/images/euroexotics.png" alt="Euro Exotics" width={1980} height={1020}></Image>
            </div>
            <div className="prev" id="prev-3" >
              <Image className="imgCont" src="/images/solveitx.png" alt="Ecommerce" width={1980} height={1020}></Image>
            </div>
          </div>
          <p className="par">Just a projects:</p>
          <div className="work-item" id="w-1">
            <div className="work-item-name">
              <h1 className="title">SolveItX</h1>
            </div>
            <div className="work-item-icon">
              <div className="icon-holder i-1">
                <ArrowRight className="text-5xl text-white" />
              </div>
              <div className="icon-holder i-2">
                <ArrowRight className="text-5xl text-white" />
              </div>
            </div>
          </div>

          <div className="work-item" id="w-2">
            <div className="work-item-name">
              <h1 className="title">Euro Exotics</h1>
            </div>
            <div className="work-item-icon">
              <div className="icon-holder i-1">
                <ArrowRight className="text-5xl text-white" />
              </div>
              <div className="icon-holder i-2">
                <ArrowRight className="text-5xl text-white" />
              </div>
            </div>
          </div>

          <div className="work-item" id="w-3">
            <div className="work-item-name">
              <h1 className="title">Hutly Nekretnine</h1>
            </div>
            <div className="work-item-icon">
              <div className="icon-holder i-1">
                <ArrowRight className="text-5xl text-white" />
              </div>
              <div className="icon-holder i-2">
                <ArrowRight className="text-5xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
