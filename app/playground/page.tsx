"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { TypingEffect } from "@/components/ui/typing-effect";

type CardSpec = { title: string; description: string; href?: string };

const projects: CardSpec[] = [
  {
    title: "An Interactive Bouquet",
    description: "Intro to Build (Advanced) Physical Computing",
    href: "/playground/valentine-bouquet",
  },
  {
    title: "Data Analysis of Disney's The Little Mermaid",
    description: "Intro to HCI Method",
    href: "/playground/little-mermaid",
  },
  {
    title: "TikTok: Building a Research Question",
    description: "Intro to HCI",
    href: "/playground/tiktok-food",
  },
  {
    title: "Magnetic Hall Effect Sensor",
    description: "Intro to Build (Advanced) Physical Computing",
    href: "/playground/hall-effect",
  },
  {
    title: "Expansion: Accessibility, Aging & Designing",
    description: "Intro to HCI Methods:",
    href: "/playground/hci-expansion",
  },
  {
    title: "Petals and Promises",
    description: "Buying flowers made easy",
    href: "/petalsnpromises",
  },
  {
    title: "Recens Visual Identity Kit",
    description: "Fashion brand aesthetics",
    href: "/recens",
  },
  {
    title: "Swavya",
    description: "Health web application",
    href: "/swavya",
  },
];

// Bands (each band fills 12 columns) - all items use rowSpan = 2
const bands: number[][] = [
  [6, 3, 3], // band 1: col6, col3, col3
  [4, 4, 4], // band 2
  [6, 6], // band 3
];

// Build placements from bands: each item gets colStart, rowStart, colSpan, rowSpan
function buildPlacements(bandsSpec: number[][]) {
  const placements: { colStart: number; rowStart: number; colSpan: number; rowSpan: number }[] = [];
  let rowStart = 1;
  bandsSpec.forEach((band) => {
    let colPointer = 1;
    band.forEach((colSpan) => {
      placements.push({ colStart: colPointer, rowStart, colSpan, rowSpan: 2 });
      colPointer += colSpan;
    });
    rowStart += 2; // each band occupies 2 rows
  });
  return placements;
}

const placements = buildPlacements(bands);

// Small alternating tilt per tile so the board doesn't feel perfectly gridded
const TILTS = [-2, 1.5, -1.5, 2, -1, 1.5, -2, 1];

function PlaygroundCard({ title, description, href, index }: CardSpec & { index: number }) {
  const isActive = !!href;
  const tilt = TILTS[index % TILTS.length];

  const content = (
    <motion.div
      initial={{ rotate: tilt }}
      whileHover={{ scale: 1.035, rotate: 0 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`w-full h-full overflow-hidden relative flex items-center justify-center rounded-sm ${isActive ? "cursor-pointer" : ""}`}
      style={{
        background: "linear-gradient(160deg, #FFF6B7 0%, #FFE066 55%, #FFD93D 100%)",
        boxShadow: "0 14px 24px -10px rgba(0,0,0,0.35), 0 3px 6px rgba(0,0,0,0.18)",
      }}
    >
      {/* subtle sheen, like light catching the paper */}
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.7),_transparent_60%)]" />
      {/* peeled corner */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-6 h-6"
        style={{
          background: "linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.12) 50%)",
        }}
      />
      <div className="z-10 text-center px-5">
        {isActive ? (
          <>
            <h3 className="text-xl font-bold mb-1 text-neutral-800">{title}</h3>
            <p className="text-sm text-neutral-700/80">{description}</p>
          </>
        ) : (
          <>
            <h3 className="text-xl font-bold mb-1 text-neutral-800">Coming Soon</h3>
            <p className="text-sm text-neutral-700/80">Page Under Construction</p>
          </>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block w-full h-full">
        {content}
      </Link>
    );
  }

  return content;
}

export default function PlaygroundPage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="mb-6">
              <TypingEffect
                text="Playground"
                className="text-[29px] text-blackish sm:text-[46px] font-normal font-roboto tracking-tighter md:leading-[4rem] dark:text-whitish"
              />
            </div>
            <p className="text-neutral-500">Academic projects, experiments, and explorations at UCSC.</p>
          </div>
        </div>

        {/* Desktop bento grid (explicit band placement) */}
        <div className="hidden lg:grid grid-cols-12 gap-5 auto-rows-[160px]">
          {projects.map((p, idx) => {
            const place = placements[idx];
            const style: React.CSSProperties = place
              ? {
                  gridColumn: `${place.colStart} / span ${place.colSpan}`,
                  gridRow: `${place.rowStart} / span ${place.rowSpan}`,
                }
              : {};

            return (
              <div key={`desk-${idx}`} style={style}>
                <PlaygroundCard title={p.title} description={p.description} href={p.href} index={idx} />
              </div>
            );
          })}
        </div>

        {/* Mobile / small screens: flow layout */}
        <div className="grid grid-cols-12 gap-5 lg:hidden auto-rows-[140px]">
          {projects.map((p, idx) => (
            <div key={`mob-${idx}`} className={`col-span-12 sm:col-span-6`}>
              <PlaygroundCard title={p.title} description={p.description} href={p.href} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
