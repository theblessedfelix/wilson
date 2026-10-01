"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Calendar as CalendarIcon, Clock, Video, CheckCircle, ArrowRight, User } from "lucide-react";
import confetti from "canvas-confetti";
import { Profile } from "@/data/portfolio";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  profile,
}) => {
  const [selectedDate, setSelectedDate] = useState("Tomorrow");
  const [selectedTime, setSelectedTime] = useState("02:00 PM");
  const [step, setStep] = useState<"slots" | "form" | "confirmed">("slots");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const dates = [
    { day: "Tomorrow", date: "Sep 15" },
    { day: "Wednesday", date: "Sep 16" },
    { day: "Thursday", date: "Sep 17" },
    { day: "Friday", date: "Sep 18" },
  ];

  const timeSlots = [
    "10:00 AM",
    "11:30 AM",
    "02:00 PM",
    "03:30 PM",
    "04:45 PM",
  ];

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

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirmed");
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const resetAndClose = () => {
    setStep("slots");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={resetAndClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          maxWidth: "760px",
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.2)",
          position: "relative",
          animation: "fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          id="close-booking-modal"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "36px",
            height: "36px",
            borderRadius: "9999px",
            background: "#F1F3F5",
            color: "var(--text-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            transition: "all 0.2s ease",
          }}
          aria-label="Close booking modal"
        >
          <X size={18} />
        </button>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
          }}
          className="booking-grid"
        >
          {/* Left Column: Meeting Info */}
          <div
            style={{
              padding: "36px 32px",
              background: "#F8F9FA",
              borderRight: "1px solid var(--border-subtle)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* Host Avatar & Details */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div
                  style={{
                    position: "relative",
                    width: "44px",
                    height: "44px",
                    borderRadius: "9999px",
                    overflow: "hidden",
                    border: "2px solid #FFFFFF",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <Image src={profile.avatar} alt={profile.name} fill style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    {profile.name}
                  </h4>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                    {profile.roleBadge}
                  </p>
                </div>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  lineHeight: 1.25,
                  marginBottom: "16px",
                }}
              >
                30 Min Discovery Call
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  <Clock size={16} style={{ color: "var(--accent-blue-deep)" }} />
                  <span>30 minutes</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  <Video size={16} style={{ color: "var(--accent-blue-deep)" }} />
                  <span>Google Meet / Zoom</span>
                </div>
              </div>

              <p style={{ fontSize: "0.85rem", lineHeight: 1.5, color: "var(--text-secondary)" }}>
                Let&apos;s discuss your upcoming product design challenge, mobile/web UX architecture, or timeline.
              </p>
            </div>

            <div
              style={{
                marginTop: "24px",
                padding: "12px 14px",
                borderRadius: "12px",
                background: "rgba(37, 99, 235, 0.08)",
                fontSize: "0.8rem",
                color: "var(--accent-blue-deep)",
                fontWeight: 600,
              }}
            >
              🚀 Free consultation • No obligations
            </div>
          </div>

          {/* Right Column: Slot Picker or Form */}
          <div style={{ padding: "36px 32px" }}>
            {step === "slots" && (
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    marginBottom: "16px",
                    color: "var(--text-primary)",
                  }}
                >
                  Select Date & Time
                </h4>

                {/* Date Tabs */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "8px",
                    marginBottom: "24px",
                  }}
                >
                  {dates.map((d) => (
                    <button
                      key={d.day}
                      onClick={() => setSelectedDate(d.day)}
                      style={{
                        padding: "10px 6px",
                        borderRadius: "12px",
                        border: selectedDate === d.day ? "2px solid var(--accent-blue-deep)" : "1px solid var(--border-subtle)",
                        background: selectedDate === d.day ? "rgba(37, 99, 235, 0.06)" : "#FFFFFF",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2px",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 500 }}>
                        {d.day}
                      </span>
                      <span
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 700,
                          color: selectedDate === d.day ? "var(--accent-blue-deep)" : "var(--text-primary)",
                        }}
                      >
                        {d.date}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Time Slots */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      style={{
                        padding: "12px 16px",
                        borderRadius: "12px",
                        border: selectedTime === time ? "2px solid var(--accent-blue-deep)" : "1px solid var(--border-subtle)",
                        background: selectedTime === time ? "rgba(37, 99, 235, 0.06)" : "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: selectedTime === time ? "var(--accent-blue-deep)" : "var(--text-primary)",
                        cursor: "pointer",
                      }}
                    >
                      <span>{time}</span>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>GMT</span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setStep("form")}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <span>Next: Your Details</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}

            {step === "form" && (
              <form onSubmit={handleConfirmBooking}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                    }}
                  >
                    Enter Details
                  </h4>
                  <button
                    type="button"
                    onClick={() => setStep("slots")}
                    style={{ fontSize: "0.8rem", color: "var(--accent-blue-deep)", fontWeight: 600 }}
                  >
                    ← Change time
                  </button>
                </div>

                <div style={{ padding: "10px 14px", background: "#F1F3F5", borderRadius: "10px", marginBottom: "20px", fontSize: "0.85rem" }}>
                  📅 <strong>{selectedDate}</strong> at <strong>{selectedTime} GMT</strong>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "24px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        border: "1px solid var(--border-strong)",
                        outline: "none",
                        fontSize: "0.9rem",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@company.com"
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        border: "1px solid var(--border-strong)",
                        outline: "none",
                        fontSize: "0.9rem",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                      What would you like to discuss?
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Brief note about your product idea or goals..."
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        border: "1px solid var(--border-strong)",
                        outline: "none",
                        fontSize: "0.9rem",
                        fontFamily: "inherit",
                        resize: "none",
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <span>Confirm Booking</span>
                </button>
              </form>
            )}

            {step === "confirmed" && (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "9999px",
                    background: "#ECFDF5",
                    color: "#059669",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <CheckCircle size={32} />
                </div>

                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  You&apos;re Booked!
                </h4>

                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: "20px" }}>
                  A calendar invite and Google Meet link have been sent to <strong>{email || "your email"}</strong>.
                </p>

                <div
                  style={{
                    padding: "12px",
                    background: "#F8F9FA",
                    borderRadius: "12px",
                    fontSize: "0.85rem",
                    marginBottom: "24px",
                  }}
                >
                  📅 <strong>{selectedDate}</strong> at <strong>{selectedTime} GMT</strong>
                </div>

                <button onClick={resetAndClose} className="btn-secondary" style={{ width: "100%" }}>
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 680px) {
          .booking-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
