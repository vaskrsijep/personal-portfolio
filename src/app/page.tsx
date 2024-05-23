import Marquee from "@/components/Marquee";
import Contact from "@/components/contact/Contact";
import CV from "@/components/cv/cv";
import Header from "@/components/header/Header";
import Menu from "@/components/menu/Menu";
import Projects from "@/components/projects/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Marquee />
      <div className="w-full h-vh overflow-hidden">
      <Projects />
      <CV/>
      <Contact />
      </div>
    </div>
  );
}
