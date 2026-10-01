"use client";

import React from "react";
import Image from "next/image";

interface Testimonial {
  id: string;
  avatar: string;
  role: string;
  author: string;
  company: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    avatar: "/images/testimonial-1.jpg",
    role: "Product Lead",
    author: "Sarah Chen",
    company: "FinTech Hub",
    quote:
      "His attention to detail and clean interface decisions made huge difference in the final product experience.",
  },
  {
    id: "2",
    avatar: "/images/testimonial-2.jpg",
    role: "Developer",
    author: "Alex Rivera",
    company: "NovaFi Web3",
    quote:
      "Wilson brought a fresh perspective to the product and made the overall experience feel more intuitive and easy to use.",
  },
  {
    id: "3",
    avatar: "/images/testimonial-3.jpg",
    role: "Founder",
    author: "Marcus Vance",
    company: "Apex Studio",
    quote:
      "Wilson simplified complex ideas into clean, easy-to-use product experiences. Every detail felt intentional.",
  },
  {
    id: "4",
    avatar: "/images/testimonial-1.jpg",
    role: "Design Director",
    author: "Elena Rostova",
    company: "Somna Health",
    quote:
      "Working together was seamless. The modular design system transformed our engineering delivery velocity and brand clarity.",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      style={{
        padding: "80px 0 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Top Pill Badge */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
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
            Testimonials
          </div>
        </div>

        {/* Section Main Title */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            lineHeight: 1.12,
            textAlign: "center",
            color: "#12151B",
            marginBottom: "56px",
          }}
        >
          Good Design
          <br />
          Builds Trust
        </h2>

        {/* Testimonials Horizontal Carousel Track */}
        <div
          className="no-scrollbar"
          style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            padding: "10px 4px 30px",
            scrollSnapType: "x mandatory",
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="testimonial-card"
              style={{
                flex: "0 0 auto",
                width: "clamp(320px, 30vw, 380px)",
                background: "#FFFFFF",
                borderRadius: "28px",
                padding: "32px 36px",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.025)",
                scrollSnapAlign: "start",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div>
                {/* Header Row: Avatar + Role Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "24px",
                  }}
                >
                  {/* Rounded Square Avatar Frame with Quote Icon */}
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "relative",
                        width: "72px",
                        height: "72px",
                        borderRadius: "20px",
                        overflow: "hidden",
                        backgroundColor: "#E2E5EA",
                        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      <Image
                        src={item.avatar}
                        alt={item.author}
                        fill
                        sizes="72px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    {/* Quotation Mark Badge overlay on bottom-left */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-6px",
                        left: "-6px",
                        background: "#12151B",
                        color: "#FFFFFF",
                        width: "24px",
                        height: "24px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.85rem",
                        fontWeight: 900,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        userSelect: "none",
                      }}
                    >
                      “
                    </div>
                  </div>

                  {/* Role Pill Badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 14px",
                      background: "rgba(0, 0, 0, 0.025)",
                      border: "1px solid rgba(0, 0, 0, 0.05)",
                      borderRadius: "9999px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "9999px",
                        backgroundColor: "#2563EB",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "#12151B",
                      }}
                    >
                      {item.role}
                    </span>
                  </div>
                </div>

                {/* Quote Paragraph */}
                <p
                  style={{
                    fontSize: "1.02rem",
                    lineHeight: 1.6,
                    color: "#374151",
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  {item.quote}
                </p>
              </div>

              {/* Author Footer */}
              <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid rgba(0, 0, 0, 0.04)" }}>
                <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#12151B" }}>
                  {item.author}
                </div>
                <div style={{ fontSize: "0.82rem", color: "#8A92A2", marginTop: "2px" }}>
                  {item.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.06) !important;
        }
      `}</style>
    </section>
  );
};
