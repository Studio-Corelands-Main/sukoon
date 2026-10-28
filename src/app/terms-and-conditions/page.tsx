import type { Metadata } from "next";
import { LEGAL_LAST_UPDATED } from "../../../constants/legal/business";
import { termsSections } from "../../../constants/legal/terms";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Sukoon",
  description:
    "The terms that apply when you use the Sukoon website, book a table or visit our restaurant.",
};

const page = () => {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="The terms that apply when you use our website, book a table or visit Sukoon."
      lastUpdated={LEGAL_LAST_UPDATED}
      sections={termsSections}
    />
  );
};

export default page;
