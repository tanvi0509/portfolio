"use client";

import React from "react";

export default function CohesityPromptLibrary() {
  return (
    <div className="cohesity-case">
      <style jsx>{`
        .cohesity-case {
          --bg: #ffffff;
          --surface: #ffffff;
          --text: #000000;
          --muted: #55575c;
          --accent: #0e8f5b;
          --accent-text: #0e8f5b;
          --accent-tint: #e4f6ed;
          --border: #dcdce0;
          --ph-a: #e4f6ed;
          --ph-b: #c3ead6;
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
        :global(html.dark) .cohesity-case,
        :global(.dark) .cohesity-case {
          --bg: #000000;
          --surface: #000000;
          --text: #ffffff;
          --muted: #b6b6bf;
          --accent: #3ddb93;
          --accent-text: #3ddb93;
          --accent-tint: #05231572;
          --border: rgba(255, 255, 255, 0.18);
          --ph-a: #0a2a1c;
          --ph-b: #123a28;
        }
        .wrap {
          max-width: 1760px;
          margin: 0 auto;
          padding: 0 clamp(16px, 2.4vw, 56px);
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
          max-width: 600px;
        }
        .hero-grid > .hero-img {
          flex: 1.1 1 0;
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

        .shot {
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
        }
        .shot img {
          display: block;
          width: 100%;
          height: auto;
        }

        .prototype-open {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
          padding: 10px 18px;
          border-radius: 999px;
          background: var(--accent);
          color: #fff;
          font-weight: 700;
          font-size: 0.88rem;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .prototype-open:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px -10px var(--accent);
        }

        .stats {
          background: var(--bg);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 36px 0;
        }
        .stats .wrap {
          display: grid;
          gap: 20px;
          text-align: center;
        }
        .stats .wrap.cols-4 {
          grid-template-columns: repeat(4, 1fr);
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
        .split-with-image .wrap {
          display: flex;
          gap: 80px;
          align-items: center;
          max-width: 1080px;
        }
        .split-with-image .wrap > .split-text {
          flex: 1.15 1 0;
          min-width: 0;
        }
        .split-with-image .wrap > .split-img {
          flex: 1 1 0;
          min-width: 0;
        }
        .split-with-image .wrap > .split-img .ph {
          min-height: 0;
        }
        @media (max-width: 860px) {
          .split-with-image .wrap {
            flex-direction: column;
          }
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
        .quote-line {
          border-left: 3px solid var(--accent);
          padding: 4px 0 4px 18px;
          font-style: italic;
          color: var(--text);
          margin: 16px 0;
          font-size: 0.98rem;
        }
        .quote-line cite {
          display: block;
          font-style: normal;
          font-size: 0.8rem;
          color: var(--muted);
          margin-top: 6px;
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

        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 20px 0 8px;
        }
        .tag {
          font-size: 0.8rem;
          padding: 6px 13px;
          border-radius: 999px;
          color: var(--muted);
          background: var(--accent-tint);
          border: 1px solid var(--border);
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
        td.owned {
          color: var(--text);
          font-weight: 700;
        }
        tr.owned-row {
          background: var(--accent-tint);
          box-shadow: inset 4px 0 0 var(--accent);
        }
        tr.owned-row td {
          padding-top: 18px;
          padding-bottom: 18px;
          font-size: 0.95rem;
        }
        tr.owned-row td:first-child {
          padding-left: 20px;
        }
        .owned-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--accent);
          color: #fff;
          font-weight: 700;
          font-size: 0.78rem;
          padding: 5px 12px;
          border-radius: 999px;
          white-space: nowrap;
        }
        .owned-badge .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
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
        .cards-grid.cols-2 {
          grid-template-columns: repeat(2, 1fr);
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
        .info-card .tagline {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--accent-text);
          margin-bottom: 8px;
          display: block;
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
          margin-bottom: 0;
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
        .ph {
          position: relative;
          min-height: 600px;
          background: repeating-linear-gradient(135deg, var(--ph-a), var(--ph-a) 12px, var(--ph-b) 12px, var(--ph-b) 13px);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .ph span {
          background: var(--surface);
          padding: 8px 14px;
          font-size: 0.78rem;
          letter-spacing: 0.03em;
          border: 1px dashed var(--accent);
          color: var(--muted);
        }
        .device-frame .ph {
          min-height: 460px;
        }
        .hifi-step-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .hifi-step-head .device-step-badge {
          margin-left: 0;
        }
        .hifi-step-head .device-title {
          margin-left: 0;
        }
        .hifi-step-img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 10px;
        }
        .note-callout {
          border: 1px solid var(--border);
          border-left: 4px solid var(--accent);
          background: var(--surface);
          padding: 18px 22px;
          margin: 16px 0;
          font-size: 0.92rem;
        }
        .note-callout .tagline {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--accent-text);
          margin-bottom: 8px;
          display: block;
        }
        .note-callout p {
          margin: 0 0 8px;
          color: var(--text);
          font-style: italic;
        }
        .note-callout p:last-child {
          margin-bottom: 0;
        }


        .scope-cut {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }
        .scope-cut .lead {
          color: var(--muted);
          margin: 6px 0 14px;
          font-size: 0.92rem;
        }
        .tag.strike {
          text-decoration: line-through;
          opacity: 0.65;
        }

        .shipped-lead {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 40px 0 4px;
        }
        .shipped-lead .line {
          flex: 1;
          height: 1px;
          background: var(--border);
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

        .closer {
          padding: 56px 0;
          border-top: 1px solid var(--border);
        }
        .closer .wrap {
          max-width: 820px;
          margin: 0 auto;
        }
        .closer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 48px;
          align-items: start;
        }
        .closer blockquote {
          font-family: var(--serif);
          font-style: italic;
          font-size: 1.3rem;
          line-height: 1.5;
          margin: 0 0 20px;
          color: var(--text);
        }
        .closer .stat-mini-row {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
        }
        .closer .stat-mini .n {
          font-weight: 800;
          font-size: 1.6rem;
          color: var(--accent-text);
          display: block;
        }
        .closer .stat-mini .l {
          font-size: 0.78rem;
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
          .stats .wrap.cols-4 {
            grid-template-columns: repeat(2, 1fr);
          }
          .split {
            padding: 38px 0;
          }
          .cards-section,
          .spotlight {
            padding: 38px 0;
          }
          .cards-grid.cols-3,
          .cards-grid.cols-2 {
            grid-template-columns: 1fr;
          }
          .spotlight-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .closer-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .ph {
            min-height: 400px;
          }
          .device-frame .ph {
            min-height: 320px;
          }
        }
        @media (max-width: 480px) {
          .wrap {
            padding: 0 18px;
          }
          .hero h1 {
            font-size: 1.5rem;
          }
          .stats .wrap.cols-4 {
            grid-template-columns: 1fr;
          }
          .stat-num {
            font-size: 1.7rem;
          }
          .split h2 {
            font-size: 1.3rem;
          }
          .ph {
            min-height: 280px;
          }
          .device-frame .ph {
            min-height: 220px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="status-badge">
              <span className="dot" />
              Rolling out to production
            </div>
            <p className="eyebrow">Cohesity &middot; AI Sales Enablement Intern</p>
            <h1>AI Prompt Library</h1>
            <p className="sub">
              I was asked why sellers weren&apos;t using AI. The real answer: using it had quietly become a second
              job.
            </p>
            <div className="meta-row">
              <div>
                <span className="label">Role</span>Product Designer &amp; Researcher
              </div>
              <div>
                <span className="label">Duration</span>12 weeks
              </div>
              <div>
                <span className="label">Tools</span>Figma, Figma Make, Claude, MCP
              </div>
            </div>
            <a
              className="prototype-open"
              href="/sales-assistant-prototype.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              Interactive prototype ↗
            </a>
          </div>
          <div className="hero-img shot">
            <div className="ph" style={{ background: "var(--surface)", aspectRatio: "1558 / 1360" }}>
              <img
                src="/cohesityhifi1-zoom.png"
                alt="Sales Assistant guided workflow interface"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="wrap">
          <p className="kicker">The problem</p>
          <h2>One AI assistant. Underused, not unwanted.</h2>
          <p>
            Cohesity built a single retrieval assistant to save sellers from digging through an overwhelming pile of
            sales content scattered across third-party systems, reachable from three places sellers already worked:
            Slack, Microsoft Copilot, and Claude. Across all three, sellers were using a fraction of what it could
            actually do.
          </p>
          <p>
            The working theory was that sellers simply didn&apos;t know what the tool could do, which pointed toward
            a training fix. Here&apos;s what a seller&apos;s actual path looked like instead:
          </p>
          <ol className="workflow-list">
            <li>Open the assistant to get an answer fast</li>
            <li>Land on a blank box, or ten unlabeled prompts</li>
            <li className="highlight">Not sure what to type, or which prompt does what</li>
            <li>Give up, draft it themselves somewhere else</li>
            <li>Paste it in just to get a reply</li>
            <li>Or abandon it completely and retrieve the information manually</li>
          </ol>
          <p>Two tools doing the job of one. Before building anything, I needed to know if the training theory was even right.</p>
          <div className="quote-line">
            &quot;It&apos;s like having an electric car and driving it like a gas car. We have AI everywhere but
            we&apos;re still doing the same manual work we were doing five years ago.&quot;
            <cite>Public-sector AE</cite>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap cols-4">
          <div>
            <div className="stat-num">9</div>
            <div className="stat-label">Interviews conducted</div>
          </div>
          <div>
            <div className="stat-num">8</div>
            <div className="stat-label">Problems found</div>
          </div>
          <div>
            <div className="stat-num">7</div>
            <div className="stat-label">Routed to other teams</div>
          </div>
          <div>
            <div className="stat-num">1</div>
            <div className="stat-label">In production rollout</div>
          </div>
        </div>
      </section>

      <section className="split split-with-image">
        <div className="wrap">
          <div className="split-text">
            <p className="kicker">The research</p>
            <h2>Nine interviews. Six roles. Zero assumptions.</h2>
            <p>
              I ran these interviews because I needed to understand who I was actually building for: what their
              workflow looked like day to day, and where this would even fit into it, without assuming any of that
              going in.
            </p>
            <p>
              Semi-structured interviews, 30 to 45 minutes each, across Inside Sales, Renewals, SDR (&times;2), Sales
              Engineer (&times;3), Solutions Architect, and Public-sector AE, deliberately mixing sellers who used
              the assistant daily with sellers who&apos;d tried it and stopped. Before asking a single question
              about AI, I counted the tools each person named unprompted for an ordinary day.
            </p>
            <p style={{ marginTop: "20px" }}>
              Fifteen to sixteen systems, on an ordinary day, including three separate logins for the same
              underlying assistant. AI wasn&apos;t a tool sellers were missing. It was one more layer inside a day
              that was already fragmented.
            </p>
          </div>
          <div className="split-img shot">
            <div className="ph" style={{ background: "var(--surface)", aspectRatio: "868 / 586" }}>
              <img
                src="/cohesityTheresearch.png"
                alt="Interview notes and synthesis"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cards-section">
        <div className="wrap">
          <div className="head">
            <p className="kicker">The strongest evidence</p>
            <h2>Not a wish list. Working proof.</h2>
            <p>Where the official tools didn&apos;t reach, the sharpest sellers had quietly built their own.</p>
          </div>
          <div className="cards-grid cols-3">
            <div className="info-card">
              <div className="icon-badge">01</div>
              <h3>Two SDRs independently built the same tool</h3>
              <div className="quote-line">
                An agent that reads a prospect&apos;s LinkedIn and drafts outreach in their voice: three weeks of
                hand-built work, twice, with no idea the other existed.
              </div>
            </div>
            <div className="info-card">
              <div className="icon-badge">02</div>
              <h3>An SE built the alert the platform never sent</h3>
              <div className="quote-line">
                A self-made watcher for stale support cases. It only runs on his laptop, so it goes dark every time
                he travels.
              </div>
            </div>
            <div className="info-card">
              <div className="icon-badge">03</div>
              <h3>One rep filmed his own workday to find the waste</h3>
              <div className="quote-line">
                Three hours of self-recorded footage, reviewed privately, then five agents built from what he saw,
                including one that checks in on him by phone in the afternoon.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <p className="kicker">Synthesis</p>
          <h2>Eight distinct problems. Not one blurry complaint.</h2>
          <p>
            Running interview notes through Claude to find what repeated across all nine conversations surfaced
            eight distinct problems. Only one was mine to build.
          </p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Problem</th>
                  <th>Evidence</th>
                  <th>Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sixteen tools, one seller</td>
                  <td>A rep&apos;s day spans CRM, content, docs, and three logins for one assistant</td>
                  <td>Routed: platform</td>
                </tr>
                <tr>
                  <td>Sellers building their own tools</td>
                  <td>
                    Working prospecting and alert tools, built and maintained by one person, with no official
                    version to replace them
                  </td>
                  <td>Routed: product</td>
                </tr>
                <tr>
                  <td>Grounded tool vs. general AI</td>
                  <td>
                    &quot;The internal one is to pull internal information. Other than that, I&apos;ll just have my
                    corporate edition of the other assistant up.&quot; (SDR)
                  </td>
                  <td>Routed: platform</td>
                </tr>
                <tr>
                  <td>Writing that sounds like AI</td>
                  <td>
                    &quot;They all sing the same. How do you add a voice and a feeling and a character into those
                    things?&quot; (Sales Engineer)
                  </td>
                  <td>Routed: new capability</td>
                </tr>
                <tr>
                  <td>Procedural knowledge missing</td>
                  <td>
                    &quot;I&apos;d love it if I could ask Sales that... if I trust the answer, that would be very
                    useful.&quot; (Sales Engineer)
                  </td>
                  <td>Routed: content &amp; permissions</td>
                </tr>
                <tr>
                  <td>Content freshness erodes trust</td>
                  <td>
                    &quot;New documents say yes, we can do that. Old documents say we can&apos;t.&quot; (Inside Sales
                    Rep)
                  </td>
                  <td>Routed: my own team, already in progress</td>
                </tr>
                <tr>
                  <td>Capabilities vanish, no warning</td>
                  <td>
                    An SDR&apos;s own working motion broke when a capability was quietly removed, with no way to
                    tell it apart from his own mistake
                  </td>
                  <td>Routed: process change</td>
                </tr>
                <tr className="owned-row">
                  <td className="owned">Prompt discovery</td>
                  <td className="owned">Not one of nine interviewees had ever used the prompt library</td>
                  <td className="owned">
                    <span className="owned-badge">
                      <span className="dot" />
                      Owned
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: "24px" }}>
            <strong style={{ color: "var(--text)" }}>8 problems. 7 routed to named owners. 1 rolling out.</strong>{" "}
            The seven weren&apos;t mine to fix (platform-scale, new AI capability, content ops), so I wrote them up
            rather than quietly treating them as my own backlog.
          </p>
        </div>
      </section>

      <section className="split">
        <div className="wrap">
          <p className="kicker">The one I owned</p>
          <h2>Ten prompts. Zero clicks.</h2>
          <p>Names truncated mid-word, most hidden behind &quot;Show more,&quot; a blank box doing the real work.</p>
          <div className="shot" style={{ margin: "24px 0" }}>
            <div className="ph" style={{ background: "var(--surface)", aspectRatio: "2040 / 874" }}>
              <img
                src="/Cohesitypromptlibraryoriginal-blurred.png"
                alt="Original prompt library UI"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
          <p>
            Nobody I interviewed had used it. Some hadn&apos;t even noticed it. The workaround people had settled
            into instead: draft the prompt somewhere else, then paste it into the assistant.
          </p>
          <div className="quote-line">
            &quot;Writing a prompt itself sometimes takes so much that I might as well write this myself.&quot;
            <cite>Public-sector AE</cite>
          </div>
          <p>Sellers weren&apos;t bad at prompting. Prompting had quietly become a job nobody signed up for.</p>
        </div>
      </section>

      <section className="split wide">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <p className="kicker">From sketch to shipped</p>
          <h2>One version, tested the whole way through.</h2>
          <p>
            I sketched the flow on paper first: pick a card, get a prompt, send it, read the output, try another
            prompt in the same card. Reading it back, I caught a flaw before it reached a screen: the same
            two-steps-when-there-should-be-one friction the research kept turning up, rebuilt one layer down, inside
            the very thing meant to fix it.
          </p>

          <div className="concept-flow">
            <div className="device-frame">
              <div className="device-bar">
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-step-badge">1</span>
                <span className="device-title">First pass, sketched on paper</span>
              </div>
              <div className="ph" style={{ background: "var(--surface)", aspectRatio: "1954 / 1206" }}>
                <img
                  src="/cohesitypromptlibrarysketch1-blurred.png"
                  alt="First pass, sketched on paper"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="note-callout" style={{ margin: "20px 0 0" }}>
              <span className="tagline">Caught in the margin</span>
              <p>&quot;Limitation: the user has to start a new chat when they want to switch to another card.&quot;</p>
              <p>
                &quot;Benefit: the user still has the freedom to type their own prompt, regardless of the card or
                option they picked.&quot;
              </p>
            </div>
            <div className="flow-connector">&darr;</div>
            <div className="device-frame">
              <div className="device-bar">
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-step-badge">2</span>
                <span className="device-title">Iterated version: flaw caught and fixed</span>
              </div>
              <div className="ph" style={{ background: "var(--surface)", aspectRatio: "1372 / 712" }}>
                <img
                  src="/cohesitypromptlibrarysketch2.png"
                  alt="Iterated version: flaw caught and fixed"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="note-callout" style={{ margin: "20px 0 0" }}>
              <span className="tagline">Fixed in the same margin</span>
              <p>
                &quot;Automatically suggest the user&apos;s possible next actions, with an option to switch cards in
                the same chat, through a &apos;switch workflow&apos; button.&quot;
              </p>
            </div>
          </div>

          <div className="scope-cut">
            <span className="tagline">Also decided before writing any code</span>
            <p className="lead">
              The MVP was as much about what I left out. All of this got written down and cut, on purpose:
            </p>
            <div className="tag-row">
              <span className="tag strike">Active account memory</span>
              <span className="tag strike">Opportunity tracking</span>
              <span className="tag strike">Separate workspaces</span>
              <span className="tag strike">Automatic context carryover</span>
              <span className="tag strike">Project-management concepts</span>
            </div>
          </div>

          <p style={{ marginTop: "28px" }}>
            From there I tested the concept with sellers across my remaining interviews, then built the production
            version. I&apos;d considered wiring directly into each surface&apos;s own API (Slack, Copilot, Claude),
            but the third-party owner of the retrieval system restricted key access. I chose Model Context Protocol
            instead, deliberately: one interface, written once, reachable from all three surfaces instead of three
            separate versions.
          </p>

          <div className="shipped-lead">
            <span className="line" />
            <span className="kicker" style={{ margin: 0 }}>
              Shipping now
            </span>
            <span className="line" />
          </div>
          <div className="concept-flow">
            <div className="hifi-step">
              <div className="hifi-step-head">
                <span className="device-step-badge">1</span>
                <span className="device-title">Task-framed cards replace the blank box</span>
              </div>
              <img className="hifi-step-img" src="/cohesityhifi1.png" alt="Task-framed cards replace the blank box" />
            </div>
            <div className="flow-connector">&darr;</div>
            <div className="hifi-step">
              <div className="hifi-step-head">
                <span className="device-step-badge">2</span>
                <span className="device-title">Editable prompt: nothing sends without a human</span>
              </div>
              <img
                className="hifi-step-img"
                src="/cohesityhifi2.png"
                alt="Editable prompt: nothing sends without a human"
              />
            </div>
            <div className="flow-connector">&darr;</div>
            <div className="hifi-step">
              <div className="hifi-step-head">
                <span className="device-step-badge">3</span>
                <span className="device-title">Response lands in the real conversation, not the panel</span>
              </div>
              <img
                className="hifi-step-img"
                src="/cohesityhifi3.png"
                alt="Response lands in the real conversation, not the panel"
              />
            </div>
            <div className="flow-connector">&darr;</div>
            <div className="hifi-step">
              <div className="hifi-step-head">
                <span className="device-step-badge">4</span>
                <span className="device-title">Switch workflow button, without starting a new chat</span>
              </div>
              <img
                className="hifi-step-img"
                src="/cohesityhifi4.png"
                alt="Switch workflow button, without starting a new chat"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cards-section">
        <div className="wrap">
          <div className="head">
            <p className="kicker">Product judgment</p>
            <h2>What I said no to.</h2>
          </div>
          <div className="cards-grid cols-2">
            <div className="info-card">
              <span className="tagline">Cut &middot; pinned prompts</span>
              <h3>An SDR wanted his own prompts pinned</h3>
              <p>
                I didn&apos;t build it. The real cost wasn&apos;t the missing backend. It was the state, storage,
                and data model that pinning would require, on a project about to lose its only engineer. Nobody
                would have been left to own that maintenance.
              </p>
              <div className="quote-line">A useful feature isn&apos;t useful if nobody&apos;s left to own what comes after it.</div>
            </div>
            <div className="info-card">
              <span className="tagline">Dropped &middot; suggested next actions</span>
              <h3>Sellers wanted the system to suggest what&apos;s next</h3>
              <p>Dropped: that answer differs by role, and I didn&apos;t have the usage data to guess responsibly.</p>
              <div className="quote-line">When the evidence isn&apos;t there yet, don&apos;t turn a guess into a product decision.</div>
            </div>
            <div className="info-card">
              <span className="tagline">Not buildable then &middot; role-relevant cards</span>
              <h3>A newly hired Sales Engineer wanted cards for his role only</h3>
              <p>Couldn&apos;t build it: that needed identity data the panel had no access to at the time.</p>
              <div className="quote-line">A good idea doesn&apos;t survive contact with data you don&apos;t have yet.</div>
            </div>
            <div className="info-card">
              <span className="tagline">Known weak spot &middot; discoverability</span>
              <h3>&quot;I wouldn&apos;t have known this existed.&quot;</h3>
              <p>
                A Solutions Architect put his finger on the biggest miss. Finding the library at all still depends
                on a seller already knowing it exists.
              </p>
              <div className="quote-line">Partly solved, and still the weakest link in the whole thing.</div>
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
                <p>Cohesity&apos;s sellers had one AI assistant reachable from three surfaces, and used none of them well.</p>
              </div>
              <div>
                <h4>What we learned</h4>
                <p>Prompting wasn&apos;t a skill sellers lacked. It was work they&apos;d been handed that wasn&apos;t their job.</p>
              </div>
              <div>
                <h4>What we&apos;re building</h4>
                <p>
                  A task-framed guided library: 15 workflows, 50 prompts, sourced from sellers themselves, rolling
                  out across all three surfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="closer">
        <div className="wrap closer-grid">
          <div>
            <p className="kicker">The real outcome</p>
            <blockquote>
              &quot;I didn&apos;t make sellers into prompt engineers. I made AI capabilities easier to discover, and
              prompting less of their job.&quot;
            </blockquote>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
              Rolling out now in Slack, Microsoft Copilot, and Claude: one interface, written once, replacing the
              blank box that nobody could use.
            </p>
          </div>
          <div className="stat-mini-row">
            <div className="stat-mini">
              <span className="n">15</span>
              <span className="l">Workflows</span>
            </div>
            <div className="stat-mini">
              <span className="n">50</span>
              <span className="l">Prompts</span>
            </div>
            <div className="stat-mini">
              <span className="n">3</span>
              <span className="l">Surfaces</span>
            </div>
            <div className="stat-mini">
              <span className="n">9</span>
              <span className="l">Interviews behind it</span>
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
