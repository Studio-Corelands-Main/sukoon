// Placeholder details until the client confirms them. The ABN line only
// renders once abn is filled in.
export const BUSINESS = {
  name: "Sukoon",
  legalName: "Sukoon",
  abn: "",
  address: "498-500 Mt Alexander Road, Ascot Vale VIC 3032",
  email: "info@sukoonindianrestaurant.com.au",
  phone: " 03 9495 6762",
  phoneHref: "tel:0394956762",
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
