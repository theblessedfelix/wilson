"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Calendar, Menu, X, Check, UserCheck, Sparkles } from "lucide-react";
import { navLinks, Profile } from "@/data/portfolio";

interface NavbarProps {
  currentProfile: Profile;
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentProfile,
  onOpenBooking,
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(currentProfile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        padding: scrolled ? "12px 24px" : "20px 24px",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Left Floating Pill */}
        <nav
          className="glass-pill"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "6px 14px 6px 8px",
            gap: "18px",
          }}
          aria-label="Main Navigation"
        >
          {/* Avatar Thumbnail */}
          <div
            style={{
              position: "relative",
              width: "36px",
              height: "36px",
              borderRadius: "9999px",
              overflow: "hidden",
              border: "2px solid #FFFFFF",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              flexShrink: 0,
            }}
          >
            <Image
              src={currentProfile.avatar}
              alt={currentProfile.name}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Desktop Navigation Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
            className="desktop-links"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  padding: "6px 10px",
                  borderRadius: "9999px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent-blue-deep)";
                  e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              display: "none",
              padding: "6px",
              borderRadius: "9999px",
              color: "var(--text-primary)",
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Right Action Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* "Book a 30 min call" Pill */}
          <button
            id="book-call-nav-btn"
            onClick={onOpenBooking}
            className="glass-pill"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.borderColor = "var(--border-strong)";
              e.currentTarget.style.boxShadow = "var(--shadow-lg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "var(--border-subtle)";
              e.currentTarget.style.boxShadow = "var(--shadow-md)";
            }}
          >
            <Calendar size={15} style={{ color: "var(--accent-blue)" }} />
            <span>Book a 30 min call</span>
          </button>

          {/* Mail Icon Button */}
          <div style={{ position: "relative" }}>
            <button
              id="nav-email-btn"
              onClick={onOpenContact}
              className="glass-pill"
              style={{
                width: "42px",
                height: "42px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                color: "var(--accent-blue-deep)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              title={`Send message to ${currentProfile.email}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
              }}
            >
              <Mail size={18} />
            </button>

            {/* Copied toast indicator if copied */}
            {copiedEmail && (
              <span
                style={{
                  position: "absolute",
                  bottom: "-28px",
                  right: 0,
                  fontSize: "0.72rem",
                  background: "#12151B",
                  color: "#FFFFFF",
                  padding: "3px 8px",
                  borderRadius: "6px",
                  whiteSpace: "nowrap",
                }}
              >
                Email Copied!
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="glass-pill"
          style={{
            maxWidth: "1320px",
            margin: "12px auto 0",
            padding: "16px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            animation: "fadeIn 0.2s ease",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: "8px 14px",
                borderRadius: "10px",
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Media Query styles embedded */}
      <style jsx>{`
        @media (max-width: 820px) {
          .desktop-links {
            display: none !important;
          }
          .mobile-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
};
