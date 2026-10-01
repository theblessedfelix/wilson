"use client";

import React, { useState, useEffect } from "react";
import { X, Send, Sparkles, CheckCircle2, Rocket } from "lucide-react";
import confetti from "canvas-confetti";
import { Profile } from "@/data/portfolio";

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  profile,
}) => {
  const [projectTypes, setProjectTypes] = useState<string[]>(["Mobile App"]);
  const [budget, setBudget] = useState("$10k - $25k");
  const [timeline, setTimeline] = useState("1 - 2 Months");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const availableTypes = [
    "Mobile App (iOS/Android)",
    "Web Application",
    "Design System",
    "Full Brand & UI/UX",
    "SaaS Dashboard",
    "Interactive Prototype",
  ];

  const budgetTiers = ["< $10k", "$10k - $25k", "$25k - $50k", "$50k+"];
  const timelineTiers = ["< 1 Month", "1 - 2 Months", "2 - 4 Months", "Flexible"];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const toggleType = (type: string) => {
    if (projectTypes.includes(type)) {
      setProjectTypes(projectTypes.filter((t) => t !== type));
    } else {
      setProjectTypes([...projectTypes, type]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={handleClose} role="dialog" aria-modal="true">
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          maxWidth: "680px",
          maxHeight: "92vh",
          overflowY: "auto",
          borderRadius: "28px",
          padding: "36px 40px",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.2)",
          position: "relative",
          animation: "fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="no-scrollbar"
      >
        <button
          onClick={handleClose}
          id="close-inquiry-modal"
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            width: "36px",
            height: "36px",
            borderRadius: "9999px",
            background: "#F1F3F5",
            color: "var(--text-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "none",
          }}
          aria-label="Close inquiry modal"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "var(--accent-blue-deep)",
                  background: "rgba(37, 99, 235, 0.08)",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  marginBottom: "8px",
                }}
              >
                <Rocket size={14} />
                <span>Start a Project</span>
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                Let&apos;s build something great.
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                Tell me about your product vision. I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {/* Project Category Selection */}
            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "8px" }}>
                What are you looking to create?
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {availableTypes.map((type) => {
                  const active = projectTypes.includes(type);
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => toggleType(type)}
                      style={{
                        padding: "8px 16px",
                        borderRadius: "9999px",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        border: active ? "1.5px solid var(--accent-blue-deep)" : "1px solid var(--border-subtle)",
                        background: active ? "rgba(37, 99, 235, 0.08)" : "#FFFFFF",
                        color: active ? "var(--accent-blue-deep)" : "var(--text-secondary)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget Tiers */}
            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "8px" }}>
                Estimated Budget
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                {budgetTiers.map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setBudget(tier)}
                    style={{
                      padding: "10px",
                      borderRadius: "12px",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      border: budget === tier ? "1.5px solid var(--accent-blue-deep)" : "1px solid var(--border-subtle)",
                      background: budget === tier ? "rgba(37, 99, 235, 0.08)" : "#FFFFFF",
                      color: budget === tier ? "var(--accent-blue-deep)" : "var(--text-secondary)",
                      textAlign: "center",
                    }}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline Tiers */}
            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "8px" }}>
                Target Timeline
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                {timelineTiers.map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setTimeline(tier)}
                    style={{
                      padding: "10px",
                      borderRadius: "12px",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      border: timeline === tier ? "1.5px solid var(--accent-blue-deep)" : "1px solid var(--border-subtle)",
                      background: timeline === tier ? "rgba(37, 99, 235, 0.08)" : "#FFFFFF",
                      color: timeline === tier ? "var(--accent-blue-deep)" : "var(--text-secondary)",
                      textAlign: "center",
                    }}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "6px" }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. David Okon"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-strong)",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "6px" }}>
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="david@company.com"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-strong)",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "28px" }}>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "6px" }}>
                Briefly describe the project
              </label>
              <textarea
                rows={3}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What problem does this product solve? Who are your users?"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  border: "1px solid var(--border-strong)",
                  fontSize: "0.9rem",
                  outline: "none",
                  resize: "none",
                  fontFamily: "inherit",
                }}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "14px" }}
            >
              <span>Send Project Inquiry</span>
              <Send size={16} />
            </button>
          </form>
        ) : (
          <div style={{ textAlign: "center", padding: "30px 10px" }}>
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "9999px",
                background: "#ECFDF5",
                color: "#059669",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.6rem",
                fontWeight: 800,
                marginBottom: "8px",
              }}
            >
              Inquiry Received!
            </h3>

            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: "440px", margin: "0 auto 28px" }}>
              Thanks {name || "there"}! I&apos;ve received your project details for <strong>{projectTypes.join(", ")}</strong> with a budget of <strong>{budget}</strong>. I will review and reply to <strong>{email}</strong> within 24 hours.
            </p>

            <button onClick={handleClose} className="btn-secondary" style={{ minWidth: "160px" }}>
              Back to Portfolio
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
