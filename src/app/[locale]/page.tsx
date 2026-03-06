import dynamic from "next/dynamic";

import Contact from "@/src/components/Contact";
import Hero from "@/src/components/Hero";
import Insights from "@/src/components/Insights";
import HashScroller from "@/src/components/HashScroller";
import {
  getHeroContent,
  getServicesContent,
  getPartnersContent,
  getInsightsContent,
  getTestimonialsContent,
  getSettingsContent,
} from "@/src/lib/content";

const Partners = dynamic(() => import("@/src/components/Partners"));
const Services = dynamic(() => import("@/src/components/Services"));
const Testimonials = dynamic(() => import("@/src/components/Testimonials"));

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const heroContent = getHeroContent(locale);
  const servicesContent = getServicesContent(locale);
  const partnersContent = getPartnersContent(locale);
  const insightsContent = getInsightsContent(locale);
  const testimonialsContent = getTestimonialsContent(locale);
  const settingsContent = getSettingsContent(locale);

  return (
    <>
      <HashScroller />
      <Hero content={heroContent} social={settingsContent.social} />
      <Services content={servicesContent} />
      <Partners content={partnersContent} />
      <Insights content={insightsContent} />
      <Testimonials content={testimonialsContent} />
      <Contact />
    </>
  );
}
