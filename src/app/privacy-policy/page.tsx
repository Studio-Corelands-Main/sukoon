import type { Metadata } from "next";
import { LEGAL_LAST_UPDATED } from "../../../constants/legal/business";
import { privacySections } from "../../../constants/legal/privacy";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Sukoon",
  description:
    "How Sukoon collects, uses and protects your personal information when you visit our website, contact us or dine with us.",
};

const page = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How we collect, use and protect your personal information when you visit our website, contact us or dine with us."
      lastUpdated={LEGAL_LAST_UPDATED}
      sections={privacySections}
    />
  );
};

export default page;
