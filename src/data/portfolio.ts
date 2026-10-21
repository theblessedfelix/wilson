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
  gallery?: string[];
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
    title: "Creative Designer & Digital Strategist",
    rating: "4.9 / 5",
    ratingScore: "4.9",
    roleBadge: "Branding • Social Media • Web Design • Motion",
    bio: "I create compelling brand identities, engaging social media campaigns, beautiful web & app interfaces, and captivating motion designs that drive results.",
    avatar: "/images/profile-pix.jpeg",
    email: "info@wilsonchurchill.com",
    availableForWork: true,
    location: "London, UK • Remote",
    stats: [
      { label: "Client Rating", value: "4.9 / 5" },
      { label: "Brands Built", value: "50+" },
      { label: "Experience", value: "6+ Years" },
      { label: "Client Retention", value: "96%" },
    ],
  },
  victor: {
    id: "victor",
    name: "Victor Ogutuga",
    firstName: "Victor",
    lastName: "Ogutuga",
    title: "Creative Designer & Digital Strategist",
    rating: "4.9 / 5",
    ratingScore: "4.9",
    roleBadge: "Branding • Social Media • Web Design • Motion",
    bio: "I create compelling brand identities, engaging social media campaigns, beautiful web & app interfaces, and captivating motion designs that drive results.",
    avatar: "/images/avatar.png",
    email: "victor@ogutuga.design",
    availableForWork: true,
    location: "London, UK • Remote",
    stats: [
      { label: "Client Rating", value: "4.9 / 5" },
      { label: "Brands Built", value: "50+" },
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
    category: "Branding",
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
    category: "Branding",
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
    category: "Branding",
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
    category: "Branding",
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
    category: "Branding",
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
    category: "Branding",
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
    category: "Branding",
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
    category: "Website App Design",
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
    category: "Website App Design",
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
    category: "Website App Design",
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
    id: "visuals-gg",
    title: "Visuals.gg Gaming Marketplace",
    shortTitle: "Visuals.gg",
    category: "Motion Design",
    tag: "Motion Design • Gaming Marketplace • Product Showcase",
    image: "/images/visuals-gg.png",
    aspect: "landscape",
    summary:
      "A motion-design showcase for Visuals.gg, presenting its gaming marketplace and featured products.",
    metrics: ["Gaming Marketplace", "Product Showcase", "Motion Design Reel"],
    challenge:
      "Present Visuals.gg's gaming marketplace and product offering in a concise, engaging visual showcase.",
    solution:
      "Combined the Visuals.gg brand, gaming product imagery, and marketplace offers in a focused motion presentation.",
    tools: ["Motion Graphics", "Product Visualization", "Brand Storytelling"],
    features: [
      "Visuals.gg gaming marketplace brand presentation",
      "Gaming product and marketplace offer visuals",
      "Motion design reel hosted on Frame.io",
    ],
    externalUrl:
      "https://next.frame.io/share/9e5ae5b9-65b0-4fb0-9d5f-5931834c58ab/view/84fa03a3-98b1-43c9-af4f-63c7afe3d4ec",
  },
  {
    id: "ednon-social-media",
    title: "Ednon Social Media Designs",
    shortTitle: "Ednon Social Media Designs",
    category: "Social Media Design / Management",
    tag: "Instagram • Facebook • Social Media Graphics",
    image: "/projects/Ednon/Ednon (1).jpeg",
    aspect: "square",
    summary:
      "A complete set of social media post designs created for Ednon, keeping a consistent look and message across every post.",
    metrics: ["27 Post Designs", "Consistent Brand Look", "Multi-Platform Ready"],
    challenge:
      "Ednon needed a steady stream of eye-catching social posts that look consistent and stand out in a busy feed.",
    solution:
      "Designed a cohesive series of post layouts with a unified visual style, clear messaging and strong hierarchy.",
    tools: ["Adobe Illustrator", "Photoshop", "Figma"],
    features: [
      "27 social media post designs",
      "Consistent visual style across all posts",
      "Optimised for Instagram and Facebook feeds",
    ],
    gallery: [
      "/projects/Ednon/Ednon (1).jpeg",
      "/projects/Ednon/Ednon (2).jpeg",
      "/projects/Ednon/Ednon (4).jpeg",
      "/projects/Ednon/Ednon (6).jpeg",
      "/projects/Ednon/Ednon (7).jpeg",
      "/projects/Ednon/Ednon (10).jpeg",
      "/projects/Ednon/Ednon (11).jpeg",
      "/projects/Ednon/Ednon (12).jpeg",
      "/projects/Ednon/Ednon (16).jpeg",
      "/projects/Ednon/Ednon (17).jpeg",
      "/projects/Ednon/Ednon (18).jpeg",
      "/projects/Ednon/Ednon (19).jpeg",
      "/projects/Ednon/Ednon (24).jpeg",
      "/projects/Ednon/Ednon (25).jpeg",
      "/projects/Ednon/Ednon (26).jpeg",
      "/projects/Ednon/Ednon (27).jpeg",
      "/projects/Ednon/Ednon (29).jpeg",
      "/projects/Ednon/Ednon (30).jpeg",
      "/projects/Ednon/Ednon (31).jpeg",
      "/projects/Ednon/Ednon (32).jpeg",
      "/projects/Ednon/Ednon (33).jpeg",
      "/projects/Ednon/Ednon (34).jpeg",
      "/projects/Ednon/Ednon (35).jpeg",
      "/projects/Ednon/Ednon (36).jpeg",
      "/projects/Ednon/Ednon (37).jpeg",
      "/projects/Ednon/Ednon (38).jpeg",
      "/projects/Ednon/Ednon (39).jpeg",
    ],
  },
  {
    id: "edom-homes-real-estate",
    title: "Edom Homes Real Estate Development",
    shortTitle: "Edom Homes",
    duration: "6 Weeks",
    category: "Branding",
    tag: "Real Estate • Brand Identity • Marketing • 2024",
    image: "/projects/social-media/edom homes.jpeg",
    aspect: "square",
    summary:
      "Comprehensive brand identity and marketing strategy for Edom Homes, a premier real estate development project featuring luxury residential communities with innovative architectural design and premium amenities.",
    metrics: ["+120% Brand Awareness", "500+ Inquiries", "85% Conversion Rate"],
    challenge:
      "Establish a distinctive brand presence for a new real estate development in a competitive market while communicating premium positioning and architectural innovation.",
    solution:
      "Developed a cohesive visual identity system combining luxury aesthetics with modern architectural photography, unified messaging across all touchpoints, and strategic marketing collateral that highlights unique value propositions.",
    tools: ["Adobe Illustrator", "Photoshop", "Figma", "Photography Direction", "Brand Strategy"],
    features: [
      "Brand identity system with logo, color palette, and typography guidelines",
      "Marketing collateral and promotional materials",
      "High-quality architectural and lifestyle photography",
      "Digital and print advertising campaigns",
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
