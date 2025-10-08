import Hero from "@/components/hero";
import AboutMe from "@/components/about";
import Skills from "@/components/skill";
import SideNav from "@/components/sidenav";
import Portfolio from "@/components/portfolio";
import { Experience } from "@/components/experience";
import Testimoni from "@/components/testimoni";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <SideNav />

      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimoni />
      <Contact />
    </>
  );
}
