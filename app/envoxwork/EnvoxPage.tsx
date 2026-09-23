"use client";

import React from "react";
import images from "@/assets/images.json";

const HERO_DESKTOP = images.envox.heroimage;
const HERO_MOBILE = images.envox.heroimagemobile;
const PROTO_LINK =
  "https://www.figma.com/proto/hcBmhqCOrmw4dRg5xg0vV2/home-page?node-id=2-2&t=MtfPBwUAYJceMe5B-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1";
const SHEET_LINK =
  "https://docs.google.com/spreadsheets/d/1akK4aqlcHsP0_6vSQpfVVoNOmBKzs8cvDXQlsWWMvhs/edit?usp=sharing&resourcekey=0-uo35i9PnKke6CZ0VNJgHcQ";

export default function EnvoxPage() {
  return (
    <div className="envox-case">
      <style jsx>{`
        .envox-case {
          --bg: #ffffff;
          --surface: #ffffff;
          --text: #000000;
          --muted: #55575c;
          --accent: #3a9aff;
          --accent-tint: #eaf3ff;
          --border: #dcdce0;
          --ph-a: #e7f1ff;
          --ph-b: #cfe4ff;
          --card-bg: #eaf3ff;
          --card-text: #0b1220;
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
        :global(html.dark) .envox-case,
        :global(.dark) .envox-case {
          --bg: #000000;
          --surface: #000000;
          --text: #ffffff;
          --muted: #b6b6bf;
          --accent: #3a9aff;
          --accent-tint: #0e1b2e;
          --border: rgba(255, 255, 255, 0.18);
          --ph-a: #0c1b2e;
          --ph-b: #123055;
          --card-bg: #ffffff;
          --card-text: #0b1220;
        }
        .wrap {
          max-width: 1760px;
          margin: 0 auto;
          padding: 0 clamp(16px, 2.4vw, 56px);
        }
        .hero {
          padding: 44px 0 36px;
          border-bottom: 1px solid var(--border);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
          align-items: center;
        }
        .hero h1 {
          font-family: var(--sans);
          font-weight: 800;
          color: var(--accent);
          font-size: clamp(2rem, 2.2vw + 1.2rem, 3.3rem);
          line-height: 1.1;
          margin: 0 0 20px;
          max-width: 16ch;
          letter-spacing: -0.01em;
        }
        .eyebrow {
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 600;
          margin: 0 0 14px;
        }
        .hero .sub {
          font-size: 1.05rem;
          color: var(--muted);
          max-width: 48ch;
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
        .hero-media {
          min-height: 620px;
          margin: 0 auto;
          width: 100%;
          max-width: 760px;
        }
        .hero-media img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
          object-position: center;
          border-radius: 18px;
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
          font-size: 2.5rem;
          margin-bottom: 6px;
          color: var(--accent);
          letter-spacing: -0.02em;
        }
        .stat-label {
          font-size: 0.9rem;
          color: var(--muted);
          max-width: 24ch;
          margin: 0 auto;
        }
        .stats .intro {
          grid-column: 1 / -1;
          max-width: 60ch;
          margin: 0 auto 30px;
          text-align: center;
          font-size: 1rem;
          color: var(--muted);
        }
        .split {
          padding: 52px 0;
          border-bottom: 1px solid var(--border);
        }
        .split .wrap {
          display: block;
          max-width: 700px;
          margin: 0 auto;
        }
        .split.wide .wrap {
          max-width: 1760px;
          padding: 0 clamp(16px, 2.4vw, 56px);
        }
        .split h2 {
          font-family: var(--sans);
          font-weight: 800;
          font-size: clamp(1.5rem, 1.5vw + 1rem, 2.3rem);
          margin: 0 0 18px;
          letter-spacing: -0.01em;
        }
        .split .kicker {
          font-size: 0.82rem;
          color: var(--accent);
          margin: 0 0 10px;
          font-weight: 600;
        }
        .split p {
          color: var(--muted);
          margin: 0 0 16px;
        }
        .pivot {
          margin-top: 14px;
          font-size: 0.92rem;
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 10px 20px;
          line-height: 1.5;
        }
        .pivot b {
          color: var(--accent);
        }
        .cards-section {
          padding: 52px 0;
          border-bottom: 1px solid var(--border);
        }
        .cards-section .head {
          max-width: 64ch;
          margin: 0 auto 44px;
          text-align: center;
        }
        .cards-section .head h2 {
          font-family: var(--sans);
          font-weight: 800;
          font-size: clamp(1.5rem, 1.5vw + 1rem, 2.3rem);
          margin: 0 0 12px;
          letter-spacing: -0.01em;
        }
        .cards-section .head p {
          color: var(--muted);
        }
        .cards-grid {
          display: grid;
          gap: 28px;
        }
        .cards-grid.cols-2 {
          grid-template-columns: repeat(2, 1fr);
        }
        .cards-grid.cols-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        .persona-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 20px;
          align-items: center;
        }
        .vs-chip {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--accent);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--sans);
          font-weight: 800;
          font-size: 0.82rem;
          flex: 0 0 auto;
        }
        .info-card {
          border: 1px solid var(--border);
          border-left: 4px solid var(--accent);
          background: var(--surface);
          padding: 26px 28px;
        }
        .info-card .icon-badge {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--accent-tint);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-bottom: 16px;
        }
        .info-card .eyebrow-small {
          font-size: 0.76rem;
          color: var(--accent);
          font-weight: 700;
          margin: 0 0 8px;
          letter-spacing: 0.02em;
        }
        .info-card h3 {
          font-family: var(--sans);
          font-weight: 700;
          font-size: 1.08rem;
          margin: 0 0 10px;
        }
        .info-card p {
          font-size: 0.92rem;
          color: var(--muted);
          margin: 0;
        }
        .callout {
          padding: 0 0 52px;
        }
        .callout .wrap {
          max-width: 1180px;
          margin: 0 auto;
        }
        .callout-label {
          text-align: center;
          font-size: 0.82rem;
          color: var(--accent);
          font-weight: 600;
          margin: 0 0 14px;
        }
        .callout-card {
          background: var(--card-bg);
          color: var(--card-text);
          border-radius: 10px;
          padding: 18px 40px;
          font-size: 1.05rem;
          line-height: 1.55;
          text-align: center;
        }
        .callout-card.small {
          font-size: 0.92rem;
          text-align: left;
          padding: 16px 24px;
        }
        .wireframe-note-label {
          color: #3a9aff;
        }
        .timeline-section {
          padding: 52px 0;
          border-bottom: 1px solid var(--border);
        }
        .timeline-section .wrap {
          max-width: 820px;
          margin: 0 auto;
        }
        .timeline-section h2 {
          font-family: var(--sans);
          font-weight: 800;
          font-size: clamp(1.5rem, 1.5vw + 1rem, 2.3rem);
          margin: 0 0 14px;
          letter-spacing: -0.01em;
        }
        .timeline-intro {
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
          padding-bottom: 44px;
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
        .timeline-item h3 {
          font-family: var(--sans);
          font-weight: 700;
          font-size: 1.25rem;
          margin: 0 0 12px;
          color: var(--text);
        }
        .timeline-item p {
          color: var(--muted);
          font-size: 0.98rem;
          max-width: 64ch;
          margin: 0;
        }
        .side-block {
          display: flex;
          gap: 32px;
          align-items: center;
          margin-top: 24px;
        }
        .side-block.reverse {
          flex-direction: row-reverse;
        }
        .side-block > * {
          flex: 1 1 0;
          min-width: 0;
        }
        .side-block > div {
          flex: 0.85 1 0;
        }
        .side-block .media {
          flex: 1.15 1 0;
          min-height: 640px;
        }
        .architecture-media {
          background: transparent;
          padding: 0;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 16px;
        }
        .architecture-media img {
          width: 100%;
          height: auto;
          max-width: 100%;
          max-height: none;
          object-fit: contain;
          object-position: center;
          transform: scale(1.04);
          transform-origin: center;
          border-radius: 16px;
        }
        .media {
          position: relative;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .media span {
          background: transparent;
          padding: 8px 14px;
          font-size: 0.78rem;
          letter-spacing: 0.03em;
          border: none;
          color: var(--muted);
        }
        .media img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          border-radius: 14px;
        }
        .mini-gallery {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          padding: 20px 0 8px;
          max-width: 1100px;
          margin: 0 auto;
          justify-items: center;
        }
        .mini-gallery .media {
          width: 100%;
          aspect-ratio: 499 / 743;
          min-height: 0;
          align-items: center;
          justify-content: center;
          padding: 0;
          overflow: visible;
        }
        .mini-gallery .media img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 14px;
        }
        .wireframe-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 340px;
          justify-self: center;
        }
        .wireframe-card:nth-child(4),
        .wireframe-card:nth-child(5) {
          grid-column: span 1;
        }
        .wireframe-card:nth-child(4) {
          grid-column-start: 1;
        }
        .wireframe-card:nth-child(5) {
          grid-column-start: 3;
        }
        .wireframe-label {
          font-size: 0.78rem;
          color: var(--accent);
          font-weight: 700;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        .wireframe-note {
          font-size: 0.9rem;
          color: var(--muted);
          margin: 0;
        }
        .reflection {
          padding: 60px 0;
          text-align: center;
          background: var(--bg);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .reflection blockquote {
          font-family: var(--serif);
          font-size: clamp(1.4rem, 2.2vw, 2rem);
          max-width: 32ch;
          margin: 0 auto 26px;
          line-height: 1.35;
          font-weight: 400;
          color: var(--accent);
        }
        .reflection p {
          max-width: 56ch;
          margin: 0 auto;
          color: var(--muted);
          font-size: 0.98rem;
        }
        .next {
          padding: 52px 0;
        }
        .next .head {
          max-width: 50ch;
          margin: 0 auto 46px;
          text-align: center;
        }
        .next .head h2 {
          font-family: var(--sans);
          font-weight: 800;
          font-size: clamp(1.5rem, 1.5vw + 1rem, 2.3rem);
          margin: 0 0 12px;
          letter-spacing: -0.01em;
        }
        .next-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .next-card {
          border: 1px solid var(--border);
          border-left: 4px solid var(--accent);
          padding: 26px;
          background: var(--surface);
        }
        .next-card .num {
          color: var(--accent);
          font-size: 0.85rem;
          margin-bottom: 10px;
          display: block;
          font-weight: 700;
        }
        .next-card h3 {
          font-family: var(--sans);
          font-weight: 700;
          font-size: 1.02rem;
          margin: 0 0 8px;
        }
        .next-card p {
          font-size: 0.9rem;
          color: var(--muted);
          margin: 0;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 18px;
          font-family: var(--sans);
          font-weight: 700;
          font-size: 0.88rem;
          color: #fff;
          background: var(--accent);
          padding: 10px 18px;
          border-radius: 8px;
          text-decoration: none;
        }
        .tag-chip {
          display: inline-block;
          margin-top: 18px;
          background: var(--card-bg);
          color: var(--card-text);
          border-radius: 999px;
          padding: 8px 16px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .lead-line {
          font-family: var(--sans);
          font-weight: 700;
          font-size: 1.1rem;
          margin: 18px 0 0;
          color: var(--text);
        }
        .persona-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          margin-bottom: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-tint);
          color: var(--accent);
        }
        .persona-icon svg {
          width: 30px;
          height: 30px;
          display: block;
        }
        .sub-block {
          margin-top: 36px;
        }
        .sub-block:first-of-type {
          margin-top: 0;
        }
        .sub-block h3 {
          font-family: var(--sans);
          font-weight: 700;
          font-size: 1.15rem;
          margin: 0 0 10px;
          color: var(--accent);
        }
        .card-grid-tight {
          gap: 24px;
          margin-top: 28px;
        }
        .card-grid-tight .info-card {
          padding: 20px 22px;
        }
        .card-grid-tight .info-card h3 {
          font-size: 0.98rem;
        }
        .card-grid-tight .info-card p {
          font-size: 0.88rem;
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
          .stats .wrap {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .cards-grid.cols-2,
          .cards-grid.cols-3 {
            grid-template-columns: 1fr;
          }
          .next-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .persona-grid {
            grid-template-columns: 1fr;
            justify-items: center;
          }
          .vs-chip {
            order: 2;
            margin: 4px 0;
          }
          .hero-media {
            min-height: 460px;
            max-width: none;
          }
          .timeline {
            padding-left: 34px;
          }
          .side-block,
          .side-block.reverse {
            flex-direction: column;
            gap: 24px;
          }
          .side-block .media {
            min-height: 380px;
            width: 100%;
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
          .hero .sub {
            font-size: 0.95rem;
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
          .cards-section,
          .next,
          .timeline-section {
            padding: 44px 0;
          }
          .cards-section .head h2,
          .next .head h2,
          .timeline-section h2 {
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
          .hero-media {
            min-height: 400px;
          }
          .mini-gallery {
            grid-template-columns: 1fr;
            max-width: 360px;
          }
          .wireframe-card:nth-child(4),
          .wireframe-card:nth-child(5) {
            grid-column-start: auto;
          }
          .callout-card {
            padding: 16px 20px;
            font-size: 0.95rem;
          }
        }
      `}</style>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Case study · Envox Media</p>
            <h1>From Dead Ends to a Conversion Engine.</h1>
            <p className="sub">
              How a mobile-first redesign eliminated &quot;Tech Overwhelm,&quot; built instant credibility, and drove a 40%
              surge in engagement for Envox Media.
            </p>
            <div className="meta-row">
              <div>
                <span className="label">Type</span>
                Internship
              </div>
              <div>
                <span className="label">Tools</span>
                Figma, Canva, Adobe Illustrator
              </div>
              <div>
                <span className="label">Timeline</span>
                2 May to 2 Aug 2024
              </div>
            </div>
          </div>
          <div className="media hero-media">
              <img src="/envoxheroimage.png" alt="Envox Media hero" />
          </div>
        </div>
      </section>

      <section className="cards-section">
        <div className="wrap">
          <div className="head" style={{ textAlign: "left", maxWidth: 700, margin: "0 0 44px" }}>
            <p className="kicker">The problem</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 1.5vw + 1rem, 2.3rem)" }}>
              A &quot;bland&quot; site was actively losing high-value leads.
            </h2>
            <p>
              Envox Media had real capability. The website didn&apos;t reflect it. High-value leads, time-constrained
              entrepreneurs, were bouncing before ever reaching the agency&apos;s strongest work.
            </p>
            <p>
              This wasn&apos;t a visual polish problem. It was a trust architecture problem. The risk wasn&apos;t just
              aesthetic. Every &quot;dead end&quot; in the navigation was a missed contract.
            </p>
          </div>
          <div className="cards-grid cols-3">
            <div className="info-card">
              <div className="icon-badge">🌀</div>
              <h4 className="eyebrow-small" style={{ fontSize: "1.05rem", color: "var(--text)", fontWeight: 700 }}>
                Tech Overwhelm
              </h4>
              <p>
                A fragmented 8-item menu created decision paralysis for mobile users already context-switching on the
                go.
              </p>
            </div>
            <div className="info-card">
              <div className="icon-badge">🚪</div>
              <h4 className="eyebrow-small" style={{ fontSize: "1.05rem", color: "var(--text)", fontWeight: 700 }}>
                Dead Ends
              </h4>
              <p>
                No &quot;next step&quot; after viewing work. Users who wanted to explore further had nowhere to go, and bounced.
              </p>
            </div>
            <div className="info-card">
              <div className="icon-badge">🕳️</div>
              <h4 className="eyebrow-small" style={{ fontSize: "1.05rem", color: "var(--text)", fontWeight: 700 }}>
                Trust Gap
              </h4>
              <p>
                Social proof (testimonials) lived on a separate page. By the time users found it, they&apos;d already lost
                confidence.
              </p>
            </div>
          </div>
          <div style={{ maxWidth: 1180, margin: "40px auto 0" }}>
            <p className="callout-label">How Might We</p>
            <div className="callout-card">
              &quot;How might we create a high-conversion engine that builds immediate trust for mobile-first,
              time-constrained entrepreneurs, without sacrificing the aesthetic sophistication that proves Envox&apos;s
              worth?&quot;
            </div>
          </div>
        </div>
      </section>

      <section className="cards-section">
        <div className="wrap">
          <div className="head">
            <h2>Two personas. A genuine tension between their needs.</h2>
            <p>
              Stakeholder interviews surfaced two primary archetypes. Their requirements pulled in opposite directions;
              the design challenge was resolving that tension, not picking a side.
            </p>
          </div>
          <div className="persona-grid">
            <div className="info-card">
              <div className="persona-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21a8 8 0 0 0-16 0" />
                  <circle cx="12" cy="8" r="4" />
                </svg>
              </div>
              <p className="eyebrow-small">Her UX requirement</p>
              <h3>The &quot;Wow&quot; Factor</h3>
              <p>
                She needs to see high-fidelity animations and a sleek mobile flow to believe Envox is modern enough for
                her brand.
              </p>
            </div>
            <div className="vs-chip">VS</div>
            <div className="info-card">
              <div className="persona-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21a8 8 0 0 0-16 0" />
                  <circle cx="12" cy="8" r="4" />
                </svg>
              </div>
              <p className="eyebrow-small">His UX requirement</p>
              <h3>The &quot;Two-Tap&quot; IA &amp; Social Proof</h3>
              <p>
                He needs simplified navigation to find the Services page instantly, and a Testimonial section to bridge
                his trust gap.
              </p>
            </div>
          </div>
          <div style={{ maxWidth: 1180, margin: "40px auto 0" }}>
            <p className="callout-label">Note</p>
            <div className="callout-card small">
              The tension I had to resolve: Advaita needs visual richness. Deep needs speed and clarity.
              Over-engineering for Advaita kills Deep&apos;s experience. Under-designing loses Advaita immediately. The
              solution had to be high-fidelity and frictionless, not a compromise, but a synthesis.
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="wrap">
          <h2>Three questions I couldn&apos;t answer yet, and how I worked through them.</h2>
          <p className="timeline-intro">
            This is the phase most portfolios skip. Before touching Figma, I sat with three design questions that
            didn&apos;t have obvious answers. Working through each one shaped every downstream decision.
          </p>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot" />
              <h3>How might we deliver a high-energy &quot;wow&quot; factor without triggering &quot;tech overwhelm&quot;?</h3>
              <p>
                We achieved this by prioritizing purposeful motion. Instead of decorative clutter, I used
                performance-optimized animations to guide the user&apos;s eye toward key information, ensuring the visuals
                acted as a bridge to engagement rather than a barrier.
              </p>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <h3>
                Why did the design pivot from a feature-rich desktop layout to a streamlined, single-column flow?
              </h3>
              <p>
                The original brief implied desktop-first. I almost built it. Then stakeholder interviews with the CEO
                and Analytics team changed everything, the majority of potential clients were accessing the site via
                mobile devices while on the go. A feature-rich desktop layout would have been technically impressive and
                functionally wrong for the actual audience.
              </p>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <h3>How did you restructure the IA to balance visual flair with technical efficiency?</h3>
              <p>
                The competitor audit of 5 rival agencies revealed a consistent market pattern: agencies chose between
                being memorable or being usable. The memorable ones had chaotic navigation. The usable ones were
                forgettable. This gap set the design constraint precisely, Envox needed to own the overlap.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cards-section">
        <div className="wrap">
          <div className="head">
            <h2>Two data sources. Each one changed the direction of the design.</h2>
          </div>
          <div className="cards-grid cols-2">
            <div className="info-card">
              <p className="eyebrow-small">The &quot;why&quot;: stakeholder data</p>
              <h3>The Mobile-First Pivot</h3>
              <p>
                Through interviews with the CEO and Analytics team, I identified that the primary users were
                entrepreneurs accessing the site via mobile devices while on the go. This single data point invalidated
                the existing desktop-first layout and forced a complete rethink.
              </p>
            </div>
            <div className="info-card">
              <p className="eyebrow-small">Competitive lens: 5-agency audit</p>
              <h3>The Memorability Gap</h3>
              <p>
                My competitor audit showed that rivals were too simple to be memorable, or too visually complex to
                convert. Envox needed a bold identity that didn&apos;t sacrifice usability. Every rival had chosen one or
                the other. That gap was the strategic opening: high-fidelity aesthetics paired with radical functional
                simplicity. Not a middle ground, both at once.
              </p>
            </div>
          </div>
          <div style={{ maxWidth: 980, margin: "36px auto 0" }}>
            <p className="callout-label">Note</p>
            <div className="callout-card small">
              Stakeholder data isn&apos;t a substitute for user research, but it can surface constraints that change
              everything before you&apos;ve wasted time on the wrong approach.
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <a className="cta-btn" href={SHEET_LINK} target="_blank" rel="noreferrer noopener">
              Check it Out! ↗
            </a>
          </div>
        </div>
      </section>

      <section className="split wide">
        <div className="wrap">
          <div style={{ maxWidth: 700 }}>
            <p className="kicker">Information architecture</p>
            <h2>Rebuilding the system from three failure points up.</h2>
            <p>Each structural problem required its own fix. I didn&apos;t redesign the site, I redesigned the logic underneath it.</p>
          </div>

          <div className="side-block">
            <div>
              <h3 style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: "1.15rem", margin: "0 0 10px", color: "var(--accent)" }}>
                Navigation: 8 items → 5 pillars
              </h3>
              <p style={{ color: "var(--muted)" }}>
                I condensed the fragmented 8-menu hierarchy into a single, intuitive hamburger menu with 5 core
                pillars: Home, About, Services, Work, Contact. Strategic consolidation to ensure a &quot;two-tap&quot; journey to
                any destination, satisfying Deep&apos;s efficiency requirement without sacrificing Advaita&apos;s clean mobile
                experience.
              </p>
            </div>
            <div className="media architecture-media">
              <img src="/Architecture.png" alt="Information architecture diagram" />
            </div>
          </div>

          <div className="sub-block" style={{ maxWidth: 700, margin: "48px auto 0", textAlign: "center" }}>
            <h3>Wireframes</h3>
            <p style={{ fontWeight: 700, color: "var(--text)" }}>Lo-fi to Hi-fi, the structural logic made visible.</p>
            <p>
              Wireframes were used to test the IA before committing to visual design. The goal was to validate the
              two-tap journey and the Conversational Loop before aesthetics entered the picture.
            </p>
          </div>
          <div className="mini-gallery">
            <div className="wireframe-card">
              <div className="media">
                <img src="/wireframe1.webp" alt="wireframe 1" />
              </div>
              <div>
                <div className="wireframe-label">Home Page</div>
                <p className="wireframe-note">Home Page</p>
              </div>
            </div>
            <div className="wireframe-card">
              <div className="media">
                <img src="/wireframe2.webp" alt="wireframe 2" />
              </div>
              <div>
                <div className="wireframe-label">Navigation Menu</div>
                <p className="wireframe-note">Navigation Menu</p>
              </div>
            </div>
            <div className="wireframe-card">
              <div className="media">
                <img src="/wireframe3.webp" alt="wireframe 3" />
              </div>
              <div>
                <div className="wireframe-label">About Us</div>
                <p className="wireframe-note">About Us</p>
              </div>
            </div>
            <div className="wireframe-card">
              <div className="media">
                <img src="/wireframe4.webp" alt="wireframe 4" />
              </div>
              <div>
                <div className="wireframe-label">Our Services</div>
                <p className="wireframe-note">Our Services</p>
              </div>
            </div>
            <div className="wireframe-card">
              <div className="media">
                <img src="/wireframe5.webp" alt="wireframe 5" />
              </div>
              <div>
                <div className="wireframe-label">Contact Us</div>
                <p className="wireframe-note">Contact Us</p>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: 1180, margin: "36px auto 0" }}>
            <p className="callout-label wireframe-note-label" style={{ color: "#3a9aff" }}>
              Note
            </p>
            <div className="callout-card small">
              Wireframes focused on interaction cost, not aesthetics. The primary test: can Deep reach Services in 2
              taps from any entry point? Can Advaita scan the homepage in under 5 seconds and form a &quot;this is
              premium&quot; impression?
            </div>
          </div>
        </div>
      </section>

      <section className="split wide">
        <div className="wrap">
          <div style={{ maxWidth: 700 }}>
            <p className="kicker">The solution</p>
            <h2>Navigation</h2>
          </div>

          <div className="side-block reverse">
            <div>
              <p className="lead-line" style={{ marginTop: 0 }}>
                The Mobile Command Center
              </p>
              <p style={{ color: "var(--muted)" }}>
                I condensed a fragmented 8-menu hierarchy into a single, intuitive Hamburger Menu to minimize
                interaction cost for users on the move.
              </p>
              <div className="pivot" style={{ marginTop: 20 }}>
                <b>Strategic Consolidation:</b> Prioritized 5 core pillars, Home, About, Services, Work, and Contact,
                ensuring a &quot;two-tap&quot; journey to any destination.
              </div>
              <div className="pivot" style={{ marginTop: 14 }}>
                <b>The Logic:</b> Optimized the menu&apos;s technical performance to ensure a zero-lag experience,
                satisfying Advaita&apos;s need for high-speed efficiency.
              </div>
              <div className="pivot" style={{ marginTop: 14 }}>
                <b>UX Win →</b> Reduced &quot;Tech Overwhelm&quot; by providing a clean, persistent entry point that respects the
                user&apos;s mobile-first context.
              </div>
            </div>
            <div className="media">
              <img src="/envoxheromockup.PNG" alt="Navigation design" />
            </div>
          </div>

          <div
            className="sub-block"
            style={{ marginTop: 56, paddingTop: 40, borderTop: "1px solid var(--border)", maxWidth: 700 }}
          >
            <h2 style={{ marginBottom: 8 }}>Placement</h2>
            <p className="lead-line" style={{ marginTop: 0 }}>
              Solving for the &quot;Trust Gap&quot;
            </p>
            <p>
              To solve the &quot;Trust Gap&quot; for users like Deep, I engineered a UI pattern that presents evidence exactly
              where it matters most, alongside the work.
            </p>
          </div>

          <div className="side-block reverse">
            <div>
              <div className="cards-grid" style={{ gridTemplateColumns: "1fr", gap: 16 }}>
                <div className="info-card">
                  <h3 style={{ fontSize: "0.98rem" }}>Layered Validation</h3>
                  <p>Client testimonials play directly on top of work images with a timed delay.</p>
                </div>
                <div className="info-card">
                  <h3 style={{ fontSize: "0.98rem" }}>Frictionless Context</h3>
                  <p>
                    By merging proof and output into a single Snippet, I eliminated the need for users to navigate away
                    to a separate testimonials page.
                  </p>
                </div>
                <div className="info-card">
                  <h3 style={{ fontSize: "0.98rem" }}>The Loop</h3>
                  <p>
                    Each snippet concludes with an &quot;Explore&quot; CTA, proactively guiding the user into the next phase of
                    the brand narrative without hitting a dead end.
                  </p>
                </div>
              </div>
            </div>
            <div className="media">
              <img src="/envoxworkmockup.PNG" alt="Placement design" />
            </div>
          </div>
        </div>
      </section>

      <section className="cards-section">
        <div className="wrap">
          <div className="head">
            <h2>Three outcomes. Each traced to a design decision.</h2>
            <p>
              The redesign moved the metrics that matter for a B2B agency. I don&apos;t report numbers without tracing them
              to the decision that produced them.
            </p>
          </div>
          <div className="cards-grid cols-3 card-grid-tight">
            <div className="info-card">
              <p className="eyebrow-small" style={{ fontSize: "1.6rem", color: "var(--accent)", fontWeight: 800 }}>
                40%
              </p>
              <p>
                Surge in user engagement. Attributed to the Conversational Loop, users who previously hit dead ends now
                complete the full brand narrative through to Contact.
              </p>
            </div>
            <div className="info-card">
              <p className="eyebrow-small" style={{ fontSize: "1.6rem", color: "var(--accent)", fontWeight: 800 }}>
                8→5
              </p>
              <p>
                Navigation items consolidated. Eliminated decision paralysis. Deep reaches Services in 2 taps. Advaita
                gets a clean, uncluttered mobile entry point.
              </p>
            </div>
            <div className="info-card">
              <p className="eyebrow-small" style={{ fontSize: "1.6rem", color: "var(--accent)", fontWeight: 800 }}>
                0
              </p>
              <p>
                Dead ends in the user journey. Every page exits into the next phase. The site now functions as an
                active lead-nurturing sequence.
              </p>
            </div>
          </div>
          <div style={{ maxWidth: 980, margin: "36px auto 0" }}>
            <p className="callout-label">Note</p>
            <div className="callout-card small">
              The 40% engagement increase came from structural change, not cosmetic polish. The same users who were
              bouncing at dead ends are now completing the full brand narrative, from entry to Contact.
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <a className="cta-btn" href={PROTO_LINK} target="_blank" rel="noreferrer noopener">
              Check it Out! ↗
            </a>
          </div>
        </div>
      </section>

      <section className="reflection">
        <div className="wrap">
          <p className="kicker">Reflection</p>
          <h2>What I learned. What I&apos;d do differently..</h2>
          <div className="sub-block">
            <h3>What I Learned</h3>
            <p>
              The most important skill this project built wasn&apos;t visual, it was diagnostic. I had to resist the
              instinct to start in Figma and instead map the system failure first. The three root causes (navigation
              overload, displaced proof, dead-end pages) would have been invisible to a designer who opened Figma on
              day one.
            </p>
            <p>
              I also learned that stakeholder data is a design constraint, not background context. The CEO&apos;s mobile
              analytics were the single most important input on this project. Without them, I might have built a
              technically impressive desktop experience for an audience that accesses the site entirely on mobile.
            </p>
            <p className="lead-line">
              &quot;I bridge the gap between HCI research and technical development, delivering products that hit business
              goals and user needs simultaneously.&quot;
            </p>
            <span className="tag-chip">SYSTEMS THINKING + STAKEHOLDER INTEGRATION</span>
          </div>
        </div>
      </section>

      <section className="next">
        <div className="wrap">
          <div className="head">
            <h2>Next Steps: ranked by expected impact</h2>
          </div>
          <div className="next-grid">
            <div className="next-card">
              <span className="num">01</span>
              <h3>Animation Speed A/B Test</h3>
              <p>
                Test 3 animation durations (150ms / 300ms / 500ms) against CTA click-through. Hypothesis: faster
                transitions increase conversion for high-speed users without sacrificing perceived quality.
              </p>
            </div>
            <div className="next-card">
              <span className="num">02</span>
              <h3>Moderated Usability Study</h3>
              <p>
                Validate the &quot;two-tap to Services&quot; hypothesis with observed behavior, not just analytics. Specifically
                test whether Deep&apos;s archetype finds testimonials inline or still seeks a dedicated proof page.
              </p>
            </div>
            <div className="next-card">
              <span className="num">03</span>
              <h3>Personalized Entry Routing</h3>
              <p>
                A micro-interaction at first load to route Advaita-type users toward portfolio-first and Deep-type users
                toward case studies with proof. Reduces time-to-relevant-content for both personas.
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
