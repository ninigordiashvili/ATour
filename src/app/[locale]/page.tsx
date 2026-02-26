"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Contact from "@/src/components/Contact";
import Hero from "@/src/components/Hero";
import Insights from "@/src/components/Insights";
import Partners from "@/src/components/Partners";
import Services from "@/src/components/Services";
import Testimonials from "@/src/components/Testimonials";

const Page = () => {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    }
  }, [pathname]);

  return (
    <>
      <Hero />
      <Services />
      <Partners />
      <Insights />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Page;
