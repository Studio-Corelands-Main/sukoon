import React from "react";
import HeroSection from "../about/components/HeroSection";
import SlowDown from "../home/components/SlowDown";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <div>
      <HeroSection
        title="Come as you are."
        secondTitle="Stay for the Sukoon."
        subTitle="Whether it is a weeknight dinner for two or a night out with the whole family, every guest is welcomed like an old friend."
        image="/images/hero-image.png"
      />
      <ContactForm/>
      <SlowDown />
    </div>
  );
}
