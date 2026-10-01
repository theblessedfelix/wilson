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
