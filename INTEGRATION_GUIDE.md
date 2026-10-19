#!/usr/bin/env node

/**
 * Integration Guide: Adding ServicesSection to Your Homepage
 * 
 * This guide shows exactly how to integrate the new ServicesSection
 * component into your Next.js page.
 */

// ============================================================================
// BEFORE: Your current app/page.tsx structure
// ============================================================================

/*
"use client";

import React, { useState } from "react";
import { profiles, Project, Profile } from "@/data/portfolio";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SelectedWorkSection } from "@/components/SelectedWorkSection";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { BookingModal } from "@/components/BookingModal";
import { ProjectInquiryModal } from "@/components/ProjectInquiryModal";
import { AboutMeSection } from "@/components/AboutMeSection";
import { ClientLogosSection } from "@/components/ClientLogosSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  // ... rest of component
}
*/

// ============================================================================
// AFTER: Updated app/page.tsx with ServicesSection
// ============================================================================

/*
"use client";

import React, { useState } from "react";
import { profiles, Project, Profile } from "@/data/portfolio";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";  // ← NEW IMPORT
import { SelectedWorkSection } from "@/components/SelectedWorkSection";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { BookingModal } from "@/components/BookingModal";
import { ProjectInquiryModal } from "@/components/ProjectInquiryModal";
import { AboutMeSection } from "@/components/AboutMeSection";
import { ClientLogosSection } from "@/components/ClientLogosSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const currentProfile: Profile = profiles.wilson;

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* Floating Navbar */}
      <Navbar
        currentProfile={currentProfile}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenContact={() => setIsInquiryOpen(true)}
      />

      {/* Main Hero Section */}
      <main>
        <Hero
          profile={currentProfile}
          onStartProject={() => setIsInquiryOpen(true)}
          onSeeProjects={handleScrollToProjects}
        />

        {/* Thinking, Process & Experience / About Me Section */}
        <AboutMeSection />

        {/* Clients & Collaborators Logo Marquee */}
        <ClientLogosSection />

        {/* ← ADD HERE: New Services Section showing all 4 categories */}
        <ServicesSection onStartProject={() => setIsInquiryOpen(true)} />

        {/* Selected Work 2-Column Grid Section */}
        <SelectedWorkSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Good Design Builds Trust / Testimonials Section */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer
        profile={currentProfile}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenContact={() => setIsInquiryOpen(true)}
      />

      {/* Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={() => {
          setSelectedProject(null);
          setIsInquiryOpen(true);
        }}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        profile={currentProfile}
      />

      <ProjectInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        profile={currentProfile}
      />
    </div>
  );
}
*/

// ============================================================================
// ALTERNATIVE PLACEMENTS
// ============================================================================

/*
  OPTION 1: After AboutMeSection (Recommended - explains what you do early)
  └─ Hero
  └─ AboutMeSection
  └─ ServicesSection ← HERE
  └─ ClientLogosSection
  └─ SelectedWorkSection
  └─ TestimonialsSection

  OPTION 2: After ClientLogosSection (Shows services after social proof)
  └─ Hero
  └─ AboutMeSection
  └─ ClientLogosSection
  └─ ServicesSection ← HERE
  └─ SelectedWorkSection
  └─ TestimonialsSection

  OPTION 3: Before SelectedWorkSection (Deep dive into services first)
  └─ Hero
  └─ AboutMeSection
  └─ ClientLogosSection
  └─ ServicesSection ← HERE
  └─ SelectedWorkSection
  └─ TestimonialsSection
*/

// ============================================================================
// IMPLEMENTATION STEPS
// ============================================================================

console.log(`
╔════════════════════════════════════════════════════════════════════════╗
║                    INTEGRATION INSTRUCTIONS                           ║
╚════════════════════════════════════════════════════════════════════════╝

Step 1: Add Import
────────────────────────────────────────────────────────────────────────
In src/app/page.tsx, add this import at the top:

  import { ServicesSection } from "@/components/ServicesSection";


Step 2: Place Component in JSX
────────────────────────────────────────────────────────────────────────
Inside the <main> element, add where you want it to appear:

  <ServicesSection onStartProject={() => setIsInquiryOpen(true)} />

RECOMMENDED: After AboutMeSection or ClientLogosSection


Step 3: Test Locally
────────────────────────────────────────────────────────────────────────
Run:  npm run dev
Check: http://localhost:3000
Verify: New "Services" section appears with 4 cards


Step 4: Build & Deploy
────────────────────────────────────────────────────────────────────────
Run:  npm run build
Deploy to production


═══════════════════════════════════════════════════════════════════════════
                      COMPONENT PROPS
═══════════════════════════════════════════════════════════════════════════

ServicesSection accepts:
  - onStartProject: () => void
    └─ Called when user clicks "Learn More" or "Start Your Project"

Example:
  <ServicesSection onStartProject={() => setIsInquiryOpen(true)} />


═══════════════════════════════════════════════════════════════════════════
                     CUSTOMIZATION
═══════════════════════════════════════════════════════════════════════════

To customize ServicesSection, edit: src/components/ServicesSection.tsx

Available customizations:
  • Change service descriptions
  • Update key points for each service
  • Modify color gradients
  • Adjust card styling
  • Update CTA text
  • Change section heading


═══════════════════════════════════════════════════════════════════════════
                       MOBILE RESPONSIVE
═══════════════════════════════════════════════════════════════════════════

ServicesSection is fully responsive:
  ✅ Desktop (4 cards in grid)
  ✅ Tablet (2-3 cards in grid)
  ✅ Mobile (1 card stacked)

No additional configuration needed!


═══════════════════════════════════════════════════════════════════════════
`);

// ============================================================================
// ADVANCED: Conditional Rendering
// ============================================================================

console.log(`
OPTIONAL: Show Services section only on certain routes

  {/* Conditionally render ServicesSection */}
  {showServices && (
    <ServicesSection onStartProject={() => setIsInquiryOpen(true)} />
  )}

Or create a version for services-specific page:

  src/app/services/page.tsx
  └─ Navbar
  └─ Hero (for Services)
  └─ ServicesSection (full width, larger)
  └─ SelectedWorkSection (filtered by category)
  └─ Footer
`);

// ============================================================================
// TROUBLESHOOTING
// ============================================================================

console.log(`
╔════════════════════════════════════════════════════════════════════════╗
║                        TROUBLESHOOTING
╚════════════════════════════════════════════════════════════════════════╝

Issue: Component not showing?
  → Check: Is import statement included?
  → Check: Is component in JSX?
  → Check: npm run dev running?
  → Try: Clear .next folder and restart

Issue: Styling looks wrong?
  → Check: CSS variables defined (--font-display, --text-primary, etc.)
  → Check: Global styles loaded
  → Try: Hard refresh browser (Ctrl+Shift+R)

Issue: Buttons not working?
  → Check: onStartProject prop passed correctly?
  → Check: setIsInquiryOpen defined in parent?
  → Try: Open browser console for errors

Issue: Not responsive on mobile?
  → Built-in CSS media queries handle this
  → Check: Viewport meta tag in layout
  → Try: Test in Chrome DevTools mobile mode


═══════════════════════════════════════════════════════════════════════════
`);

export default {};
