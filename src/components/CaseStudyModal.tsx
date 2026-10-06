"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, CheckCircle2, Award, Wrench, Layers, FileText } from "lucide-react";
import { Project } from "@/data/portfolio";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onStartProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          maxWidth: "880px",
          maxHeight: "90vh",
          overflowY: "auto",
          borderRadius: "28px",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.2)",
          position: "relative",
          animation: "fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="no-scrollbar"
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          id="close-case-study-modal"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "40px",
            height: "40px",
            borderRadius: "9999px",
            background: "rgba(18, 21, 27, 0.6)",
            color: "#FFFFFF",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            border: "none",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(18, 21, 27, 0.85)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(18, 21, 27, 0.6)")}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Hero Visual Banner */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "440px",
            backgroundColor: "#E4E6EB",
            borderTopLeftRadius: "28px",
            borderTopRightRadius: "28px",
            overflow: "hidden",
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "contain", padding: "20px" }}
            priority
          />
        </div>

        {/* Modal Content */}
        <div style={{ padding: "36px 40px" }}>
          {/* Header Info */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "8px" }}>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--accent-blue-deep)",
                background: "rgba(37, 99, 235, 0.08)",
                padding: "4px 12px",
                borderRadius: "9999px",
              }}
            >
              {project.category}
            </span>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{project.tag}</span>
          </div>

          <h2
            id="case-study-title"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            {project.title}
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              marginBottom: "32px",
            }}
          >
            {project.summary}
          </p>

          {/* Key Metrics Strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              padding: "20px",
              background: "#F6F7F9",
              borderRadius: "20px",
              marginBottom: "36px",
              border: "1px solid var(--border-subtle)",
            }}
          >
            {project.metrics.map((metric, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Award size={20} style={{ color: "var(--accent-blue-deep)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  {metric}
                </span>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "28px",
              marginBottom: "36px",
            }}
            className="case-study-grid"
          >
            <div
              style={{
                padding: "24px",
                borderRadius: "20px",
                background: "#FFFBF5",
                border: "1px solid rgba(245, 158, 11, 0.2)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#B45309",
                  marginBottom: "8px",
                }}
              >
                The Challenge
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-secondary)" }}>
                {project.challenge}
              </p>
            </div>

            <div
              style={{
                padding: "24px",
                borderRadius: "20px",
                background: "#F0FDF4",
                border: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#047857",
                  marginBottom: "8px",
                }}
              >
                The Solution
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-secondary)" }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features Checklist */}
          <div style={{ marginBottom: "36px" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "16px",
              }}
            >
              Key Deliverables & Innovations
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {project.features.map((feat, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--accent-blue-deep)", marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Stack */}
          <div style={{ marginBottom: "36px" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "12px",
              }}
            >
              Tools & Methodologies
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    background: "#F1F3F5",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "24px",
              borderTop: "1px solid var(--border-subtle)",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <button
              onClick={() => {
                onClose();
                onStartProject();
              }}
              className="btn-primary"
            >
              <span>Build Something Similar</span>
            </button>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ gap: "6px", backgroundColor: "#EEF2FF", color: "#4F46E5", borderColor: "#C7D2FE" }}
                >
                  <FileText size={16} />
                  <span>View Brand Guide (PDF)</span>
                </a>
              )}

              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ gap: "6px" }}
                >
                  <span>Live Preview</span>
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 680px) {
          .case-study-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
