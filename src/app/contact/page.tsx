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
        subTitle="A warm table, familiar flavours and time well spent. Everything here is designed to help you feel a little more at ease."
        image="/images/hero-image.png"
      />
      <ContactForm/>
      <SlowDown />
    </div>
  );
}
