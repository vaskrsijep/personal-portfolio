import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";

export default function ProjectsPage() {
    return (
        <div>
            <div className="w-full flex items-center justify-center md:h-[60vh] h-screen relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#c5fb45] blur-[200px] opacity-5 z-0"></div>
                <h1 className="md:text-9xl text-5xl px-10 text-center uppercase">Creating next level projects</h1>
            </div>
            <Projects />
            <Contact/>
        </div>
    );
}