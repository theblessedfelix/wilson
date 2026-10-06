export interface Project {
  id: string;
  title: string;
  shortTitle?: string;
  duration?: string;
  category: string;
  tag: string;
  image: string;
  aspect?: string;
  summary: string;
  metrics: string[];
  challenge: string;
  solution: string;
  tools: string[];
  features: string[];
  externalUrl?: string;
  pdfUrl?: string;
}

export interface Profile {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  rating: string;
  ratingScore: string;
  roleBadge: string;
  bio: string;
  avatar: string;
  email: string;
  availableForWork: boolean;
  location: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export const profiles: Record<string, Profile> = {
  wilson: {
    id: "wilson",
    name: "Wilson Churchill",
    firstName: "Wilson",
    lastName: "Churchill",
    title: "Process-Driven Product & Brand Designer",
    rating: "4.9 / 5",
    ratingScore: "4.9",
    roleBadge: "Brand & Mobile UI/UX Specialist",
    bio: "I craft distinctive brand identities, logo systems, graphic design collateral, and high-converting mobile app interfaces.",
    avatar: "/images/avatar.png",
    email: "wilson@churchill.design",
    availableForWork: true,
    location: "London, UK • Remote",
    stats: [
      { label: "Client Rating", value: "4.9 / 5" },
      { label: "Brand Systems Built", value: "35+" },
      { label: "Experience", value: "6+ Years" },
      { label: "Client Retention", value: "96%" },
    ],
  },
  victor: {
    id: "victor",
    name: "Victor Ogutuga",
    firstName: "Victor",
    lastName: "Ogutuga",
    title: "Process-Driven Product & Brand Designer",
    rating: "4.9 / 5",
    ratingScore: "4.9",
    roleBadge: "Brand & Mobile UI/UX Specialist",
    bio: "I craft distinctive brand identities, logo systems, graphic design collateral, and high-converting mobile app interfaces.",
    avatar: "/images/avatar.png",
    email: "victor@ogutuga.design",
    availableForWork: true,
    location: "London, UK • Remote",
    stats: [
      { label: "Client Rating", value: "4.9 / 5" },
      { label: "Brand Systems Built", value: "35+" },
      { label: "Experience", value: "6+ Years" },
      { label: "Client Retention", value: "96%" },
    ],
  },
};

export const projects: Project[] = [
  {
    id: "volt-brand-guide",
    title: "Volt Electric Mobility Identity",
    shortTitle: "Volt Identity",
    duration: "3 Weeks",
    category: "Brand & Logo Design",
    tag: "Logo System • Brand Book • EV Energy • 2024",
    image: "/projects/volt-brand-guide.png",
    pdfUrl: "/projects/volt-brand-guide.pdf",
    aspect: "landscape",
    summary:
      "Charge Into the Future with Volt — A high-octane clean energy and electric vehicle brand identity, built with high-visibility neon bolt typography and urban billboard specifications.",
    metrics: ["100% Vector Logo Suite", "Full Brand Book PDF", "Urban Billboard Specs"],
    challenge:
      "Electric mobility platforms needed a bold, high-visibility visual identity capable of cutting through dark urban landscapes, digital charging apps, and physical station hubs.",
    solution:
      "Engineered an energetic neon-green bolt icon paired with high-contrast slate aesthetics, flexible modular logo lockups, and comprehensive outdoor media guidelines.",
    tools: ["Adobe Illustrator", "Figma", "Photoshop Mockups", "Brand Identity System"],
    features: [
      "Dynamic electric bolt monogram & modular icon lockups",
      "High-impact billboard & urban charging station graphics",
      "Color system tuned for high-contrast visibility",
      "Full downloadable PDF brand identity manual",
    ],
  },
  {
    id: "locx-luxury",
    title: "LOCX Luxury Brand Identity",
    shortTitle: "LOCX Luxury",
    duration: "4 Weeks",
    category: "Brand & Logo Design",
    tag: "Logo Design • Precision Crest • Luxury • 2024",
    image: "/projects/locx-luxury-brand-guide.png",
    pdfUrl: "/projects/locx-luxury-brand-guide.pdf",
    aspect: "landscape",
    summary:
      "Precision-crafted luxury brand mark and geometric crest engineered with mathematical proportions and deep burgundy aesthetics for high-end fashion and lifestyle accessories.",
    metrics: ["Golden Ratio Geometry", "Full Brand Manual PDF", "Luxury Embossing Specs"],
    challenge:
      "Architecting a timeless luxury crest that achieves perfect mathematical harmony across digital storefronts, watch faces, and physical leather goods embossing.",
    solution:
      "Formulated a golden-ratio geometric emblem surrounded by high-precision blueprint gridlines, rich tone-on-tone burgundy palettes, and refined serif typography.",
    tools: ["Adobe Illustrator", "Grid Geometry", "Figma", "Brand Manual Specs"],
    features: [
      "Golden-ratio geometric crest with blueprint grid vectors",
      "Monogram & brand icon variations for small-scale embossing",
      "Sophisticated burgundy & champagne foil guidelines",
      "Full downloadable PDF brand identity manual",
    ],
  },
  {
    id: "korean-mart",
    title: "Korea Mart Cultural Brand Guide",
    shortTitle: "Korea Mart",
    duration: "3 Weeks",
    category: "Brand & Logo Design",
    tag: "Logo System • Retail & Culinary • Bilingual • 2024",
    image: "/projects/korean-mart-brand-guide.png",
    pdfUrl: "/projects/korean-mart-brand-guide.pdf",
    aspect: "landscape",
    summary:
      "Authentic bilingual brand identity (한국 마트) for a modern Asian culinary marketplace, harmonizing traditional Korean Hanok roof architecture with a steaming ramen bowl icon.",
    metrics: ["Bilingual Typography", "24-Page Brand Book PDF", "Packaging & Retail Suite"],
    challenge:
      "Fusing authentic Korean culinary heritage with modern retail aesthetics to attract international food enthusiasts and local shoppers alike.",
    solution:
      "Designed a pagoda-topped noodle bowl logo mark combined with custom Hangul (한국 마트) typography, lilac packaging accents, and warm culinary photography guidelines.",
    tools: ["Adobe Illustrator", "Typography System", "Figma", "Packaging Design"],
    features: [
      "Steaming noodle bowl + Hanok pagoda icon mark",
      "Bilingual Hangul & English typography hierarchy",
      "Storefront signage, grocery bags & packaging suite",
      "Full downloadable PDF brand identity manual",
    ],
  },
  {
    id: "blauvax-identity",
    title: "Blauvax Monogram Identity",
    shortTitle: "Blauvax",
    duration: "2 Weeks",
    category: "Brand & Logo Design",
    tag: "Logo Design • Monogram • Corporate Luxury • 2024",
    image: "/projects/blauvax-brand-guide.png",
    pdfUrl: "/projects/blauvax-brand-guide.pdf",
    aspect: "landscape",
    summary:
      "Elegantly intertwined 'B' monogram emblem set against rich emerald silk aesthetics, crafted for corporate distinction, trust, and premium brand positioning.",
    metrics: ["Interlocking Monogram", "Full PDF Brand Manual", "Executive Stationery"],
    challenge:
      "Creating an authoritative corporate mark that projects prestige, structural security, and visual elegance across executive touchpoints.",
    solution:
      "Designed a fluid interlocking monogram paired with champagne gold typography and deep emerald silk background textures for digital and printed media.",
    tools: ["Adobe Illustrator", "Figma", "Vector Craft", "Stationery Design"],
    features: [
      "Interlocking 'B' monogram logo mark",
      "Deep emerald & champagne gold brand palette",
      "Executive business card & letterhead guidelines",
      "Full downloadable PDF brand identity manual",
    ],
  },
  {
    id: "space-for-hope",
    title: "Space For Hope Foundation",
    shortTitle: "Space For Hope",
    duration: "3 Weeks",
    category: "Brand & Logo Design",
    tag: "Logo Design • Non-Profit • Architectural • 2024",
    image: "/projects/space-for-hope-brand-guide.png",
    pdfUrl: "/projects/space-for-hope-brand-guide.pdf",
    aspect: "landscape",
    summary:
      "Architectural sunburst logo mark and warm environmental brand identity created for a humanitarian housing and community sanctuary foundation.",
    metrics: ["Humanitarian Brand System", "Full PDF Manual", "Terracotta Tone Palette"],
    challenge:
      "Communicating structural sanctuary, hope, and community warmth for a non-profit dedicated to shelter and architectural empowerment.",
    solution:
      "Developed a geometric perspective sunburst mark representing light through architectural window structures, anchored in warm earth tones.",
    tools: ["Adobe Illustrator", "Figma", "Brand Strategy", "Editorial Layout"],
    features: [
      "Perspective sunburst architectural mark",
      "Warm terracotta & natural clay color harmony",
      "Fundraising campaign & annual report templates",
      "Full downloadable PDF brand identity manual",
    ],
  },
  {
    id: "la-maison",
    title: "La Maison Premium Experience",
    shortTitle: "La Maison",
    duration: "2 Weeks",
    category: "Brand & Logo Design",
    tag: "Logo Design • Hospitality & Events • Script • 2024",
    image: "/projects/la-maison-brand-guide.png",
    pdfUrl: "/projects/la-maison-brand-guide.pdf",
    aspect: "landscape",
    summary:
      "Vibrant French hospitality brand identity — 'l'expérience premium de fête' — combining custom handwritten script with playful circular stamp badges.",
    metrics: ["Handcrafted Script", "Full PDF Brand Manual", "Hospitality Signage"],
    challenge:
      "Creating a high-energy yet sophisticated visual identity for a luxury French celebration and event host brand.",
    solution:
      "Blended expressive calligraphic script typography with a bold coral orange badge accent and deep forest green backdrop for an inviting atmosphere.",
    tools: ["Custom Calligraphy", "Adobe Illustrator", "Figma", "Print Specs"],
    features: [
      "Expressive handcrafted script wordmark",
      "Circular premium badge stamp system",
      "Vibrant coral orange & forest green color harmony",
      "Full downloadable PDF brand identity manual",
    ],
  },
  {
    id: "retaler-tech",
    title: "ReTaler SaaS Logo System",
    shortTitle: "ReTaler",
    duration: "2 Weeks",
    category: "Brand & Logo Design",
    tag: "Logo Design • Retail Tech • SaaS Brand • 2024",
    image: "/projects/retaler-brand-guide.png",
    pdfUrl: "/projects/retaler-brand-guide.pdf",
    aspect: "landscape",
    summary:
      "Modern futuristic wordmark system for a retail technology and intelligent point-of-sale platform, built with extended geometric letterforms.",
    metrics: ["Custom Extended Types", "Full PDF Brand Guide", "SaaS App Identity"],
    challenge:
      "Designing a sleek tech identity that stands out in the competitive retail analytics and point-of-sale software industry.",
    solution:
      "Crafted an ultra-wide geometric letterform wordmark with unique cutouts in periwinkle blue, conveying speed, modularity, and modern tech.",
    tools: ["Adobe Illustrator", "Figma", "Typography Design", "Digital Identity"],
    features: [
      "Custom extended geometric wordmark system",
      "Periwinkle & cobalt blue tech color palette",
      "App icon & SaaS dashboard visual branding",
      "Full downloadable PDF brand identity manual",
    ],
  },
  {
    id: "agrolink",
    title: "AgroLink Marketplace Platform",
    shortTitle: "AgroLink",
    duration: "4 Weeks",
    category: "Mobile App UI & UX",
    tag: "Mobile App • Design System • AgriTech • 2024",
    image: "/images/agrolink-phone.jpg",
    aspect: "portrait",
    summary:
      "A seamless farm-to-table digital marketplace mobile app connecting local organic farmers directly with buyers and grocery distributors.",
    metrics: ["+54% Farmer Profit Margin", "4.9★ User Rating", "40k+ Active Buyers"],
    challenge:
      "Small-scale organic farmers struggled with middleman price gouging and complex logistics management for fresh crop deliveries.",
    solution:
      "Designed a clean mobile marketplace with live produce bidding, direct farmer-to-buyer messaging, automated route optimization, and localized weather insights.",
    tools: ["Figma", "iOS Human Interface Guidelines", "Design Tokens", "React Native"],
    features: [
      "Real-time crop auction and direct bidding portal",
      "Localized weather alerts and harvest schedule planner",
      "Integrated mobile escrow payments with instant payout",
      "Verified organic farmer certification badges",
    ],
  },
  {
    id: "banking-app",
    title: "Fintech Multi-Currency App",
    shortTitle: "Fintech App",
    duration: "3 Weeks",
    category: "Mobile App UI & UX",
    tag: "iOS App • Mobile Banking • Design System • 2024",
    image: "/images/banking-iphone.png",
    aspect: "portrait",
    summary:
      "A streamlined multi-currency banking and rewards mobile experience with instant transfers, transparent foreign exchange, and smart rewards.",
    metrics: ["+42% Daily Active Users", "4.8★ App Store Rating", "120k+ Accounts Managed"],
    challenge:
      "Traditional multi-currency banking apps suffer from slow transfer friction, convoluted FX fee structures, and fragmented payment histories.",
    solution:
      "Architected a modular card layout with swipe-able multi-currency accounts (GBP, NGN, GHS), single-tap recurring beneficiary transfers, and clean reward progress badges.",
    tools: ["Figma", "iOS Human Interface Guidelines", "Design Tokens", "Framer"],
    features: [
      "Instant GBP, NGN, and GHS multi-currency balances",
      "One-tap quick transfer to frequent contacts",
      "Tiered reward points converter with live cash equivalent",
      "Interactive transaction timeline with category spending filters",
    ],
    externalUrl: "https://monzo.com",
  },
  {
    id: "somna-health",
    title: "Somna Circadian Wellness",
    shortTitle: "Somna Health",
    duration: "3 Weeks",
    category: "Mobile App UI & UX",
    tag: "Mobile App • HealthTech • Restorative UI • 2024",
    image: "/images/health-sleep.png",
    aspect: "portrait",
    summary:
      "Mindful circadian tracking and restorative sleep architecture app designed to help users understand why their energy drains and wake up revitalized.",
    metrics: ["88% Improved Sleep", "App Store 'App of the Day'", "250k+ Active Users"],
    challenge:
      "Most sleep apps generate waking anxiety by confronting users with alarming red warning scores and punitive sleep debt metrics first thing in the morning.",
    solution:
      "Introduced a soothing botanical aesthetic with gentle morning check-ins, circadian energy curve predictions, and bite-sized restorative habits.",
    tools: ["Figma", "Illustration Direction", "Interactive Prototyping", "Design System"],
    features: [
      "Gentle morning check-ins with natural biometric sync",
      "Predictive circadian energy peak & valley timeline",
      "Guided breathwork and sleep onset audio soundscapes",
      "Non-punitive restorative sleep quality scoring",
    ],
  },
  {
    id: "apex-neo",
    title: "Apex Neo Handheld Racing HUD",
    shortTitle: "Apex Neo",
    duration: "4 Weeks",
    category: "Graphic & UI Design",
    tag: "Game HUD • Mobile / Handheld • Telemetry • 2024",
    image: "/images/motorcycle-handheld.png",
    aspect: "landscape",
    summary:
      "High-octane cyberpunk motorcycle telemetry HUD and modular garage loadout engineered specifically for high-refresh-rate handheld OLED gaming.",
    metrics: ["Sub-16ms Latency", "300k+ Beta Players", "94% Accessibility Score"],
    challenge:
      "Balancing intensive speed telemetry with weapon status, battery management, and minimap readability during 200+ mph virtual circuit races without obscuring critical driving sightlines.",
    solution:
      "Developed peripheral vision contrast indicators, ergonomic dual-thumb corner navigation zones, and dynamic color-shifting HUD elements based on RPM and thermal stress.",
    tools: ["Figma", "Unreal UI Framework", "Micro-interactions", "Haptic Feedback"],
    features: [
      "Ergonomic dual-thumb hotkey action layout",
      "Dynamic RPM telemetry tachometer with color-reactive shifts",
      "Instant garage tuning & loadout switcher",
      "High-contrast OLED black mode for zero glare and battery longevity",
    ],
  },
  {
    id: "shipx-logistics",
    title: "ShipX Fleet Intelligence",
    shortTitle: "ShipX",
    duration: "2 Weeks",
    category: "Graphic & UI Design",
    tag: "Dashboard UI • Enterprise SaaS • 2024",
    image: "/images/shipx-pedestal.jpg",
    aspect: "landscape",
    summary:
      "Streamline your shipping operations with automated dispatch manifests, real-time multi-carrier tracking, and predictive sales delivery analytics.",
    metrics: ["35% Faster Dispatch", "5,000+ Active Fleets", "$12M Fuel Savings"],
    challenge:
      "Logistics controllers lost hours switching between disparate freight spreadsheets, customs documents, and third-party tracking portals.",
    solution:
      "Created a unified command dashboard with interactive delivery heatmaps, automated exception alerts, drag-and-drop shipment assignment, and one-click manifest generation.",
    tools: ["Figma", "Enterprise Design System", "React", "Data Visualizations"],
    features: [
      "Real-time live delivery fleet tracking map",
      "Predictive dispatch volume and fuel consumption charts",
      "Automated customs clearance document generator",
      "Instant CSV and PDF executive reporting",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Research",
    description:
      "Deep diving into user behavior, business objectives, and market dynamics to discover true product opportunities.",
  },
  {
    step: "02",
    title: "Wireframing & Logic",
    description:
      "Mapping frictionless user journeys, information architecture, and rapid interactive wireframes before visual polish.",
  },
  {
    step: "03",
    title: "Design Systems & UI",
    description:
      "Crafting production-ready design tokens, accessible components, and high-fidelity interfaces tailored for scale.",
  },
  {
    step: "04",
    title: "Prototyping & Delivery",
    description:
      "Testing micro-interactions, responsive states, and collaborating closely with engineers for pixel-perfect delivery.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "All Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
