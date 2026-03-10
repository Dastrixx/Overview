import Hero from "@/sections/Hero/Hero";
import About from "@/sections/About/About";
import Skills from "@/sections/Skills/Skills";
import SeoAds from "@/sections/SeoAds/SeoAds";
import Projects from "@/sections/Projects/Projects";
import Experience from "@/sections/Experience/Experience";
import Contacts from "@/sections/Contacts/Contacts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      {/* <SeoAds /> */}
      {/* <Projects /> */}
      <Experience />
      <Contacts />
    </>
  );
}
