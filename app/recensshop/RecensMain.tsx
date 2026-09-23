"use client";

import React from "react";

export default function RecensMain() {
  return (
    <div className="recens-case">
      <style jsx>{`
        .recens-case {
          --bg: #ffffff;
          --surface: #ffffff;
          --text: #000000;
          --muted: #55575c;
          --accent: #3b36c4;
          --border: #dcdce0;
          --ph-a: #ece9f7;
          --ph-b: #d6d0ef;
          --card-bg: #f1effa;
          --card-text: #14151a;
          --serif: Georgia, "Iowan Old Style", serif;
          --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          margin: 0;
          background: var(--bg);
          color: var(--text);
          font-family: var(--sans);
          line-height: 1.55;
          transition: background 0.25s ease, color 0.25s ease;
          -webkit-font-smoothing: antialiased;
          padding-top: 84px;
        }
        :global(html.dark) .recens-case,
        :global(.dark) .recens-case {
          --bg: #000000;
          --surface: #000000;
          --text: #ffffff;
          --muted: #b6b6bf;
          --accent: #3b36c4;
          --border: rgba(255, 255, 255, 0.18);
          --ph-a: #1c1a2e;
          --ph-b: #29264a;
          --card-bg: #ffffff;
          --card-text: #14151a;
        }
        .wrap {
          max-width: 1760px;
          margin: 0 auto;
          padding: 0 clamp(16px, 2.4vw, 56px);
        }

        .ph {
          position: relative;
          background: repeating-linear-gradient(135deg, var(--ph-a), var(--ph-a) 12px, var(--ph-b) 12px, var(--ph-b) 13px);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 420px;
        }
        .ph span {
          background: var(--surface);
          padding: 8px 14px;
          font-size: 0.78rem;
          letter-spacing: 0.03em;
          border: 1px dashed var(--accent);
          color: var(--muted);
        }
        .ph.tall {
          min-height: 720px;
        }
        .ph.wide {
          min-height: 600px;
        }

        /* LAPTOP MOCKUP */
        .laptop-mockup {
          width: 100%;
          max-width: 1040px;
          margin: 0 auto;
        }
        .laptop-screen-frame {
          background: #1c1c1e;
          border-radius: 16px 16px 6px 6px;
          padding: 14px 14px 22px;
          box-shadow: 0 40px 70px -30px rgba(0, 0, 0, 0.45);
        }
        .laptop-camera {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #3a3a3d;
          margin: 0 auto 10px;
        }
        .laptop-screen {
          background: var(--surface);
          border-radius: 4px;
          overflow: hidden;
          aspect-ratio: 3024 / 1964;
        }
        .laptop-screenshot {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
        }

        /* BROWSER WINDOW MOCKUP (portrait / chromeless captures) */
        .browser-window-mockup {
          width: 100%;
          max-width: 560px;
          margin: 0 auto;
        }
        .browser-window-frame {
          background: #1c1c1e;
          border-radius: 12px;
          padding: 10px 10px 12px;
          box-shadow: 0 30px 60px -28px rgba(0, 0, 0, 0.45);
        }
        .browser-window-topbar {
          display: flex;
          gap: 6px;
          padding: 2px 4px 10px;
        }
        .browser-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4a4a4d;
        }
        .browser-window-screen {
          background: var(--surface);
          border-radius: 6px;
          overflow: hidden;
          aspect-ratio: 1028 / 1376;
        }
        .browser-window-screenshot {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
        }
        .laptop-base {
          height: 14px;
          width: 108%;
          margin-left: -4%;
          background: linear-gradient(#3a3a3d, #232326);
          clip-path: polygon(4% 0, 96% 0, 100% 100%, 0% 100%);
          position: relative;
        }
        .laptop-base::after {
          content: "";
          position: absolute;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.12);
        }

        /* HERO */
        .hero {
          padding: 44px 0 36px;
          border-bottom: 1px solid var(--border);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 56px;
          align-items: center;
        }
        .eyebrow {
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 600;
          margin: 0 0 14px;
        }
        .hero h1 {
          font-family: var(--serif);
          font-weight: 400;
          color: var(--accent);
          font-size: clamp(2.1rem, 2.4vw + 1.2rem, 3.6rem);
          line-height: 1.14;
          margin: 0 0 20px;
          max-width: 16ch;
        }
        .hero p.sub {
          font-size: 1.05rem;
          color: var(--muted);
          max-width: 46ch;
          margin: 0 0 28px;
        }
        .meta-row {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .meta-row div {
          font-size: 0.85rem;
          color: var(--text);
        }
        .meta-row .label {
          display: block;
          color: var(--accent);
          margin-bottom: 4px;
          font-size: 0.78rem;
        }
        .cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          text-decoration: none;
          color: var(--text);
          border-bottom: 1px solid var(--text);
          padding-bottom: 2px;
        }
        /* STAT BAND */
        .stats {
          background: var(--bg);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 36px 0;
        }
        .stats .wrap {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          text-align: center;
        }
        .stat-num {
          font-family: var(--serif);
          font-size: 2.6rem;
          margin-bottom: 6px;
          color: var(--accent);
        }
        .stat-label {
          font-size: 0.9rem;
          color: var(--muted);
          max-width: 22ch;
          margin: 0 auto;
        }
        .stats .intro {
          grid-column: 1 / -1;
          max-width: 56ch;
          margin: 0 auto 30px;
          text-align: center;
          font-size: 1rem;
          color: var(--muted);
        }

        /* GALLERY */
        .gallery {
          border-bottom: 1px solid var(--border);
          background: var(--bg);
        }
        .gallery-scroll {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding: 28px clamp(16px, 2.4vw, 56px);
          scrollbar-width: thin;
          scrollbar-color: var(--accent) transparent;
        }
        .gallery-scroll::-webkit-scrollbar {
          height: 8px;
        }
        .gallery-scroll::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 4px;
        }
        .gallery-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .gallery-slide {
          flex: 0 0 auto;
          height: 640px;
          aspect-ratio: 3024 / 1964;
          scroll-snap-align: start;
          border: 1px solid var(--border);
          overflow: hidden;
          background: var(--surface);
        }
        .gallery-slide img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
        }

        /* ALTERNATING SECTIONS */
        .split {
          padding: 52px 0;
          border-bottom: 1px solid var(--border);
        }
        .split .wrap {
          display: flex;
          gap: 64px;
          align-items: center;
          flex-wrap: wrap;
        }
        .split .wrap > * {
          flex: 1 1 380px;
          min-width: 0;
        }
        .split.reverse .wrap {
          flex-direction: row-reverse;
        }
        .split.solo .wrap {
          display: block;
          max-width: 640px;
          margin: 0 auto;
        }
        .split h2 {
          font-family: var(--serif);
          font-weight: 400;
          font-size: clamp(1.7rem, 1.7vw + 1rem, 2.6rem);
          margin: 0 0 18px;
        }
        .split .kicker {
          font-size: 0.82rem;
          color: var(--accent);
          margin: 0 0 10px;
          font-weight: 600;
        }
        .split p {
          max-width: 50ch;
          color: var(--muted);
        }
        .quote {
          margin: 22px 0 0;
          padding-left: 18px;
          border-left: 2px solid var(--accent);
          font-family: var(--serif);
          font-style: italic;
          font-size: 1.02rem;
          color: var(--text);
          max-width: 48ch;
        }
        .pivot {
          margin-top: 14px;
          font-size: 0.88rem;
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 12px 14px;
          max-width: 48ch;
        }
        .pivot b {
          color: var(--accent);
        }

        /* COMPARISON TABLE */
        .compare {
          padding: 52px 0;
          border-bottom: 1px solid var(--border);
          background: var(--surface);
        }
        .compare .head {
          max-width: 60ch;
          margin: 0 auto 44px;
          text-align: center;
        }
        .compare h2 {
          font-family: var(--serif);
          font-weight: 400;
          font-size: clamp(1.7rem, 1.7vw + 1rem, 2.6rem);
          margin: 0 0 12px;
        }
        .compare .head p {
          color: var(--muted);
        }
        .table-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        table {
          width: 100%;
          min-width: 560px;
          border-collapse: collapse;
          font-size: 0.92rem;
        }
        th,
        td {
          text-align: left;
          padding: 16px 14px;
          border-bottom: 1px solid var(--border);
          vertical-align: top;
        }
        th {
          font-size: 0.8rem;
          color: var(--accent);
          font-weight: 600;
        }
        tr.winner td {
          background: rgba(59, 54, 196, 0.08);
        }
        .status {
          font-size: 0.78rem;
          padding: 3px 9px;
          border: 1px solid var(--accent);
          color: var(--accent);
          display: inline-block;
        }

        /* ITERATIONS TIMELINE */
        .iterations {
          padding: 52px 0;
          border-bottom: 1px solid var(--border);
        }
        .iterations .wrap {
          max-width: 820px;
          margin: 0 auto;
        }
        .iterations h2 {
          font-family: var(--sans);
          font-weight: 800;
          font-size: clamp(1.8rem, 1.6vw + 1.2rem, 2.6rem);
          margin: 0 0 14px;
        }
        .iter-intro {
          color: var(--muted);
          font-size: 1.02rem;
          margin: 0 0 40px;
        }
        .timeline {
          position: relative;
          padding-left: 44px;
        }
        .timeline::before {
          content: "";
          position: absolute;
          left: 9px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background: var(--border);
        }
        .timeline-item {
          position: relative;
          padding-bottom: 52px;
        }
        .timeline-item:last-child {
          padding-bottom: 0;
        }
        .timeline-dot {
          position: absolute;
          left: -44px;
          top: 2px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--text);
          border: 3px solid var(--accent);
        }
        .iter-label {
          font-family: var(--sans);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text);
          margin: 0 0 8px;
        }
        .timeline-item h3 {
          font-family: var(--sans);
          font-weight: 800;
          font-size: 1.6rem;
          margin: 0 0 14px;
          color: var(--text);
        }
        .timeline-item > p {
          color: var(--muted);
          font-size: 1.02rem;
          max-width: 60ch;
          margin: 0 0 20px;
        }
        .iter-card {
          background: var(--card-bg);
          color: var(--card-text);
          border-radius: 10px;
          padding: 22px 26px;
          font-size: 0.98rem;
          line-height: 1.6;
          max-width: 60ch;
        }
        .iter-card b {
          color: var(--card-text);
        }
        /* SOLUTION: decision rows */
        .decisions {
          padding: 52px 0;
          border-bottom: 1px solid var(--border);
        }
        .decisions .head {
          max-width: 56ch;
          margin: 0 auto 50px;
          text-align: center;
        }
        .decisions .head h2 {
          font-family: var(--serif);
          font-weight: 400;
          font-size: clamp(1.7rem, 1.7vw + 1rem, 2.6rem);
          margin: 0 0 12px;
        }
        .decisions .head p {
          color: var(--muted);
        }
        .decision-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          margin-top: 72px;
        }
        .decision-row:first-child {
          margin-top: 0;
        }
        .decision-row-text {
          max-width: 640px;
          text-align: center;
        }
        .decision-row h3 {
          font-size: 1.3rem;
          margin: 0 0 10px;
          color: var(--accent);
        }
        .decision-row p {
          font-size: 1rem;
          color: var(--muted);
          margin: 0;
        }

        /* REFLECTION */
        .reflection {
          padding: 60px 0;
          text-align: center;
          background: var(--bg);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .reflection blockquote {
          font-family: var(--serif);
          font-size: clamp(1.5rem, 2.6vw, 2.1rem);
          max-width: 26ch;
          margin: 0 auto 26px;
          line-height: 1.35;
          font-weight: 400;
          color: var(--accent);
        }
        .reflection p {
          max-width: 52ch;
          margin: 0 auto;
          color: var(--muted);
          font-size: 0.98rem;
        }

        /* NEXT STEPS */
        .next {
          padding: 52px 0;
        }
        .next .head {
          max-width: 50ch;
          margin: 0 auto 46px;
          text-align: center;
        }
        .next .head h2 {
          font-family: var(--serif);
          font-weight: 400;
          font-size: clamp(1.7rem, 1.7vw + 1rem, 2.6rem);
          margin: 0 0 12px;
        }
        .next-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .next-card {
          border: 1px solid var(--border);
          padding: 26px;
          background: var(--surface);
        }
        .next-card .num {
          color: var(--accent);
          font-size: 0.85rem;
          margin-bottom: 10px;
          display: block;
        }
        .next-card h3 {
          font-size: 1.02rem;
          margin: 0 0 8px;
        }
        .next-card p {
          font-size: 0.9rem;
          color: var(--muted);
          margin: 0;
        }

        @media (max-width: 860px) {
          .wrap {
            padding: 0 20px;
          }
          .hero {
            padding: 32px 0 28px;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .ph.tall {
            min-height: 440px;
          }
          .ph.wide {
            min-height: 380px;
          }
          .split .wrap {
            flex-direction: column;
            gap: 24px;
          }
          .decision-row {
            margin-top: 48px;
            gap: 20px;
          }
          .stats .wrap {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .next-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .gallery-slide {
            height: 420px;
          }
          table {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .wrap {
            padding: 0 18px;
          }
          .hero {
            padding: 40px 0 32px;
          }
          .hero h1 {
            font-size: 1.7rem;
            max-width: none;
          }
          .hero p.sub {
            font-size: 0.95rem;
          }
          .ph.tall {
            min-height: 320px;
          }
          .ph.wide {
            min-height: 280px;
          }
          .meta-row {
            gap: 20px;
            row-gap: 14px;
          }
          .split {
            padding: 44px 0;
          }
          .split h2 {
            font-size: 1.4rem;
          }
          .compare,
          .decisions,
          .next {
            padding: 44px 0;
          }
          .compare h2,
          .decisions .head h2,
          .next .head h2 {
            font-size: 1.4rem;
          }
          .reflection {
            padding: 48px 0;
          }
          .reflection blockquote {
            font-size: 1.3rem;
          }
          .stat-num {
            font-size: 2rem;
          }
          .gallery-slide {
            height: 260px;
          }
          .gallery-scroll {
            gap: 12px;
            padding: 20px 18px;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Case study · Recens</p>
            <h1>Engineering confidence, dismantling size anxiety.</h1>
            <p className="sub">
              How a proprietary Dual Height-Tier sizing model reduced return rates by 28%, and how an ambassador
              program grew community-driven sales.
            </p>
            <div className="meta-row">
              <div>
                <span className="label">Role</span>Co-founder, Product Designer
              </div>
              <div>
                <span className="label">Tools</span>Figma, HTML, CSS, React, Next.js, Wix Studio
              </div>
              <div>
                <span className="label">Timeline</span>Jan to Mar
              </div>
            </div>
            <a className="cta" href="https://recens.co.in" target="_blank" rel="noreferrer noopener">
              View live site ↗
            </a>
          </div>
          <div className="ph tall" style={{ background: "transparent", border: "1px solid transparent" }}>
            <div className="laptop-mockup">
              <div className="laptop-screen-frame">
                <div className="laptop-camera" />
                <div className="laptop-screen">
                  <img
                    src="/Recensheromockupimage.png"
                    alt="Recens website preview"
                    className="laptop-screenshot"
                  />
                </div>
              </div>
              <div className="laptop-base" />
            </div>
          </div>
        </div>
      </section>

      {/* STAT BAND */}
      <section className="stats">
        <div className="wrap">
          <p className="intro">
            Three numbers that prove the design worked, each one maps directly to a design decision, not a vanity
            metric.
          </p>
          <div>
            <div className="stat-num">28%</div>
            <div className="stat-label">Reduction in return rates, the core business goal</div>
          </div>
          <div>
            <div className="stat-num">45%</div>
            <div className="stat-label">Surge in community interaction via the Ambassador program</div>
          </div>
          <div>
            <div className="stat-num">8.9/10</div>
            <div className="stat-label">Fit-certainty score, up from 4.2 in usability testing</div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <div className="gallery-scroll">
          <div className="gallery-slide">
            <img src="/Recensimage1.png" alt="Recens brand photo 1" />
          </div>
          <div className="gallery-slide">
            <img src="/Recensimage2.png" alt="Recens brand photo 2" />
          </div>
          <div className="gallery-slide">
            <img src="/Recensimage3.png" alt="Recens brand photo 3" />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="split solo">
        <div className="wrap">
          <div>
            <p className="kicker">The problem</p>
            <h2>It wasn&apos;t a sizing problem. It was a trust problem.</h2>
            <p>
              Recens sells 100% polyester-free western wear to conscious Indian consumers. Our sustainability
              mission depended on low return rates: every returned parcel has a carbon footprint. But we had a
              hidden leak: users were abandoning carts, not because they didn&apos;t want the product, but because
              they didn&apos;t trust it would fit.
            </p>
            <p>The standard industry response is &quot;just add a size chart.&quot; We had one. It wasn&apos;t working.</p>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="split solo">
        <div className="wrap">
          <div>
            <p className="kicker">Research</p>
            <h2>40 interviews. One surprising insight.</h2>
            <p>
              I expected to hear about waist measurements. Instead, I kept hearing about height. Users weren&apos;t
              just Small or Large. They were &quot;Short-Small&quot; or &quot;Tall-Medium.&quot; Standard charts
              only measured width and ignored the vertical dimension of fit.
            </p>
            <div className="quote">
              &quot;I&apos;m 5&apos;8&quot;, and I usually have to buy a Large just for the length, even though my
              waist is a Small. It ends up looking like a tent on me.&quot;
            </div>
            <div className="pivot">
              <b>Design pivot →</b> Dual Height-Tier System, separating Under 5&apos;6&quot; from 5&apos;6&quot;+ to
              ensure vertical proportionality.
            </div>
          </div>
        </div>
      </section>

      <section className="split solo">
        <div className="wrap">
          <div>
            <p className="kicker">Research, continued</p>
            <h2>Trust lives in the fabric, not just the fit.</h2>
            <div className="quote">
              &quot;I&apos;ve been burned by &apos;cotton blends&apos; that feel like plastic. If I can&apos;t feel
              the fabric, I&apos;m hesitant to pay a premium price.&quot;
            </div>
            <div className="pivot">
              <b>Design pivot →</b> Story-Driven Specs: replacing dry material labels with tactile language like
              &quot;100% Cotton&quot; and &quot;care for me forever&quot; copy to close the fabric trust gap.
            </div>
          </div>
        </div>
      </section>

      {/* DECISION FRAMEWORK */}
      <section className="compare">
        <div className="wrap">
          <div className="head">
            <h2>Three paths. One winner.</h2>
            <p>Each option framed as a hypothesis and stress-tested against the research.</p>
          </div>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Hypothesis</th>
                  <th>Research signal</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A) Static chart</td>
                  <td>Lowest friction, but fails vertical proportionality.</td>
                  <td>Already failing: source of 80% of fit-related returns.</td>
                  <td>
                    <span className="status">Control</span>
                  </td>
                </tr>
                <tr className="winner">
                  <td>B) Dual height-tier</td>
                  <td>Splitting by height tier reduces fit anxiety with minimal clicks.</td>
                  <td>Directly addressed the &quot;vertical gap&quot; insight from interviews.</td>
                  <td>
                    <span className="status">Winner</span>
                  </td>
                </tr>
                <tr>
                  <td>C) Sizing quiz</td>
                  <td>Highest accuracy, but adds a friction barrier.</td>
                  <td>Users explicitly said they didn&apos;t want to &quot;answer ten questions.&quot;</td>
                  <td>
                    <span className="status">Rejected</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ITERATIONS */}
      <section className="iterations">
        <div className="wrap">
          <h2>How it evolved through two real iterations</h2>
          <p className="iter-intro">Neither version came out fully formed. Here&apos;s the honest iteration arc:</p>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot" />
              <p className="iter-label">Iteration 01</p>
              <h3>The digital sizing calculator</h3>
              <p>
                My first instinct was a sizing quiz: ask users a series of questions, return a personalized
                recommendation. Technically elegant. Users hated it.
              </p>
              <div className="iter-card">
                <b>Feedback:</b> &quot;I just want to know if it fits. Why is this so complicated?&quot; Users felt
                like they were doing homework before shopping.
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <p className="iter-label">Iteration 02</p>
              <h3>The dual height-tier chart</h3>
              <p>
                I stripped the quiz entirely. Instead of asking users questions, I gave them a single binary choice:
                your height range. Under 5&apos;6&quot; or 5&apos;6&quot;+. One click. Instant clarity.
              </p>
              <div className="iter-card">
                The design challenge was keeping the table scannable, not letting it feel like a dense spreadsheet.
                I used visual hierarchy and tight copy to make each cell feel like a direct answer, not a data point.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="decisions">
        <div className="wrap">
          <div className="head">
            <h2>Three interlocking decisions</h2>
            <p>Remove any one of them and the system breaks.</p>
          </div>
          <div>
            <div className="decision-row">
              <div className="decision-row-text">
                <h3>Dual height-tier sizing</h3>
                <p>
                  XS to XL split across two height bands. Users filter by height first, then width, before seeing a
                  single measurement.
                </p>
              </div>
              <div className="laptop-mockup">
                <div className="laptop-screen-frame">
                  <div className="laptop-camera" />
                  <div className="laptop-screen">
                    <img
                      src="/Dualheighttiersizing.png"
                      alt="Dual height-tier sizing on the product page"
                      className="laptop-screenshot"
                    />
                  </div>
                </div>
                <div className="laptop-base" />
              </div>
            </div>
            <div className="decision-row">
              <div className="decision-row-text">
                <h3>Story-driven technical specs</h3>
                <p>
                  Transparency as a sales tool: copy that lets a user mentally &quot;feel&quot; the fabric before
                  they buy.
                </p>
              </div>
              <div className="laptop-mockup">
                <div className="laptop-screen-frame">
                  <div className="laptop-camera" />
                  <div className="laptop-screen">
                    <img
                      src="/Storydriventechnicalspecs.png"
                      alt="Story-driven technical specs on the product page"
                      className="laptop-screenshot"
                    />
                  </div>
                </div>
                <div className="laptop-base" />
              </div>
            </div>
            <div className="decision-row">
              <div className="decision-row-text">
                <h3>Ambassador program flow</h3>
                <p>
                  A commission-based program nested in the footer, accessible to power users, invisible to casual
                  shoppers.
                </p>
              </div>
              <div className="browser-window-mockup">
                <div className="browser-window-frame">
                  <div className="browser-window-topbar">
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                  </div>
                  <div className="browser-window-screen">
                    <img
                      src="/Ambassadorprogramflow.png"
                      alt="Ambassador program sign-up flow"
                      className="browser-window-screenshot"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="split">
        <div className="wrap">
          <div>
            <p className="kicker">Impact</p>
            <h2>What actually changed</h2>
            <p>
              The usability study used a within-subjects design with counterbalancing: users tested Version A
              (static chart) and Version B (dual-tier) in randomized order. The 28% return reduction wasn&apos;t
              just a business win. It was the sustainability mission made measurable. Every return avoided is
              packaging saved and a delivery run removed.
            </p>
          </div>
          <div className="ph wide" style={{ background: "transparent", border: "1px solid transparent", padding: 0 }}>
            <img
              src="/linegraphwhite.png"
              alt="Before/after product page return-rate line graph"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="reflection">
        <div className="wrap">
          <blockquote>
            &quot;UX is inseparable from business strategy. Every pixel I changed served a measurable goal.&quot;
          </blockquote>
          <p>
            The most important decision on this project wasn&apos;t the UI. It was choosing to reject Option C. The
            pressure to build the more technically impressive solution is real, especially as a founder trying to
            prove competence. The interviews were clear, and I trusted them over my own instinct to over-engineer.
          </p>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="next">
        <div className="wrap">
          <div className="head">
            <h2>What I might build next</h2>
          </div>
          <div className="next-grid">
            <div className="next-card">
              <span className="num">01</span>
              <h3>AR fabric viewer</h3>
              <p>
                Let users see the weave and texture of 100% cotton at zoom, closing the tactile trust gap copy alone
                can&apos;t fully bridge.
              </p>
            </div>
            <div className="next-card">
              <span className="num">02</span>
              <h3>Camera-to-size mapping</h3>
              <p>
                AI-driven body measurement via phone camera, the logical next step toward true personalized fit
                confidence.
              </p>
            </div>
            <div className="next-card">
              <span className="num">03</span>
              <h3>Ambassador analytics dashboard</h3>
              <p>
                Give ambassadors visibility into conversion data, social reach, and commission trends to deepen
                retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: "40px 0 60px", textAlign: "center", fontSize: "0.85rem", color: "var(--muted)" }}>
        © 2026 Kamanuri Tanvi Reddy
      </footer>
    </div>
  );
}
