"use client";

import React from "react";
import Link from "next/link";

const COLORS = {
  purple: "#2e1f5e",
  teal: "#00d4c8",
  orange: "#f4622a",
  cream: "#faf7f2",
  mid: "#6b5b95",
  text: "#1a1a2e",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-3.5">
      <div
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ background: COLORS.orange }}
      />
      <h2
        className="text-[#2e1f5e] dark:text-white"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.5rem",
        }}
      >
        {children}
      </h2>
          <div
            style={{
              background:
                "radial-gradient(circle, rgba(244,98,42,0.12), transparent 70%)",
            }}
          />
      <span className="flex-1 h-px bg-[#ede9e0] dark:bg-[#333]" />
      <span className="flex-1 h-px bg-[#ede9e0] dark:bg-[#333]" />
    </div>
  );
}

function ValueCard({
  icon,
  title,
  description,
  accent,
}: {
  icon: string;
  title: string;
  description: string;
  accent: string;
}) {
  return (
    <div
      className="relative rounded-xl p-5 transition-transform hover:-translate-y-1 bg-white dark:bg-[#1a1a1a] border border-[#ede9e0] dark:border-[#333] overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-full h-[3px]"
        style={{ background: accent }}
      />
      <div className="text-2xl mb-2.5">{icon}</div>
      <h3
        className="text-base mb-1.5 text-[#2e1f5e] dark:text-white"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed m-0 text-[#333] dark:text-[#ccc]">
        {description}
      </p>
    </div>
  );
}

function ProcessStep({
  num,
  title,
  description,
}: {
  num: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-5 mb-7 items-start">
      <div
        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold"
        style={{
          background: COLORS.purple,
          color: COLORS.teal,
          fontFamily: "'Playfair Display', serif",
          fontSize: "1rem",
        }}
      >
        {num}
      </div>
      <div>
        <h3
          className="font-medium text-sm mb-1 text-[#1a1a2e] dark:text-white"
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed m-0 text-[#333] dark:text-[#ccc]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function YouTubeASL() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <div
        className="bg-[#faf7f2] dark:bg-black text-[#1a1a2e] dark:text-white"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
        }}
      >
        {/* HERO */}
        <section
          className="relative overflow-hidden px-6 py-20 md:px-10 md:py-20"
          style={{ background: COLORS.purple }}
        >
          {/* Decorative blurs */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full top-[-100px] right-[-100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(0,212,200,0.15), transparent 70%)",
            }}
          />
          <div
                description='We rebuilt the prototype on a real YouTube page. The "Interpretations" sub-menu (nestled under Subtitles/CC) offered multiple sign languages, ASL, BSL, LSF, CSL, ISPL, making it clear this wasn&apos;t just an American feature. The pip window defaulted to the top-right corner but was fully movable and resizable.'
            style={{
              background:
                "radial-gradient(circle, rgba(244,98,42,0.12), transparent 70%)",
            }}
          />

          <div className="max-w-3xl mx-auto relative z-[1]">
            <span
              className="inline-block text-xs font-medium uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-7"
              style={{
                background: "rgba(0,212,200,0.15)",
                border: `1px solid ${COLORS.teal}`,
                color: COLORS.teal,
                letterSpacing: "2px",
              }}
            >
              HCI Coursework · UX Design
            </span>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: "12px",
              }}
            >
              Design for Access:
              <br />
              <span style={{ color: COLORS.orange, fontStyle: "italic" }}>
                YouTube ASL Translations
              </span>
            </h1>

            <p
              className="mt-6 text-sm"
              style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.5px" }}
            >
              <strong style={{ color: "rgba(255,255,255,0.8)" }}>Team:</strong>{" "}
              Alison, Cynthia, Ian, Lilly, Tanvi &nbsp;·&nbsp;{" "}
              <strong style={{ color: "rgba(255,255,255,0.8)" }}>Course:</strong>{" "}
              Design for Access
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <article className="max-w-3xl mx-auto px-6 py-16 md:px-10 md:pb-24">
          {/* Pull quote */}
          <div
            className="rounded-r-xl py-5 px-7 my-10 dark:bg-[rgba(0,212,200,0.1)]"
            style={{
              borderLeft: `4px solid ${COLORS.teal}`,
              background: "rgba(0,212,200,0.05)",
            }}
          >
            <p
              className="m-0 italic text-xl text-[#2e1f5e] dark:text-white"
              style={{
                fontFamily: "'Playfair Display', serif",
                lineHeight: 1.6,
              }}
            >
              What if YouTube didn&apos;t just caption the world, but signed it, too?
            </p>
          </div>

          {/* The Problem */}
          <div className="mb-13">
            <SectionHeading>The Problem Worth Solving</SectionHeading>
            <p className="text-base leading-relaxed mb-4 text-[#333] dark:text-[#ccc]">
              Closed captions have long been treated as{" "}
              <strong className="font-medium text-[#1a1a2e] dark:text-white">
                the
              </strong>{" "}
              accessibility solution for Deaf viewers online. But captions are an accommodation
              rooted in the hearing world, they translate spoken language into text without honoring
              the richness of Deaf communication. For the culturally Deaf community, American Sign
              Language (ASL) isn&apos;t just an alternative to English; it&apos;s a distinct, living
              language tied to identity, history, and community.
            </p>
            <p className="text-base leading-relaxed mb-4 text-[#333] dark:text-[#ccc]">
              Our team asked: what would it look like to build something that didn&apos;t just make
              YouTube <em>accessible</em>, but made it genuinely <em>inclusive</em>? Something that
              gave Deaf users a real choice in how they experience content online?
            </p>
          </div>

          <Divider />

          {/* Design Values */}
          <div className="mb-13">
            <SectionHeading>What We Were Designing For</SectionHeading>
            <p className="text-base leading-relaxed mb-4 text-[#333] dark:text-[#ccc]">
              Before sketching a single wireframe, we grounded ourselves in values. Not every
              dimension needed redesigning, we identified what we wanted to actively push on versus
              what we&apos;d acknowledge but set aside for this iteration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <ValueCard
                icon="🔊"
                title="Empowerment, Voice & Choice"
                description="Give Deaf users agency over how they watch, centering them as creators and consumers alike, not as edge cases to accommodate."
                accent={COLORS.teal}
              />
              <ValueCard
                icon="🌍"
                title="Cultural & Historical Values"
                description="Build something that respects the diversity of the Deaf community, across race, gender, and sign language backgrounds globally."
                accent={COLORS.orange}
              />
              <ValueCard
                icon="🔒"
                title="Access & Safety"
                description="Already strong, this feature expands content access without being invasive. We kept it, but didn't need to redesign it."
                accent={COLORS.mid}
              />
              <ValueCard
                icon="🔄"
                title="Areas We Flagged, Not Fixed"
                description="Peer support, creator feedback loops, and interpreter vetting transparency, real gaps we acknowledged for future iterations."
                accent={COLORS.purple}
              />
            </div>
          </div>

          <Divider />

          {/* Process */}
          <div className="mb-13">
            <SectionHeading>From Napkin Sketch to Hi-Fi</SectionHeading>
            <p className="text-base leading-relaxed mb-4 text-[#333] dark:text-[#ccc]">
              Our design process moved through three distinct phases, and each one sharpened a
              different aspect of the feature.
            </p>

            <div className="my-8">
              <ProcessStep
                num={1}
                title="Individual Lo-fi Sketches"
                description="Each team member independently explored the UI, where does a sign language toggle live? Is it a pip window? A settings panel? Seeing five different interpretations of the same problem immediately surfaced the key tensions: visibility vs. intrusiveness, flexibility vs. simplicity."
              />
              <div className="my-6 text-center">
                <img
                  src="/ytsketch.png"
                  alt="Lo-fi sketches"
                  className="mx-auto max-w-full rounded-lg shadow-sm"
                />
              </div>
              <ProcessStep
                num={2}
                title="Collaborative Lo-fi Figma Prototype"
                  description='We converged on a concept: a lightweight control bar embedded in YouTube&apos;s existing player UI, with an ASL toggle surfaced directly alongside the CC button. A picture-in-picture interpreter window could be dragged and resized, giving users full control over placement without obscuring content.'
              />
                <div className="my-6 grid grid-cols-1 gap-4">
                  <img
                    src="/ytlofi1.png"
                    alt="Collaborative lo-fi 1"
                    className="mx-auto max-w-full rounded-lg shadow-sm"
                  />
                  <img
                    src="/ytlofi2.png"
                    alt="Collaborative lo-fi 2"
                    className="mx-auto max-w-full rounded-lg shadow-sm"
                  />
                </div>
              <ProcessStep
                num={3}
                title="Hi-fi Figma Prototype"
                 description='We rebuilt the prototype on a real YouTube page. The "Interpretations" sub-menu (nestled under Subtitles/CC) offered multiple sign languages, ASL, BSL, LSF, CSL, ISPL, making it clear this wasn&apos;t just an American feature. The pip window defaulted to the top-right corner but was fully movable and resizable.'
              />
                <div className="my-6 grid grid-cols-1 gap-4">
                  <img
                    src="/ythifi1.png"
                    alt="Hi-fi prototype 1"
                    className="mx-auto max-w-full rounded-lg shadow-sm"
                  />
                  <img
                    src="/ythifi2.png"
                    alt="Hi-fi prototype 2"
                    className="mx-auto max-w-full rounded-lg shadow-sm"
                  />
                  <img
                    src="/ythifi3.png"
                    alt="Hi-fi prototype 3"
                    className="mx-auto max-w-full rounded-lg shadow-sm"
                  />
                </div>
            </div>
          </div>

          {/* Highlight box */}
          <div
            className="rounded-2xl p-9 my-11 text-white"
            style={{ background: COLORS.purple }}
          >
            <h3
              className="text-xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.teal }}
            >
              The Design Decision I Keep Thinking About
            </h3>
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              One of our most deliberate choices was{" "}
              <strong className="font-medium" style={{ color: "#fff" }}>
                where
              </strong>{" "}
              to place the ASL option in the UI. Putting it under &quot;Subtitles/CC&quot; was
              intentional but also complicated, it signals that sign language is a form of
              captioning, which isn&apos;t quite right culturally. We labeled it
              &quot;Interpretations&quot; as a sub-category to begin drawing that distinction, but
              it&apos;s a conversation that deserves more iteration.
            </p>
            <p
              className="text-sm leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              It&apos;s a small detail that carries a lot of weight: how you categorize something
              shapes how people understand it. UI is never neutral.
            </p>
          </div>

          {/* Takeaway */}
          <div className="mb-8">
            <SectionHeading>What I Took Away</SectionHeading>
            <p className="text-base leading-relaxed mb-4 text-[#333] dark:text-[#ccc]">
              This project pushed me to think about the difference between{" "}
              <strong className="font-medium text-[#1a1a2e] dark:text-white">
                accessible
              </strong>{" "}
              and{" "}
              <strong className="font-medium text-[#1a1a2e] dark:text-white">
                inclusive
              </strong>
              . Accessible means the door is open. Inclusive means you were considered when the
              building was designed. For Deaf users on YouTube, captions are an open door, but
              this feature is about redesigning the building.
            </p>
            <p className="text-base leading-relaxed mb-4 text-[#333] dark:text-[#ccc]">
              Working on a team with five people also reinforced how much richer design gets when
              you allow divergence before convergence. Our lo-fi sketches looked nothing alike, and
              that was the point. The best ideas in the final prototype came from friction between
              different mental models.
            </p>
            <p className="text-base leading-relaxed mb-4 text-[#333] dark:text-[#ccc]">
              If I were to take this further, I&apos;d want to explore{" "}
              <strong className="font-medium text-[#1a1a2e] dark:text-white">
                community-submitted interpretations
              </strong>{" "}
              , letting Deaf creators themselves contribute ASL videos for existing content,
              building both a feedback loop and a platform for Deaf voices. That&apos;s the version
              that would feel truly mutual.
            </p>
          </div>

          {/* Tags removed per request */}

          {/* Back link */}
          <div className="mt-12 text-center">
            <Link
              href="/playground"
              className="text-sm font-medium text-[#6b5b95] dark:text-[#a899cc] no-underline"
            >
              ← Back to Playground
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
