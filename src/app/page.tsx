import Contact from "@/components/contact/Contact";
import Header from "@/components/header/Header";
import Projects from "@/components/projects/Projects";
import ReviewCards from "@/components/reviewCards/ReviewCards";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-full h-vh overflow-hidden">
      <Projects />
      <ReviewCards/>  
      <Contact />
      </div>
    </div>
  );
}
