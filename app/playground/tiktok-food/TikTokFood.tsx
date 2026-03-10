"use client";

import React from "react";
import Link from "next/link";

const COLORS = {
  bg: "#f8f8f8",
  ink: "#161823",
  muted: "#6b6b6b",
  accent: "#FE2C55",
  accentLight: "#ffe4ea",
  warm: "#25F4EE",
  warmLight: "#e3fdfb",
  dark: "#161823",
  border: "#e4e4e4",
  card: "#ffffff",
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

function Divider() {
  return (
    <div className="text-center my-14 text-xl tracking-[0.5em]" style={{ color: COLORS.accentLight }}>
      ✦ &nbsp; ✦ &nbsp; ✦
    </div>
  );
}

export default function TikTokFood() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&family=Caveat:wght@600&display=swap');
      `}</style>

      <div className="bg-[#f8f8f8] dark:bg-black text-[#161823] dark:text-white"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
        }}
      >
        {/* HERO */}
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
          <div
            className="relative flex flex-col justify-center overflow-hidden px-8 py-16 md:px-16 md:py-20"
            style={{ background: COLORS.dark }}
          >
            <div
              className="hidden md:block absolute right-[-60px] top-0 bottom-0 w-[120px] z-[2] bg-[#f8f8f8] dark:bg-black"
              style={{
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
              HCI Research Methods
            </div>
            <h1
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                lineHeight: 1.08,
                color: "#fff",
                fontStyle: "italic",
              }}
            >
              How We Built a
              <em className="block not-italic" style={{ color: COLORS.warmLight }}>
                Research Question
              </em>
              from Scratch
            </h1>
            <p
              className="mt-6 text-lg max-w-md"
              style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}
            >
              On literature dives, dead ends, and learning to ask the right thing.
            </p>
            {/* hero tags removed per request */}
          </div>

          <div
            className="flex items-center justify-center px-8 py-12 md:px-16 md:pl-24 bg-[#f8f8f8] dark:bg-black"
          >
            <div className="max-w-[440px]">
              <p className="text-lg leading-relaxed mb-5 text-[#6b6b6b] dark:text-[#ccc]">
                For one of my HCI courses, my partner Ivy and I were given a deceptively simple
                task: come up with a UX research proposal. No dataset. No predefined topic. Just,
                find something worth studying.
              </p>
              <p className="text-lg leading-relaxed" style={{}}>
                <span className="text-[#6b6b6b] dark:text-[#ccc]">
                What sounds simple is, in practice, one of the hardest things I&apos;ve done in
                grad school. Because before you can design a study, you have to{" "}
                <strong className="font-medium text-[#161823] dark:text-white">
                  earn your question.
                </strong>
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <article className="max-w-3xl mx-auto px-6 py-20 md:px-10">
          {/* 01, Starting With a Hunch */}
          <SectionLabel>01, Starting With a Hunch</SectionLabel>
          <h2
            className="text-4xl mb-6 text-[#161823] dark:text-white"
            style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2 }}
          >
            Teens, TikTok, and <em style={{ color: COLORS.accent }}>food.</em>
          </h2>
          <p className="text-base leading-relaxed mb-4 text-[#4a3840] dark:text-[#ccc]">
            We both kept circling back to teenagers and food. Not because it was an obvious HCI
            topic, it isn&apos;t, really, but because something felt genuinely unexamined there.
            TikTok had become the dominant way adolescents discover food trends, recipes, diet ideas,
            and health information. Around 14.25 million American teens are on the platform almost
            every day.
          </p>
          <p className="text-base leading-relaxed mb-4 text-[#4a3840] dark:text-[#ccc]">
            And yet most research on social media and teen health was either focused on mental health
            broadly, or on body image in isolation. The food angle felt specific enough to be
            tractable, and wide enough to be interesting.
          </p>
          <p className="text-base leading-relaxed mb-4 text-[#4a3840] dark:text-[#ccc]">
            But &quot;teens and TikTok food content&quot; is an observation, not a research question.
            We had a lot of work to do.
          </p>

          <Divider />

          {/* 02, Literature Deep Dive */}
          <SectionLabel>02, The Literature Deep Dive</SectionLabel>
          <h2
            className="text-4xl mb-6 text-[#161823] dark:text-white"
            style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2 }}
          >
            Three themes that{" "}
            <em style={{ color: COLORS.accent }}>shaped everything.</em>
          </h2>
          <p className="text-base leading-relaxed mb-4 text-[#4a3840] dark:text-[#ccc]">
            Before we could ask anything, we needed to understand what was already known. We spent a
            significant chunk of the project just reading, and what we found shaped everything that
            came after.
          </p>

            <div className="grid grid-cols-1 gap-4 my-8">
            {[
              {
                icon: "📱",
                title: "TikTok as an educational tool",
                desc: "Short-form video is genuinely effective for information transfer, more engaging than text, more immediate than YouTube. But the format that makes information sticky also makes misinformation sticky.",
                accent: COLORS.accent,
              },
              {
                icon: "⚙️",
                title: "The power of algorithms",
                desc: "TikTok's recommendation system isn't neutral, it amplifies content based on engagement. For teens navigating food allergies or disordered eating, that's dangerous. But it also cultivates identity and creates real communities.",
                accent: COLORS.warm,
              },
              {
                icon: "🍳",
                title: "How teens actually engage with food content",
                desc: "Teens follow a progression: exposure → planning (saving videos, checking ingredients) → execution (trying the recipe) → habit formation or abandonment. Family dynamics, peer conversations, and cost all filter which trends make it into real life.",
                accent: COLORS.accent,
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-xl p-6 transition-transform hover:-translate-y-1 bg-[#ffffff] dark:bg-black border border-[#e4e4e4] dark:border-[#222]"
                style={{
                  borderLeft: `4px solid ${card.accent}`,
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{card.icon}</span>
                  <div>
                      <h3
                        className="font-medium text-base mb-1.5 text-[#161823] dark:text-white"
                      >
                      {card.title}
                    </h3>
                      <p className="text-sm leading-relaxed m-0 text-[#6b6b6b] dark:text-[#ccc]">
                        {card.desc}
                      </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-r-xl my-9 py-6 px-7"
            style={{ background: COLORS.warmLight, borderLeft: `4px solid ${COLORS.accent}` }}
          >
            <p className="m-0 italic text-lg text-[#161823] dark:text-white">
              Everyone was studying <em>what</em> teens watched. Nobody was studying{" "}
              <em>what happened next</em>, over time.
            </p>
          </div>

          <Divider />

          {/* 03, Getting to the Question */}
          <SectionLabel>03, Getting to the Question</SectionLabel>
          <h2
            className="text-4xl mb-6 text-[#161823] dark:text-white"
            style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2 }}
          >
            The gap was <em style={{ color: COLORS.accent }}>longitudinal.</em>
          </h2>
          <p className="text-base leading-relaxed mb-4 text-[#4a3840] dark:text-[#ccc]">
            Almost all existing research was cross-sectional. A snapshot. But food habits don&apos;t
            form in a snapshot. They form slowly, through repetition and reinforcement and
            negotiation with the people around you.
          </p>
          <p className="text-base leading-relaxed mb-4 text-[#4a3840] dark:text-[#ccc]">
            We kept asking ourselves: what would it actually mean to understand TikTok&apos;s
            influence on teen eating, not just in the moment, but <em>longitudinally</em>?
          </p>

          {/* Research Questions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <div
              className="rounded-xl p-6"
              style={{ background: COLORS.accentLight, border: `1px solid ${COLORS.accent}30` }}
            >
              <div
                className="text-xs font-medium uppercase tracking-wider mb-2"
                style={{ color: COLORS.accent }}
              >
                RQ 1, Health
              </div>
              <p className="text-sm leading-relaxed m-0 text-[#161823] dark:text-white">
                How do adolescents&apos; interactions with TikTok food content shape their
                understanding of &quot;healthy eating&quot; and food habits over time?
              </p>
            </div>
            <div
              className="rounded-xl p-6"
              style={{ background: COLORS.warmLight, border: `1px solid ${COLORS.warm}30` }}
            >
              <div
                className="text-xs font-medium uppercase tracking-wider mb-2"
                style={{ color: COLORS.warm }}
              >
                RQ 2, Design
              </div>
              <p className="text-sm leading-relaxed m-0 text-[#161823] dark:text-white">
                What platform features do adolescents interact with to contribute towards
                establishing long-term healthy eating habits?
              </p>
            </div>
          </div>

          <p className="text-base leading-relaxed mb-4 text-[#4a3840] dark:text-[#ccc]">
            The second question felt distinctly HCI. It wasn&apos;t just asking whether TikTok is
            good or bad for teens, it was asking what the <em>design</em> is doing. Which features,
            specifically, are teens using in ways that build lasting behaviors? That&apos;s a question
            with actionable implications for the platform itself.
          </p>
          <p className="text-base leading-relaxed mb-4 text-[#4a3840] dark:text-[#ccc]">
            Getting to these two questions took a lot of iteration. Earlier versions were too broad,
            too narrow, or too leading. We kept stress-testing drafts against the literature, does
            this question actually address the gap? Can it be studied? Does it matter?
          </p>

          <Divider />

          {/* 04, Study Design */}
          <SectionLabel>04, Designing the Future Study</SectionLabel>
          <h2
            className="text-4xl mb-6 text-[#161823] dark:text-white"
            style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2 }}
          >
            A year-long, <em style={{ color: COLORS.accent }}>three-phase</em> plan
          </h2>
          <p className="text-base leading-relaxed mb-4 text-[#4a3840] dark:text-[#ccc]">
            Once we had our question, we mapped out how we&apos;d actually study it, if we had the
            time, resources, and IRB approval to do so.
          </p>

          {/* Timeline steps */}
            <div className="my-8 flex flex-col gap-5">
            {[
              {
                badge: "Month 0",
                title: "Baseline Interview",
                desc: "A 45–60 minute interview capturing each participant's starting point, their current food habits, how they use TikTok, what \"healthy eating\" means to them.",
              },
              {
                badge: "Months 1–9",
                title: "Monthly Micro Check-ins",
                desc: "Short, low-burden email prompts asking participants to share 3 food videos that stuck with them and reflect on how they influenced their habits that month.",
              },
              {
                badge: "Month 12",
                title: "Follow-up Interview",
                desc: "A closing interview mirroring the baseline, to see what had actually shifted over a year of engagement with TikTok food content.",
              },
            ].map((step, i) => (
                <div key={i} className="flex gap-5 items-start">
                <div
                  className="flex-shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium"
                  style={{
                    background: COLORS.accent,
                    color: "#fff",
                  }}
                >
                  {step.badge}
                </div>
                <div
                    className="flex-1 rounded-xl p-5 bg-[#ffffff] dark:bg-black border border-[#e4e4e4] dark:border-[#222]"
                >
                    <h3
                      className="font-medium text-base mb-1 text-[#161823] dark:text-white"
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed m-0 text-[#6b6b6b] dark:text-[#ccc]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-base leading-relaxed mb-4 text-[#4a3840] dark:text-[#ccc]">
            We targeted 15–20 participants, ages 13–19, who actively consumed TikTok food content,
            recruiting through schools, community centers, Reddit, and TikTok itself, with a
            deliberate focus on diversity across gender, race, and socioeconomic background. The
            algorithm doesn&apos;t behave the same way for everyone, so a homogeneous sample would
            have given us a skewed picture.
          </p>
          <p className="text-base leading-relaxed mb-4 text-[#4a3840] dark:text-[#ccc]">
            We also knew we&apos;d need both youth assent <em>and</em> parental consent. Asking
            minors to share a year of their media habits and health beliefs is intimate. That
            ethical weight shaped how we thought about the whole design.
          </p>

          <Divider />

          {/* 05, What We'd Do Differently */}
          <SectionLabel>05, What We&apos;d Do Differently</SectionLabel>
          <h2
            className="text-4xl mb-6 text-[#161823] dark:text-white"
            style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2 }}
          >
            Honest about <em style={{ color: COLORS.accent }}>the weaknesses.</em>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            {[
              {
                icon: "📊",
                title: "More structured feature logging",
                desc: "RQ2 was the most interesting, and the hardest to capture with interviews alone. I'd want systematic behavioral data: saves, duets, follows, search behavior.",
              },
              {
                icon: "📅",
                title: "Timeline questions",
                desc: "One year might not be enough. Meaningful behavioral change often takes longer to stabilize. A two-year window or more intensive 6-month design might work better.",
              },
              {
                icon: "🛡️",
                title: "Harm protocols needed",
                desc: "Participants might deal with eating disorders or body image struggles. We needed clear protocols for concerning disclosures mid-interview.",
              },
              {
                icon: "💬",
                title: "Talk to teens first",
                desc: "We built questions entirely from the literature. Even 3–4 informal conversations with actual teenagers early on would have pressure-tested our framing.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-5 transition-transform hover:-translate-y-1"
                style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-medium text-sm mb-1 text-[#161823] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm m-0 leading-relaxed text-[#6b6b6b] dark:text-[#ccc]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 06, Takeaway */}
          <div
            className="rounded-2xl p-8 md:p-12 my-10 text-white"
            style={{ background: COLORS.dark }}
          >
            <div
              className="flex items-center gap-2.5 mb-3"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1rem",
                color: COLORS.warm,
                letterSpacing: "0.04em",
              }}
            >
              06, What I Took Away
              <span className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.15)" }} />
            </div>
            <h2
              className="text-4xl mb-6"
              style={{
                fontFamily: "'DM Serif Display', serif",
                lineHeight: 1.2,
                color: "#fff",
              }}
            >
              The question is <em style={{ color: COLORS.warm }}>the product.</em>
            </h2>
            <ul className="list-none grid gap-4 mt-2">
              {[
                <>
                  Getting the question right means understanding a field deeply enough to see its
                  gaps, caring enough about a problem to close them, and being rigorous enough to
                  keep asking: <em>is this actually the right thing to ask?</em>
                </>,
                <>
                  Teens aren&apos;t passive consumers of an algorithm. They&apos;re active,
                  thoughtful, sometimes contradictory users, learning about food, forming
                  identities, negotiating with families and peers, on a platform that is
                  simultaneously useful and risky.
                </>,
                <>
                  Research that flattens that complexity doesn&apos;t do them justice. For now,
                  I&apos;m proud of the question we built. And I genuinely hope someone runs the
                  study one day.
                </>,
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3.5 items-start text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  <span
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: COLORS.warm, fontSize: "1rem" }}
                  >
                    ✦
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p
            className="text-center text-sm italic mt-8"
            style={{ color: COLORS.muted }}
          >
            This proposal was developed with Ivy Tang as part of an HCI research methods course.
          </p>
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
            <Link href="/playground" style={{ color: COLORS.warm, textDecoration: "none" }}>
              Back to Playground →
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
