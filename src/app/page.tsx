import { Navbar } from "@/components/navbar/navbar";
import Hero from "@/components/hero";
import AboutMe from "@/components/about";
import Skills from "@/components/skill";

export default function Home() {
  return (
    <>
      <header className="w-[100%] h-[10vh] bg-[#292f36]">
        <Navbar />
      </header>

      <Hero />
      <AboutMe />
      <Skills />
    </>
  );
}
