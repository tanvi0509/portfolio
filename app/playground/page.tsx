"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { TypingEffect } from "@/components/ui/typing-effect";

type CardSpec = { title: string; description: string; href?: string; gradient?: string };

const projects: CardSpec[] = [
  {
    title: "An Interactive Bouquet",
    description: "Intro to Build (Advanced) Physical Computing",
    href: "/playground/valentine-bouquet",
    gradient: "from-rose-500 via-pink-400 to-red-400",
  },
  {
    title: "Introducing AI-Bot in UCSC Canvas",
    description: "UX Quant and Intro to HCI Methods",
    href: "/playground/canvas-ux",
    gradient: "from-indigo-600 via-indigo-500 to-violet-500",
  },
  {
    title: "Design for Access: YouTube ASL Translations",
    description: "Intro to HCI Methods",
    href: "/playground/youtube-asl",
    gradient: "from-purple-700 via-violet-500 to-teal-400",
  },
  {
    title: "Data Analysis of Disney's The Little Mermaid",
    description: "Intro to HCI Method",
    href: "/playground/little-mermaid",
    gradient: "from-slate-900 via-blue-800 to-teal-500",
  },
  {
    title: "TikTok: Building a Research Question",
    description: "Intro to HCI",
    href: "/playground/tiktok-food",
    gradient: "from-gray-950 via-gray-900 to-gray-800",
  },
  {
    title: "Magnetic Hall Effect Sensor",
    description: "Intro to Build (Advanced) Physical Computing",
    href: "/playground/hall-effect",
    gradient: "from-gray-900 via-gray-800 to-emerald-500",
  },
  {
    title: "Expansion: Accessibility, Aging & Designing",
    description: "Intro to HCI Methods:",
    href: "/playground/hci-expansion",
    gradient: "from-amber-500 via-orange-400 to-emerald-600",
  },
  ...Array.from({ length: 3 }).map((_, i) => ({
    title: `Experiment ${i + 8}`,
    description: `Interactive sandbox card ${i + 8}`,
    gradient: "from-zinc-500 via-zinc-400 to-zinc-600",
  })),
];

// Bands (each band fills 12 columns) - all items use rowSpan = 2
const bands: number[][] = [
  [6, 3, 3], // band 1: col6, col3, col3
  [4, 4, 4], // band 2
  [6, 6], // band 3
  [8, 4], // band 4
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

function PlaygroundCard({ title, description, href, gradient }: CardSpec) {
  const g = gradient ?? "from-zinc-500 via-zinc-400 to-zinc-600";

  const isActive = !!href;

  const content = (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`w-full h-full overflow-hidden bg-gradient-to-br ${g} relative flex items-center justify-center ${isActive ? "cursor-pointer" : ""}`}
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white to-transparent" />
      <div className="z-10 text-center text-white px-4">
        {isActive ? (
          <>
            <h3 className="text-2xl font-bold mb-1">{title}</h3>
            <p className="text-sm opacity-90">{description}</p>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-bold mb-1">Coming Soon</h3>
            <p className="text-sm opacity-90">Page Under Construction</p>
          </>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return <Link href={href} className="block w-full h-full">{content}</Link>;
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
        <div className="hidden lg:grid grid-cols-12 gap-0 auto-rows-[160px]">
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
                <PlaygroundCard title={p.title} description={p.description} href={p.href} gradient={p.gradient} />
              </div>
            );
          })}
        </div>

        {/* Mobile / small screens: flow layout */}
        <div className="grid grid-cols-12 gap-0 lg:hidden auto-rows-[140px]">
          {projects.map((p, idx) => (
            <div key={`mob-${idx}`} className={`col-span-12 sm:col-span-6`}> 
              <PlaygroundCard title={p.title} description={p.description} href={p.href} gradient={p.gradient} />
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
