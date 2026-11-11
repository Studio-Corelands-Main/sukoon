import type { Metadata } from "next";
import { LEGAL_LAST_UPDATED } from "../../../constants/legal/business";
import { privacySections } from "../../../constants/legal/privacy";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Sukoon Indian Restaurant",
  description:
    "How Sukoon Indian Restaurant in Ascot Vale collects, uses and protects your personal information when you book, order or contact us.",
};

const page = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your trust matters to us. This page sets out what we do with your details and the choices you have about them."
      lastUpdated={LEGAL_LAST_UPDATED}
      sections={privacySections}
    />
  );
};

export default page;
