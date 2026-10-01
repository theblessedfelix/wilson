"use client";

import React from "react";

const logos = [
  {
    name: "Bridge",
    render: () => (
      <span
        style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontStyle: "italic",
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "#64748B",
          letterSpacing: "-0.02em",
        }}
      >
        Bridge
      </span>
    ),
  },
  {
    name: "Blockray",
    render: () => (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="14" fill="#10B981" />
          <path
            d="M10 8H14C16.2091 8 18 9.79086 18 12C18 13.5 17.15 14.8 15.9 15.45C17.5 16 18.5 17.5 18.5 19.2C18.5 21.3 16.8 23 14.7 23H10V8Z"
            fill="white"
          />
          <path d="M13 11.5H11.5V14.5H13C13.8 14.5 14.5 13.8 14.5 13C14.5 12.2 13.8 11.5 13 11.5Z" fill="#10B981" />
        </svg>
        <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "#1E293B", letterSpacing: "-0.02em" }}>
          Blockray
        </span>
      </div>
    ),
  },
  {
    name: "Sparkly",
    render: () => (
      <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
        <svg width="24" height="26" viewBox="0 0 24 26" fill="none">
          <path
            d="M12 2C7.58 2 4 5.58 4 10C4 13.15 5.8 15.87 8.4 17.15V19.5C8.4 20.33 9.07 21 9.9 21H14.1C14.93 21 15.6 20.33 15.6 19.5V17.15C18.2 15.87 20 13.15 20 10C20 5.58 16.42 2 12 2Z"
            stroke="#1E293B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9 24.5H15" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M12 7V13" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "#1E293B", letterSpacing: "-0.02em" }}>
          Sparkly
        </span>
      </div>
    ),
  },
  {
    name: "ShipX",
    render: () => (
      <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <rect x="3" y="3" width="9" height="9" rx="4.5" fill="#6366F1" />
          <rect x="14" y="3" width="9" height="9" rx="4.5" fill="#6366F1" />
          <rect x="3" y="14" width="9" height="9" rx="4.5" fill="#6366F1" />
          <rect x="14" y="14" width="9" height="9" rx="4.5" fill="#6366F1" opacity="0.6" />
        </svg>
        <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "#1E293B", letterSpacing: "-0.02em" }}>
          ShipX
        </span>
      </div>
    ),
  },
  {
    name: "NovaFi",
    render: () => (
      <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#3B82F6" />
          <circle cx="12" cy="12" r="4" fill="white" />
        </svg>
        <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "#1E293B", letterSpacing: "-0.02em" }}>
          NovaFi
        </span>
      </div>
    ),
  },
  {
    name: "Somna",
    render: () => (
      <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 11.54 20.96 11.09 20.89 10.65C19.84 12.06 18.17 13 16.27 13C13.04 13 10.42 10.38 10.42 7.15C10.42 5.25 11.36 3.58 12.77 2.53C12.52 2.5 12.26 2.5 12 2.5V3Z"
            fill="#8B5CF6"
          />
        </svg>
        <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "#1E293B", letterSpacing: "-0.02em" }}>
          Somna
        </span>
      </div>
    ),
  },
];

export const ClientLogosSection: React.FC = () => {
  // Double the list for continuous seamless looping
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section
      style={{
        padding: "30px 0 90px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="logos-pill-container"
        style={{
          width: "90%",
          maxWidth: "980px",
          background: "#FFFFFF",
          borderRadius: "9999px",
          padding: "20px 44px",
          display: "flex",
          alignItems: "center",
          gap: "36px",
          border: "1px solid rgba(0, 0, 0, 0.06)",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.03)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left Fixed Title */}
        <div
          style={{
            fontSize: "0.92rem",
            fontWeight: 500,
            color: "#586071",
            whiteSpace: "nowrap",
            flexShrink: 0,
            letterSpacing: "-0.01em",
          }}
        >
          Clients &amp; collaborators
        </div>

        {/* Scrolling Marquee Wrapper with Fade Gradient Masks */}
        <div
          className="marquee-wrapper"
          style={{
            flex: 1,
            overflow: "hidden",
            position: "relative",
            display: "flex",
            alignItems: "center",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="marquee-track">
            {marqueeLogos.map((item, index) => (
              <div key={index} className="marquee-item">
                {item.render()}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 52px;
          width: max-content;
          animation: marquee 22s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          opacity: 0.88;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .marquee-item:hover {
          opacity: 1;
          transform: scale(1.04);
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @media (max-width: 768px) {
          .logos-pill-container {
            borderRadius: 28px !important;
            flex-direction: column !important;
            gap: 16px !important;
            padding: 20px 24px !important;
          }
          .marquee-wrapper {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
