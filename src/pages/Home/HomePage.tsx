import { useEffect, useRef } from "react";
import Hero from "@/sections/Hero/Hero";
import About from "@/sections/About/About";
import Skills from "@/sections/Skills/Skills";
import SeoAds from "@/sections/SeoAds/SeoAds";
import Projects from "@/sections/Projects/Projects";
import Experience from "@/sections/Experience/Experience";
import Contacts from "@/sections/Contacts/Contacts";

export default function HomePage() {
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mediaQuery.matches || reducedMotion.matches) {
      return;
    }

    const sectionSelector = ".site-main > section";

    const scrollToSection = (nextIndex: number) => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>(sectionSelector));
      const targetSection = sections[nextIndex];

      if (!targetSection) {
        return;
      }

      isScrollingRef.current = true;
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

      window.setTimeout(() => {
        isScrollingRef.current = false;
      }, 650);
    };

    const getActiveSectionIndex = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>(sectionSelector));
      if (!sections.length) return -1;

      const headerHeight =
        Number.parseInt(
          getComputedStyle(document.documentElement).getPropertyValue("--header-height"),
          10,
        ) || 0;

      const anchorY = window.scrollY + headerHeight + 4;

      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const distance = Math.abs(sectionTop - anchorY);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      return closestIndex;
    };

    const onWheel = (event: WheelEvent) => {
      if (isScrollingRef.current || Math.abs(event.deltaY) < 8) {
        return;
      }

      const currentIndex = getActiveSectionIndex();
      if (currentIndex < 0) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = currentIndex + direction;

      const sectionsCount = document.querySelectorAll(sectionSelector).length;
      if (nextIndex < 0 || nextIndex >= sectionsCount) {
        return;
      }

      event.preventDefault();
      scrollToSection(nextIndex);
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <SeoAds />
      <Projects />
      <Experience />
      <Contacts />
    </>
  );
}
