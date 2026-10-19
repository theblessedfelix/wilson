/**
 * Services Section Component
 * Displays the 4 core service categories with descriptions and CTAs
 */

"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface Service {
  id: string;
  icon: string;
  title: string;
  shortName: string;
  description: string;
  keyPoints: string[];
  color: string;
  gradient: string;
}

const services: Service[] = [
  {
    id: "branding",
    icon: "✨",
    title: "Branding",
    shortName: "Brand Identity",
    description:
      "Create distinctive brand identities, logo systems, and visual guidelines that make your business unforgettable.",
    keyPoints: [
      "Logo Design & Systems",
      "Brand Guidelines & Manuals",
      "Visual Identity Strategy",
      "Brand Storytelling",
    ],
    color: "#667eea",
    gradient: "135deg, #667eea 0%, #764ba2 100%",
  },
  {
    id: "social-media",
    icon: "📱",
    title: "Social Media Design / Management",
    shortName: "Social Strategy",
    description:
      "Engagement-optimized graphics and campaigns that stop the scroll and drive meaningful interactions.",
    keyPoints: [
      "Post & Story Templates",
      "Carousel Designs",
      "Campaign Strategy",
      "Content Calendar Planning",
    ],
    color: "#f5576c",
    gradient: "to right, #f093fb 0%, #f5576c 100%",
  },
  {
    id: "website-app",
    icon: "💻",
    title: "Website & App Design",
    shortName: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that users love to interact with. From web to mobile, responsive and thoughtful.",
    keyPoints: [
      "Web Design & Development",
      "Mobile App Design",
      "Design Systems",
      "UX/UI Strategy",
    ],
    color: "#00d4ff",
    gradient: "135deg, #1a1a2e 0%, #0f3460 100%",
  },
  {
    id: "motion",
    icon: "🎬",
    title: "Motion Design",
    shortName: "Animation & Video",
    description:
      "Captivating animations and interactive experiences that bring your brand to life and engage your audience.",
    keyPoints: [
      "Animation & Micro-interactions",
      "Video Production",
      "Interactive Prototypes",
      "Motion Graphics",
    ],
    color: "#ff6b6b",
    gradient: "45deg, #ff6b6b 0%, #feca57 50%, #48dbfb 100%",
  },
];

export const ServicesSection: React.FC<{
  onStartProject: () => void;
}> = ({ onStartProject }) => {
  return (
    <section
      id="services"
      style={{
        padding: "120px 0",
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 20px",
              background: "#FFFFFF",
              border: "1px solid var(--border-subtle)",
              borderRadius: "9999px",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#667eea",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
              marginBottom: "24px",
            }}
          >
            🎯 Services & Expertise
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.12,
              color: "#12151B",
              marginBottom: "20px",
              maxWidth: "800px",
              margin: "0 auto 24px",
            }}
          >
            Four Core Design Services
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            From brand identity to interactive experiences, we deliver design
            solutions that drive results across all mediums.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            marginBottom: "80px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              style={{
                background: "#FFFFFF",
                borderRadius: "16px",
                padding: "40px",
                border: "1px solid var(--border-subtle)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-8px)";
                el.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.08)";
              }}
            >
              {/* Gradient accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: `linear-gradient(${service.gradient})`,
                }}
              />

              {/* Icon */}
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "20px",
                  display: "inline-block",
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#12151B",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  marginBottom: "24px",
                  lineHeight: 1.6,
                }}
              >
                {service.description}
              </p>

              {/* Key Points */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "24px 0",
                }}
              >
                {service.keyPoints.map((point, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      padding: "8px 0",
                      borderBottom:
                        idx < service.keyPoints.length - 1
                          ? "1px solid var(--border-subtle)"
                          : "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        color: service.color,
                        fontWeight: 700,
                        fontSize: "1.1rem",
                      }}
                    >
                      →
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={onStartProject}
                style={{
                  width: "100%",
                  padding: "12px 20px",
                  marginTop: "24px",
                  background: `linear-gradient(${service.gradient})`,
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
                onMouseEnter={(e) => {
                  const btn = e.currentTarget as HTMLButtonElement;
                  btn.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  const btn = e.currentTarget as HTMLButtonElement;
                  btn.style.transform = "scale(1)";
                }}
              >
                <span>Learn More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: "center",
            padding: "60px 40px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "16px",
            color: "white",
          }}
        >
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Transform Your Brand?
          </h3>
          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: "32px",
              opacity: 0.95,
              maxWidth: "600px",
              margin: "0 auto 32px",
            }}
          >
            Let's discuss how our design services can elevate your business and
            engage your audience.
          </p>
          <button
            onClick={onStartProject}
            className="btn-primary"
            style={{
              background: "white",
              color: "#667eea",
              fontSize: "1rem",
              padding: "14px 32px",
            }}
          >
            <span>Start Your Project</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div {
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};
