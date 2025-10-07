import { Navbar } from "@/components/navbar/navbar";
import Hero from "@/components/hero";
import AboutMe from "@/components/about";
import Skills from "@/components/skill";
import SideNav from "@/components/sidenav";
import Portfolio from "@/components/portfolio";
import { Experience } from "@/components/experience";
import Testimoni from "@/components/testimoni";

export default function Home() {
  return (
    <>
      <header id="home" className="w-[100%] h-[10vh] bg-[#292f36]">
        <Navbar />
      </header>

      <SideNav />

      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimoni />
    </>
  );
}
