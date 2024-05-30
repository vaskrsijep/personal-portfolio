import Contact from "@/components/contact/Contact";
import Header from "@/components/header/Header";
import Projects from "@/components/projects/Projects";
import AnimationReveal from "@/components/revealAnimation/AnimationReveal";
import ReviewCards from "@/components/reviewCards/ReviewCards";

export default function Home() {
  return (
    <div>
      {/* <AnimationReveal/> */}
      <Header />
      <div className="w-full h-vh overflow-hidden">
      <Projects />
      <ReviewCards/>  
      <Contact />
      </div>
    </div>
  );
}
