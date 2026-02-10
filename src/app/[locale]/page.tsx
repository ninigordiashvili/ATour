"use client";
import Contact from "@/src/components/Contact";
import Hero from "@/src/components/Hero";
import Insights from "@/src/components/Insights";
import Partners from "@/src/components/Partners";
import Services from "@/src/components/Services";
import Testimonials from "@/src/components/Testimonials";

const Page = () => {
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
