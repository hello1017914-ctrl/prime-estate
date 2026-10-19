/**
 * Featured properties drawn from Mary Wassef's published marketing
 * (Acres Place / James Franklin Street). Live MLS/IDX feed is not
 * connected yet - confirm availability before treating as active inventory.
 */
export type Property = {
  slug: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  status: "Featured" | "Sample";
  neighborhood: string;
  type: string;
  description: string;
  image: string;
  sampleNote?: string;
};

export const properties: Property[] = [
  {
    slug: "8316-james-franklin-street",
    address: "8316 James Franklin Street",
    city: "Houston",
    state: "TX",
    zip: "77088",
    price: 329000,
    beds: 4,
    baths: 2.5,
    sqft: 2000,
    status: "Sample",
    neighborhood: "Acres Place",
    type: "Single Family",
    description:
      "A 4-bedroom, 2.5-bathroom home in the Acres Place development with an open living plan, luxurious finishes, a large fenced yard, and over 2,000 square feet of living space - minutes from the heart of Houston.",
    image: "/images/properties/home-1.jpg",
    sampleNote:
      "Sample listing data from published marketing. Confirm current availability with Mary.",
  },
  {
    slug: "8414-james-franklin-street",
    address: "8414 James Franklin Street",
    city: "Houston",
    state: "TX",
    zip: "77088",
    price: 329000,
    beds: 4,
    baths: 3.5,
    sqft: 2106,
    status: "Sample",
    neighborhood: "Acres Place",
    type: "Single Family",
    description:
      "The Mahogany floor plan offers four bedrooms, 3.5 baths, high-end finishes, a garage, and a downstairs primary suite with en-suite bath and walk-in closet on a 7,020-square-foot lot.",
    image: "/images/properties/home-2.jpg",
    sampleNote:
      "Sample listing data from published marketing. Confirm current availability with Mary.",
  },
  {
    slug: "8111-james-franklin-street",
    address: "8111 James Franklin Street",
    city: "Houston",
    state: "TX",
    zip: "77088",
    price: 319000,
    beds: 4,
    baths: 2.5,
    sqft: 1974,
    status: "Sample",
    neighborhood: "Acres Place",
    type: "Single Family",
    description:
      "A stunning four-bedroom, 2.5-bathroom new-construction home with a downstairs primary bedroom, modern finishes, a huge fenced yard, garage, and bright open rooms in Northwest Houston.",
    image: "/images/properties/home-3.jpg",
    sampleNote:
      "Sample listing data from published marketing. Confirm current availability with Mary.",
  },
  {
    slug: "8211-james-franklin-street",
    address: "8211 James Franklin Street",
    city: "Houston",
    state: "TX",
    zip: "77088",
    price: 325000,
    beds: 4,
    baths: 2.5,
    sqft: 2050,
    status: "Sample",
    neighborhood: "Acres Place",
    type: "Single Family",
    description:
      "Featured Acres Place residence marketed through Mary Wassef - modern near-town living with quality construction and access to Inner Loop amenities.",
    image: "/images/properties/home-4.jpg",
    sampleNote:
      "Sample listing data from published marketing. Confirm current availability with Mary.",
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function filterProperties(filters: {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  type?: string;
  status?: string;
}): Property[] {
  return properties.filter((p) => {
    if (filters.location && filters.location !== "all") {
      const q = filters.location.toLowerCase();
      if (
        !p.neighborhood.toLowerCase().includes(q) &&
        !p.city.toLowerCase().includes(q) &&
        !p.zip.includes(q)
      ) {
        return false;
      }
    }
    if (filters.minPrice != null && p.price < filters.minPrice) return false;
    if (filters.maxPrice != null && p.price > filters.maxPrice) return false;
    if (filters.beds != null && filters.beds > 0 && p.beds < filters.beds)
      return false;
    if (filters.type && filters.type !== "all" && p.type !== filters.type)
      return false;
    if (filters.status && filters.status !== "all" && p.status !== filters.status)
      return false;
    return true;
  });
}
