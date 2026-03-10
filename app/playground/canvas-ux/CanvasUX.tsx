"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const COLORS = {
  accent: "#4f46e5",
  accentLight: "#e0e7ff",
  accentMuted: "#818cf8",
  bg: "#fafaf9",
  ink: "#1c1917",
  muted: "#78716c",
  card: "#ffffff",
  border: "#e7e5e4",
  dark: "#1c1917",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex items-center gap-2.5 mb-3"
      style={{
        fontFamily: "'Caveat', cursive",
        fontSize: "1rem",
        color: COLORS.accent,
        letterSpacing: "0.04em",
      }}
    >
      {children}
      <span className="flex-1 h-px" style={{ background: COLORS.accentLight }} />
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-r-xl my-9 py-6 px-7 cx-callout"
      style={{ background: COLORS.accentLight, borderLeft: `4px solid ${COLORS.accent}` }}
    >
      <p className="m-0 italic text-lg" style={{ color: COLORS.ink }}>
        {children}
      </p>
    </div>
  );
}

export default function CanvasUX() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&family=Caveat:wght@600&display=swap');

        /* Dark-mode overrides */
        html.dark .cx-page { background: #0f0f0f !important; color: #f2e8ec !important; }
        html.dark .cx-hero-right { background: #0f0f0f !important; }
        html.dark .cx-hero-right p { color: #b0a8ac !important; }
        html.dark .cx-hero-right strong { color: #f2e8ec !important; }
        html.dark .cx-curve { background: #0f0f0f !important; }
        html.dark .cx-page article h2 { color: #f2e8ec !important; }
        html.dark .cx-page article h3 { color: #f2e8ec !important; }
        html.dark .cx-page article p { color: #c0b8bc !important; }
        html.dark .cx-page article strong { color: #f2e8ec !important; }
        html.dark .cx-card { background: #1a1618 !important; border-color: #3a3035 !important; }
        html.dark .cx-card p { color: #b0a8ac !important; }
        html.dark .cx-card div { color: #f2e8ec !important; }
        html.dark .cx-callout { background: #1e1b3a !important; }
        html.dark .cx-callout p { color: #f2e8ec !important; }
        html.dark .cx-bot-box { background: #1e1b3a !important; }
        html.dark .cx-bot-box h3 { color: #f2e8ec !important; }
        html.dark .cx-bot-box p { color: #b0a8ac !important; }
        html.dark .cx-bot-box .cx-card { background: #161225 !important; border-color: #3a3055 !important; }
        html.dark .cx-metric { background: #1a1618 !important; border-color: #3a3035 !important; color: #f2e8ec !important; }
        html.dark .cx-table th { color: #b0a8ac !important; }
        html.dark .cx-table td { color: #c0b8bc !important; }
        html.dark .cx-table tr { border-color: #3a3035 !important; }
        html.dark .cx-section05 { background: #161225 !important; }
        html.dark .cx-video-cap { background: #1e1b3a !important; }
      `}</style>

      <div
        className="cx-page"
        style={{
          background: COLORS.bg,
          color: COLORS.ink,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
        }}
      >
        {/* HERO */}
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
          <div
            className="relative flex flex-col justify-center overflow-hidden px-8 py-16 md:px-16 md:py-20"
            style={{ background: COLORS.accent }}
          >
            <div
              className="hidden md:block absolute right-[-60px] top-0 bottom-0 w-[120px] z-[2] cx-curve"
              style={{
                background: COLORS.bg,
                clipPath: "ellipse(60px 100% at 100% 50%)",
              }}
            />
            <div
              className="flex items-center gap-2 mb-6"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.05em",
              }}
            >
              <span
                className="inline-block w-7 h-[2px]"
                style={{ background: "rgba(255,255,255,0.5)" }}
              />
              HCI Methods + UX Quant
            </div>
            <h1
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2.4rem, 4.5vw, 4.5rem)",
                lineHeight: 1.08,
                color: "#fff",
                fontStyle: "italic",
              }}
            >
              I Spent Two Courses
              <em className="block not-italic" style={{ color: COLORS.accentLight }}>
                Trying to Fix Canvas
              </em>
            </h1>
            <p
              className="mt-6 text-lg max-w-md"
              style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}
            >
              A tale of sticky notes, spreadsheets, and one very opinionated AI bot
            </p>
            
          </div>

          <div
            className="flex items-center justify-center px-8 py-12 md:px-16 md:pl-24 cx-hero-right"
            style={{ background: COLORS.bg }}
          >
            <div className="max-w-[440px]">
              <p className="text-lg leading-relaxed mb-5" style={{ color: COLORS.muted }}>
                It&apos;s 11:47 PM. You&apos;re pretty sure you have something due tomorrow, but
                you can&apos;t figure out <em>where</em> on Canvas it lives. You&apos;ve clicked
                through three modules, checked the calendar, and opened four different course pages.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: COLORS.muted }}>
                You find it. It was due at 11:59 PM.{" "}
                <strong className="font-medium" style={{ color: COLORS.ink }}>
                  Tonight.
                </strong>{" "}
                If this has ever happened to you , welcome. This is the story of how I tried to fix
                it. Twice.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <article className="max-w-3xl mx-auto px-6 py-20 md:px-10">
          {/* 01 , ROUND ONE */}
          <SectionLabel>01 , Round One: Community Design Project</SectionLabel>
          <h2
            className="text-4xl mb-6"
            style={{
              fontFamily: "'DM Serif Display', serif",
              lineHeight: 1.2,
              color: COLORS.ink,
            }}
          >
            We actually talked to people.{" "}
            <em style={{ color: COLORS.accent }}>(Wild concept.)</em>
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            The first time I tackled Canvas was in my HCI Methods course. Our team , Laney, Ian,
            Lilly, and myself , picked UCSC undergrads as our community. Not exactly a hard sell. We
            all <em>knew</em> Canvas was a mess. But knowing something and <em>proving</em> it are
            very different things.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            We ran user surveys, conducted interviews, and threw everything into a Miro board for
            affinity mapping. What came back was a clean signal buried under a noisy interface:
          </p>

          {/* Findings grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            {[
              {
                icon: "📊",
                text: "Students rated themselves 4–5/5 on Canvas confidence... yet were still missing deadlines",
              },
              {
                icon: "📋",
                text: "The To-Do list sidebar was the most popular workaround , people were hacking the system",
              },
              {
                icon: "📅",
                text: "Many students were manually copying due dates into personal planners",
              },
              {
                icon: "📢",
                text: "Announcements were getting lost in the noise; inconsistent instructor organization was recurring",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-5 transition-transform hover:-translate-y-1 cx-card"
                style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }}
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <p className="text-sm leading-relaxed m-0" style={{ color: COLORS.muted }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <Callout>
            A classic case of a system that <em>technically</em> works but creates enormous
            cognitive overhead. Students weren&apos;t failing Canvas , Canvas was failing them.
          </Callout>

          <div className="my-8 flex justify-center">
            <img
              src="/canvassketch.png"
              alt="canvassketch"
              className="w-full max-w-3xl rounded-xl"
              style={{ border: `1px solid ${COLORS.border}` }}
            />
          </div>

          {/* 02 , WHAT WE DESIGNED */}
          <SectionLabel>02 , What We Designed</SectionLabel>
          <h2
            className="text-4xl mb-6"
            style={{
              fontFamily: "'DM Serif Display', serif",
              lineHeight: 1.2,
              color: COLORS.ink,
            }}
          >
            Four requirements. One bot that{" "}
            <em style={{ color: COLORS.accent }}>stole the show.</em>
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            Based on our research, we focused on four core requirements:{" "}
            <strong className="font-medium" style={{ color: COLORS.ink }}>
              Organization, Customization, Calendar Integration, and a Bot.
            </strong>
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            We iterated from rough sketches → low-fi wireframes → higher-fidelity prototypes. The
            redesigned dashboard got a proper To-Do list with filters (by class, due date, content
            type), theme customization, dark mode, and a Google Calendar import button that Canvas
            has absolutely no business not having already.
          </p>

          {/* Bot features */}
          <div className="my-8 rounded-2xl p-8 cx-bot-box" style={{ background: COLORS.accentLight }}>
            <h3
              className="text-xl mb-4"
              style={{ fontFamily: "'DM Serif Display', serif", color: COLORS.ink }}
            >
              The Bot , friendly, zero judgment, lots of answers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  label: "This week's deadlines",
                  desc: "Across all courses, sorted and readable",
                },
                {
                  label: "Find hidden assignments",
                  desc: "Ones instructors forgot to add to the calendar",
                },
                {
                  label: "Summarize announcements",
                  desc: "So you're not drowning in notifications",
                },
                {
                  label: "Pin to dashboard",
                  desc: "One tap to surface what matters",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 cx-card"
                  style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }}
                >
                  <div
                    className="font-medium text-sm mb-1"
                    style={{ color: COLORS.accent }}
                  >
                    {f.label}
                  </div>
                  <p className="text-sm m-0" style={{ color: COLORS.muted }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="mt-4 text-sm italic"
              style={{ color: COLORS.muted }}
            >
              &quot;Hi Tanvi! I&apos;m your helpful FAQ bot. Let me know how I can help
              you?&quot; , No passive-aggressive reminder emails. No guilt. Just useful.
            </p>
          </div>
          
          <div className="my-8 flex justify-center">
            <img
              src="/canvaslofi.png"
              alt="canvas lo-fi"
              className="w-full max-w-3xl rounded-xl"
              style={{ border: `1px solid ${COLORS.border}` }}
            />
          </div>

          {/* DIVIDER */}
          <div
            className="text-center my-12 text-xl tracking-[0.5em]"
            style={{ color: COLORS.accentMuted }}
          >
            ✦ &nbsp; ✦ &nbsp; ✦
          </div>

          {/* 03 , ROUND TWO */}
          <SectionLabel>03 , Round Two: The Online Experiment</SectionLabel>
          <h2
            className="text-4xl mb-6"
            style={{
              fontFamily: "'DM Serif Display', serif",
              lineHeight: 1.2,
              color: COLORS.ink,
            }}
          >
            Designing is fun. <em style={{ color: COLORS.accent }}>Measuring</em> whether it works?
            That&apos;s where it gets interesting.
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            For CMPM 290, my partner Sonia and I asked:{" "}
            <strong className="font-medium" style={{ color: COLORS.ink }}>
              can we quantify the impact of an AI assistant on student assignment completion?
            </strong>
          </p>

          {/* Hypothesis callout */}
          <Callout>
            Students with the AI assistant will miss fewer assignments and complete work on time.
          </Callout>

          {/* Metric */}
          <h3
            className="text-xl mb-3 mt-8"
            style={{ fontFamily: "'DM Serif Display', serif", color: COLORS.ink }}
          >
            The Metric
          </h3>
          <div
            className="rounded-xl p-5 my-4 font-mono text-center text-sm cx-metric"
            style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }}
          >
            On-time rate = Assignments submitted on time ÷ Total assignments due
          </div>

          {/* Numbers */}
          <h3
            className="text-xl mb-3 mt-8"
            style={{ fontFamily: "'DM Serif Display', serif", color: COLORS.ink }}
          >
            Running the Numbers
          </h3>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            We set a baseline on-time rate of{" "}
            <strong className="font-medium" style={{ color: COLORS.ink }}>70%</strong> and targeted
            a{" "}
            <strong className="font-medium" style={{ color: COLORS.ink }}>
              5 percentage point improvement
            </strong>{" "}
            to 75%. Using the standard power analysis formula (α = 0.05, power = 0.80, variance =
            0.21):
          </p>
          <div
            className="rounded-xl p-5 my-4 font-mono text-center text-sm cx-metric"
            style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }}
          >
            n ≈ 16σ² / δ² = (16 × 0.21) / (0.05)² = 1,344 students per group
          </div>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            Rounded up:{" "}
            <strong className="font-medium" style={{ color: COLORS.ink }}>
              1,350 per group, 2,700 total participants
            </strong>{" "}
            , about 9% of a 30,000-student university, rounded to a clean 10% rollout.
          </p>

          {/* A/B Comparison Table */}
          <h3
            className="text-xl mb-3 mt-8"
            style={{ fontFamily: "'DM Serif Display', serif", color: COLORS.ink }}
          >
            The A/B Comparison
          </h3>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm cx-table" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${COLORS.accent}` }}>
                  <th
                    className="text-left py-3 px-4 font-medium"
                    style={{ color: COLORS.muted }}
                  >
                    Current Canvas
                  </th>
                  <th
                    className="text-left py-3 px-4 font-medium"
                    style={{ color: COLORS.accent }}
                  >
                    Proposed Experience
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Manual navigation", "Intelligent, conversational guidance"],
                  ["Static calendar due dates", "Prioritized task list"],
                  ["No detection of missed work", "Alerts for unseen assignments"],
                  ["No reminders", "Personalized, proactive reminders"],
                  ["No planning help", "Automated or manual work schedule"],
                ].map(([current, proposed], i) => (
                  <tr
                    key={i}
                    style={{ borderBottom: `1px solid ${COLORS.border}` }}
                  >
                    <td className="py-3 px-4" style={{ color: COLORS.muted }}>
                      {current}
                    </td>
                    <td className="py-3 px-4" style={{ color: COLORS.ink }}>
                      {proposed}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 04 , RISKS */}
          <SectionLabel>04 , Risks We Took Seriously</SectionLabel>
          <h2
            className="text-4xl mb-6"
            style={{
              fontFamily: "'DM Serif Display', serif",
              lineHeight: 1.2,
              color: COLORS.ink,
            }}
          >
            We didn&apos;t just hype the solution.{" "}
            <em style={{ color: COLORS.accent }}>We stress-tested it.</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            {[
              {
                icon: "⚠️",
                title: "Over-reliance",
                desc: "Would students stop self-regulating entirely?",
              },
              {
                icon: "🔔",
                title: "Notification fatigue",
                desc: "Could the bot become the very annoyance it was solving?",
              },
              {
                icon: "🔒",
                title: "Privacy",
                desc: "Academic data is sensitive; AI access to it requires careful governance",
              },
              {
                icon: "⚖️",
                title: "Bias in prioritization",
                desc: "Would the algorithm favor certain types of assignments unfairly?",
              },
            ].map((risk, i) => (
              <div
                key={i}
                className="rounded-xl p-5 transition-transform hover:-translate-y-1 cx-card"
                style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }}
              >
                <div className="text-2xl mb-2">{risk.icon}</div>
                <div
                  className="font-medium text-sm mb-1"
                  style={{ color: COLORS.ink }}
                >
                  {risk.title}
                </div>
                <p className="text-sm m-0" style={{ color: COLORS.muted }}>
                  {risk.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            These aren&apos;t hypothetical worries. They&apos;re the kinds of issues that sink real
            product launches.
          </p>
          <div className="flex flex-col gap-6 my-8">
            {[
              "/canvashifi1.png",
              "/canvashifi2.png",
              "/canvashifi3.png",
              "/canvashifi4.png",
            ].map((src, i) => (
              <div key={i} className="w-full overflow-hidden" style={{ border: `1px solid ${COLORS.border}` }}>
                <Image
                  src={src}
                  alt={`canvashifi${i + 1}`}
                  width={1200}
                  height={700}
                  className="mx-auto w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            ))}
          </div>

          {/* 05 , LEARNINGS */}
          <div
            className="rounded-2xl p-8 md:p-12 my-10 text-white cx-section05"
            style={{ background: COLORS.dark }}
          >
            <div
              className="flex items-center gap-2.5 mb-3"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1rem",
                color: COLORS.accentMuted,
                letterSpacing: "0.04em",
              }}
            >
              05 , What I Learned Across Both Projects
              <span
                className="flex-1 h-px"
                style={{ background: "rgba(255,255,255,0.15)" }}
              />
            </div>
            <h2
              className="text-4xl mb-6"
              style={{
                fontFamily: "'DM Serif Display', serif",
                lineHeight: 1.2,
                color: "#fff",
              }}
            >
              Good UX is both <em style={{ color: COLORS.accentMuted }}>felt and measured.</em>
            </h2>
            <ul className="list-none grid gap-4 mt-2">
              {[
                <>
                  The community design project gave us the <em>why</em>: students aren&apos;t
                  disorganized, they&apos;re navigating a system that buries information and offers
                  no intelligent guidance.
                </>,
                <>
                  The online experiment gave us the <em>how much</em>: a 5-point lift in on-time
                  rates, across thousands of students, is worth building for.
                </>,
                <>
                  Doing the same problem twice , once through a{" "}
                  <strong className="font-medium">qualitative, community-centered lens</strong> and
                  once through a{" "}
                  <strong className="font-medium">quantitative, experimental lens</strong> , taught
                  me something a single course never could.
                </>,
                <>
                  Neither answer is complete without the other. And Canvas really needs a Google
                  Calendar import button. I&apos;ve now said this in two academic presentations and
                  a blog post. I&apos;m manifesting it.
                </>,
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3.5 items-start text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  <span
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: COLORS.accentMuted, fontSize: "1rem" }}
                  >
                    ✦
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Footer */}
        <footer
          className="text-center py-10 px-5 text-sm"
          style={{ background: COLORS.dark, color: "rgba(255,255,255,0.4)" }}
        >
          <p>
            Part of my{" "}
            <strong className="font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
              HCI portfolio playground
            </strong>{" "}
            ·{" "}
            <Link
              href="/playground"
              style={{ color: COLORS.accentMuted, textDecoration: "none" }}
            >
              Back to Playground →
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
