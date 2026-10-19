export type Neighborhood = {
  slug: string;
  name: string;
  mapLabel: string;
  summary: string;
  priceRange: string;
  highlights: string[];
  /** Short body for the map scroll sections */
  body: string[];
  image: string;
  /** Percentage positions on the Heights map (left, top) — centers of original navy labels */
  mapPin: { left: number; top: number };
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: "garden-oaks",
    name: "Garden Oaks / Oak Forest",
    mapLabel: "Garden Oaks / Oak Forest",
    summary: "Large lots, mature trees, and one of Houston’s top elementary schools.",
    priceRange: "$300K - $1.4M",
    highlights: ["Large lots", "Garden Oaks Elementary", "Cottages to new builds"],
    body: [
      "Quiet streets with oversized lots and tall trees. Expect cottages, updated ranches, and newer luxury homes, plus top-rated Garden Oaks Elementary nearby.",
    ],
    image: "/images/neighborhoods/garden-oaks.jpg",
    mapPin: { left: 15.18, top: 3.28 },
  },
  {
    slug: "shady-acres",
    name: "Shady Acres",
    mapLabel: "Shady Acres",
    summary: "Newer townhomes and cottages with quick access to Downtown.",
    priceRange: "$300K - $550K",
    highlights: ["Multi-level homes", "White Oak Bayou trail", "Near Downtown"],
    body: [
      "Part of Greater Heights inside the northwest Loop. Mostly newer three- and four-story homes, with prices often in the $300K-$550K range and the bayou trail close by.",
    ],
    image: "/images/neighborhoods/shady-acres.jpg",
    mapPin: { left: 25.87, top: 17.95 },
  },
  {
    slug: "lazybrook-timbergrove",
    name: "Lazybrook / Timbergrove",
    mapLabel: "Lazybrook / Timbergrove",
    summary: "Mid-century homes, mature trees, and larger lots near the Heights.",
    priceRange: "$350K - $1M",
    highlights: ["Large lots", "TC Jester Park", "White Oak Bayou"],
    body: [
      "1950s-60s ranch charm on bigger lots minutes from the Heights. Strong for renovators and new construction, with TC Jester Park and the bayou as everyday amenities.",
    ],
    image: "/images/neighborhoods/timbergrove.jpg",
    mapPin: { left: 14.6, top: 55.34 },
  },
  {
    slug: "cottage-grove",
    name: "Cottage Grove",
    mapLabel: "Cottage Grove",
    summary: "Attainable near-town living beside Memorial Park and I-10.",
    priceRange: "$300K - $500K",
    highlights: ["Near Memorial Park", "I-10 access", "HISD options"],
    body: [
      "Two- and three-story homes inside the Loop, often $300K-$500K. Memorial Park is nearby, errands are walkable, and I-10 makes commuting easy.",
    ],
    image: "/images/neighborhoods/cottage-grove.jpg",
    mapPin: { left: 11.75, top: 78.57 },
  },
  {
    slug: "houston-heights",
    name: "Houston Heights",
    mapLabel: "Houston Heights",
    summary: "Historic charm, walkable streets, and Houston’s best-known inner-loop neighborhood.",
    priceRange: "$500K - $1.6M",
    highlights: ["Craftsman & new builds", "19th Street", "Parks & trails"],
    body: [
      "1920s-30s classics mixed with new construction. Walk to 19th Street dining and shopping, with bungalows and larger new homes typically from about $500K to $1.6M.",
    ],
    image: "/images/neighborhoods/houston-heights.jpg",
    mapPin: { left: 36.07, top: 52.57 },
  },
  {
    slug: "sunset-heights",
    name: "Sunset Heights",
    mapLabel: "Sunset Heights",
    summary: "Renovated bungalows and new doubles just north of the historic Heights.",
    priceRange: "$300K - $800K",
    highlights: ["Renovated bungalows", "Alley-access garages", "Active civic club"],
    body: [
      "North of the Heights and about three miles from Downtown. Renovated bungalows and new double-gallery homes, with an active civic club keeping the neighborhood close-knit.",
    ],
    image: "/images/neighborhoods/sunset.jpg",
    mapPin: { left: 68.91, top: 10.62 },
  },
  {
    slug: "brooke-smith",
    name: "Brooke Smith",
    mapLabel: "Brookesmith",
    summary: "Bungalows, cottages, and Montie Beach Park in a central near-town pocket.",
    priceRange: "$280K - $800K",
    highlights: ["Updated bungalows", "Montie Beach Park", "METRORail nearby"],
    body: [
      "Between Norhill, the Heights, and Woodland Heights. Mix of cottages and updated bungalows, with Montie Beach Park at the center and easy access to North Main and I-45.",
    ],
    image: "/images/neighborhoods/brooke-smith.jpg",
    mapPin: { left: 85.69, top: 33.14 },
  },
  {
    slug: "norhill",
    name: "North + East Norhill",
    mapLabel: "North & East Norhill",
    summary: "An intact bungalow district next to the Heights and Woodland Heights.",
    priceRange: "$400K - $800K",
    highlights: ["1920s-30s bungalows", "Historic district", "Nearby parks"],
    body: [
      "One of Houston’s most consistent bungalow collections. Updated homes with additions often run $400K-$800K, inside a designated historic district with parks close by.",
    ],
    image: "/images/neighborhoods/norhill.jpg",
    mapPin: { left: 76.26, top: 41.12 },
  },
  {
    slug: "woodland-heights",
    name: "Woodland Heights",
    mapLabel: "Woodland Heights",
    summary: "Tree-lined streets, classic bungalows, and strong HISD schools.",
    priceRange: "$500K - $1.6M",
    highlights: ["Tree canopy", "Harvard & Travis", "Stude & Woodland parks"],
    body: [
      "Lush canopy and character homes southeast inside the Loop. Updated bungalows and larger new builds, with top elementary schools and easy access to parks and dining.",
    ],
    image: "/images/neighborhoods/woodland.jpg",
    mapPin: { left: 88.15, top: 62.55 },
  },
];

/** Extra map pin that also targets Norhill (label appears separately on the map art) */
export const mapExtraPins: { slug: string; label: string; left: number; top: number }[] = [
  { slug: "norhill", label: "Norhill", left: 68.96, top: 74.45 },
];

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}
