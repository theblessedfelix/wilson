"use client";

import React, { useState, useRef } from "react";
import { Sparkles, Palette, Volume2, VolumeX, MousePointer, Cpu } from "lucide-react";

export const PlaygroundSection: React.FC = () => {
  const [currentAccent, setCurrentAccent] = useState<"blue" | "purple" | "emerald" | "amber">("blue");
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const accents = [
    { id: "blue", label: "Royal Blue", hex: "#3B82F6" },
    { id: "purple", label: "Electric Violet", hex: "#8B5CF6" },
    { id: "emerald", label: "Neon Emerald", hex: "#10B981" },
    { id: "amber", label: "Sunset Amber", hex: "#F59E0B" },
  ];

  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch {
      // AudioContext unavailable
    }
  };

  const handleAccentChange = (accent: "blue" | "purple" | "emerald" | "amber") => {
    setCurrentAccent(accent);
    document.documentElement.setAttribute("data-accent", accent);
    playClickSound();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / (rect.height / 2)) * 14,
      y: (x / (rect.width / 2)) * 14,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="play"
      style={{
        padding: "80px 0 100px",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 48px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 16px",
              background: "rgba(37, 99, 235, 0.08)",
              borderRadius: "9999px",
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "var(--accent-blue-deep)",
              marginBottom: "12px",
            }}
          >
            <Sparkles size={14} />
            <span>Interactive Lab</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Let&apos;s Play with UI Dynamics
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", marginTop: "10px" }}>
            A sandbox demonstrating tactile physics, Web Audio micro-feedback, and dynamic theme tokens.
          </p>
        </div>

        {/* Playground Controls & Interactive Widgets */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px",
            maxWidth: "1080px",
            margin: "0 auto",
          }}
          className="play-grid"
        >
          {/* Card 1: Dynamic Theme & Sound Control */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "28px",
              padding: "36px",
              border: "1px solid var(--border-subtle)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <Palette size={20} style={{ color: "var(--accent-blue-deep)" }} />
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700 }}>
                  Theme Accent Mood
                </h3>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
                Switching accent shifts colors across the entire portfolio in real-time.
              </p>

              {/* Accent Color Buttons */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", marginBottom: "28px" }}>
                {accents.map((acc) => (
                  <button
                    key={acc.id}
                    onClick={() => handleAccentChange(acc.id as "blue" | "purple" | "emerald" | "amber")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "12px 14px",
                      borderRadius: "14px",
                      border: currentAccent === acc.id ? "2px solid var(--accent-blue-deep)" : "1px solid var(--border-subtle)",
                      background: currentAccent === acc.id ? "rgba(0,0,0,0.02)" : "#FAFAFB",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span
                      style={{
                        width: "14px",
                        height: "14px",
                        borderRadius: "9999px",
                        backgroundColor: acc.hex,
                        boxShadow: `0 0 8px ${acc.hex}66`,
                      }}
                    />
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>
                      {acc.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sound Toggle */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                background: "#F6F7F9",
                borderRadius: "16px",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {soundEnabled ? <Volume2 size={18} style={{ color: "var(--accent-blue-deep)" }} /> : <VolumeX size={18} style={{ color: "var(--text-muted)" }} />}
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    Haptic Sound Synthesis
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                    Subtle synth clicks on user actions
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSoundEnabled(!soundEnabled);
                  if (!soundEnabled) {
                    setTimeout(playClickSound, 50);
                  }
                }}
                style={{
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  background: soundEnabled ? "var(--accent-blue-deep)" : "#E2E4E9",
                  color: soundEnabled ? "#FFFFFF" : "var(--text-secondary)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {soundEnabled ? "Enabled" : "Disabled"}
              </button>
            </div>
          </div>

          {/* Card 2: 3D Interactive Spring Card */}
          <div
            style={{
              perspective: "1000px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                width: "100%",
                height: "100%",
                minHeight: "340px",
                background: "linear-gradient(135deg, #1C202B 0%, #0F1218 100%)",
                borderRadius: "28px",
                padding: "36px",
                color: "#FFFFFF",
                boxShadow: isHovered
                  ? "0 28px 60px -12px rgba(0,0,0,0.35), 0 0 40px var(--accent-blue-glow)"
                  : "0 12px 32px rgba(0,0,0,0.15)",
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? "scale(1.03)" : "scale(1)"}`,
                transition: isHovered ? "transform 0.1s ease-out, box-shadow 0.2s ease" : "transform 0.5s ease-out, box-shadow 0.5s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Dynamic specular lighting reflection */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: isHovered
                    ? `radial-gradient(circle at ${50 + tilt.y * 3}% ${50 - tilt.x * 3}%, rgba(255,255,255,0.18), transparent 60%)`
                    : "none",
                  pointerEvents: "none",
                }}
              />

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Cpu size={20} style={{ color: "var(--accent-blue)" }} />
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                    3D Depth Physics
                  </span>
                </div>
                <MousePointer size={16} style={{ color: "rgba(255,255,255,0.4)" }} />
              </div>

              <div>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "8px" }}>
                  Hover & Move Cursor
                </h4>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                  Real-time perspective matrix calculations tracking cursor velocity and angular displacement.
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
                  Pitch: {tilt.x.toFixed(1)}° | Yaw: {tilt.y.toFixed(1)}°
                </span>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent-blue)" }}>
                  Framer Dynamics
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 820px) {
          .play-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
