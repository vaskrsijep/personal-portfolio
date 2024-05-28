"use client"
import gsap from "gsap";
import { useEffect } from "react";

interface CustomButtonProps {
  text: string;
}
export default function ButtonList({ text }: CustomButtonProps) {
  const hrefText = text.toLowerCase().replace(" ", "");
  return (
    <li className="btn btn-link" data-barba-update="">
      <a href={hrefText} id={text} className="btn-click"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({
          top: document.getElementById(hrefText)?.offsetTop,
          behavior: "smooth",
        });
      }}
      >
        <div className="btn-fill btn-original-fill"></div>
        <div className="btn-text btn-original-text">
          <span>{text}</span>
        </div>
        <div className="btn-fill btn-duplicate-fill"></div>
        <div className="btn-text btn-duplicate-text">
          <span>{text}</span>
        </div>
      </a>
    </li>
  );
}
