"use client";

import React from "react";

export default function ActivisionCaseStudy() {
  return (
    <div className="activision-case">
      <style jsx>{`
        .activision-case {
          --bg: #ffffff;
          --surface: #ffffff;
          --text: #000000;
          --muted: #55575c;
          --accent: #0ea5a5;
          --accent-text: #0ea5a5;
          --accent-tint: #e5f7f7;
          --border: #dcdce0;
          --ph-a: #e3f6f6;
          --ph-b: #c3ecec;
          --card-bg: #e5f7f7;
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
        :global(html.dark) .activision-case,
        :global(.dark) .activision-case {
          --bg: #000000;
          --surface: #000000;
          --text: #ffffff;
          --muted: #b6b6bf;
          --accent: #14b8b8;
          --accent-text: #14b8b8;
          --accent-tint: #032222;
          --border: rgba(255, 255, 255, 0.18);
          --ph-a: #042525;
          --ph-b: #063a3a;
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
          min-height: 340px;
        }
        .ph span {
          background: var(--surface);
          padding: 8px 14px;
          font-size: 0.78rem;
          letter-spacing: 0.03em;
          border: 1px dashed var(--accent);
          color: var(--muted);
        }
        .hero-photo {
          background: transparent;
          padding: 0;
          overflow: hidden;
          border: none;
          border-radius: 18px;
        }
        .hero-photo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
          border: 1px solid var(--border);
          border-radius: inherit;
          transform: none;
          transform-origin: center;
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-text);
          background: var(--accent-tint);
          padding: 6px 14px;
          border-radius: 999px;
          margin-bottom: 18px;
        }
        .status-badge .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
        }
        .hero {
          padding: 56px 0;
          border-bottom: 1px solid var(--border);
        }
        .hero-grid {
          display: flex;
          gap: 56px;
          align-items: center;
        }
        .hero-grid > div:first-child {
          flex: 1 1 0;
          max-width: 640px;
        }
        .hero-grid > .ph {
          flex: 1.1 1 0;
          min-height: 560px;
        }
        .eyebrow {
          font-size: 0.85rem;
          color: var(--accent-text);
          font-weight: 700;
          margin: 0 0 16px;
          letter-spacing: 0.02em;
        }
        .hero h1 {
          font-family: var(--sans);
          font-weight: 800;
          color: var(--text);
          font-size: clamp(1.8rem, 2vw + 1.2rem, 2.6rem);
          line-height: 1.2;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
        }
        .hero .sub {
          font-size: 1.05rem;
          color: var(--muted);
          margin: 0 0 24px;
          max-width: 54ch;
        }
        .watch-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 28px;
          padding: 12px 22px;
          border-radius: 999px;
          background: var(--accent);
          color: #fff;
          font-weight: 700;
          font-size: 0.92rem;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .watch-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px -10px var(--accent);
        }
        .watch-cta svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }
        .meta-row {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
        }
        .meta-row div {
          font-size: 0.85rem;
          color: var(--text);
        }
        .meta-row .label {
          display: block;
          color: var(--accent-text);
          margin-bottom: 4px;
          font-size: 0.78rem;
          font-weight: 700;
        }
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
          font-family: var(--sans);
          font-weight: 800;
          font-size: 2.1rem;
          margin-bottom: 6px;
          color: var(--accent-text);
          letter-spacing: -0.02em;
        }
        .stat-label {
          font-size: 0.85rem;
          color: var(--muted);
          max-width: 26ch;
          margin: 0 auto;
        }
        .split {
          padding: 52px 0;
          border-bottom: 1px solid var(--border);
        }
        .split .wrap {
          display: block;
          max-width: 820px;
          margin: 0 auto;
        }
        .split.wide .wrap {
          max-width: 1760px;
          padding: 0 clamp(16px, 2.4vw, 56px);
        }
        .split.wide .inner-text {
          max-width: 820px;
        }
        .kicker {
          font-size: 0.82rem;
          color: var(--accent-text);
          margin: 0 0 10px;
          font-weight: 700;
        }
        .split h2 {
          font-family: var(--sans);
          font-weight: 800;
          font-size: clamp(1.4rem, 1.4vw + 1rem, 2rem);
          margin: 0 0 18px;
        }
        .split p {
          color: var(--muted);
          margin: 0 0 16px;
        }
        .split .lead {
          font-family: var(--sans);
          font-weight: 700;
          color: var(--text);
          margin: 0 0 8px;
          font-size: 1.05rem;
        }
        .quote-line {
          border-left: 3px solid var(--accent);
          padding: 4px 0 4px 18px;
          font-style: italic;
          color: var(--text);
          margin: 16px 0;
          font-size: 0.98rem;
        }
        .workflow-list {
          counter-reset: step;
          margin: 20px 0;
          padding: 0;
          list-style: none;
        }
        .workflow-list li {
          counter-increment: step;
          position: relative;
          padding-left: 38px;
          margin-bottom: 14px;
          color: var(--muted);
          font-size: 0.95rem;
        }
        .workflow-list li::before {
          content: counter(step);
          position: absolute;
          left: 0;
          top: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--accent-tint);
          color: var(--accent-text);
          font-weight: 700;
          font-size: 0.78rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .workflow-list li.highlight {
          color: var(--text);
          font-weight: 600;
        }
        .workflow-list li.highlight::before {
          background: var(--accent);
          color: #fff;
        }
        .step-main {
          display: flex;
          gap: 36px;
          align-items: flex-start;
        }
        .step-text {
          flex: 0.85 1 300px;
        }
        .step-text p {
          margin: 0 0 12px;
        }
        .step-main > .ph {
          flex: 1.3 1 420px;
          aspect-ratio: 5 / 4;
          min-height: 0;
        }
        .concept-flow {
          margin-top: 36px;
        }
        .flow-connector {
          display: flex;
          justify-content: center;
          padding: 6px 0;
          color: var(--accent);
          font-size: 1.4rem;
          line-height: 1;
        }
        .device-frame {
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          background: var(--surface);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
          max-width: 520px;
          margin: 0 auto;
        }
        .device-bar {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border);
          background: var(--surface);
        }
        .device-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--border);
          flex-shrink: 0;
        }
        .device-step-badge {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--accent);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 700;
          margin-left: 10px;
          flex-shrink: 0;
        }
        .device-title {
          font-size: 0.88rem;
          color: var(--text);
          font-weight: 600;
          margin-left: 8px;
        }
        .device-frame .ph {
          border: none;
          border-radius: 0;
          aspect-ratio: 16 / 9;
          min-height: 0;
        }
        .cards-section {
          padding: 52px 0;
          border-bottom: 1px solid var(--border);
        }
        .cards-section .head {
          max-width: 74ch;
          margin: 0 auto 40px;
        }
        .cards-section .head h2 {
          font-family: var(--sans);
          font-weight: 800;
          font-size: clamp(1.4rem, 1.4vw + 1rem, 2rem);
          margin: 0 0 12px;
        }
        .cards-section .head p {
          color: var(--muted);
        }
        .cards-grid {
          display: grid;
          gap: 24px;
        }
        .cards-grid.cols-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        .info-card {
          border: 1px solid var(--border);
          border-left: 4px solid var(--accent);
          background: var(--surface);
          padding: 22px 24px;
        }
        .info-card .icon-badge {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--accent-tint);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: var(--accent-text);
          font-size: 0.85rem;
          margin-bottom: 12px;
        }
        .info-card h3 {
          font-family: var(--sans);
          font-weight: 700;
          font-size: 1.02rem;
          margin: 0 0 8px;
        }
        .info-card p {
          font-size: 0.9rem;
          color: var(--muted);
          margin: 0 0 10px;
        }
        .info-card .quote-line {
          margin: 8px 0 0;
          font-size: 0.88rem;
        }
        .journey {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .journey-step {
          padding: 26px 0;
          border-bottom: 1px solid var(--border);
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .journey-step:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .journey-step:first-child {
          padding-top: 0;
        }
        .journey-num {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--accent);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
        }
        .journey-step h3 {
          font-family: var(--sans);
          font-weight: 700;
          font-size: 1.05rem;
          margin: 0 0 6px;
        }
        .journey-step p {
          color: var(--muted);
          font-size: 0.92rem;
          margin: 0 0 8px;
        }
        .journey-step .quote-line {
          margin: 6px 0 0;
          font-size: 0.9rem;
        }
        .table-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin-top: 8px;
        }
        table {
          width: 100%;
          min-width: 640px;
          border-collapse: collapse;
          font-size: 0.9rem;
        }
        th,
        td {
          text-align: left;
          padding: 14px 12px;
          border-bottom: 1px solid var(--border);
          vertical-align: top;
        }
        th {
          font-size: 0.78rem;
          color: var(--accent-text);
          font-weight: 700;
        }
        td {
          color: var(--muted);
        }
        .spotlight {
          padding: 52px 0;
          border-bottom: 1px solid var(--border);
        }
        .spotlight .wrap {
          max-width: 900px;
          margin: 0 auto;
        }
        .spotlight-box {
          background: var(--text);
          color: var(--bg);
          border-radius: 14px;
          padding: 40px 44px;
        }
        .spotlight-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .spotlight-box h4 {
          font-family: var(--sans);
          font-weight: 700;
          color: var(--accent);
          font-size: 0.85rem;
          margin: 0 0 10px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .spotlight-box p {
          color: var(--bg);
          opacity: 0.85;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }
        .next {
          padding: 52px 0;
        }
        .next .head {
          max-width: 60ch;
          margin: 0 auto 40px;
        }
        .next .head h2 {
          font-family: var(--sans);
          font-weight: 800;
          font-size: clamp(1.4rem, 1.4vw + 1rem, 2rem);
          margin: 0 0 12px;
        }
        .next-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .next-card {
          border: 1px solid var(--border);
          border-left: 4px solid var(--accent);
          padding: 20px;
          background: var(--surface);
        }
        .next-card .num {
          color: var(--accent-text);
          font-size: 0.78rem;
          margin-bottom: 8px;
          display: block;
          font-weight: 700;
        }
        .next-card h3 {
          font-size: 0.95rem;
          margin: 0 0 6px;
        }
        .next-card p {
          font-size: 0.85rem;
          color: var(--muted);
          margin: 0;
        }
        .risk-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 40px;
        }
        .risk-metrics .info-card ul {
          margin: 0;
          padding-left: 18px;
          color: var(--muted);
          font-size: 0.9rem;
        }
        .risk-metrics .info-card li {
          margin-bottom: 8px;
        }
        .case-footer {
          padding: 40px 0 60px;
          text-align: center;
          font-size: 0.85rem;
          color: var(--muted);
        }
        @media (max-width: 860px) {
          .wrap {
            padding: 0 20px;
          }
          .hero {
            padding: 44px 0 36px;
          }
          .hero-grid {
            flex-direction: column;
            gap: 28px;
          }
          .hero-grid > div:first-child {
            max-width: none;
          }
          .hero-grid > .ph {
            min-height: 380px;
            width: 100%;
          }
          .stats .wrap {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .split {
            padding: 38px 0;
          }
          .cards-section,
          .spotlight {
            padding: 38px 0;
          }
          .cards-grid.cols-3 {
            grid-template-columns: 1fr;
          }
          .step-main {
            flex-direction: column;
            gap: 20px;
          }
          .step-text {
            flex: 1 1 auto;
          }
          .step-main > .ph {
            flex: 1 1 auto;
            width: 100%;
          }
          .spotlight-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .next-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .risk-metrics {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .wrap {
            padding: 0 18px;
          }
          .hero {
            padding: 36px 0 28px;
          }
          .hero h1 {
            font-size: 1.5rem;
          }
          .stats .wrap {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .stat-num {
            font-size: 1.7rem;
          }
          .split {
            padding: 36px 0;
          }
          .split h2 {
            font-size: 1.3rem;
          }
          .cards-section,
          .spotlight {
            padding: 36px 0;
          }
          .cards-section .head h2 {
            font-size: 1.3rem;
          }
          .journey-step {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="status-badge">
              <span className="dot" />
              Concept design, entering validation
            </div>
            <p className="eyebrow">HCI 271 Capstone 1 - Activision + GUII Lab</p>
            <h1>Activision Playtest Triage Dashboard</h1>
            <p className="sub">
              UX researchers at Activision have an AI that detects anomalies in playtest sessions, but no interface to
              interpret, trust, or act on what it finds. We designed one.
            </p>
            <a
              className="watch-cta"
              href="https://media.ucsc.edu/V/Video?v=16370734&node=69870688&a=202560391"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch the presentation
            </a>
            <div className="meta-row">
              <div>
                <span className="label">Role</span>
                Product Designer
              </div>
              <div>
                <span className="label">Team</span>
                Eesha Gupta, Tanvi Reddy Kamanuri
              </div>
              <div>
                <span className="label">Mentors</span>
                Emily Chen, Ahmad Azadvar, Vicky Ni
              </div>
            </div>
          </div>
          <div className="ph hero-photo">
            <img src="/Activisionheroinside.png" alt="Activision playtest triage dashboard hero" />
          </div>
        </div>
      </section>

      <section className="split">
        <div className="wrap">
          <p className="kicker">The problem</p>
          <h2>An AI that detects, but no interface to interpret, trust, or act on what it finds.</h2>
          <p>
            The users affected are UX researchers at game studios who run playtest sessions, analyze player behavior,
            and present findings to game designers and producers, often under extreme deadline pressure.
          </p>
          <p>The AI already flags moments of potential frustration during a session. The problem is what happens next:</p>
          <ol className="workflow-list">
            <li>Read study plan and set scope</li>
            <li>Watch playtest session video</li>
            <li>Manually flag key moments</li>
            <li className="highlight">AI flags the same session, with no explanation attached</li>
            <li>Re-watch the video to verify the flag</li>
            <li>Synthesize into themes</li>
            <li>Challenge or accept the flag, with no record of why</li>
            <li>Present to stakeholders</li>
          </ol>
          <p>
            The AI generates hundreds of signals. Researchers still do the verification work manually. The result is
            high cognitive load, reduced trust, and time spent validating AI output instead of generating insight.
          </p>
        </div>
      </section>

      <section className="stats">
        <div className="wrap">
          <div>
            <div className="stat-num">100s</div>
            <div className="stat-label">Flags generated per playtest session</div>
          </div>
          <div>
            <div className="stat-num">0</div>
            <div className="stat-label">Tools that expose the AI&apos;s reasoning</div>
          </div>
          <div>
            <div className="stat-num">15</div>
            <div className="stat-label">Days lost per study to manual verification</div>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="wrap">
          <p className="kicker">Why now</p>
          <p>
            Studios are rapidly deploying AI to detect player frustration and reduce cognitive load, but without
            researcher-facing interpretation tools, those insights are unlikely to be trusted or adopted.
          </p>
          <div className="quote-line">
            If nothing changes, researchers keep spending two weeks per study verifying AI claims they can&apos;t trust,
            and the AI investment goes unused. One bad experience is all it takes to abandon the tool entirely.
          </div>
        </div>
      </section>

      <section className="split">
        <div className="wrap">
          <p className="kicker">Competitors and gap</p>
          <h2>Every tool solves part of the problem. None of them show their reasoning.</h2>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Competitor</th>
                  <th>Key strength</th>
                  <th>Critical gap</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Playtest Cloud</td>
                  <td>Fast setup, game-specific automated analysis</td>
                  <td>Black box, no reasoning shown</td>
                </tr>
                <tr>
                  <td>Lysto.gg</td>
                  <td>Most sophisticated AI in the space for playtest analysis</td>
                  <td>No mechanism to trust or interact with the AI</td>
                </tr>
                <tr>
                  <td>Hotjar</td>
                  <td>Strong behavioral visualization: heatmaps, session recording, funnel analysis</td>
                  <td>Not game-specific, no frustration detection</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="quote-line">
            Our tool bridges the gap between AI detection and human decision-making by showing why the AI made a
            prediction, how certain it is, and how researchers can improve it.
          </div>
        </div>
      </section>

      <section className="split">
        <div className="wrap">
          <p className="kicker">The research</p>
          <h2>Five interviews. Thirty-four codes. Zero assumptions.</h2>
          <p>
            We talked to 2 UC Santa Cruz researchers and 3 Activision practitioners, spanning game telemetry, data
            science, UX research, and telemetry infrastructure. Sessions ran 30 to 45 minutes over Zoom, with 2
            researchers present and standardized notes.
          </p>
          <p>We independently coded every transcript into 34 codes, then affinity-mapped them into 10 themes.</p>
        </div>
      </section>

      <section className="cards-section">
        <div className="wrap">
          <div className="cards-grid cols-3">
            <div className="info-card">
              <div className="icon-badge">01</div>
              <h3>One bad AI experience eliminates tool usage</h3>
              <div className="quote-line">The user will refrain from using the tool after one bad experience or fallout.</div>
            </div>
            <div className="info-card">
              <div className="icon-badge">02</div>
              <h3>Every session starts with a specific question</h3>
              <div className="quote-line">
                A dashboard that surfaces all flags equally without context filtering feels overwhelming and irrelevant.
              </div>
            </div>
            <div className="info-card">
              <div className="icon-badge">03</div>
              <h3>Override should be a conversation</h3>
              <div className="quote-line">
                Researchers do not want to delete a wrong flag. They want to understand it well enough to challenge it.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="wrap">
          <p className="kicker">The researcher journey</p>
          <h2>Where trust breaks down across one playtest study.</h2>
          <div className="journey">
            <div className="journey-step">
              <div className="journey-num">1</div>
              <div>
                <h3>Presession setup</h3>
                <p>Read the study plan, set research questions, set up tools.</p>
                <div className="quote-line">&quot;What&apos;s my question for this session.&quot;</div>
              </div>
            </div>
            <div className="journey-step">
              <div className="journey-num">2</div>
              <div>
                <h3>Data quality check</h3>
                <p>Review data schema, confirm sample, run outlier detection.</p>
                <div className="quote-line">&quot;Is this data clean enough to use.&quot;</div>
              </div>
            </div>
            <div className="journey-step">
              <div className="journey-num">3</div>
              <div>
                <h3>Flag review and analysis</h3>
                <p>
                  Watch the video to understand the AI flag, check whether flags recur across the session.
                </p>
                <div className="quote-line">&quot;AI says 17 people mentioned this, when no one did.&quot;</div>
              </div>
            </div>
            <div className="journey-step">
              <div className="journey-num">4</div>
              <div>
                <h3>Synthesis and insights</h3>
                <p>Cluster themes manually, cross-check every claim, rewrite AI language entirely.</p>
                <div className="quote-line">&quot;It was faster to read the comments by myself.&quot;</div>
              </div>
            </div>
            <div className="journey-step">
              <div className="journey-num">5</div>
              <div>
                <h3>Stakeholder presentation</h3>
                <p>Trace everything back to raw data, present findings, defend methodology.</p>
                <div className="quote-line">&quot;Did this come from me or AI.&quot;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cards-section">
        <div className="wrap">
          <div className="head">
            <p className="kicker">From what we heard to what we built</p>
            <h2>Three pain points. Three concepts.</h2>
          </div>
          <div className="cards-grid cols-3">
            <div className="info-card">
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0 0 10px" }}>
                Researchers are overwhelmed by flags that have nothing to do with their question.
              </p>
              <h3 style={{ color: "var(--accent-text)" }}>Research Question Upfront</h3>
            </div>
            <div className="info-card">
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0 0 10px" }}>
                No reasoning shown, so nothing to trust or challenge in what the AI flagged.
              </p>
              <h3 style={{ color: "var(--accent-text)" }}>Conversational Challenge Panel</h3>
            </div>
            <div className="info-card">
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0 0 10px" }}>
                No fast way to find past flags or navigate the dashboard&apos;s features.
              </p>
              <h3 style={{ color: "var(--accent-text)" }}>Smart Search Bar and Chat History</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="split wide">
        <div className="wrap">
          <div className="inner-text">
            <p className="kicker">Concept 01</p>
            <h2>Research Question Upfront</h2>
            <p>
              A collapsible prompt gates the flag list behind a research question. Only relevant flags surface;
              out-of-scope ones dim.
            </p>
            <div className="quote-line">
              Provides the user a filtered overview of relevant flags, dismissing the ones which are not useful,
              reducing the cognitive load of skimming through hundreds of flags.
            </div>
            <p style={{ marginTop: "14px" }}>
              A single playtest session can carry around 1,000 raw data points. The research question is the first
              filter, cutting that down to what&apos;s actually relevant before the researcher sees anything. Once inside
              the dashboard, a second filter icon lets them narrow further by category and other facets. The goal at
              every step is the same: fewer results, more relevant ones, less to sift through.
            </p>
          </div>
          <div className="concept-flow">
            <div className="device-frame">
              <div className="device-bar">
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-step-badge">1</span>
                <span className="device-title">User adds a research statement and selects a playtest theme.</span>
              </div>
              <div className="ph" style={{ background: "var(--surface)", aspectRatio: "1508 / 1506" }}>
                <img
                  src="/researchquestionupfront1.png"
                  alt="User adds a research statement and selects a playtest theme"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="flow-connector">↓</div>
            <div className="device-frame">
              <div className="device-bar">
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-step-badge">2</span>
                <span className="device-title">
                  Opened graph view, with collapsed fields to edit the research question and playtest theme.
                </span>
              </div>
              <div className="ph" style={{ background: "var(--surface)", aspectRatio: "1454 / 1556" }}>
                <img
                  src="/researchquestionupfront2.png"
                  alt="Opened graph view, with collapsed fields to edit the research question and playtest theme"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="flow-connector">↓</div>
            <div className="device-frame">
              <div className="device-bar">
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-step-badge">3</span>
                <span className="device-title">Collapsed graph view, with the same fields still available to edit.</span>
              </div>
              <div className="ph" style={{ background: "var(--surface)", aspectRatio: "1458 / 1504" }}>
                <img
                  src="/researchquestionupfront3.png"
                  alt="Collapsed graph view, with the same fields still available to edit"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="split wide">
        <div className="wrap">
          <div className="inner-text">
            <p className="kicker">Concept 02</p>
            <h2>Conversational Challenge Panel</h2>
            <p>
              Override opens a dialogue space. When a researcher disagrees with a flag, they have a conversation with
              the AI, which produces a suggestion and logs the outcome.
            </p>
            <div className="quote-line">
              Gives the user more control by letting them understand the flag better through a conversation with the AI,
              prompting it to correct or override the log.
            </div>
          </div>
          <div className="concept-flow">
            <div className="device-frame">
              <div className="device-bar">
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-step-badge">1</span>
                <span className="device-title">
                  User lands on the dashboard: all flags, confidence scores, and the action menu.
                </span>
              </div>
              <div className="ph" style={{ background: "var(--surface)", aspectRatio: "1644 / 1646" }}>
                <img
                  src="/conversationalchallengepanel1.png"
                  alt="User lands on the dashboard: all flags, confidence scores, and the action menu"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="flow-connector">↓</div>
            <div className="device-frame">
              <div className="device-bar">
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-step-badge">2</span>
                <span className="device-title">Flag detail view: telemetry data, anomalies, and more.</span>
              </div>
              <div className="ph" style={{ background: "var(--surface)", aspectRatio: "1648 / 1596" }}>
                <img
                  src="/conversationalchallengepanel2.png"
                  alt="Flag detail view: telemetry data, anomalies, and more"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="flow-connector">↓</div>
            <div className="device-frame">
              <div className="device-bar">
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-step-badge">3</span>
                <span className="device-title">Conversation with the AI, then override or keep the flag.</span>
              </div>
              <div className="ph" style={{ background: "var(--surface)", aspectRatio: "1596 / 1646" }}>
                <img
                  src="/conversationalchallengepanel3.png"
                  alt="Conversation with the AI, then override or keep the flag"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="split wide">
        <div className="wrap">
          <div className="inner-text">
            <p className="kicker">Concept 03</p>
            <h2>Smart Search Bar and Chat History</h2>
            <p>
              An always-visible search bar helps researchers navigate the dashboard&apos;s many features and filters, the
              dashboard is large enough that finding the right screen isn&apos;t always obvious. Chat history lives in its
              own icon beside the search bar, letting researchers retrace past conversations without starting over.
            </p>
            <div className="quote-line">
              Acts as a directory for the dashboard, letting users find any information quickly without digging through
              complex pages.
            </div>
          </div>
          <div className="concept-flow">
            <div className="device-frame">
              <div className="device-bar">
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-step-badge">1</span>
                <span className="device-title">The search icon is always available at the top of the dashboard.</span>
              </div>
              <div className="ph" style={{ background: "var(--surface)", aspectRatio: "1058 / 1090" }}>
                <img
                  src="/smartsearch1.png"
                  alt="The search icon is always available at the top of the dashboard"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="flow-connector">↓</div>
            <div className="device-frame">
              <div className="device-bar">
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-step-badge">2</span>
                <span className="device-title">A query redirects the user straight to the right information.</span>
              </div>
              <div className="ph" style={{ background: "var(--surface)", aspectRatio: "1062 / 1102" }}>
                <img
                  src="/smartsearch2.png"
                  alt="A query redirects the user straight to the right information"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="flow-connector">↓</div>
            <div className="device-frame">
              <div className="device-bar">
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-step-badge">3</span>
                <span className="device-title">Chat history opens from its own icon beside the search bar.</span>
              </div>
              <div className="ph" style={{ background: "var(--surface)", aspectRatio: "1046 / 1132" }}>
                <img
                  src="/smartsearch3.png"
                  alt="Chat history opens from its own icon beside the search bar"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spotlight">
        <div className="wrap">
          <div className="spotlight-box">
            <div className="spotlight-grid">
              <div>
                <h4>The problem</h4>
                <p>
                  UX researchers at Activision have an AI that detects, but no interface that helps them interpret,
                  trust, or act.
                </p>
              </div>
              <div>
                <h4>What we learned</h4>
                <p>
                  Explanation panels are not a feature. They are the mechanism through which the dashboard earns the
                  right to be used at all.
                </p>
              </div>
              <div>
                <h4>What we built</h4>
                <p>
                  Three connected concepts, context filtering, conversational override, and smart navigation, grounded
                  in five interviews and zero assumptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="next">
        <div className="wrap">
          <div className="head">
            <p className="kicker">Next: a 10-week sprint</p>
            <h2>Validation and refinement, before this becomes a working prototype.</h2>
          </div>
          <div className="next-grid">
            <div className="next-card">
              <span className="num">Wk 1-2</span>
              <h3>User testing</h3>
              <p>Test paper prototypes with Activision researchers. Document findings.</p>
            </div>
            <div className="next-card">
              <span className="num">Wk 3-4</span>
              <h3>Lo-fi digital</h3>
              <p>Build wireframes in Figma with corrected designs.</p>
            </div>
            <div className="next-card">
              <span className="num">Wk 5-6</span>
              <h3>Heuristic review</h3>
              <p>Peer evaluation using Norman&apos;s 10 usability principles.</p>
            </div>
            <div className="next-card">
              <span className="num">Wk 7-8</span>
              <h3>Mid-fi prototype</h3>
              <p>Interactive Figma prototype with real synthetic data.</p>
            </div>
            <div className="next-card">
              <span className="num">Wk 9-10</span>
              <h3>Testing, round 2</h3>
              <p>Second round with Activision researchers. Iterate.</p>
            </div>
          </div>
          <div className="risk-metrics">
            <div className="info-card">
              <h3>Biggest risks</h3>
              <ul>
                <li>
                  <b>Limited Activision access:</b> schedule sessions early through sponsor contacts.
                </li>
                <li>
                  <b>AI capability gap:</b> some concepts may not be technically feasible; still exploring with
                  Activision stakeholders.
                </li>
              </ul>
            </div>
            <div className="info-card">
              <h3>Success metrics</h3>
              <ul>
                <li>Challenge a flag via the conversational panel in under 1 minute, without assistance.</li>
                <li>Find a dashboard feature via smart search in under 30 seconds.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="case-footer">© 2026 Kamanuri Tanvi Reddy</footer>
    </div>
  );
}
