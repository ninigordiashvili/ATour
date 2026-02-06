"use client";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Insights from "@/src/components/Insights";
import Partners from "@/src/components/Partners";
import Services from "@/src/components/Services";
import Testimonials from "@/src/components/Testimonials";

const Page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Partners />
      <Insights />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
