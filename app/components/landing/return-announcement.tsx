"use client";

import Image from "next/image";
import { useId, useState } from "react";

function toDomId(value: string) {
  return value.replace(/[^A-Za-z0-9_-]/g, "_");
}

type ReturnAnnouncementProps = {
  active: boolean;
  onToggle: () => void;
};

const DETAILS = [
  {
    className: "c2c-upcoming-detail c2c-upcoming-detail--date",
    eyebrow: "Date",
    value: "September",
  },
  {
    className: "c2c-upcoming-detail c2c-upcoming-detail--venue",
    eyebrow: "Venue",
    value: "Anna Audi",
  },
  {
    className: "c2c-upcoming-detail c2c-upcoming-detail--place",
    eyebrow: "VIT Vellore",
    value: "Tamil Nadu",
  },
  {
    className: "c2c-upcoming-detail c2c-upcoming-detail--cutout",
    eyebrow: "Coming",
    value: "September 2026",
  },
];

function GlassDistortion({ id }: { id: string }) {
  return (
    <svg
      className="c2c-upcoming-filter"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
    >
      <defs>
        <filter id={id}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.012"
            numOctaves="2"
            seed="18"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.8" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="34"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default function ReturnAnnouncement({ active, onToggle }: ReturnAnnouncementProps) {
  const [hovered, setHovered] = useState(false);
  const filterId = `c2c-upcoming-glass-${toDomId(useId())}`;
  const showingGlass = hovered || active;

  return (
    <div className={`c2c-upcoming ${active ? "is-active" : ""}`}>
      <GlassDistortion id={filterId} />

      <div
        className={`c2c-upcoming-overlay ${showingGlass ? "is-visible" : ""} ${
          active ? "is-active" : ""
        }`}
        aria-hidden={!active}
        style={{
          WebkitBackdropFilter: `url(#${filterId}) blur(12px) saturate(150%)`,
          backdropFilter: `url(#${filterId}) blur(12px) saturate(150%)`,
        }}
      >
        <div className="c2c-upcoming-overlay__tint" />
        <div className="c2c-upcoming-overlay__shine" />

        <div className="c2c-upcoming-stage" aria-hidden={!active}>
          <div className="c2c-upcoming-logo-wrap">
            <Image
              src="/landing/C2C Logo.svg"
              alt=""
              width={265}
              height={299}
              priority
              className="c2c-upcoming-logo"
            />
            <div className="c2c-upcoming-detail-layer">
              {DETAILS.map((item) => (
                <div key={item.className} className={item.className}>
                  <span>{item.eyebrow}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`c2c-upcoming-button ${active ? "is-active" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        onClick={onToggle}
        aria-pressed={active}
        aria-label={active ? "Close upcoming announcement" : "See upcoming announcement"}
      >
        <span className="c2c-upcoming-button__effect" />
        <span className="c2c-upcoming-button__tint" />
        <span className="c2c-upcoming-button__shine" />
        <span className="c2c-upcoming-button__content">
          {active ? "Back to site" : "See upcoming"}
        </span>
      </button>
    </div>
  );
}
