import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";

export default function ProjectsPage() {
    return (
        <div>
            <div className="w-full flex items-center bg-white justify-center h-screen relative">

                <h1 className="md:text-9xl text-5xl px-10 text-center uppercase">Creating next level projects</h1>
            </div>
            <Projects />
            <Contact/>
        </div>
    );
}