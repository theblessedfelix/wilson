"use client";

import React from "react";
import Image from "next/image";
import { Project, projects } from "@/data/portfolio";

interface SelectedWorkSectionProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({
  onSelectProject,
}) => {
  return (
    <section
      id="projects"
      style={{
        padding: "80px 0 120px",
        position: "relative",
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
            Projects
          </div>
        </div>

        {/* Section Title */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            lineHeight: 1.12,
            textAlign: "center",
            color: "#12151B",
            marginBottom: "52px",
          }}
        >
          Selected Work
        </h2>

        {/* 2-Column Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "28px",
            maxWidth: "1240px",
            margin: "0 auto",
          }}
          className="selected-work-grid"
        >
          {projects.map((project) => {
            const shortTitle = project.shortTitle || project.title.split(" ")[0];
            const duration = project.duration || "4 Weeks";

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="selected-work-card"
                style={{
                  position: "relative",
                  borderRadius: "32px",
                  overflow: "hidden",
                  backgroundColor: "#E2E5EA",
                  minHeight: "460px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
                  transition:
                    "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Mockup Image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    minHeight: "460px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "32px",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 820px) 100vw, 50vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </div>

                {/* Bottom Left Overlay Badge Pill */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "24px",
                    left: "24px",
                    zIndex: 10,
                    backgroundColor: "#FFFFFF",
                    padding: "10px 22px",
                    borderRadius: "9999px",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    border: "1px solid rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      color: "#12151B",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {shortTitle}
                  </span>
                  <span style={{ color: "#94A3B8", fontWeight: 400 }}>/</span>
                  <span
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: 500,
                      color: "#586071",
                    }}
                  >
                    {duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .selected-work-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.1) !important;
        }
        .selected-work-card:hover img {
          transform: scale(1.04) !important;
        }
        @media (max-width: 820px) {
          .selected-work-grid {
            grid-template-columns: 1fr !important;
          }
          .selected-work-card {
            min-height: 360px !important;
          }
        }
      `}</style>
    </section>
  );
};
