import type { Metadata } from "next";
import React from "react";
import HeroSection from "../about/components/HeroSection";
import SlowDown from "../home/components/SlowDown";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: "Contact and Book a Table | Sukoon Ascot Vale",
  description:
    "Book a table or ask us a question. Sukoon is at 498-500 Mt Alexander Road, Ascot Vale. Open Tue to Sun, 5pm to 11pm. Call 03 9495 6762.",
};

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
