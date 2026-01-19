import Contact from "@/components/contact/Contact";
import Header from "@/components/header/Header";
import Projects from "@/components/projects/Projects";
import AnimationReveal from "@/components/revealAnimation/AnimationReveal";
import ReviewCards from "@/components/reviewCards/ReviewCards";
import CTAQuote from "@/components/ctaQuote/CTAQoute";
import Testimonials from "@/components/testimonials/Testimonials";
import FinalCTA from "@/components/finalCta/FinalCTA";
import Experience from "@/components/experience/Experience";
import HorizontalScroll from "@/components/horizontalScroll/HorizontalScroll";

export default function Home() {
  return (
    <div>
      {/* <AnimationReveal/> */}
      <Header />
      <div className="w-full h-vh overflow-hidden">
      <Projects />
      <CTAQuote />
      {/* <HorizontalScroll /> */}
      <Experience />
      <ReviewCards/>  
      <Testimonials />
      <FinalCTA />
      <Contact />
      </div>
    </div>
  );
}
