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
    title: "Process-Driven Product Designer",
    rating: "4.9 / 5",
    ratingScore: "4.9",
    roleBadge: "Process-Driven Product Designer",
    bio: "I design products for web and mobile interfaces, focusing on clear and scalable digital experiences.",
    avatar: "/images/avatar.png",
    email: "wilson@churchill.design",
    availableForWork: true,
    location: "London, UK • Remote",
    stats: [
      { label: "Client Rating", value: "4.9 / 5" },
      { label: "Projects Completed", value: "48+" },
      { label: "Experience", value: "6+ Years" },
      { label: "Client Retention", value: "96%" },
    ],
  },
  victor: {
    id: "victor",
    name: "Victor Ogutuga",
    firstName: "Victor",
    lastName: "Ogutuga",
    title: "Process-Driven Product Designer",
    rating: "4.9 / 5",
    ratingScore: "4.9",
    roleBadge: "Process-Driven Product Designer",
    bio: "I design products for web and mobile interfaces, focusing on clear and scalable digital experiences.",
    avatar: "/images/avatar.png",
    email: "victor@ogutuga.design",
    availableForWork: true,
    location: "London, UK • Remote",
    stats: [
      { label: "Client Rating", value: "4.9 / 5" },
      { label: "Projects Completed", value: "48+" },
      { label: "Experience", value: "6+ Years" },
      { label: "Client Retention", value: "96%" },
    ],
  },
};

export const projects: Project[] = [
  {
    id: "agrolink",
    title: "AgroLink Marketplace Platform",
    shortTitle: "AgroLink",
    duration: "4 Weeks",
    category: "AgriTech & Mobile Commerce",
    tag: "Mobile App • Design System • 2024",
    image: "/images/agrolink-phone.jpg",
    aspect: "portrait",
    summary:
      "A seamless farm-to-table digital marketplace connecting local organic farmers directly with buyers and grocery distributors.",
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
    id: "shipx-logistics",
    title: "ShipX Operations Intelligence",
    shortTitle: "ShipX",
    duration: "2 Weeks",
    category: "Supply Chain & Fleet SaaS",
    tag: "Web Dashboard • Enterprise • 2024",
    image: "/images/shipx-pedestal.jpg",
    aspect: "landscape",
    summary:
      "Streamline your shipping operations with automated dispatch manifests, real-time multi-carrier tracking, and predictive sales delivery analytics.",
    metrics: ["35% Faster Dispatch Workflows", "5,000+ Active Fleets", "$12M Verified Fuel Savings"],
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
  {
    id: "banking-app",
    title: "Fintech Multi-Currency App",
    shortTitle: "Fintech App",
    duration: "3 Weeks",
    category: "Mobile Banking & Payments",
    tag: "iOS App • Design System • 2024",
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
    id: "apex-neo",
    title: "Apex Neo Handheld Racing HUD",
    category: "Game UI / Handheld Interface",
    tag: "Game HUD • Mobile / Handheld • 2024",
    image: "/images/motorcycle-handheld.png",
    aspect: "landscape",
    summary:
      "High-octane cyberpunk motorcycle telemetry HUD and modular garage loadout engineered specifically for high-refresh-rate handheld OLED gaming.",
    metrics: ["Sub-16ms Touch Latency", "300k+ Beta Players", "94% Accessibility Score"],
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
    id: "novafi-crypto",
    title: "NovaFi Web3 Trading Terminal",
    category: "DeFi & Digital Assets",
    tag: "Web App • Dark Mode • 2024",
    image: "/images/crypto-chair.png",
    aspect: "portrait",
    summary:
      "Powering your crypto journey with an ultra-responsive decentralized trading terminal, zero-slippage smart routing, and real-time multi-chain portfolio tracking.",
    metrics: ["$1.4B+ Volume Traded", "320ms Average Swap Execution", "0 Confusing Gas Errors"],
    challenge:
      "DeFi protocols intimidate retail investors with opaque wallet signatures, cryptic gas estimates, and sudden slippage failures.",
    solution:
      "Transformed complex smart-contract interactions into human-readable previews with guaranteed execution bounds, automated gas optimization, and friendly transaction simulations.",
    tools: ["Figma", "Next.js", "Tailored Dark Palette", "TradingView Charts"],
    features: [
      "Simulated transaction outcome previews before signing",
      "Cross-chain unified liquidity aggregator",
      "Real-time wallet balance and net worth analytics",
      "Configurable trading hotkeys and depth visualizer",
    ],
  },
  {
    id: "somna-health",
    title: "Somna Circadian Wellness",
    category: "Digital Health & Sleep",
    tag: "Mobile App • HealthTech • 2024",
    image: "/images/health-sleep.png",
    aspect: "portrait",
    summary:
      "Mindful circadian tracking and restorative sleep architecture app designed to help users understand why their energy drains and wake up revitalized.",
    metrics: ["88% Improved Sleep Consistency", "App Store 'App of the Day'", "250k+ Active Users"],
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
    id: "estatebridge",
    title: "EstateBridge Luxury Living",
    category: "Architectural Real Estate",
    tag: "Web Platform • Desktop OS • 2024",
    image: "/images/estatebridge-mac.png",
    aspect: "landscape",
    summary:
      "Home is where your story begins. A bespoke luxury real estate platform featuring immersive 3D architectural tours, neighborhood ambient data, and verified private realtor matching.",
    metrics: ["$85M+ Luxury Property Inquiries", "3.2x Lead Conversion", "Featured in Architecture Digest"],
    challenge:
      "Ultra-high-net-worth real estate buyers demand private, cinema-grade digital showings that generic real estate search listings cannot deliver.",
    solution:
      "Designed an editorial architectural gallery experience with 4K interactive property video tours, instant verified agent concierge chats, and private on-demand scheduling.",
    tools: ["Next.js", "Figma", "3D WebGL", "Framer Motion"],
    features: [
      "Full-screen 4K architectural property showcases",
      "Direct verified realtor concierge scheduling",
      "Neighborhood ambient noise, solar path, and privacy indices",
      "Private VIP portfolio bookmarking and brochure export",
    ],
  },
  {
    id: "secureflow-iam",
    title: "SecureFlow Identity Platform",
    category: "Cybersecurity & Governance",
    tag: "Tablet & Admin Suite • Security • 2024",
    image: "/images/secureflow-tablet.png",
    aspect: "landscape",
    summary:
      "Next-generation zero-trust identity and access governance suite optimized for fast tablet and desktop IT security operations.",
    metrics: ["94.5% MFA Enforced", "SOC 2 Type II Certified", "1,284+ Protected Users"],
    challenge:
      "Traditional IT security consoles were clumsy, desktop-tethered, and required dozens of clicks to isolate compromised user accounts during active threats.",
    solution:
      "Engineered an ergonomic, touch-first tablet administration interface featuring instant killswitches, biometric elevated approvals, and live session health radar.",
    tools: ["Figma", "Design Systems", "Touch Ergonomics", "Accessibility (WCAG AAA)"],
    features: [
      "Instant 1-tap user session revocation and device quarantine",
      "Live MFA adoption metrics and compliance health gauge",
      "Granular role-based permission matrix inspector",
      "Audit log timeline with automated tamper verification",
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
