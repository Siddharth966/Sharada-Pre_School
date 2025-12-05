import React from "react";
import Hero from "../components/Hero";
import AboutIntro from "../components/AboutIntro";
import Programs from "../components/Programs";
import WhyUs from "../components/WhyUs";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <Programs />
      <WhyUs />
      <ContactSection showTitle={false} />
    </>
  );
}

export default Home;
