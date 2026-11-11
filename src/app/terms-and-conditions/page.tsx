import type { Metadata } from "next";
import { LEGAL_LAST_UPDATED } from "../../../constants/legal/business";
import { termsSections } from "../../../constants/legal/terms";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions | Sukoon Indian Restaurant",
  description:
    "Terms and conditions for using the Sukoon Indian Restaurant website, bookings and online orders at 498-500 Mt Alexander Road, Ascot Vale.",
};

const page = () => {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="Please take a moment to read these terms. They keep things clear and fair for our guests and for us."
      lastUpdated={LEGAL_LAST_UPDATED}
      sections={termsSections}
    />
  );
};

export default page;
