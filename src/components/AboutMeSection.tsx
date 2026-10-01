"use client";

import React from "react";

interface CardData {
  dotColor: string;
  titleColor: string;
  title: string;
  textColor: string;
  content: string;
}

const cards: CardData[] = [
  {
    dotColor: "#2563EB",
    titleColor: "#2563EB",
    title: "What I do",
    textColor: "#374151",
    content:
      "I design web and mobile products focused on clear, scalable digital experiences. From SaaS platforms to gaming interfaces, I create products that feel intuitive and easy to use.",
  },
  {
    dotColor: "#94A3B8",
    titleColor: "#8A92A2",
    title: "Design Journey",
    textColor: "#94A3B8",
    content:
      "My journey into design started through curiosity. After discovering Figma, I became obsessed with understanding digital products and how thoughtful design improves user experience.",
  },
  {
    dotColor: "#10B981",
    titleColor: "#059669",
    title: "Design Philosophy",
    textColor: "#374151",
    content:
      "Simplicity isn't about removing features—it's about clarifying intent. I align user needs with business goals by building systems that feel effortless, consistent, and scalable.",
  },
  {
    dotColor: "#8B5CF6",
    titleColor: "#7C3AED",
    title: "Process & Systems",
    textColor: "#4B5563",
    content:
      "Great products are built on strong foundations. I create comprehensive design systems and modular UI tokens that allow product & engineering teams to ship features faster without sacrificing quality.",
  },
  {
    dotColor: "#F59E0B",
    titleColor: "#D97706",
    title: "Engineering & Prototyping",
    textColor: "#374151",
    content:
      "I bridge the gap between visual design and front-end code. By crafting interactive prototypes in React and Next.js, I test motion physics and bring static mockups to life with pixel-perfect accuracy.",
  },
];

export const AboutMeSection: React.FC = () => {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 0 140px",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Sticky Header Section */}
        <div
          style={{
            position: "sticky",
            top: "90px",
            zIndex: 1,
            textAlign: "center",
            marginBottom: "40px",
            background: "linear-gradient(180deg, var(--bg-primary) 70%, rgba(245, 246, 248, 0) 100%)",
            paddingBottom: "20px",
          }}
        >
          {/* Top Pill Badge */}
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 20px",
                background: "#FFFFFF",
                border: "1px solid var(--border-subtle)",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "#12151B",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
              }}
            >
              About me
            </div>
          </div>

          {/* Main Section Heading */}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.12,
              color: "#12151B",
              margin: 0,
            }}
          >
            Thinking, Process
            <br />
            &amp; Experience
          </h2>
        </div>

        {/* Collapsing Sticky Cards Stack Container */}
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="sticky-card"
              style={{
                position: "sticky",
                top: `${140 + idx * 28}px`,
                zIndex: idx + 10,
                marginBottom: idx === cards.length - 1 ? "0px" : "48px",
                background: "#FFFFFF",
                borderRadius: "24px",
                padding: "36px 40px",
                border: "1px solid rgba(0, 0, 0, 0.06)",
                boxShadow: `0 ${8 + idx * 4}px ${24 + idx * 6}px rgba(0, 0, 0, ${0.04 + idx * 0.01})`,
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "9999px",
                    backgroundColor: card.dotColor,
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: card.titleColor,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {card.title}
                </span>
              </div>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.6,
                  color: card.textColor,
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .sticky-card:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08) !important;
        }
        @media (max-width: 640px) {
          .sticky-card {
            padding: 24px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};
