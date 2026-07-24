export type Product = {
  id: string;
  name: string;
  category: "Seat Covers" | "Crash Guards" | "Mounts" | "Backrests" | "Carbon Trim";
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  tag?: "New" | "Bestseller" | "Limited";
  image: string;
  gallery: string[];
  colors: { name: string; hex: string }[];
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
};

export const products: Product[] = [
  {
    id: "apex-leather-seat-cover",
    name: "Apex Leather Seat Cover",
    category: "Seat Covers",
    price: 89,
    compareAt: 119,
    rating: 4.8,
    reviews: 214,
    tag: "Bestseller",
    image: "https://picsum.photos/seed/asiad-seat-1/900/900",
    gallery: [
      "https://picsum.photos/seed/asiad-seat-1/1200/1200",
      "https://picsum.photos/seed/asiad-seat-1b/1200/1200",
      "https://picsum.photos/seed/asiad-seat-1c/1200/1200",
    ],
    colors: [
      { name: "Black", hex: "#1a1a1c" },
      { name: "Brown", hex: "#6b4028" },
      { name: "Red", hex: "#8c1f1f" },
    ],
    description:
      "Hand-stitched full-grain leather over a weatherproof base layer. The Apex is built for riders who spend more time on the road than in the garage — UV-stable, waterproof, and cut to a factory-precise fit.",
    specs: [
      { label: "Material", value: "Full-grain leather" },
      { label: "Backing", value: "Weatherproof EVA" },
      { label: "Stitching", value: "Diamond / Straight" },
      { label: "Install time", value: "~12 min, no tools" },
      { label: "Warranty", value: "3 years" },
    ],
    features: [
      "Laser-cut for exact factory fit",
      "UV and water resistant coating",
      "Reinforced double-stitched seams",
      "Grippy underside, zero slip",
    ],
  },
  {
    id: "vantage-suede-seat-cover",
    name: "Vantage Suede Seat Cover",
    category: "Seat Covers",
    price: 74,
    rating: 4.6,
    reviews: 132,
    tag: "New",
    image: "https://picsum.photos/seed/asiad-seat-2/900/900",
    gallery: [
      "https://picsum.photos/seed/asiad-seat-2/1200/1200",
      "https://picsum.photos/seed/asiad-seat-2b/1200/1200",
    ],
    colors: [
      { name: "Black", hex: "#1a1a1c" },
      { name: "Brown", hex: "#6b4028" },
    ],
    description:
      "A softer touch for daily riders. Suede grip keeps you planted through hard braking, while the low-profile edge keeps the stock silhouette of your bike intact.",
    specs: [
      { label: "Material", value: "Micro-suede" },
      { label: "Backing", value: "Foam-cushioned base" },
      { label: "Stitching", value: "Straight" },
      { label: "Install time", value: "~10 min, no tools" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "High-grip suede finish",
      "Extra cushioned base layer",
      "Low-profile factory silhouette",
      "Machine-washable surface",
    ],
  },
  {
    id: "carbon-race-seat-cover",
    name: "Carbon Race Seat Cover",
    category: "Seat Covers",
    price: 129,
    compareAt: 149,
    rating: 4.9,
    reviews: 88,
    tag: "Limited",
    image: "https://picsum.photos/seed/asiad-seat-3/900/900",
    gallery: [
      "https://picsum.photos/seed/asiad-seat-3/1200/1200",
      "https://picsum.photos/seed/asiad-seat-3b/1200/1200",
    ],
    colors: [
      { name: "Black", hex: "#1a1a1c" },
      { name: "Red", hex: "#8c1f1f" },
    ],
    description:
      "Woven carbon-fiber texture over a race-spec composite shell. Built for track days and riders who want the lightest, lowest-drag cover in the lineup.",
    specs: [
      { label: "Material", value: "Carbon-weave composite" },
      { label: "Backing", value: "Rigid composite shell" },
      { label: "Stitching", value: "Diamond" },
      { label: "Install time", value: "~15 min, basic tools" },
      { label: "Warranty", value: "3 years" },
    ],
    features: [
      "Aerospace-grade carbon weave finish",
      "20% lighter than leather equivalents",
      "Track-tested abrasion resistance",
      "Numbered limited production run",
    ],
  },
  {
    id: "sentinel-crash-guard",
    name: "Sentinel Crash Guard",
    category: "Crash Guards",
    price: 149,
    rating: 4.7,
    reviews: 176,
    tag: "Bestseller",
    image: "https://picsum.photos/seed/asiad-guard-1/900/900",
    gallery: [
      "https://picsum.photos/seed/asiad-guard-1/1200/1200",
      "https://picsum.photos/seed/asiad-guard-1b/1200/1200",
    ],
    colors: [
      { name: "Matte Black", hex: "#1a1a1c" },
      { name: "Gunmetal", hex: "#4a4a52" },
    ],
    description:
      "CNC-machined steel tubing engineered to absorb impact away from your fairings and engine casing. Bolt-on install with zero drilling required.",
    specs: [
      { label: "Material", value: "Aircraft-grade steel" },
      { label: "Finish", value: "Powder-coated" },
      { label: "Mounting", value: "Bolt-on, factory points" },
      { label: "Install time", value: "~40 min, basic tools" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Impact-tested to MIL-STD spec",
      "No drilling, factory mount points",
      "Corrosion-resistant powder coat",
      "Compatible with fairing bags",
    ],
  },
  {
    id: "orbit-phone-mount",
    name: "Orbit Phone Mount",
    category: "Mounts",
    price: 39,
    rating: 4.5,
    reviews: 302,
    image: "https://picsum.photos/seed/asiad-mount-1/900/900",
    gallery: [
      "https://picsum.photos/seed/asiad-mount-1/1200/1200",
      "https://picsum.photos/seed/asiad-mount-1b/1200/1200",
    ],
    colors: [{ name: "Black", hex: "#1a1a1c" }],
    description:
      "Vibration-dampened phone mount that clamps to any handlebar in seconds. Ball-joint head rotates 360° for the perfect viewing angle at any lean.",
    specs: [
      { label: "Material", value: "Reinforced polymer + aluminum" },
      { label: "Fit", value: "Handlebars 22–32mm" },
      { label: "Damping", value: "Silicone vibration dampers" },
      { label: "Install time", value: "~3 min, no tools" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "Tool-free clamp mount",
      "360° ball-joint rotation",
      "Vibration dampening silicone core",
      "Fits most phones with/without case",
    ],
  },
  {
    id: "voyager-backrest",
    name: "Voyager Backrest",
    category: "Backrests",
    price: 119,
    rating: 4.6,
    reviews: 94,
    image: "https://picsum.photos/seed/asiad-backrest-1/900/900",
    gallery: [
      "https://picsum.photos/seed/asiad-backrest-1/1200/1200",
      "https://picsum.photos/seed/asiad-backrest-1b/1200/1200",
    ],
    colors: [
      { name: "Black", hex: "#1a1a1c" },
      { name: "Brown", hex: "#6b4028" },
    ],
    description:
      "Padded sissy-bar backrest for long-haul comfort. Quick-release bracket lets you remove it in seconds when you want the stripped-down look back.",
    specs: [
      { label: "Material", value: "Steel frame, leather pad" },
      { label: "Mounting", value: "Quick-release bracket" },
      { label: "Install time", value: "~25 min, basic tools" },
      { label: "Warranty", value: "3 years" },
    ],
    features: [
      "Quick-release, tool-free removal",
      "Contoured lumbar support pad",
      "Rated for two-up touring loads",
      "Matches Apex leather finish",
    ],
  },
  {
    id: "raven-carbon-fender",
    name: "Raven Carbon Fender",
    category: "Carbon Trim",
    price: 179,
    compareAt: 209,
    rating: 4.8,
    reviews: 61,
    tag: "Limited",
    image: "https://picsum.photos/seed/asiad-trim-1/900/900",
    gallery: [
      "https://picsum.photos/seed/asiad-trim-1/1200/1200",
      "https://picsum.photos/seed/asiad-trim-1b/1200/1200",
    ],
    colors: [{ name: "Gloss Carbon", hex: "#141416" }],
    description:
      "Genuine woven carbon-fiber rear fender, autoclave-cured for a mirror gloss finish. Direct bolt-on replacement, no fabrication required.",
    specs: [
      { label: "Material", value: "3K woven carbon fiber" },
      { label: "Cure process", value: "Autoclave, gloss clearcoat" },
      { label: "Mounting", value: "Direct OEM bolt-on" },
      { label: "Warranty", value: "3 years" },
    ],
    features: [
      "Autoclave-cured for max rigidity",
      "40% lighter than stock fender",
      "Mirror gloss clearcoat finish",
      "Direct OEM bolt pattern",
    ],
  },
  {
    id: "ridgeline-tank-grip",
    name: "Ridgeline Tank Grip Pad",
    category: "Carbon Trim",
    price: 45,
    rating: 4.4,
    reviews: 158,
    image: "https://picsum.photos/seed/asiad-trim-2/900/900",
    gallery: [
      "https://picsum.photos/seed/asiad-trim-2/1200/1200",
      "https://picsum.photos/seed/asiad-trim-2b/1200/1200",
    ],
    colors: [{ name: "Black", hex: "#1a1a1c" }],
    description:
      "3D-textured traction pads for the tank. Keeps your knees locked in under braking without scratching the paint underneath.",
    specs: [
      { label: "Material", value: "3D micro-textured polymer" },
      { label: "Adhesive", value: "Automotive-grade 3M" },
      { label: "Install time", value: "~8 min, no tools" },
      { label: "Warranty", value: "1 year" },
    ],
    features: [
      "Paint-safe automotive adhesive",
      "3D traction texture, all weather",
      "Trims to fit any tank shape",
      "Residue-free removal",
    ],
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function getRelated(id: string, category: string, count = 4) {
  return products.filter((p) => p.id !== id && p.category === category).slice(0, count).length
    ? products.filter((p) => p.id !== id && p.category === category).slice(0, count)
    : products.filter((p) => p.id !== id).slice(0, count);
}
