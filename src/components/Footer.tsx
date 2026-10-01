"use client";

import React, { useState } from "react";
import { ArrowUp, Mail, Check, Copy } from "lucide-react";
import { Profile } from "@/data/portfolio";

interface FooterProps {
  profile: Profile;
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  onOpenBooking,
  onOpenContact,
}) => {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer
      id="contact"
      style={{
        padding: "80px 0 40px",
        background: "#FFFFFF",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Main CTA block */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "32px",
            paddingBottom: "60px",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <div style={{ maxWidth: "560px" }}>
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--accent-blue-deep)",
              }}
            >
              Get In Touch
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginTop: "8px",
                lineHeight: 1.1,
              }}
            >
              Have a project in mind? Let&apos;s talk.
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", marginTop: "12px", lineHeight: 1.6 }}>
              Currently open to select design partnerships, advisory roles, and high-impact product redesigns.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button onClick={onOpenBooking} className="btn-primary">
                <span>Book a 30 min call</span>
              </button>
              <button onClick={onOpenContact} className="btn-secondary">
                <span>Start a Project</span>
              </button>
            </div>

            {/* Copy Email Button */}
            <button
              onClick={copyEmail}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                borderRadius: "10px",
                background: "#F6F7F9",
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
              title="Click to copy email address"
            >
              {copied ? <Check size={14} style={{ color: "#059669" }} /> : <Copy size={14} />}
              <span>{copied ? "Email copied to clipboard!" : profile.email}</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            paddingTop: "32px",
          }}
        >
          <div style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "0.88rem", color: "var(--text-secondary)", fontWeight: 500 }}
            >
              Twitter / X
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "0.88rem", color: "var(--text-secondary)", fontWeight: 500 }}
            >
              LinkedIn
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "0.88rem", color: "var(--text-secondary)", fontWeight: 500 }}
            >
              Dribbble
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "0.88rem", color: "var(--text-secondary)", fontWeight: 500 }}
            >
              GitHub
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "9999px",
                background: "#F6F7F9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-primary)",
                border: "1px solid var(--border-subtle)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Made in Framer / Next.js badge fixed at bottom right like in reference */}
      <div
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          zIndex: 80,
        }}
      >
        <div
          className="glass-pill"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            padding: "6px 12px",
            fontSize: "0.76rem",
            fontWeight: 700,
            color: "#12151B",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          }}
        >
          {/* Framer-like logo icon */}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 2H10V6H6V10L2 6V2Z" fill="#12151B" />
          </svg>
          <span>Made in Next.js</span>
        </div>
      </div>
    </footer>
  );
};
