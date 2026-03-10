"use client";

import React from "react";
import Link from "next/link";

const COLORS = {
  oceanDeep: "#0a1628",
  oceanMid: "#0d2444",
  teal: "#1ec8c8",
  coral: "#ff6b6b",
  foam: "#e8f4f8",
  gold: "#f5c842",
  textLight: "#c8dce8",
};

function Bubbles() {
  const specs = [
    { w: 12, left: "10%", dur: "9s", delay: "0s" },
    { w: 7, left: "25%", dur: "13s", delay: "2s" },
    { w: 18, left: "40%", dur: "11s", delay: "5s" },
    { w: 9, left: "55%", dur: "8s", delay: "1s" },
    { w: 14, left: "70%", dur: "15s", delay: "3s" },
    { w: 6, left: "85%", dur: "10s", delay: "7s" },
    { w: 20, left: "5%", dur: "12s", delay: "4s" },
    { w: 8, left: "92%", dur: "9s", delay: "6s" },
  ];
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {specs.map((s, i) => (
        <div
          key={i}
          className="absolute bottom-[-60px] rounded-full mermaid-bubble"
          style={{
            width: s.w,
            height: s.w,
            left: s.left,
            animationDuration: s.dur,
            animationDelay: s.delay,
            background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), rgba(30,200,200,0.1))",
            border: "1px solid rgba(30,200,200,0.2)",
          }}
        />
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex items-center gap-2.5 mb-3"
      style={{
        fontSize: "10px",
        fontWeight: 500,
        letterSpacing: "0.25em",
        textTransform: "uppercase" as const,
        color: COLORS.teal,
      }}
    >
      {children}
      <span
        className="flex-1 h-px"
        style={{ background: "linear-gradient(to right, rgba(30,200,200,0.3), transparent)" }}
      />
    </div>
  );
}

function ReviewCard({
  stars,
  username,
  badge,
  text,
  sentiment,
}: {
  stars: string;
  username: string;
  badge: string;
  text: string;
  sentiment: "negative" | "neutral" | "positive";
}) {
  const borderColor =
    sentiment === "negative"
      ? "rgba(255,107,107,0.5)"
      : sentiment === "neutral"
      ? "rgba(120,144,156,0.5)"
      : "rgba(30,200,200,0.5)";
  const badgeBg =
    sentiment === "negative"
      ? "rgba(255,107,107,0.12)"
      : sentiment === "neutral"
      ? "rgba(120,144,156,0.12)"
      : "rgba(30,200,200,0.1)";
  const badgeColor =
    sentiment === "negative"
      ? "#ff8a80"
      : sentiment === "neutral"
      ? "#b0bec5"
      : COLORS.teal;
  const badgeBorder =
    sentiment === "negative"
      ? "rgba(255,107,107,0.2)"
      : sentiment === "neutral"
      ? "rgba(120,144,156,0.2)"
      : "rgba(30,200,200,0.2)";

  return (
    <div
      className="rounded-xl p-5 transition-transform hover:translate-x-1"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderLeft: `3px solid ${borderColor}`,
      }}
    >
      <div className="flex items-center gap-2.5 mb-2.5 flex-wrap">
        <span className="text-xs" style={{ color: COLORS.gold, letterSpacing: "1px" }}>
          {stars}
        </span>
        <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
          {username}
        </span>
        <span
          className="text-[9px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full"
          style={{
            background: badgeBg,
            color: badgeColor,
            border: `1px solid ${badgeBorder}`,
            letterSpacing: "0.1em",
          }}
        >
          {badge}
        </span>
      </div>
      <p className="text-sm italic leading-relaxed m-0" style={{ color: "rgba(200,220,232,0.75)" }}>
        &quot;{text}&quot;
      </p>
    </div>
  );
}

function ReviewGroup({
  label,
  sentiment,
  children,
}: {
  label: string;
  sentiment: "negative" | "neutral" | "positive";
  children: React.ReactNode;
}) {
  const dotColor =
    sentiment === "negative" ? "#ff6b6b" : sentiment === "neutral" ? "#78909c" : COLORS.teal;
  const textColor =
    sentiment === "negative" ? "#ff8a80" : sentiment === "neutral" ? "#b0bec5" : "#80cbc4";

  return (
    <div className="flex flex-col gap-3">
      <div
        className="flex items-center gap-2 pb-2 mb-1 text-[10px] font-medium uppercase"
        style={{
          color: textColor,
          letterSpacing: "0.2em",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: dotColor }} />
        {label}
      </div>
      {children}
    </div>
  );
}

export default function LittleMermaid() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .mermaid-bubble {
          animation: mermaidRise linear infinite;
        }

        @keyframes mermaidRise {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
      `}</style>

      <div
        style={{
          background: COLORS.oceanDeep,
          color: COLORS.foam,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {/* Ocean gradient overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(30,200,200,0.06) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, rgba(13,36,68,0.8) 0%, transparent 50%),
              radial-gradient(ellipse at 60% 80%, rgba(255,107,107,0.04) 0%, transparent 50%)
            `,
          }}
        />

        <Bubbles />

        <main className="relative z-[1] max-w-3xl mx-auto px-6 pb-24">
          {/* Hero */}
          <section className="pt-24 pb-16 text-center">
            <span
              className="inline-block text-[11px] font-medium uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-8"
              style={{
                color: COLORS.teal,
                border: "1px solid rgba(30,200,200,0.3)",
              }}
            >
              HCI 201 · Data Analysis Project
            </span>
            <h1
              className="mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.4rem, 6vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                background: `linear-gradient(135deg, #fff 30%, ${COLORS.teal} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Under the Sea &amp;
              <br />
              Under the Microscope
            </h1>
            <p
              className="text-base max-w-lg mx-auto mb-10"
              style={{ color: COLORS.textLight, lineHeight: 1.7 }}
            >
              What 2,000+ Letterboxd reviews of Disney&apos;s The Little Mermaid (2023) taught us
              about race, representation, and the limits of star ratings.
            </p>
            <div
              className="flex justify-center gap-6 text-xs flex-wrap"
              style={{ color: "rgba(200,220,232,0.5)", letterSpacing: "0.05em" }}
            >
              <span className="flex items-center gap-1.5">🎓 Team Roles · 5 researchers</span>
              <span className="flex items-center gap-1.5">🐚 HCI 201, Intro to HCI Methods</span>
            </div>
          </section>

          {/* Wave divider */}
          <div
            className="text-center text-xl my-12"
            style={{ color: "rgba(30,200,200,0.35)", letterSpacing: "8px" }}
          >
            ～ ～ ～
          </div>

          {/* The Setup */}
          <section className="mb-14">
            <SectionLabel>The Setup</SectionLabel>
            <h2
              className="text-3xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#fff" }}
            >
              We went fishing for <em style={{ fontStyle: "italic", color: COLORS.teal }}>racism</em> in movie reviews
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: COLORS.textLight }}>
              When Disney cast Halle Bailey as Ariel in their 2023 live-action remake, the internet
              had opinions. Loud ones. Our team dove into Letterboxd, a beloved movie journaling app
              , to study those opinions up close.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: COLORS.textLight }}>
              Our research question:{" "}
              <strong style={{ color: "#fff" }}>
                In what ways are people expressing explicit or implicit racism in reaction to
                watching The Little Mermaid (2023)?
              </strong>{" "}
              We collected reviews across the full star rating spectrum, each team member covering a
              different range, from 0.5 stars all the way to 5.
            </p>
          </section>

          {/* The Method */}
          <section className="mb-14">
            <SectionLabel>The Method</SectionLabel>
            <h2
              className="text-3xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#fff" }}
            >
              Qualitative analysis, <em style={{ fontStyle: "italic", color: COLORS.teal }}>collaboratively</em>
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: COLORS.textLight }}>
              Letterboxd reviews are a rich mix of short journal entries and numerical star ratings,
              which made them perfect for our study. We analyzed the text qualitatively, grouping
              reviews into thematic &quot;buckets&quot; using FigJam as our collaborative workspace.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: COLORS.textLight }}>
              We weren&apos;t just counting racial slurs (though yes, some appeared). We were looking
              for subtler patterns, the microaggressions, the coded language, the &quot;I&apos;m
              not racist but...&quot; framing.
            </p>

            {/* Finding cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-7">
              {[
                {
                  icon: "🎉",
                  title: "Celebration of representation",
                  desc: "Reviews that celebrated the emotional impact on Black and Brown girls seeing themselves in Ariel.",
                  accent: "#4ecdc4",
                },
                {
                  icon: "🤷",
                  title: "Race acknowledged, dismissed",
                  desc: "Reviews that noted the casting but claimed race played no role in their (often negative) opinion.",
                  accent: "rgba(200,200,200,0.3)",
                },
                {
                  icon: "😤",
                  title: '"Woke agenda" framing',
                  desc: 'Explicit backlash using coded language around "political correctness" or "forced diversity."',
                  accent: COLORS.coral,
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 transition-transform hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderTop: `3px solid ${card.accent}`,
                  }}
                >
                  <span className="text-3xl block mb-3">{card.icon}</span>
                  <h3 className="text-sm font-medium text-white mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs m-0 leading-relaxed" style={{ color: "rgba(200,220,232,0.65)" }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* The Unexpected Finding */}
          <section className="mb-14">
            <SectionLabel>The Unexpected Finding</SectionLabel>
            <h2
              className="text-3xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#fff" }}
            >
              Stars don&apos;t tell the <em style={{ fontStyle: "italic", color: COLORS.teal }}>whole story</em>
            </h2>

            {/* Rating callout */}
            <div
              className="rounded-2xl p-8 text-center my-9"
              style={{
                background: "linear-gradient(135deg, rgba(245,200,66,0.08), rgba(245,200,66,0.02))",
                border: "1px solid rgba(245,200,66,0.2)",
              }}
            >
              <div className="text-2xl mb-3" style={{ letterSpacing: "4px" }}>⭐ , ★★★★★</div>
              <h3
                className="text-lg mb-2.5"
                style={{ fontFamily: "'Playfair Display', serif", color: COLORS.gold }}
              >
                Low ratings ≠ racist reviews
              </h3>
              <p className="text-sm max-w-md mx-auto m-0" style={{ color: "rgba(200,220,232,0.7)" }}>
                We assumed the lowest-rated reviews would be the most racially charged. We were
                wrong. Many 1-star reviews praised the casting enthusiastically, and criticized the
                film for terrible CGI or weak writing instead.
              </p>
            </div>

            <p className="text-sm leading-relaxed mb-4" style={{ color: COLORS.textLight }}>
              This was our biggest takeaway:{" "}
              <strong style={{ color: "#fff" }}>
                quantitative data (star ratings) doesn&apos;t capture the texture of qualitative
                sentiment.
              </strong>{" "}
              A 1-star review and a 5-star review could share identical feelings about
              representation, while diverging completely on the film&apos;s production quality.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: COLORS.textLight }}>
              It&apos;s a classic HCI lesson about the gap between the metric we can measure and the
              thing we actually care about.
            </p>
          </section>

          {/* Real Reviews */}
          <section className="mb-14">
            <SectionLabel>From the Data, Real Reviews</SectionLabel>
            <h2
              className="text-3xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#fff" }}
            >
              Voices from <em style={{ fontStyle: "italic", color: COLORS.teal }}>Letterboxd</em>
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: COLORS.textLight }}>
              Here&apos;s a sample of what we actually read, reviews that capture each of our three
              buckets. Some made us cringe, some made us tear up a little.
            </p>

            <div className="flex flex-col gap-8 mt-7">
              {/* Negative */}
              <ReviewGroup label="Explicit negative / racially coded" sentiment="negative">
                <ReviewCard sentiment="negative" stars="★½" username="Nobita Nobi" badge="Explicit" text="If mermaids can be of any race, humans can also be any race… Let's cast Ryan Gosling to play Black Panther. Please don't tell me they can't find a red headed white actress who can sing as good as Halle. So it's not about talent/merit." />
                <ReviewCard sentiment="negative" stars="★½" username="SolidSnake31" badge="Explicit" text="I don't like this film. I don't like Ariel. I don't like the plot changes. I don't like modern Disney. And I don't like 'the message.'" />
                <ReviewCard sentiment="negative" stars="★½" username="Hatrick87" badge="Explicit" text="They better make Tiana white." />
                <ReviewCard sentiment="negative" stars="★★" username="anonymous" badge="Explicit" text="Can we stop being 'woke' and just stay w the classic story? 'Ur just racist' yeah sure ok sorry I like the classic story and feel like it didn't need to be messed with." />
                <ReviewCard sentiment="negative" stars="★★" username="anonymous" badge="Implicit" text="They were halfway there with the casting she does look like a fish irl she just ain the right skintone." />
              </ReviewGroup>

              {/* Neutral */}
              <ReviewGroup label="Race acknowledged, dismissed" sentiment="neutral">
                <ReviewCard sentiment="neutral" stars="★" username="Belle Forger" badge="Explicit" text="This is a disclaimer… I'm not a racist and I didn't hate this movie because the lead was of color… I do actually watch a lot of films with a whole lot of diversity." />
                <ReviewCard sentiment="neutral" stars="★★½" username="anonymous" badge="Explicit" text="Yes, Ariel is black. What a concept. How brave. But Prince Eric is super white even though he has a black mother because he was adopted. Cause you can't have THAT love story." />
                <ReviewCard sentiment="neutral" stars="★½" username="anonymous" badge="Implicit" text="I'm not racist but ts wasn't good, watched with my sister." />
                <ReviewCard sentiment="neutral" stars="★★" username="anonymous" badge="Explicit/Implicit" text="it's not about the skin tone (actually, that's the least important thing, but if you put it together with everything else thats wrong about the movie, it's a little annoying)... why the f* is Eric's mother black while he is 100% white?" />
              </ReviewGroup>

              {/* Positive */}
              <ReviewGroup label="Celebration of representation" sentiment="positive">
                <ReviewCard sentiment="positive" stars="★★★★★" username="jodie" badge="Explicit" text="as a little girl i was obsessed with mermaids, so seeing someone who looks like me play one delighted my inner child!! and this film is going to mean so much to so many little black girls out there." />
                <ReviewCard sentiment="positive" stars="★★★★★" username="anonymous" badge="Explicit" text="I'm a black woman whose favorite princess has always been Ariel, since I was itty bitty. So imagine my absolute, sheer delight when Disney announced their next Ariel would be… A BLACK WOMAN!!!!!!!!" />
                <ReviewCard sentiment="positive" stars="★★★★½" username="anonymous" badge="Explicit" text="I love watching a black mermaid and I am so thankful that it opening up the dialogue of black people and black kids/girls in aquatic spaces. This really healed my inner child." />
                <ReviewCard sentiment="positive" stars="★★★★" username="emanuelbu" badge="Explicit" text="to those hate-reviewing y'all seem to forget how important it is for black kids to finally have REPRESENTATION." />
                <ReviewCard sentiment="positive" stars="★★★½" username="Momo" badge="Explicit" text="Fuck the racist! She was made for this role!" />
              </ReviewGroup>
            </div>

            {/* Twist box */}
            <div
              className="mt-8 rounded-2xl p-6"
              style={{
                background: "rgba(245,200,66,0.06)",
                border: "1px solid rgba(245,200,66,0.18)",
              }}
            >
              <div
                className="text-[10px] font-medium uppercase mb-2.5"
                style={{ color: COLORS.gold, letterSpacing: "0.2em" }}
              >
                ⚡ The surprising part
              </div>
              <p className="text-sm leading-relaxed m-0" style={{ color: "rgba(200,220,232,0.8)" }}>
                Many of the <strong style={{ color: "#fff" }}>1-star reviews above</strong> actually
                praised Halle Bailey&apos;s performance and called race a{" "}
                <em style={{ color: COLORS.gold, fontStyle: "normal" }}>positive</em>, while
                tanking the score over CGI or writing. Star rating ≠ racial sentiment. That&apos;s
                the whole finding.
              </p>
            </div>
          </section>

          {/* Pull quote */}
          <div
            className="rounded-r-xl py-5 px-7 my-12"
            style={{
              borderLeft: `3px solid ${COLORS.teal}`,
              background: "rgba(30,200,200,0.05)",
            }}
          >
            <p
              className="italic text-xl mb-2.5"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#fff",
                lineHeight: 1.6,
              }}
            >
              &quot;The star ratings were not always directly aligned with users&apos; opinions on
              race.&quot;
            </p>
              <p
              className="m-0 text-xs uppercase"
              style={{
                color: COLORS.teal,
                letterSpacing: "0.1em",
                fontStyle: "normal",
              }}
            >
              , Our key finding, HCI 201 Data Analysis
            </p>
          </div>

          {/* Reflection */}
          <section className="mb-14">
            <SectionLabel>What I Learned</SectionLabel>
            <h2
              className="text-3xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#fff" }}
            >
              HCI is about <em style={{ fontStyle: "italic", color: COLORS.teal }}>listening</em> to
              data
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: COLORS.textLight }}>
              Doing this project reinforced something I want to carry into every UX project:
              don&apos;t let your hypothesis blind you to what the data is actually saying. We went in
              expecting a clean correlation between low ratings and racist sentiment. The data pushed
              back.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: COLORS.textLight }}>
              It also made me think deeply about the limitations of any review platform&apos;s rating
              system. A single number flattens nuance. When your &quot;users&quot; are expressing
              something as complex as racial bias, you need mixed-methods, qualitative{" "}
              <em>and</em> quantitative, to even begin to understand what&apos;s going on.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: COLORS.textLight }}>
              And honestly? Seeing reviews from Black women and girls describing crying tears of joy
              watching Halle Bailey sing &quot;Part of Your World&quot;? That was the most powerful
              data point of all.
            </p>
          </section>

          {/* Team */}
          <section className="mb-14">
            <SectionLabel>The Team</SectionLabel>
            <h2
              className="text-3xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#fff" }}
            >
              Group 1
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: COLORS.textLight }}>
              Five researchers, each reviewing a different band of the rating spectrum, then
              synthesizing together.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-5">
              {[
                "Eesha Gupta — 1.5–2★ reviews + presentation",
                "Eric Khuu — 2.5–3★ reviews + Figjam",
                "Tereese Bangayan — 4.5–5★ reviews + presenter",
                "Lance Hansen — 0.5–1★ reviews + dataset description",
                "Tanvi Reddy — 3.5–4★ reviews + research questions",
              ].map((member) => (
                <div
                  key={member}
                  className="flex items-center gap-2 rounded-full px-4 py-2 text-xs"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: COLORS.textLight,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: COLORS.teal }}
                  />
                  {member}
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <div
            className="text-center pt-16"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span className="text-3xl block mb-3">🐚</span>
            <p className="text-xs m-0" style={{ color: "rgba(200,220,232,0.35)" }}>
              HCI 201 · Introduction to HCI Methods · Group 1
            </p>
            <Link
              href="/playground"
              className="inline-block mt-4 text-xs font-medium"
              style={{ color: COLORS.teal, textDecoration: "none" }}
            >
              ← Back to Playground
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
