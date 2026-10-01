"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { Profile } from "@/data/portfolio";

interface HeroProps {
  profile: Profile;
  onStartProject: () => void;
  onSeeProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onStartProject,
  onSeeProjects,
}) => {
  return (
    <section
      id="about"
      style={{
        paddingTop: "140px",
        paddingBottom: "40px",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            alignItems: "center",
            gap: "48px",
          }}
          className="hero-grid"
        >
          {/* Left Column: Huge Typography with Floating Avatar Badge */}
          <div style={{ position: "relative" }}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(3.5rem, 7.5vw, 6.2rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
                color: "var(--text-primary)",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "14px",
                  flexWrap: "nowrap",
                }}
              >
                <span>{profile.firstName}</span>

                {/* 3D-styled rounded avatar sticker */}
                <div
                  className="badge-sticker"
                  style={{
                    position: "relative",
                    width: "clamp(54px, 6vw, 76px)",
                    height: "clamp(54px, 6vw, 76px)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "3.5px solid #FFFFFF",
                    background: "#E5E7EB",
                    flexShrink: 0,
                    cursor: "pointer",
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                  title={profile.name}
                >
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </span>
              <br />
              <span>{profile.lastName}</span>
            </h1>
          </div>

          {/* Right Column: Status Pill, Bio, Action Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              maxWidth: "500px",
              justifySelf: "end",
            }}
            className="hero-right-col"
          >
            {/* Rating / Role Badge Pill */}
            <div
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 18px",
                background: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "9999px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              }}
            >
              {/* Blue status dot */}
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "9999px",
                  backgroundColor: "var(--accent-blue-deep)",
                  boxShadow: "0 0 8px var(--accent-blue)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "var(--text-primary)",
                }}
              >
                {profile.rating}
              </span>
              <span
                style={{
                  color: "var(--border-strong)",
                  fontSize: "0.85rem",
                }}
              >
                •
              </span>
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                }}
              >
                {profile.roleBadge}
              </span>
            </div>

            {/* Bio Text */}
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.6vw, 1.22rem)",
                lineHeight: 1.55,
                color: "var(--text-secondary)",
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
              }}
            >
              {profile.bio}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                flexWrap: "wrap",
                paddingTop: "6px",
              }}
            >
              <button
                id="hero-start-project-btn"
                className="btn-primary"
                onClick={onStartProject}
                aria-label={`Start a project with ${profile.name}`}
              >
                <span>Start a Project</span>
                <ArrowRight size={17} />
              </button>

              <button
                id="hero-see-projects-btn"
                className="btn-secondary"
                onClick={onSeeProjects}
                aria-label="Scroll to projects"
              >
                <span>See Projects</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Responsive Media Queries */}
      <style jsx>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .hero-right-col {
            justify-self: start !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
