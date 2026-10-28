import type { LegalSectionI } from "@/app/types/LegalSectionTypes";
import { BUSINESS, BusinessContactList } from "./business";

export const privacySections: LegalSectionI[] = [
  {
    id: "our-commitment",
    title: "Our commitment",
    content: (
      <>
        <p>
          {BUSINESS.name} respects your privacy. This policy explains how we
          collect, use, store and share personal information when you visit our
          website, contact us, book a table or dine with us.
        </p>
        <p>
          We handle personal information in line with the Privacy Act 1988
          (Cth) and the Australian Privacy Principles.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <>
        <p>
          We only collect what we need. Depending on how you deal with us, this
          may include:
        </p>
        <ul>
          <li>
            <strong>Contact details:</strong> your first and last name, email
            address and phone number.
          </li>
          <li>
            <strong>Enquiry details:</strong> the message you send us and any
            details of your request, such as a celebration or event.
          </li>
          <li>
            <strong>Booking details:</strong> the date, time and number of
            guests, any special occasion and notes you add to your booking.
          </li>
          <li>
            <strong>Dietary and allergy information:</strong> details you
            choose to share so we can prepare your meal safely.
          </li>
          <li>
            <strong>Payment information:</strong> if a deposit or card
            guarantee is needed, it is processed by our booking or payment
            provider. We do not store card numbers on this website.
          </li>
          <li>
            <strong>Website usage information:</strong> technical details such
            as your IP address, browser, device type and the pages you visit.
          </li>
        </ul>
        <p>
          You can browse our website without telling us who you are. If you
          choose not to give us certain information, we may not be able to take
          your booking or respond to your enquiry.
        </p>
      </>
    ),
  },
  {
    id: "how-we-collect",
    title: "How we collect it",
    content: (
      <>
        <p>We collect personal information:</p>
        <ul>
          <li>
            directly from you, when you complete our contact form, email or
            call us, or speak with our team at the restaurant;
          </li>
          <li>through our booking platform, when you reserve a table online;</li>
          <li>
            automatically, when you use our website (see Cookies and analytics
            below);
          </li>
          <li>when you message us through our social media pages.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    content: (
      <>
        <p>We use your personal information to:</p>
        <ul>
          <li>respond to your enquiries and requests;</li>
          <li>
            manage your bookings, including sending confirmations and
            reminders;
          </li>
          <li>accommodate your dietary requirements and allergies;</li>
          <li>improve our food, service and website;</li>
          <li>
            send you news and offers, but only if you have agreed to receive
            them;
          </li>
          <li>meet our legal obligations.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </>
    ),
  },
  {
    id: "health-information",
    title: "Allergy and health information",
    content: (
      <p>
        Information about allergies or medical dietary needs is health
        information, which the law treats as sensitive. We only collect it with
        your consent, only use it to prepare and serve your food safely, and
        only share it with the team members who need it.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    content: (
      <>
        <p>
          We share personal information only where it is needed to run our
          business, with:
        </p>
        <ul>
          <li>our booking platform and payment providers;</li>
          <li>our website hosting, email and IT service providers;</li>
          <li>professional advisers, such as our accountant or lawyer;</li>
          <li>government agencies or law enforcement, when the law requires it.</li>
        </ul>
        <p>
          These providers may only use your information to provide their
          services to us.
        </p>
      </>
    ),
  },
  {
    id: "overseas",
    title: "Overseas storage",
    content: (
      <p>
        Some of our service providers, such as website hosting, email and
        booking platforms, may store information on servers outside Australia,
        including in the United States. When we use these providers, we take
        reasonable steps to make sure they protect your information in line
        with Australian privacy law.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    content: (
      <>
        <p>
          Cookies are small files saved by your browser. Our website uses
          cookies it needs to work, and may use analytics cookies to understand
          how visitors use the site so we can improve it. Analytics information
          is combined across visitors and does not identify you personally.
        </p>
        <p>
          You can block or delete cookies in your browser settings. Some parts
          of the website, such as embedded booking tools, may not work properly
          without them.
        </p>
      </>
    ),
  },
  {
    id: "marketing",
    title: "Marketing",
    content: (
      <p>
        We will only send you marketing emails or messages if you have agreed
        to receive them. Every message includes a way to unsubscribe, and you
        can ask us to stop at any time.
      </p>
    ),
  },
  {
    id: "security",
    title: "Storage and security",
    content: (
      <>
        <p>
          We take reasonable steps to protect your information from misuse,
          loss and unauthorised access, including using reputable service
          providers and limiting access to the people who need it.
        </p>
        <p>
          No method of sending information over the internet is completely
          secure, so please do not send sensitive details, such as card
          numbers, through our contact form.
        </p>
        <p>
          We keep personal information only for as long as we need it for the
          purposes in this policy or as required by law. After that, we
          securely delete or de-identify it.
        </p>
      </>
    ),
  },
  {
    id: "access-and-correction",
    title: "Accessing and correcting your information",
    content: (
      <p>
        You can ask to see the personal information we hold about you, or ask
        us to correct it, by contacting us using the details below. We will
        respond within 30 days. If we cannot give you access, we will explain
        why.
      </p>
    ),
  },
  {
    id: "complaints",
    title: "Complaints",
    content: (
      <>
        <p>
          If you are concerned about how we have handled your personal
          information, please contact us first. We will look into your
          complaint and respond within 30 days.
        </p>
        <p>
          If you are not satisfied with our response, you can contact the
          Office of the Australian Information Commissioner (OAIC) at{" "}
          <a
            href="https://www.oaic.gov.au"
            target="_blank"
            rel="noopener noreferrer"
          >
            oaic.gov.au
          </a>{" "}
          or on 1300 363 992.
        </p>
      </>
    ),
  },
  {
    id: "other-websites",
    title: "Other websites",
    content: (
      <p>
        Our website links to other websites and services, such as social
        media, maps and booking platforms. This policy does not cover them, so
        please read their own privacy policies.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this policy from time to time. The latest version will
        always be on this page, with the date it was last updated shown at the
        top.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <>
        <p>For privacy questions or requests, please contact us:</p>
        <BusinessContactList />
      </>
    ),
  },
];
