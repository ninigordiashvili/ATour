"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

import Contact from "@/src/components/Contact";
import Hero from "@/src/components/Hero";
import Insights from "@/src/components/Insights";

// Lazy load heavy components
const Partners = dynamic(() => import("@/src/components/Partners"));
const Services = dynamic(() => import("@/src/components/Services"));
const Testimonials = dynamic(() => import("@/src/components/Testimonials"));

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
