// Placeholder details until the client confirms them. The ABN line only
// renders once abn is filled in.
export const BUSINESS = {
  name: "Sukoon",
  legalName: "Sukoon",
  abn: "",
  address: "498-500 Mt Alexander Road, Ascot Vale VIC 3032",
  email: "email@domain.com.au",
  phone: "04 000 0000",
  phoneHref: "tel:0400000000",
};

export const LEGAL_LAST_UPDATED = "28 October 2026";

export const BusinessContactList = () => (
  <ul>
    <li>
      Email: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
    </li>
    <li>
      Phone: <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
    </li>
    <li>Address: {BUSINESS.address}</li>
  </ul>
);
