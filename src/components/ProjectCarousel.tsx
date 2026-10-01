"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Project, projects } from "@/data/portfolio";

interface ProjectCarouselProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  onSelectProject,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollBounds = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  useEffect(() => {
    checkScrollBounds();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollBounds);
      return () => el.removeEventListener("scroll", checkScrollBounds);
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      style={{
        paddingTop: "24px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top Section Header with Controls */}
      <div className="container" style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--text-muted)",
              }}
            >
              Selected Works
            </span>
            <span
              style={{
                padding: "2px 8px",
                borderRadius: "9999px",
                background: "rgba(0,0,0,0.06)",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--text-secondary)",
              }}
            >
              {projects.length} Projects
            </span>
          </div>

          {/* Carousel Arrows */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              onClick={() => scrollByAmount(-420)}
              disabled={!canScrollLeft}
              className="glass-pill"
              style={{
                width: "40px",
                height: "40px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: canScrollLeft ? 1 : 0.4,
                cursor: canScrollLeft ? "pointer" : "default",
                transition: "all 0.2s ease",
              }}
              aria-label="Scroll projects left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollByAmount(420)}
              disabled={!canScrollRight}
              className="glass-pill"
              style={{
                width: "40px",
                height: "40px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: canScrollRight ? 1 : 0.4,
                cursor: canScrollRight ? "pointer" : "default",
                transition: "all 0.2s ease",
              }}
              aria-label="Scroll projects right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="no-scrollbar"
        style={{
          display: "flex",
          gap: "20px",
          padding: "10px 48px 24px",
          overflowX: "auto",
          scrollSnapType: isDragging ? "none" : "x mandatory",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => {
              if (!isDragging) {
                onSelectProject(project);
              }
            }}
            className="carousel-card"
            style={{
              flex: "0 0 auto",
              width: "clamp(260px, 24vw, 320px)",
              height: "clamp(340px, 32vw, 420px)",
              position: "relative",
              borderRadius: "32px",
              overflow: "hidden",
              backgroundColor: "#E2E4E9",
              border: "1px solid rgba(255, 255, 255, 0.7)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              scrollSnapAlign: "start",
            }}
          >
            {/* Mockup Image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 280px, 340px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  transition: "transform 0.5s ease",
                }}
                priority={idx < 4}
              />
            </div>

            {/* Hover Gradient Overlay */}
            <div
              className="card-overlay"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(18, 21, 27, 0.85) 0%, rgba(18, 21, 27, 0.2) 50%, transparent 100%)",
                opacity: 0,
                transition: "opacity 0.3s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "24px",
                color: "#FFFFFF",
              }}
            >
              <div style={{ transform: "translateY(8px)", transition: "transform 0.3s ease" }} className="card-info">
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {project.category}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    marginTop: "4px",
                    lineHeight: 1.25,
                  }}
                >
                  {project.title}
                </h3>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--accent-blue)",
                  }}
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Styles for Hover Interactions */}
      <style jsx>{`
        .carousel-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.16) !important;
        }
        .carousel-card:hover .card-overlay {
          opacity: 1 !important;
        }
        .carousel-card:hover .card-info {
          transform: translateY(0) !important;
        }
        .carousel-card:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};
