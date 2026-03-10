"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

const C = {
  bg: "#f7f4ef",
  ink: "#1c1c1c",
  coral: "#d95f3b",
  green: "#3d6b52",
  muted: "#8a8279",
  cardBg: "#ffffff",
  border: "#e2ddd6",
};

function SectionMarker({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "0.68rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: C.muted,
          fontWeight: 600,
        }}
      >
        {num}
      </span>
      <span className="h-px w-10" style={{ background: C.border }} />
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "0.68rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: C.muted,
          fontWeight: 600,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function FadeSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="max-w-[900px] mx-auto px-5 md:px-8 py-16"
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
      }}
    >
      {children}
    </div>
  );
}

const paperCards = [
  {
    cite: "Seifert et al. · 2021",
    title: "Technology to Support Aging in Place",
    desc: "Older adults face real friction, fragmented interfaces, jargon, hidden ports. But the deeper insight is about agency: designing with older adults means recognizing their expertise in their own lives.",
    accent: C.coral,
  },
  {
    cite: "Gualano et al. · 2024",
    title: "Invisible Disabilities in Social VR",
    desc: "People with non-visible disabilities navigate a nuanced choice in VR: disclose, stay private, or selectively share. Avatars can be tools of self-determination, but only if designers make space for that.",
    accent: C.green,
  },
  {
    cite: "Hendriks & Lazar · 2013/2017",
    title: "Designing with Dementia",
    desc: "Standard participatory design doesn't account for varying cognition. Good co-design here means adapting methods, getting repeated consent, and centering emotional experience, not just function.",
    accent: "#c2a46e",
  },
  {
    cite: "Vines et al. · 2015",
    title: "Discourses of Aging in HCI",
    desc: "HCI research frames aging as decline, market opportunity, or digital deficiency. All three narratives sideline the actual person, and all three lead to patronizing, limited design outcomes.",
    accent: "#7a90b8",
  },
];

const groups = [
  { emoji: "👂", label: "Group 1 ·", condition: "Hearing loss" },
  { emoji: "🤲", label: "Group 2 ·", condition: "Joint inflammation & tremors" },
  { emoji: "👁️", label: "Group 3 ·", condition: "Loss of sight" },
  { emoji: "🧠", label: "Group 4 ·", condition: "Mild dementia" },
  { emoji: "🦾", label: "Group 5 ·", condition: "Loss of limbs" },
];

const reflections = [
  "What difficulties came up when designing your product? Most groups found it harder than expected, not because of the technology, but because they weren't sure what the person actually needed day-to-day.",
  "How did the assigned disability shape which features you included or left out? This one surfaced how quickly people defaulted to compensation rather than empowerment, designing for the deficit, not the person.",
  "Who did you actually have in mind when designing? The hardest question. Most people realized they'd imagined a generic, abstract \"user\", not a specific person with their own context, preferences, and identity.",
];

export default function HCIExpansion() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Syne:wght@400;600;700;800&display=swap');
      `}</style>

      <div
        className="bg-[#f7f4ef] dark:bg-black text-[#1c1c1c] dark:text-white"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 400,
          lineHeight: 1.7,
          minHeight: "100vh",
        }}
      >
        {/* Header */}
        <header className="max-w-[900px] mx-auto px-5 md:px-8 pt-8 flex justify-between items-center" />

        {/* Hero */}
        <section className="max-w-[900px] mx-auto px-5 md:px-8 pt-20 pb-12">
          <div className="flex items-center gap-3 mb-7">
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ background: C.coral }}
            />
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: C.coral,
                fontWeight: 600,
              }}
            >
              Week 5 · Expansion Project
            </span>
          </div>

          <h1
            className="text-[#1c1c1c] dark:text-white"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              lineHeight: 1.05,
              fontWeight: 400,
              marginBottom: "0.4rem",
            }}
          >
            Accessibility,
            <br />
            Aging &
            <br />
            <em style={{ fontStyle: "italic", color: C.green }}>Designing with</em>
          </h1>

          <p
            className="mt-7 max-w-[560px]"
            style={{ fontSize: "1.05rem", color: C.muted, lineHeight: 1.75 }}
          >
            For our HCI expansion, my team took on accessibility and aging, unpacking four
            research papers and designing an activity that put the week&apos;s biggest idea to the
            test.
          </p>

          <div
            className="flex gap-10 flex-wrap mt-12 pt-8"
            style={{ borderTop: `1px solid ${C.border}` }}
          >
            {[
              { label: "Course", value: "Intro to HCI" },
              { label: "Team", value: "4 People" },
              { label: "Papers Covered", value: "4 Readings" },
              { label: "Format", value: "Lecture + Activity" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: C.muted,
                  }}
                >
                  {s.label}
                </span>
                <span className="text-[#1c1c1c] dark:text-white" style={{ fontSize: "0.9rem", fontWeight: 700 }}>
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        <hr className="max-w-[900px] mx-auto mx-5 md:mx-8 border-0" style={{ borderTop: `1px solid ${C.border}` }} />

        {/* 01, The Project */}
        <FadeSection>
          <SectionMarker num="01" label="The Project" />
          <h2
            className="text-[#1c1c1c] dark:text-white"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: "1.4rem",
            }}
          >
            What&apos;s an <em style={{ fontStyle: "italic", color: C.green }}>expansion</em>,
            anyway?
          </h2>
          <p className="max-w-[640px] mb-4 text-[#444] dark:text-white" style={{ fontSize: "0.97rem" }}>
            In our HCI course, each group is assigned a week to lead an &quot;expansion&quot;,
            basically, you take the week&apos;s readings, synthesize the core ideas, and bring them
            alive for the class in a way that goes beyond just summarizing slides.
          </p>
          <p className="max-w-[640px] mb-4 text-[#444] dark:text-white" style={{ fontSize: "0.97rem" }}>
            Our week was all about accessibility and aging. The challenge: make four dense academic
            papers feel relevant, urgent, and engaging, and build an activity that wasn&apos;t just
            filler, but actually reinforced the concepts.
          </p>

          {/* Pull quote */}
          <div
            className="my-10 py-5 px-7 rounded-r-lg bg-white dark:bg-black"
            style={{
              borderLeft: `3px solid ${C.coral}`,
            }}
          >
            <p
              className="m-0 mb-2"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1.2rem",
                fontStyle: "italic",
                
              }}
            >
              The best expansion doesn&apos;t just explain the papers. It makes the room feel why
              the ideas matter.
            </p>
            <cite
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: C.muted,
                fontStyle: "normal",
              }}
            >
              , The goal we set ourselves
            </cite>
          </div>
        </FadeSection>

        <hr className="max-w-[900px] mx-auto mx-5 md:mx-8 border-0" style={{ borderTop: `1px solid ${C.border}` }} />

        {/* 02, The Readings */}
        <FadeSection>
          <SectionMarker num="02" label="The Readings" />
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: "1.4rem",
                
            }}
          >
            Four papers, one uncomfortable{" "}
            <em style={{ fontStyle: "italic", color: C.green }}>throughline</em>
          </h2>
          <p className="max-w-[640px] mb-4" style={{ fontSize: "0.97rem", color: "#444" }}>
            We split the papers across our team and each took ownership of presenting one, then
            worked together to find the connective thread. That thread turned out to be surprisingly
            sharp: most technology designed for disabled or aging users treats them as problems to
            solve, not people to collaborate with.
          </p>

          {/* Paper cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
            {paperCards.map((card, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-[10px] p-6 transition-all hover:-translate-y-1 hover:shadow-lg bg-white dark:bg-black"
                style={{
                  border: `1px solid ${C.border}`,
                }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px]"
                  style={{ background: card.accent }}
                />
                <div
                  className="mb-2"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: C.muted,
                    fontWeight: 600,
                  }}
                >
                  {card.cite}
                </div>
                <h3
                  className="mb-3 text-[#1c1c1c] dark:text-white"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "1.05rem",
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </h3>
                <p className="m-0" style={{ fontSize: "0.83rem", color: C.muted, lineHeight: 1.6 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="max-w-[640px] text-[#444] dark:text-white" style={{ fontSize: "0.97rem" }}>
            Presenting these together, we could show the same problem surfacing in different
            contexts: technology that&apos;s built around what a person{" "}
            <em className="text-[#1c1c1c] dark:text-white">can&apos;t</em> do, rather than who they are.
          </p>
        </FadeSection>

        <hr className="max-w-[900px] mx-auto mx-5 md:mx-8 border-0" style={{ borderTop: `1px solid ${C.border}` }} />

        {/* 03, The Activity */}
        <FadeSection>
          <SectionMarker num="03" label="The Activity" />
          <h2
            className="text-[#1c1c1c] dark:text-white"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: "1.4rem",
            }}
          >
            Invent assistive tech{" "}
            <em style={{ fontStyle: "italic", color: C.green }}>for the 2070s</em>
          </h2>
          <p className="max-w-[640px] mb-4" style={{ fontSize: "0.97rem", color: "#444" }}>
            This was the part we spent the most time designing. We wanted an activity that
            didn&apos;t just illustrate the readings, it should make people feel the tension in
            them. The setup: groups are each assigned a disability and have 20 minutes to invent
            assistive technology someone would actually use 50 years from now.
          </p>

          {/* Activity block */}
          <div
            className="relative overflow-hidden rounded-[14px] p-8 md:p-12 my-10"
            style={{ background: C.ink, color: C.bg }}
          >
            <span
              className="absolute -top-2.5 right-5 text-[6rem] font-extrabold pointer-events-none select-none"
              style={{ color: "white", opacity: 0.03, letterSpacing: "-0.02em" }}
            >
              ACTIVITY
            </span>

            <span
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#7a9e89",
                fontWeight: 600,
              }}
            >
              ↗ Activity Brief
            </span>
            <h2
              className="mt-3"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                marginBottom: "1.4rem",
                color: C.bg,
              }}
            >
              Design for 2070
            </h2>
            <p className="max-w-[580px] text-[#9a9590] dark:text-white" style={{ fontSize: "0.97rem" }}>
              Groups were numbered off and each assigned one condition to design for. The constraint
              of the future forced creative thinking, and revealed hidden assumptions fast.
            </p>

            {/* Group pills */}
            <div className="flex flex-wrap gap-2.5 my-7">
              {groups.map((g, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#d0cdc8",
                  }}
                >
                  {g.emoji}{" "}
                  <span className="opacity-60 text-[0.75rem]">{g.label}</span> {g.condition}
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div
              className="flex flex-col sm:flex-row gap-6 sm:gap-0 mt-8 pt-7"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {[
                { step: "Step 1", text: "Groups numbered off, disability assigned" },
                { step: "Step 2 · 20 min", text: "Design your assistive technology for the 2070s" },
                { step: "Step 3", text: "Present to the class, vote on a winner" },
              ].map((t, i) => (
                <div key={i} className="flex-1 relative pl-4 sm:pr-6">
                  <span
                    className="absolute top-1.5 left-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: C.coral }}
                  />
                  <h4
                    className="mb-1 text-[#7a9e89] dark:text-white"
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {t.step}
                  </h4>
                  <p className="m-0 text-[#777] dark:text-white" style={{ fontSize: "0.82rem", lineHeight: 1.55 }}>
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="max-w-[640px] mb-4 text-[#444] dark:text-white" style={{ fontSize: "0.97rem" }}>
            The future framing was intentional. By removing the constraints of today&apos;s tech,
            groups couldn&apos;t just name an existing product. They had to imagine, and in doing
            so, their assumptions about disability became visible. Almost every group&apos;s first
            instinct was to &quot;fix&quot; the disability rather than design around the
            person&apos;s whole life.
          </p>
          <p className="max-w-[640px] text-[#444] dark:text-white" style={{ fontSize: "0.97rem" }}>
            That&apos;s exactly the deficit-based thinking the papers were critiquing. Watching it
            happen in real time made the argument land in a way that slides alone couldn&apos;t.
          </p>
        </FadeSection>

        <hr className="max-w-[900px] mx-auto mx-5 md:mx-8 border-0" style={{ borderTop: `1px solid ${C.border}` }} />

        {/* 04, The Reflection */}
        <FadeSection>
          <SectionMarker num="04" label="Reflection" />
          <h2
            className="text-[#1c1c1c] dark:text-white"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: "1.4rem",
            }}
          >
            Three questions we asked the class{" "}
            <em style={{ fontStyle: "italic", color: C.green }}>after</em>
          </h2>
          <p className="max-w-[640px] mb-4 text-[#444] dark:text-white" style={{ fontSize: "0.97rem" }}>
            We closed with a debrief using three prompts designed to surface the tension between the
            activity experience and the paper arguments. These weren&apos;t rhetorical, people had
            genuinely different answers.
          </p>

          {/* Reflection list */}
          <div className="flex flex-col gap-4 my-8">
            {reflections.map((text, i) => (
              <div
                key={i}
                className="flex gap-6 items-start rounded-[10px] p-5 md:px-6 bg-white dark:bg-black"
                style={{
                  border: `1px solid ${C.border}`,
                }}
              >
                <span
                  className="min-w-[2rem]"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "1.8rem",
                    color: C.coral,
                    lineHeight: 1,
                    fontStyle: "italic",
                  }}
                >
                  {i + 1}
                </span>
                <p
                  className="m-0 pt-0.5 text-[#444] dark:text-white"
                  style={{ fontSize: "0.92rem", lineHeight: 1.65 }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </FadeSection>

        <hr className="max-w-[900px] mx-auto mx-5 md:mx-8 border-0" style={{ borderTop: `1px solid ${C.border}` }} />

        {/* Takeaway */}
        <FadeSection>
          <div
            className="rounded-[14px] p-8 md:p-14"
            style={{ background: C.green, color: "white" }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#a8c9b6",
                fontWeight: 600,
              }}
            >
              ↗ My Takeaway
            </span>
            <h2
              className="mt-3"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                marginBottom: "1.4rem",
                color: "white",
              }}
            >
              The preposition is a design decision
            </h2>
            <p className="max-w-[560px] mb-4" style={{ fontSize: "0.97rem", color: "#c5ddd0" }}>
              Designing <em style={{ color: "white" }}>for</em> someone positions them as a
              recipient. Designing <em style={{ color: "white" }}>with</em> them positions them as
              an expert. Our expansion was really about making that distinction feel real, not just
              as a philosophical point, but as something you could feel in the 20-minute activity
              when your instincts kept pulling you the wrong way.
            </p>
            <p className="max-w-[560px]" style={{ fontSize: "0.97rem", color: "#c5ddd0" }}>
              The papers gave us the argument. The activity gave us the evidence. That combination
              is what made this expansion feel like it actually worked.
            </p>
          </div>
        </FadeSection>

          {/* Back link (moved from header) */}
          <div className="max-w-[900px] mx-auto px-5 md:px-8 py-6 text-left">
            <Link
              href="/playground"
              className="text-xs tracking-[0.15em] uppercase no-underline flex items-center gap-1.5 transition-colors"
              style={{ color: C.muted }}
            >
              ← Playground
            </Link>
          </div>

        {/* Footer */}
        <footer
          className="max-w-[900px] mx-auto px-5 md:px-8 py-10 flex flex-wrap justify-between items-center gap-4"
          style={{ borderTop: `1px solid ${C.border}` }}
        >
          <p
            className="m-0"
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: C.muted,
            }}
          >
            Introduction to HCI · Week 5 Expansion
          </p>
          <p
            className="m-0"
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: C.muted,
            }}
          >
            Lilly Selzer · Tanvi Kamanuri · Lilian Mathis · Nicole Fajardo
          </p>
        </footer>
      </div>
    </>
  );
}
