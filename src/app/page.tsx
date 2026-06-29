import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GithubStats from "@/components/GithubStats";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubStats />
        <Education />
        <Certifications />
        <Contact />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

