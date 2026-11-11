const SITE_URL = "https://www.sukoonindianrestaurant.com.au";

const ids = {
  restaurant: `${SITE_URL}/#restaurant`,
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  menu: `${SITE_URL}/menu#menu`,
};

function breadcrumb(page?: { name: string; path: string }) {
  const items = [{ name: "Home", item: `${SITE_URL}/` }];
  if (page) items.push({ name: page.name, item: `${SITE_URL}${page.path}` });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      ...it,
    })),
  };
}

export const homeSchema = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": ids.restaurant,
        name: "Sukoon Indian Restaurant",
        url: `${SITE_URL}/`,
        description:
          "Sukoon Indian Restaurant offers contemporary Indian dining in Ascot Vale, Melbourne, with rich curries, smoky grills, fragrant rice dishes, traditional Indian flavours and warm hospitality.",
        telephone: "+61 3 9495 6762",
        email: "info@sukoonindianrestaurant.com.au",
        priceRange: "$$",
        servesCuisine: ["Indian", "North Indian"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "498-500 Mt Alexander Road",
          addressLocality: "Ascot Vale",
          addressRegion: "Victoria",
          postalCode: "3032",
          addressCountry: "AU",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "17:00",
            closes: "23:00",
          },
        ],
        hasMenu: { "@id": ids.menu },
      },
      {
        "@type": "Organization",
        "@id": ids.organization,
        name: "Sukoon Indian Restaurant",
        url: `${SITE_URL}/`,
        email: "info@sukoonindianrestaurant.com.au",
        telephone: "+61 3 9495 6762",
      },
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: `${SITE_URL}/`,
        name: "Sukoon Indian Restaurant",
        publisher: { "@id": ids.organization },
        inLanguage: "en-AU",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: "Sukoon Indian Restaurant | Contemporary Indian Dining in Ascot Vale",
        description:
          "Discover contemporary Indian dining at Sukoon Indian Restaurant in Ascot Vale, Melbourne. Enjoy rich curries, smoky grills and traditional Indian flavours.",
        isPartOf: { "@id": ids.website },
        about: { "@id": ids.restaurant },
        inLanguage: "en-AU",
      },
    ],
  },
  breadcrumb(),
];

export const aboutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: "Our Story | Sukoon Indian Restaurant",
    description:
      "Discover the story behind Sukoon Indian Restaurant, inspired by Indian culture, traditional recipes, contemporary dining and genuine hospitality in Ascot Vale, Melbourne.",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.restaurant },
    mainEntity: { "@id": ids.restaurant },
    inLanguage: "en-AU",
  },
  breadcrumb({ name: "About Us", path: "/about" }),
];

export const menuSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": ids.menu,
    name: "Sukoon Indian Restaurant Menu",
    url: `${SITE_URL}/menu`,
    inLanguage: "en-AU",
    hasMenuSection: [
      { "@type": "MenuSection", name: "Drinks" },
      { "@type": "MenuSection", name: "Tikki Bar Menu" },
      { "@type": "MenuSection", name: "Food" },
    ],
    provider: { "@id": ids.restaurant },
  },
  breadcrumb({ name: "Menu", path: "/menu" }),
];

export const gallerySchema = [
  {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${SITE_URL}/gallery#gallery`,
    url: `${SITE_URL}/gallery`,
    name: "Sukoon Indian Restaurant Gallery",
    description:
      "Explore the food, drinks, restaurant interiors and dining experience at Sukoon Indian Restaurant in Ascot Vale, Melbourne.",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.restaurant },
    inLanguage: "en-AU",
  },
  breadcrumb({ name: "Gallery", path: "/gallery" }),
];

export const contactSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name: "Contact Sukoon Indian Restaurant | Ascot Vale",
    description:
      "Contact Sukoon Indian Restaurant in Ascot Vale, Melbourne, for dining enquiries, table reservations, celebrations and special requests.",
    isPartOf: { "@id": ids.website },
    mainEntity: { "@id": ids.restaurant },
    about: { "@id": ids.restaurant },
    inLanguage: "en-AU",
  },
  breadcrumb({ name: "Contact", path: "/contact" }),
];
