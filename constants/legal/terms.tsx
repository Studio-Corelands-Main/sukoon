import type { LegalSectionI } from "@/app/types/LegalSectionTypes";
import Link from "next/link";
import { URLS } from "../routes/urls";
import { BUSINESS, BusinessContactList } from "./business";

export const termsSections: LegalSectionI[] = [
  {
    id: "about-these-terms",
    title: "About these terms",
    content: (
      <>
        <p>
          These terms apply when you use the {BUSINESS.name} website, make a
          reservation or enquiry, or visit our restaurant. The website is
          operated by {BUSINESS.legalName}
          {BUSINESS.abn && ` (ABN ${BUSINESS.abn})`} (&quot;Sukoon&quot;,
          &quot;we&quot;, &quot;us&quot; or &quot;our&quot;).
        </p>
        <p>
          By using this website or booking with us, you agree to these terms.
          If you do not agree, please do not use the website.
        </p>
      </>
    ),
  },
  {
    id: "using-our-website",
    title: "Using our website",
    content: (
      <>
        <p>
          You may use this website to learn about Sukoon, view our menu and
          gallery, make a reservation and contact us. You agree not to:
        </p>
        <ul>
          <li>use the website for anything unlawful or misleading;</li>
          <li>
            interfere with its security or operation, or introduce viruses or
            other harmful code;
          </li>
          <li>
            copy, scrape or republish its content without our written
            permission;
          </li>
          <li>submit false information through our booking or contact forms.</li>
        </ul>
        <p>
          We aim to keep the website available and accurate, but we may update,
          suspend or remove any part of it at any time without notice.
        </p>
      </>
    ),
  },
  {
    id: "menu-and-prices",
    title: "Menu, prices and images",
    content: (
      <>
        <p>
          Our menu changes with the seasons and the availability of
          ingredients. Dishes, drinks and prices shown on the website are a
          guide and may differ from what is available on the day.
        </p>
        <p>
          All prices are in Australian dollars and include GST unless stated
          otherwise. Any surcharge, such as a public holiday surcharge, will be
          shown on the menu or told to you before you order.
        </p>
        <p>
          Photos are for illustration only. Presentation and portion sizes may
          vary.
        </p>
      </>
    ),
  },
  {
    id: "allergies",
    title: "Allergies and dietary requirements",
    content: (
      <>
        <p>
          Our kitchen prepares food that may contain common allergens, such as
          nuts, dairy, gluten, eggs and sesame. Dietary labels on our menu,
          such as vegetarian and vegan, describe the ingredients of a dish, but
          because everything is prepared in a shared kitchen we cannot
          guarantee any dish is free from traces of allergens.
        </p>
        <p>
          Please tell us about any allergy or dietary requirement when you
          book and again when you order. If you have a severe allergy, please
          speak with our team before ordering so we can advise what we can
          safely prepare for you.
        </p>
      </>
    ),
  },
  {
    id: "reservations",
    title: "Reservations",
    content: (
      <>
        <p>
          You can book a table through our website, by phone or by email.
          Bookings made through a third-party booking platform are also
          subject to that platform&apos;s terms.
        </p>
        <p>
          A booking is confirmed only once you receive a confirmation from us
          or our booking platform. Please make sure the details you give us are
          accurate, including your contact details, the number of guests and
          any dietary requirements.
        </p>
        <p>
          Please arrive on time. If you are running late, let us know; on busy
          days we may not be able to hold your table for long after the
          booking time.
        </p>
        <p>
          For larger groups, special occasions or peak dates we may ask for a
          deposit, a card guarantee or a set menu. We will explain these
          conditions, including any cancellation fee, before your booking is
          confirmed.
        </p>
      </>
    ),
  },
  {
    id: "cancellations",
    title: "Cancellations and changes",
    content: (
      <>
        <p>
          If your plans change, please let us know as early as possible by
          phone, by email or through your booking confirmation, so we can offer
          the table to other guests.
        </p>
        <p>
          Any deposit or cancellation conditions that apply to your booking
          will be explained when you book. If we need to cancel or change your
          booking, for example because of an unexpected closure, we will
          contact you as soon as we can and refund any deposit you have paid.
        </p>
      </>
    ),
  },
  {
    id: "events-and-requests",
    title: "Celebrations and special requests",
    content: (
      <p>
        We are happy to help with celebrations and special requests. Requests
        made through our contact form, by phone or by email are not confirmed
        until we agree to them in writing. Separate terms may apply to private
        events and functions, and we will provide them when you enquire.
      </p>
    ),
  },
  {
    id: "alcohol",
    title: "Responsible service of alcohol",
    content: (
      <p>
        Where alcohol is served, we follow responsible service of alcohol
        requirements under the Liquor Control Reform Act 1998 (Vic). We will
        not serve alcohol to anyone under 18 or to anyone who is intoxicated,
        and we may ask to see photo ID.
      </p>
    ),
  },
  {
    id: "conduct",
    title: "Conduct at our venue",
    content: (
      <p>
        We want everyone to feel at ease at Sukoon. We may refuse entry or
        service to, or ask to leave, anyone who behaves in a way that is unsafe,
        abusive or disruptive to other guests or our team.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: (
      <p>
        The content on this website, including its text, photos, the Sukoon
        name, logo and emblem, and the website design, is owned by or licensed
        to us and is protected by copyright and trade mark laws. You may view
        and share our pages for personal, non-commercial use. Any other use
        needs our written permission.
      </p>
    ),
  },
  {
    id: "third-party-services",
    title: "Third-party websites and services",
    content: (
      <p>
        Our website links to services we do not control, such as social media,
        maps and booking platforms. We are not responsible for their content,
        availability or privacy practices, and your use of them is subject to
        their own terms.
      </p>
    ),
  },
  {
    id: "consumer-law",
    title: "Your rights under Australian Consumer Law",
    content: (
      <>
        <p>
          Our goods and services come with guarantees that cannot be excluded
          under the Australian Consumer Law. Nothing in these terms excludes,
          restricts or changes those guarantees or any other right you have by
          law.
        </p>
        <p>
          If something about your meal or visit is not right, please tell our
          team on the day so we have the chance to fix it.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    content: (
      <>
        <p>
          To the extent permitted by law, this website is provided &quot;as
          is&quot;. We do not guarantee that it will be uninterrupted,
          error-free or free from viruses, or that its information is always
          complete or current.
        </p>
        <p>
          To the extent permitted by law, we are not liable for any indirect or
          consequential loss arising from your use of the website. Where our
          liability cannot be excluded but can be limited, it is limited to
          supplying the services again or paying the cost of having them
          supplied again.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    content: (
      <p>
        We handle your personal information in line with our{" "}
        <Link href={URLS.PRIVACY}>Privacy Policy</Link>.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    content: (
      <p>
        We may update these terms from time to time. The updated version
        applies from the date it is published on this page, shown as &quot;Last
        updated&quot; at the top. Bookings already confirmed are covered by the
        terms in place when you made them.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    content: (
      <p>
        These terms are governed by the laws of Victoria, Australia. You and we
        submit to the non-exclusive jurisdiction of the courts of Victoria.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <>
        <p>If you have a question about these terms, please contact us:</p>
        <BusinessContactList />
      </>
    ),
  },
];
