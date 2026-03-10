"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

const COLORS = {
  rose: "#e8435a",
  blush: "#fce8ec",
  petal: "#f9d0d9",
  stem: "#2d4a2d",
  cream: "#fdf6f0",
  ink: "#1a1018",
  muted: "#8a6872",
};

function FloatingHearts() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const emojis = ["♡", "❤", "♥", "✿", "✦"];
    const colors = [COLORS.rose, "#f9a8b8", "#b5d48a", COLORS.blush];
    for (let i = 0; i < 18; i++) {
      const el = document.createElement("div");
      el.className = "valentine-heart";
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = Math.random() * 100 + "vw";
      el.style.top = 80 + Math.random() * 20 + "vh";
      el.style.animationDelay = Math.random() * 10 + "s";
      el.style.animationDuration = 5 + Math.random() * 7 + "s";
      el.style.fontSize = 0.8 + Math.random() * 1.4 + "rem";
      el.style.color = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(el);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    />
  );
}

function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      <div
        className="relative flex flex-col justify-center overflow-hidden px-8 py-16 md:px-16 md:py-20"
        style={{ background: COLORS.rose }}
      >
        {/* Curved edge */}
        <div
          className="hidden md:block absolute right-[-60px] top-0 bottom-0 w-[120px] z-[2] vb-curve"
          style={{
            background: COLORS.cream,
            clipPath: "ellipse(60px 100% at 100% 50%)",
          }}
        />
        <div className="flex items-center gap-2 mb-6" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em" }}>
          <span className="inline-block w-7 h-[2px]" style={{ background: "rgba(255,255,255,0.5)" }} />
          HCI 202B · Playground Project
        </div>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.8rem, 5vw, 5rem)", lineHeight: 1.05, color: "#fff", fontStyle: "italic" }}>
          Will You Be
          <em className="block not-italic" style={{ color: COLORS.petal }}>My Valentine?</em>
        </h1>
        
      </div>

      <div className="flex items-center justify-center px-8 py-12 md:px-16 md:pl-24 vb-hero-right" style={{ background: COLORS.cream }}>
        <div className="max-w-[440px]">
          <p className="text-lg leading-relaxed mb-5" style={{ color: COLORS.muted }}>
            What happens when you apply <strong className="font-medium" style={{ color: COLORS.ink }}>HCI principles</strong> to a Valentine&apos;s Day bouquet? You get RGB LEDs, a touch sensor hidden in tulips, a mist diffuser, and a hologram, all asking one very important question.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: COLORS.muted }}>
            This was our semester-long journey from &quot;what if flowers could talk&quot; to a working, testable, multi-sensory prototype. Here&apos;s how it went.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-3" style={{ fontFamily: "'Caveat', cursive", fontSize: "1rem", color: COLORS.rose, letterSpacing: "0.04em" }}>
      {children}
      <span className="flex-1 h-px" style={{ background: COLORS.petal }} />
    </div>
  );
}

function Callout({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-r-xl my-9 py-6 px-7 vb-callout" style={{ background: COLORS.blush, borderLeft: `4px solid ${COLORS.rose}` }}>
      <div className="mb-2" style={{ fontFamily: "'Caveat', cursive", color: COLORS.rose, fontSize: "1rem" }}>
        {label}
      </div>
      <p className="m-0 italic text-lg" style={{ color: COLORS.ink }}>{children}</p>
    </div>
  );
}

function TimelineItem({ badge, title, sub, children, isLast }: { badge: string; title: string; sub: string; children: React.ReactNode; isLast?: boolean }) {
  return (
    <div className="flex gap-7 items-start pb-10 relative">
      <div
        className="flex-shrink-0 w-[58px] h-[58px] text-white font-bold rounded-full flex items-center justify-center relative z-[1] vb-badge"
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "0.95rem",
          background: isLast ? COLORS.stem : COLORS.rose,
          boxShadow: `0 0 0 4px ${COLORS.cream}`,
        }}
      >
        {badge}
      </div>
      <div className="flex-1 mt-1.5 rounded-2xl p-7 vb-card" style={{ background: "#fff", border: `1px solid ${COLORS.petal}` }}>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.25rem", color: COLORS.ink }} className="mb-1">
          {title}
        </div>
        <div className="mb-4 text-xs font-medium uppercase tracking-wider" style={{ color: COLORS.rose, letterSpacing: "0.06em" }}>
          {sub}
        </div>
        {children}
      </div>
    </div>
  );
}

function Insight({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-xl py-3.5 px-4 flex gap-2.5 text-sm leading-relaxed vb-insight" style={{ background: COLORS.blush, color: COLORS.ink }}>
      <span className="flex-shrink-0 mt-px" style={{ color: COLORS.rose }}>✦</span>
      <span>{children}</span>
    </div>
  );
}

function QuoteCard({ text, attr }: { text: string; attr: string }) {
  return (
    <div
      className="rounded-xl p-5 transition-transform hover:-translate-y-1 vb-card"
      style={{ background: "#fff", border: `1px solid ${COLORS.petal}` }}
    >
      <div className="italic mb-3" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1rem", lineHeight: 1.55, color: COLORS.ink }}>
        {text}
      </div>
      <div className="text-xs font-medium uppercase tracking-wider" style={{ color: COLORS.rose, letterSpacing: "0.04em" }}>
        {attr}
      </div>
    </div>
  );
}

export default function ValentineBouquet() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&family=Caveat:wght@600&display=swap');

        .valentine-heart {
          position: absolute;
          font-size: 1.2rem;
          opacity: 0;
          animation: valentineFloat 6s ease-in infinite;
        }

        @keyframes valentineFloat {
          0%   { transform: translateY(0) rotate(-10deg); opacity: 0; }
          10%  { opacity: 0.5; }
          90%  { opacity: 0.2; }
          100% { transform: translateY(-120vh) rotate(10deg); opacity: 0; }
        }

        /* Dark-mode overrides */
        html.dark .vb-page { background: #0f0f0f !important; color: #f2e8ec !important; }
        html.dark .vb-hero-right { background: #0f0f0f !important; }
        html.dark .vb-hero-right p { color: #b89aa4 !important; }
        html.dark .vb-hero-right strong { color: #f2e8ec !important; }
        html.dark .vb-curve { background: #0f0f0f !important; }
        html.dark .vb-page article h2 { color: #f2e8ec !important; }
        html.dark .vb-page article p { color: #c0a8b0 !important; }
        html.dark .vb-page article strong { color: #f2e8ec !important; }
        html.dark .vb-card { background: #1a1018 !important; border-color: #3a2030 !important; }
        html.dark .vb-card div { color: #f2e8ec !important; }
        html.dark .vb-card p { color: #c0a8b0 !important; }
        html.dark .vb-callout { background: #2d1a22 !important; }
        html.dark .vb-callout p { color: #f2e8ec !important; }
        html.dark .vb-insight { background: #2d1a22 !important; }
        html.dark .vb-insight span { color: #f2e8ec !important; }
        html.dark .vb-badge { box-shadow: 0 0 0 4px #0f0f0f !important; }
        html.dark .vb-video-cap { background: #2d1a22 !important; }
        html.dark .vb-section07 { background: #1e3520 !important; }
      `}</style>

      <FloatingHearts />

      <div className="vb-page" style={{ background: COLORS.cream, color: COLORS.ink, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
        <Hero />

        <article className="max-w-3xl mx-auto px-6 py-20 md:px-10">
          {/* 01, MOTIVATION */}
          <SectionLabel>01, Why We Built This</SectionLabel>
          <h2 className="text-4xl mb-6" style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2, color: COLORS.ink }}>
            Valentine&apos;s flowers die. <em style={{ color: COLORS.rose }}>This one doesn&apos;t.</em>
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            The three of us were swapping Valentine&apos;s Day stories when we realised we&apos;d all done the same thing, bought flowers, watched them wilt in a week, thrown them out. It felt wasteful, but more than that it felt like a missed opportunity. The gesture disappears with the flowers.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            So we asked: what if the gift itself did the emotional heavy lifting and stuck around? We locked in three non-negotiables, <strong className="font-medium" style={{ color: COLORS.ink }}>permanent</strong> so the recipient keeps it, <strong className="font-medium" style={{ color: COLORS.ink }}>personal</strong> so it feels made for them specifically, and <strong className="font-medium" style={{ color: COLORS.ink }}>interactive</strong> so the moment of receiving it is something they actively participate in, not just observe. Those three constraints shaped every decision that followed.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            Personalisation mattered to us beyond just the concept. A generic &quot;Will you be my Valentine?&quot; wasn&apos;t enough, we wanted the giver to write something only their partner would recognise, a message that meant something to the two of them specifically. Same thinking applied to scent: different people respond to different fragrances, so the mist diffuser was designed to work with whatever the giver chose to add. The idea was that two people could receive the exact same bouquet and have it feel completely different, because it was built around them.
          </p>

          {/* 02, PERSONA */}
          <SectionLabel>02, Who We Were Designing For</SectionLabel>
          <h2 className="text-4xl mb-6" style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2, color: COLORS.ink }}>
            Meet <em style={{ color: COLORS.rose }}>Alex K.</em>, and why the persona actually mattered
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            Early on we realised we were at risk of designing for ourselves, three people who are comfortable with electronics and think hologram bouquets are obviously cool. So we built a persona to keep us honest.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            Alex is the gift giver. Wants to make someone feel special but gets anxious about execution. Hates things that feel generic or require a manual to operate. In our mock interviews, the same fear surfaced repeatedly:
          </p>

          <Callout label="✦ From mock interviews">
            &quot;I dont know how to use it without instructions&quot;
          </Callout>

          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            That single insight drove two of our biggest decisions: why we moved away from a push-button to a touch sensor (more intuitive, less &quot;press here&quot;), and why we eventually added a 3D-printed tag pointing to the sensor (because even intuitive isn&apos;t obvious enough when emotions are running high).
          </p>

          {/* 03, WHAT WE BUILT */}
          <SectionLabel>03, What&apos;s Inside It and Why Each Piece is There</SectionLabel>
          <h2 className="text-4xl mb-6" style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2, color: COLORS.ink }}>
            An Arduino, some tulips, and a <em style={{ color: COLORS.rose }}>Victorian magic trick</em>
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            Every component was a deliberate choice, not just a technical one.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            We chose a <strong className="font-medium" style={{ color: COLORS.ink }}>capacitive touch sensor</strong> over a push button because touch feels intimate, pressing a button feels like operating a device, touching a flower feels like interacting with a gift. The <strong className="font-medium" style={{ color: COLORS.ink }}>RGB LEDs</strong> glow red from inside the bouquet because the light needed to feel like it was coming from within the flowers, not from a separate screen or gadget bolted on.
          </p>

          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            And the <strong className="font-medium" style={{ color: COLORS.ink }}>LCD + Pepper&apos;s Ghost illusion</strong>, this was the most deliberate choice of all. We could have just shown the message on a screen. But a screen sitting in a bouquet breaks the magic; it reminds you there&apos;s a device in there. Pepper&apos;s Ghost is a 19th century stage trick that uses angled glass to make a reflection appear to float in mid-air. It meant the message could emerge from the flowers themselves, not from a display. The reveal feels impossible, which is exactly the point.
          </p>

          {/* 04, ITERATION */}
          <SectionLabel>04, How It Evolved</SectionLabel>
          <h2 className="text-4xl mb-6" style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2, color: COLORS.ink }}>
            Three builds. Each one broke something <em style={{ color: COLORS.rose }}>we thought we&apos;d solved.</em>
          </h2>

          <div className="flex flex-col relative my-9 mb-12">
            {/* Timeline line */}
            <div
              className="absolute left-[28px] top-0 bottom-0 w-[2px]"
              style={{ background: `linear-gradient(to bottom, ${COLORS.rose}, ${COLORS.petal})` }}
            />

            <TimelineItem badge="50%" title="Just the wires, validating the feeling, not the form" sub="Basic circuit · No flowers · Vision explained verbally">
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#4a3840" }}>
                We deliberately tested at 50% before adding any aesthetic finishing. The reason: we needed to know if the <em>concept</em> worked before investing time in making it look good. If people didn&apos;t respond emotionally to the idea, no amount of nice wrapping would fix it.
              </p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#4a3840" }}>
                We were right to check early. Everyone said they&apos;d feel genuinely valued receiving something like this, the concept landed even with exposed breadboard and dangling wires. But the feedback was almost entirely emotional and very light on usability critique, because there wasn&apos;t enough finished product to critique yet. That was fine. It told us what we needed to know: keep going.
              </p>
              <Insight>Decision: proceed to full fabrication. The emotional core was validated. Now we needed to make it real.</Insight>
            </TimelineItem>

            <TimelineItem badge="75%" title="Flowers in, and a scent we never added" sub="Real flowers · Mist diffuser running · No hologram yet">
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#4a3840" }}>
                Adding the flowers changed everything about how people related to the object. Suddenly it looked like a gift, and people tried to actually use it, which immediately exposed the sensor discoverability problem we&apos;d underestimated. Nobody touched the sensor without prompting. Some walked right past it. This is what pushed us to design the 3D-printed instructional tag: not a failure of the sensor, but a failure of affordance.
              </p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#4a3840" }}>
                The scent feedback was mixed, some loved it, others were indifferent or put off, which raised the question of whether we should add real fragrance or leave the diffuser scent-free. Then came the moment that changed our thinking entirely.
              </p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#4a3840" }}>
                The mist diffuser at this stage was running plain water. No scent at all. But because mist was rising around  flowers, multiple participants commented on the rose fragrance. Their brains filled in a scent that simply wasn&apos;t there, the visual context of flowers and mist was enough to trigger a phantom smell.
              </p>
              <Insight>Decision: we didn&apos;t need to add perfume. The environment was doing the sensory work for us. This also taught us something broader, when you design the context well enough, perception fills the gaps you leave open.</Insight>
            </TimelineItem>

            <TimelineItem badge="100%" title="The hologram, solving the 'device in a bouquet' problem" sub="LCD + Pepper's Ghost added · Touch tag · Wrapped as a gift" isLast>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#4a3840" }}>
                The 75% prototype still had one unsolved problem: the message display. An LCD screen sitting among flowers looked exactly like what it was, electronics attached to a gift. It broke the illusion every time. We needed the message to feel like it belonged in the bouquet, not bolted onto it.
              </p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#4a3840" }}>
                Pepper&apos;s Ghost solved this. By angling a piece of glass above the LCD, the reflection of the message appears to float above the flowers with no visible source. We also added the 3D-printed tag directly in response to the 75% discoverability feedback, and wrapped the whole thing properly so the first experience was receiving a gift, not inspecting a prototype.
              </p>
              <Insight>The hologram was the element that made people gasp in final testing. Nobody expects a message to materialise from inside a bouquet, and that surprise was exactly what we&apos;d been designing toward from the start.</Insight>
            </TimelineItem>
          </div>

          {/* 05, VIDEO */}
          <SectionLabel>05, See It</SectionLabel>
          <h2 className="text-4xl mb-6" style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2, color: COLORS.ink }}>
            The full <em style={{ color: COLORS.rose }}>experience</em>
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            Watch for the hologram moment, that&apos;s the one. Everything before it is build-up.
          </p>

          <div className="my-12 rounded-2xl overflow-hidden" style={{ border: `1px solid ${COLORS.petal}`, boxShadow: `0 8px 40px rgba(232,67,90,0.08)`, background: "#000" }}>
            <video className="w-full aspect-video block border-none" controls>
              <source src="/5B48610C-EAC9-471C-9CEE-914F8272F345.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="flex items-center gap-2.5 py-3.5 px-5 text-sm vb-video-cap" style={{ background: COLORS.blush, color: COLORS.muted }}>
              <span style={{ color: COLORS.rose, fontSize: "1rem" }}>▶</span>
              Final prototype demo — HCI 202B · Eesha Gupta · Isha Chury · Tanvi Reddy Kamanuri
            </div>
          </div>

          <div className="text-center my-12 text-xl tracking-[0.5em]" style={{ color: COLORS.petal }}>
            ♡ &nbsp; ♡ &nbsp; ♡
          </div>

          {/* 06, USER TESTING */}
          <SectionLabel>06, What Testing Told Us</SectionLabel>
          <h2 className="text-4xl mb-6" style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2, color: COLORS.ink }}>
            Everyone loved it. <em style={{ color: COLORS.rose }}>Almost nobody knew how to use it.</em>
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            Final round had 6 participants, rated on thoughtfulness 1–5. The scores skewed 4–5 across the board, emotionally it landed. But two friction points came up consistently enough that we couldn&apos;t ignore them.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a3840" }}>
            First: sensor discoverability. Even with the tag, people weren&apos;t always sure what to do first. The interaction flow wasn&apos;t obvious enough without prior context. Second: the message was mirrored on the LCD, readable if you tried, but disorienting on first look. Both pointed to the same underlying issue: we&apos;d optimised for the reveal and underinvested in the journey to get there.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <QuoteCard text={`"It felt like watching a personal movie."`} attr=", P3, on the hologram reveal" />
            <QuoteCard text={`"I'd accept the proposal if this was given to me."`} attr=", P0, Midterm testing" />
            <QuoteCard text={`"Without instructions, I didn't know what to touch or where."`} attr=", P3, Final testing" />
            <QuoteCard text={`"The digital message with flowers is something you just don't see."`} attr=", P1, on what stood out" />
          </div>

          {/* 07, LEARNINGS */}
          <div className="rounded-2xl p-8 md:p-12 my-10 text-white vb-section07" style={{ background: COLORS.stem }}>
            <div className="flex items-center gap-2.5 mb-3" style={{ fontFamily: "'Caveat', cursive", fontSize: "1rem", color: COLORS.petal, letterSpacing: "0.04em" }}>
              07, If We Did It Again
              <span className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.15)" }} />
            </div>
            <h2 className="text-4xl mb-6" style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2, color: "#fff" }}>
              What we&apos;d do <em style={{ color: COLORS.petal }}>differently</em>
            </h2>
            <ul className="list-none grid gap-4 mt-2">
              {[
                <><strong className="font-medium">Lead with the journey, not the reveal.</strong> We spent so much energy on the hologram moment that the path to it, finding the sensor, understanding what to do, was underdeveloped. A motion sensor that triggers automatically as someone picks up the bouquet would remove that friction entirely.</>,
                <><strong className="font-medium">Design the environment, not just the object.</strong> The phantom scent proved that context does as much perceptual work as components. We&apos;d lean into that more deliberately next time, think about lighting, setting, even the wrapping as part of the experience.</>,
                <><strong className="font-medium">Test the concept before you build anything.</strong> Our 50% test validated that the emotional core worked before we&apos;d invested in fabrication. That&apos;s a habit worth keeping, the feeling should be right before the form is.</>,
                
              ].map((item, i) => (
                <li key={i} className="flex gap-3.5 items-start text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                  <span className="flex-shrink-0 mt-0.5" style={{ color: COLORS.rose, fontSize: "1rem" }}>♡</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Footer */}
        <footer className="text-center py-10 px-5 text-sm" style={{ background: COLORS.ink, color: "rgba(255,255,255,0.4)" }}>
          <p>
            Made with 💗 in <strong className="font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>HCI 202B</strong> ·{" "}
            <Link href="/playground" style={{ color: COLORS.petal, textDecoration: "none" }}>
              Back to Playground →
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
