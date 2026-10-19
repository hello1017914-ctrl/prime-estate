export const site = {
  name: "Mary Wassef",
  title: "Team Lead | Broker Associate",
  credentials: "ABR® | CLHMS",
  tagline: "Houston Heights Realtor®",
  brokerage: "Realty of America",
  description:
    "Five-Star Houston Heights Realtor® with two decades of local residency and deep experience in luxury and historic homes across the Heights and near-town Houston.",
  url: "https://marywassef.com",
  email: "mary@marywassef.com",
  mobile: "713.398.8719",
  mobileHref: "tel:+17133988719",
  office: "713.862.1101",
  officeHref: "tel:+17138621101",
  address: {
    line1: "603 W. 11th Street, #100",
    line2: "Houston, TX 77008",
  },
  yearsInHeights: 20,
  yearsInRealEstate: 17,
  careerStart: 2003,
  googleRating: "Five-Star Google Rating for over a decade",
  listingAccuracy: "Listings sell, on average, within 2% of list price",
} as const;

export const navLinks = [
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/about", label: "About" },
  { href: "/client-stories", label: "Client Stories" },
  { href: "/contact", label: "Contact" },
] as const;
