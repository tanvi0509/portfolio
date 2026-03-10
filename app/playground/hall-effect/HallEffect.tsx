"use client";

import React from "react";
import Link from "next/link";

const C = {
  bg: "#0d0f14",
  surface: "#13161e",
  border: "#1f2330",
  borderBright: "#2e3448",
  text: "#c8cdd8",
  textDim: "#5a6070",
  textBright: "#e8ecf4",
  green: "#4af0a0",
  amber: "#f0c44a",
  red: "#f06060",
  blue: "#60a0f0",
  purple: "#a060f0",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex items-center gap-2 mb-5"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.65rem",
        color: C.textDim,
        letterSpacing: "0.12em",
        textTransform: "uppercase" as const,
      }}
    >
      {children}
      <span className="flex-1 h-px max-w-[120px]" style={{ background: C.border }} />
    </div>
  );
}

function CodeBlock({
  filename,
  lang,
  children,
}: {
  filename: string;
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-md overflow-hidden my-6"
      style={{
        background: C.surface,
        border: `1px solid ${C.borderBright}`,
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <div
        className="flex justify-between items-center px-4 py-2"
        style={{
          background: "#191c26",
          borderBottom: `1px solid ${C.border}`,
          fontSize: "0.65rem",
          color: C.textDim,
          letterSpacing: "0.08em",
        }}
      >
        <span>{filename}</span>
        <span style={{ color: C.blue }}>{lang}</span>
      </div>
      <div
        className="p-5 overflow-x-auto text-sm leading-relaxed"
        style={{ fontSize: "0.8rem", lineHeight: 1.75 }}
      >
        {children}
      </div>
    </div>
  );
}

function Terminal({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-md p-5 my-6 text-sm leading-relaxed"
      style={{
        background: "#080a0e",
        border: `1px solid ${C.borderBright}`,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.78rem",
        lineHeight: 1.8,
        color: C.textDim,
      }}
    >
      {children}
    </div>
  );
}

function Insight({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-r-md my-6 p-4"
      style={{
        borderLeft: `3px solid ${C.green}`,
        background: `linear-gradient(90deg, rgba(74,240,160,0.06) 0%, transparent 100%)`,
      }}
    >
      <div
        className="mb-1"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.62rem",
          color: C.green,
          letterSpacing: "0.1em",
          textTransform: "uppercase" as const,
        }}
      >
        ↳ UX Takeaway
      </div>
      <p className="m-0 text-base" style={{ color: C.text }}>{children}</p>
    </div>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-r-md my-6 p-4"
      style={{
        borderLeft: `3px solid ${C.amber}`,
        background: `linear-gradient(90deg, rgba(240,196,74,0.06) 0%, transparent 100%)`,
      }}
    >
      <div
        className="mb-1"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.62rem",
          color: C.amber,
          letterSpacing: "0.1em",
          textTransform: "uppercase" as const,
        }}
      >
        ⚠ Lesson learned
      </div>
      <p className="m-0 text-base" style={{ color: C.text }}>{children}</p>
    </div>
  );
}

function SpecGrid({ items }: { items: { key: string; val: string; color?: string }[] }) {
  return (
    <div
      className="grid gap-px rounded-md overflow-hidden my-6"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        background: C.border,
        border: `1px solid ${C.border}`,
      }}
    >
      {items.map((item, i) => (
        <div key={i} className="p-4" style={{ background: C.surface }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.62rem",
              color: C.textDim,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              marginBottom: "0.3rem",
            }}
          >
            {item.key}
          </div>
          <div
            className="text-base font-semibold"
            style={{ color: item.color || C.textBright }}
          >
            {item.val}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HallEffect() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');
      `}</style>

      <div
        style={{
          background: C.bg,
          color: C.text,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          lineHeight: 1.8,
          minHeight: "100vh",
        }}
      >
        {/* Scanline overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-[9000]"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
          }}
        />

        {/* Sidebar dots - desktop only */}
        <nav
          className="fixed left-0 top-0 bottom-0 w-[52px] hidden md:flex flex-col items-center py-6 gap-5 z-[100]"
          style={{ borderRight: `1px solid ${C.border}` }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
              <div
                className="w-2 h-2 rounded-full transition-colors"
                style={{ background: i === 0 ? C.green : C.borderBright }}
              />
              {i < 4 && <div className="flex-1 w-px" style={{ background: C.border }} />}
            </React.Fragment>
          ))}
        </nav>

        <div className="max-w-[780px] px-6 md:px-10 mx-auto md:pl-[52px] text-left">
          {/* Header */}
          <header className="pt-16 pb-10" style={{ borderBottom: `1px solid ${C.border}` }}>
            <div
              className="flex items-center gap-2 mb-4"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                color: C.green,
                letterSpacing: "0.1em",
              }}
            >
              <span style={{ color: C.textDim }}>{'//'}  </span>
              HCI Coursework · Physical Computing · Arduino
            </div>
            <h1
              className="text-4xl md:text-5xl font-semibold mb-4"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.15,
                color: C.textBright,
              }}
            >
              Hall Effect &amp; Hubris
              <br />
              <span style={{ color: C.green }}>A Field Report on Building with Binary</span>
            </h1>
            <p className="text-base max-w-xl" style={{ color: C.textDim }}>
              What happens when two interaction designers get a sensor that only knows one bit, and
              decide that&apos;s enough to replace keyboards and surveil dogs.
            </p>
            <div
              className="flex gap-6 flex-wrap mt-6 pt-6"
              style={{
                borderTop: `1px solid ${C.border}`,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: C.textDim,
              }}
            >
              {["Tanvi Reddy Kamanuri", "Sonia Salunke", "Keyestudio Hall Effect Sensor"].map(
                (s) => (
                  <span key={s} className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: C.amber }}
                    />
                    {s}
                  </span>
                )
              )}
            </div>
          </header>

          {/* 01, The Hardware */}
          <section className="py-12" style={{ borderBottom: `1px solid ${C.border}` }}>
            <SectionLabel>01 &nbsp; The hardware</SectionLabel>
            <h2 className="text-xl font-semibold mb-5" style={{ color: C.textBright }}>
              What We Were Working With
            </h2>
            <p className="mb-4">
              The <strong style={{ color: C.textBright }}>Keyestudio Hall Effect Magnetic Sensor</strong> is
              about as conceptually minimal as components get. It wraps a Hall effect element and a
              comparator into a small PCB, gives you three pins, and produces a single digital output.
              Magnet nearby →{" "}
              <code style={{ color: C.green, fontFamily: "'JetBrains Mono', monospace" }}>LOW</code>.
              Magnet gone →{" "}
              <code style={{ color: C.red, fontFamily: "'JetBrains Mono', monospace" }}>HIGH</code>.
              That&apos;s the whole API.
            </p>
            <p className="mb-4">
              It runs on 3.3V or 5V, making it immediately Arduino-compatible, and wiring it up
              takes about three minutes including reading the (very short) datasheet.
            </p>

            {/* Pin diagram */}
            <div
              className="flex gap-px my-5"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem" }}
            >
              {[
                { name: "G", wire: "→ GND", color: C.red },
                { name: "V", wire: "→ 3.3/5V", color: C.amber },
                { name: "S", wire: "→ Digital Pin", color: C.blue },
              ].map((p) => (
                <div
                  key={p.name}
                  className="flex-1 text-center rounded-sm p-3"
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.borderBright}`,
                  }}
                >
                  <div className="font-bold text-sm" style={{ color: C.textBright }}>
                    {p.name}
                  </div>
                  <div className="text-[0.65rem] mt-0.5" style={{ color: p.color }}>
                    {p.wire}
                  </div>
                </div>
              ))}
            </div>

            <SpecGrid
              items={[
                { key: "Output type", val: "Digital", color: C.green },
                { key: "Detection range", val: "~few mm", color: C.amber },
                { key: "Operating voltage", val: "3.3 – 5V" },
                { key: "Contact required?", val: "Sometimes", color: C.amber },
                { key: "Polarity sensitive?", val: "Yes (south)", color: C.red },
                { key: "Gradual output?", val: "No", color: C.red },
              ]}
            />

            <p className="mb-4">
              Strengths: no physical contact needed, fast response, extremely reliable, and dead
              simple to integrate. Limitations: it only detects magnets (not proximity, not humans,
              not vibes), the range is tiny, and nearby stray magnets will absolutely troll you
              mid-demo.
            </p>
          </section>

          {/* 02, The Surprises */}
          <section className="py-12" style={{ borderBottom: `1px solid ${C.border}` }}>
            <SectionLabel>02 &nbsp; The surprises</SectionLabel>
            <h2 className="text-xl font-semibold mb-5" style={{ color: C.textBright }}>
              What the Sensor Didn&apos;t Tell Us Up Front
            </h2>

            <h3
              className="mt-7 mb-2 text-sm font-semibold"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: C.amber }}
            >
              {'// SURPRISE_01, Polarity actually matters'}
            </h3>
            <p className="mb-4">
              We assumed a magnet is a magnet. It is not. Most Hall effect sensors, including this
              one, are sensitive to only{" "}
              <strong style={{ color: C.textBright }}>one magnetic pole</strong>, typically south.
              Wave the north end at the sensor and it sits there, stonefaced, detecting nothing.
              This was discovered live, in front of a laptop, with increasing desperation.
            </p>

            <Terminal>
              <div>
                <span style={{ color: C.green }}>$</span>{" "}
                <span style={{ color: C.text }}>digitalRead(hallPin)</span>
              </div>
              <div>
                <span style={{ color: C.text }}>
                  → HIGH &nbsp;&nbsp;// no magnet... but there IS a magnet??
                </span>
              </div>
              <div>
                <span style={{ color: C.amber }}>→ [flip magnet 180°]</span>
              </div>
              <div>
                <span style={{ color: C.text }}>→ LOW &nbsp;&nbsp;&nbsp;// there it is</span>
              </div>
              <div>
                <span style={{ color: C.green }}>$</span>{" "}
                <span style={{ color: C.textDim, fontStyle: "italic" }}>
                  {'// physics: 1, us: 0'}
                </span>
              </div>
            </Terminal>

            <h3
              className="mt-7 mb-2 text-sm font-semibold"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: C.amber }}
            >
              {'// SURPRISE_02, G-V-S pin order is not universal'}
            </h3>
            <p className="mb-4">
              Different sensors from different manufacturers print their ground, power, and signal
              pins in different orders on the board. We wired ours in the order we{" "}
              <em style={{ color: C.textBright }}>assumed</em> it would be, not the order it
              actually was. The sensor technically responded, but inversely. Everything was
              backwards. We spent longer than we&apos;d like to admit wondering if we&apos;d broken
              physics before checking the silkscreen label with a phone flashlight.
            </p>

            <Warning>
              Always verify G-V-S order directly on the board before powering up. Do not trust
              muscle memory from a different sensor model. Do not trust vibes.
            </Warning>

            <h3
              className="mt-7 mb-2 text-sm font-semibold"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: C.amber }}
            >
              {'// SURPRISE_03, Range is magnet-dependent, not just sensor-dependent'}
            </h3>
            <p className="mb-4">
              A strong neodymium magnet can trigger the sensor from several centimeters away. A
              weaker ferrite magnet might need direct contact. The datasheet gives you the
              sensor&apos;s specs;{" "}
              <em style={{ color: C.textBright }}>
                it cannot give you the specs of whatever magnet you grabbed off your fridge
              </em>
              . Design your interaction around your actual magnet, not your assumed one.
            </p>
          </section>

          {/* 03, Prototype One */}
          <section className="py-12" style={{ borderBottom: `1px solid ${C.border}` }}>
            <SectionLabel>03 &nbsp; Prototype one</SectionLabel>
            <h2 className="text-xl font-semibold mb-5" style={{ color: C.textBright }}>
              The Magnetic Keyboard: A Thought Experiment That Got Out of Hand
            </h2>
            <p className="mb-4">
              Concept: eliminate physical key presses entirely. Attach magnets to your fingertips,
              hover over an array of Hall effect sensors, each mapped to a distinct buzzer tone
              sequence.{" "}
              <strong style={{ color: C.textBright }}>
                To type, simply learn 78 unique buzzer melodies.
              </strong>{" "}
              Objectively worse than a keyboard. We built it anyway.
            </p>

            <CodeBlock filename="Absurd_int.ino" lang="Arduino C++">
              <span style={{ color: C.purple }}>const</span>{" "}
              <span style={{ color: C.purple }}>int</span> hallPin1 ={" "}
              <span style={{ color: C.amber }}>4</span>;
              <br />
              <span style={{ color: C.purple }}>const</span>{" "}
              <span style={{ color: C.purple }}>int</span> hallPin2 ={" "}
              <span style={{ color: C.amber }}>A0</span>;
              <br />
              <span style={{ color: C.purple }}>const</span>{" "}
              <span style={{ color: C.purple }}>int</span> buzzerPin ={" "}
              <span style={{ color: C.amber }}>9</span>;
              <br />
              <br />
              <span style={{ color: C.purple }}>void</span>{" "}
              <span style={{ color: C.blue }}>loop</span>() {"{"}
              <br />
              &nbsp;&nbsp;<span style={{ color: C.purple }}>int</span> s1 ={" "}
              <span style={{ color: C.blue }}>digitalRead</span>(hallPin1);
              <br />
              &nbsp;&nbsp;<span style={{ color: C.purple }}>int</span> s2 ={" "}
              <span style={{ color: C.blue }}>digitalRead</span>(hallPin2);
              <br />
              <br />
              &nbsp;&nbsp;<span style={{ color: C.purple }}>if</span> (s1 =={" "}
              <span style={{ color: C.amber }}>LOW</span>){"      "}
              <span style={{ color: C.blue }}>playHighSequence</span>();
              <br />
              &nbsp;&nbsp;<span style={{ color: C.purple }}>else if</span> (s2 =={" "}
              <span style={{ color: C.amber }}>LOW</span>){" "}
              <span style={{ color: C.blue }}>playLowSequence</span>();
              <br />
              &nbsp;&nbsp;<span style={{ color: C.purple }}>else</span>
              {"                "}
              <span style={{ color: C.blue }}>noTone</span>(buzzerPin);
              <br />
              {"}"}
            </CodeBlock>

            <p className="mb-4">
              Two sensors, two distinct melodic sequences, a rising high sequence and a staccato
              low pattern. The prototype worked perfectly as a two-key chime box. As a typing
              interface, it confirmed that the QWERTY keyboard will outlive us all.
            </p>

            <Insight>
              Even a completely impractical prototype surfaces real findings. We noticed that the{" "}
              <em style={{ color: C.textBright }}>moment of triggering</em>, the instant the
              buzzer fired when the magnet crossed threshold, felt genuinely satisfying. Binary
              events, when timed well, have a snap to them that continuous sliders don&apos;t.
              That&apos;s worth designing with intentionally.
            </Insight>
          </section>

          {/* 04, Prototype Two */}
          <section className="py-12" style={{ borderBottom: `1px solid ${C.border}` }}>
            <SectionLabel>04 &nbsp; Prototype two</SectionLabel>
            <h2 className="text-xl font-semibold mb-5" style={{ color: C.textBright }}>
              The Dog Surveillance System: One Bit of Emotional Data
            </h2>
            <p className="mb-4">
              Concept: mount a magnet on a dog collar. Mount a Hall effect sensor near a door. Wire
              the sensor output to an LED.{" "}
              <strong style={{ color: C.textBright }}>
                When the dog is near → light on, feel calm. Dog wanders off → light off, begin
                existential spiral.
              </strong>{" "}
              You now have zero real information about your dog&apos;s location but a powerful
              emotional signal about his magnetic proximity to one specific point.
            </p>

            <CodeBlock filename="assignmenthw-3.ino" lang="Arduino C++">
              <span style={{ color: C.purple }}>int</span> hallPin ={" "}
              <span style={{ color: C.amber }}>2</span>;{"  "}
              <span style={{ color: C.textDim, fontStyle: "italic" }}>
                {'// Hall sensor OUT pin'}
              </span>
              <br />
              <span style={{ color: C.purple }}>int</span> ledPin{"  "}={" "}
              <span style={{ color: C.amber }}>8</span>;{"  "}
              <span style={{ color: C.textDim, fontStyle: "italic" }}>{'// External LED pin'}</span>
              <br />
              <br />
              <span style={{ color: C.purple }}>void</span>{" "}
              <span style={{ color: C.blue }}>loop</span>() {"{"}
              <br />
              &nbsp;&nbsp;<span style={{ color: C.purple }}>int</span> state ={" "}
              <span style={{ color: C.blue }}>digitalRead</span>(hallPin);
              <br />
              <br />
              &nbsp;&nbsp;
              <span style={{ color: C.textDim, fontStyle: "italic" }}>
                {'// Magnet detected → sensor output LOW'}
              </span>
              <br />
              &nbsp;&nbsp;<span style={{ color: C.purple }}>if</span> (state =={" "}
              <span style={{ color: C.amber }}>LOW</span>)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: C.blue }}>digitalWrite</span>(ledPin,{" "}
              <span style={{ color: C.amber }}>HIGH</span>);{" "}
              <span style={{ color: C.textDim, fontStyle: "italic" }}>{'// LED ON'}</span>
              <br />
              &nbsp;&nbsp;<span style={{ color: C.purple }}>else</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: C.blue }}>digitalWrite</span>(ledPin,{" "}
              <span style={{ color: C.amber }}>LOW</span>);{"  "}
              <span style={{ color: C.textDim, fontStyle: "italic" }}>{'// LED OFF'}</span>
              <br />
              {"}"}
            </CodeBlock>

            <p className="mb-4">
              Twelve lines of code. Maximum emotional leverage per line of code: extremely high. The
              circuit was equally minimal, sensor to digital pin 2, LED with current-limiting
              resistor on pin 8, powered via Arduino&apos;s 5V rail.
            </p>

            <Insight>
              This is actually a sharp model for how status indicators work in smart home UIs. A
              single binary signal, decontextualized from everything else, doesn&apos;t{" "}
              <em style={{ color: C.textBright }}>inform</em>, it{" "}
              <em style={{ color: C.textBright }}>primes affect</em>. Green light = safe. No light
              = panic. The design of what that light <em style={{ color: C.textBright }}>means</em>{" "}
              is doing all the work, not the data itself. That gap between signal and meaning is
              where most IoT UX lives and dies.
            </Insight>
          </section>

          {/* 05, Reflections */}
          <section className="py-12" style={{ borderBottom: `1px solid ${C.border}` }}>
            <SectionLabel>05 &nbsp; Reflections</SectionLabel>
            <h2 className="text-xl font-semibold mb-5" style={{ color: C.textBright }}>
              What One Bit Actually Teaches You
            </h2>
            <p className="mb-4">
              Working with a purely binary sensor for an entire project cycle forces a useful
              discipline:{" "}
              <strong style={{ color: C.textBright }}>
                you can&apos;t add more data to solve a design problem, so you have to be more
                precise about what the one bit you have actually means.
              </strong>
            </p>
            <p className="mb-4">
              The sensor&apos;s constraints, short range, single pole, no gradient, pushed us to
              make deliberate physical design choices we&apos;d have otherwise hand-waved past.
              Where exactly does the magnet go? How strong does it need to be? What physical action
              maps to the trigger? These become real, load-bearing questions when you can&apos;t pad
              the interaction with extra sensor resolution.
            </p>
            <p className="mb-4">
              The wiring gotchas (pin order, polarity, range variance by magnet) were frustrating in
              the moment and instructive in retrospect. Physical prototyping doesn&apos;t respect
              the assumptions you made in Figma. That&apos;s the whole point of physical
              prototyping.
            </p>

            <div
              className="rounded-r-md my-6 p-4"
              style={{
                borderLeft: `3px solid ${C.green}`,
                background: `linear-gradient(90deg, rgba(74,240,160,0.06) 0%, transparent 100%)`,
              }}
            >
              <div
                className="mb-1"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.62rem",
                  color: C.green,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                }}
              >
                ↳ Final thought
              </div>
              <p className="m-0 text-base" style={{ color: C.text }}>
                Binary sensors aren&apos;t limited, they&apos;re focused. The design challenge
                isn&apos;t getting the sensor to do more. It&apos;s deciding what one well-chosen
                bit of state should mean in your system, and building clearly around that meaning.
              </p>
            </div>
          </section>

          {/* Tags removed */}

          {/* Back link */}
          <div
            className="text-left py-8"
            style={{ borderTop: `1px solid ${C.border}` }}
          >
            <Link
              href="/playground"
              className="text-sm"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: C.green,
                textDecoration: "none",
                fontSize: "0.78rem",
              }}
            >
              ← back to playground
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
