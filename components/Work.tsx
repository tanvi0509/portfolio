"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

type WorkProject = {
  title: string;
  tagline: string;
  role: string;
  extra: string;
  href?: string;
  comingSoon?: boolean;
  statusLabel?: string;
  overlayText?: string;
  image?: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
  imageBg?: string;
  accentClass: string;
  reverse?: boolean;
};

const projects: WorkProject[] = [
  {
    title: "Activision",
    tagline: "AI-powered playtest analytics dashboard",
    role: "Product Designer",
    extra: "UX Researcher",
    statusLabel: "Ongoing project",
    href: "/activision",
    overlayText:
      "An AI flags anomalies in playtests, but researchers couldn't trust or act on what it found. See the dashboard that closes that gap.",
    accentClass: "from-[#9B7BFF]/35 to-[#9B7BFF]/5",
    image: "/Activisionheroimage.png",
    imagePosition: "object-bottom",
  },
  {
    title: "Cohesity: AI Prompt Library",
    tagline: "Making enterprise AI easier for sales teams",
    role: "Product Designer",
    extra: "UX Researcher",
    href: "/cohesity-prompt-library",
    overlayText:
      "Sellers were writing their own prompts by hand instead of using the AI built for it. See the redesign now shipping across Slack, Copilot, and Claude.",
    accentClass: "from-[#2FD9B8]/35 to-[#2FD9B8]/5",
    reverse: true,
    image: "/cohesityhifi1-zoom.png",
    imageFit: "contain",
    imageBg: "bg-[#292929]",
  },
  {
    title: "Cohesity: Reporting Agent",
    tagline: "An AI agent that knows when to ask a human",
    role: "Product Designer",
    extra: "UX Researcher",
    href: "/cohesity-reporting-agent",
    overlayText:
      "When should AI act alone, and when should it ask a human? See the escalation logic designed to make that call.",
    accentClass: "from-[#2FD9B8]/35 to-[#2FD9B8]/5",
    image: "/Cohesitylogo.png",
    imageFit: "contain",
  },
  {
    title: "Design for Access",
    tagline: "Bringing ASL translations to YouTube",
    role: "UX Researcher",
    extra: "Accessibility Designer",
    href: "/playground/youtube-asl",
    overlayText:
      "YouTube has no built-in ASL support. See the research with Deaf and hard-of-hearing viewers behind a pattern that could change that.",
    accentClass: "from-[#FF6259]/35 to-[#FF6259]/5",
    reverse: true,
    image: "/Designforaccessoutside.jpeg",
  },
  {
    title: "Canvas",
    tagline: "Reimagining Canvas AI teaching assistant",
    role: "Product Designer",
    extra: "UX Researcher",
    href: "/playground/canvas-ux",
    overlayText:
      "Before redesigning Canvas's AI assistant, I had to know how to prove it actually helps. See how the experiments were scoped.",
    accentClass: "from-[#FFA53D]/35 to-[#FFA53D]/5",
    image: "/CanvasInspo.png",
    imagePosition: "object-left",
  },
  {
    title: "Recens",
    tagline: "Best shopping experience",
    role: "Co-Founder",
    extra: "UI/UX Designer",
    href: "/recensshop",
    overlayText:
      "Co-founded the brand and designed the shopping journey end to end, cutting returns 28% and growing community engagement 45%.",
    accentClass: "from-[#5B7CFA]/35 to-[#5B7CFA]/5",
    reverse: true,
    image: "/Recensimage3homepage.png",
  },
  {
    title: "Envox",
    tagline: "Revamping the Envox website",
    role: "UX Designer",
    extra: "Web Developer",
    href: "/envoxwork",
    overlayText:
      "Rebuilt Envox's site from the architecture up, lifting engagement 40% through tighter design-development collaboration.",
    accentClass: "from-[#48C6FF]/35 to-[#48C6FF]/5",
    image: "/envoxheromockup.PNG",
    imageFit: "contain",
  },
];

export default function Work() {
  return (
    <motion.main
      id="work"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-roboto container mx-auto px-4 pt-10 pb-20 sm:pt-16 sm:pb-28"
    >
      <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-blackish dark:text-whitish">
            The work I am proud of
          </h2>
        </div>
        <p className="text-sm sm:text-base text-blackish/60 dark:text-whitish/60">
          Playground now contains exploratory and side projects.
        </p>
      </div>

      <div className="flex flex-col gap-12 sm:gap-16">
        {projects.map((project) => (
          <article
            key={project.title}
            id={project.title === "Recens" ? "recens" : undefined}
            className={`grid items-center gap-6 sm:gap-10 ${
              project.reverse ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"
            }`}
          >
            <div className={`${project.reverse ? "lg:order-2" : ""}`}>
              {project.statusLabel && (
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FF3E88]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#FF3E88]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF3E88]" />
                  {project.statusLabel}
                </div>
              )}
              <p className="mb-2 text-sm font-semibold text-[#FF3E88]">Case study</p>
              <h3 className="text-3xl sm:text-4xl font-semibold text-blackish dark:text-whitish">{project.title}</h3>
              <p className="mt-3 text-base sm:text-lg text-blackish/60 dark:text-whitish/60">{project.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-blackish/15 px-4 py-1.5 text-xs sm:text-sm text-blackish/75 dark:border-whitish/20 dark:text-whitish/75">
                  {project.role}
                </span>
                <span className="rounded-full border border-blackish/15 px-4 py-1.5 text-xs sm:text-sm text-blackish/75 dark:border-whitish/20 dark:text-whitish/75">
                  {project.extra}
                </span>
              </div>
              {project.href ? (
                <Link
                  href={project.href}
                  className="group/cta mt-7 inline-flex items-center gap-2 rounded-full bg-[#FF3E88] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#FF3E88]/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e6357c] hover:shadow-lg hover:shadow-[#FF3E88]/40"
                >
                  View case study
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              ) : (
                <span className="mt-7 inline-flex items-center rounded-full border border-blackish/20 px-5 py-2.5 text-sm font-semibold text-blackish/50 dark:border-whitish/25 dark:text-whitish/50">
                  Case study coming soon
                </span>
              )}
            </div>

            <div
              className={`group relative overflow-hidden rounded-2xl ${
                project.image
                  ? "border border-blackish/10 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-whitish/10"
                  : `border border-blackish/10 dark:border-whitish/15 bg-gradient-to-br ${project.accentClass} p-4 sm:p-6`
              } ${project.reverse ? "lg:order-1" : ""}`}
            >
              {project.image ? (
                <div
                  className={`relative aspect-[16/10] overflow-hidden ${
                    project.imageFit === "contain" ? project.imageBg ?? "bg-white" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`h-full w-full ${
                      project.imageFit === "contain" ? "object-contain p-4 sm:p-6" : "object-cover"
                    } ${project.imagePosition ?? "object-center"} transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
                  />
                </div>
              ) : (
                <div className="border border-dashed border-blackish/20 bg-white/70 p-2 backdrop-blur-sm dark:border-whitish/20 dark:bg-blackish/35">
                  <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border border-dashed border-blackish/20 bg-white/60 dark:border-whitish/20 dark:bg-blackish/30">
                    <div className="px-6 text-center">
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blackish/60 dark:text-whitish/65">
                        Image Placeholder
                      </p>
                      <p className="mt-2 text-lg font-medium text-blackish/80 dark:text-whitish/80">{project.title}</p>
                      <p className="mt-1 text-sm text-blackish/55 dark:text-whitish/60">Upload visual when ready</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="pointer-events-none absolute inset-0 bg-blackish/90 px-6 sm:px-8 opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 flex flex-col justify-center">
                <h4 className="text-whitish text-xl sm:text-2xl font-semibold">{project.title}</h4>
                <p className="mt-3 text-whitish/80 text-sm sm:text-base leading-relaxed">
                  {project.overlayText ?? project.tagline}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </motion.main>
  );
}
