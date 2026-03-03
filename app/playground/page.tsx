"use client";

import React from "react";
import { motion } from "motion/react";
import { TypingEffect } from "@/components/ui/typing-effect";

type CardSpec = { title: string; description: string };

// Use exactly 10 items and lay them out in 4 horizontal bands (each band is two grid-rows)
const projects: CardSpec[] = Array.from({ length: 10 }).map((_, i) => ({
  title: `Experiment ${i + 1}`,
  description: `Interactive sandbox card ${i + 1}`,
}));

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

function PlaygroundCard({ index }: CardSpec & { index: number }) {
  const gradients = [
    "from-pink-400 via-red-400 to-yellow-400",
    "from-indigo-500 via-purple-500 to-pink-500",
    "from-green-400 via-teal-400 to-cyan-400",
    "from-yellow-300 via-orange-300 to-red-300",
    "from-sky-400 via-blue-400 to-indigo-400",
  ];

  const g = gradients[index % gradients.length];

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`w-full h-full overflow-hidden bg-gradient-to-br ${g} relative flex items-center justify-center`}
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white to-transparent" />
      <div className="z-10 text-center text-white">
        <h3 className="text-2xl font-bold mb-1">Coming Soon</h3>
        <p className="text-sm opacity-90">Page Under Construction</p>
      </div>
    </motion.div>
  );
}

export default function PlaygroundPage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="mb-6 text-pink">
              <TypingEffect text="Playground" />
            </div>
            <p className="text-neutral-500">Ongoing academic projects, experiments, and explorations at UCSC.</p>
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
                <PlaygroundCard title={p.title} description={p.description} index={idx} />
              </div>
            );
          })}
        </div>

        {/* Mobile / small screens: flow layout */}
        <div className="grid grid-cols-12 gap-0 lg:hidden auto-rows-[140px]">
          {projects.map((p, idx) => (
            <div key={`mob-${idx}`} className={`col-span-12 sm:col-span-6`}> 
              <PlaygroundCard title={p.title} description={p.description} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
