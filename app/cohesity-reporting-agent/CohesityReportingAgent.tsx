"use client";

import React from "react";

export default function CohesityReportingAgent() {
  return (
    <div className="reporting-agent-case">
      <style jsx>{`
        .reporting-agent-case {
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
        :global(html.dark) .reporting-agent-case,
        :global(.dark) .reporting-agent-case {
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
          padding: 56px 0 24px;
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
          font-size: clamp(1.8rem, 2vw + 1.2rem, 2.5rem);
          line-height: 1.2;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
        }
        .hero .sub {
          font-size: 1.05rem;
          color: var(--muted);
          margin: 0 0 24px;
          max-width: 58ch;
        }
        .meta-row {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          margin-bottom: 22px;
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
        .email-mock {
          display: flex;
          flex-direction: column;
          min-height: 560px;
          background: var(--surface);
        }
        .email-mock-bar {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border);
        }
        .email-mock-title {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text);
          margin-left: 8px;
        }
        .email-mock-meta {
          padding: 16px 20px;
          border-bottom: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .email-mock-meta div {
          font-size: 0.85rem;
          color: var(--text);
        }
        .email-mock-label {
          display: inline-block;
          width: 60px;
          color: var(--muted);
          font-size: 0.78rem;
          font-weight: 700;
        }
        .email-mock-body {
          flex: 1;
          padding: 28px 24px;
        }
        .email-mock-body p {
          margin: 0 0 16px;
          font-size: 1rem;
          color: var(--text);
          line-height: 1.6;
        }
        .email-mock-body strong {
          color: var(--accent-text);
        }
        .email-mock-footnote {
          margin-top: 24px !important;
          font-size: 0.78rem !important;
          color: var(--muted) !important;
        }
        .device-frame {
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          background: var(--surface);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
          margin: 24px 0;
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
        .diagram-wrap {
          padding: 24px 20px;
          background: var(--surface);
        }
        .diagram-wrap svg {
          width: 100%;
          height: auto;
          display: block;
          font-family: var(--sans);
        }

        .headline-banner {
          background: var(--text);
          color: var(--bg);
          padding: 34px 0;
          text-align: center;
        }
        .headline-banner p {
          margin: 0 auto;
          font-size: 1.15rem;
          font-weight: 600;
          max-width: 760px;
          line-height: 1.5;
        }
        .headline-banner .hl {
          color: var(--accent);
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

        .table-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin-top: 8px;
        }
        table {
          width: 100%;
          min-width: 560px;
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
        td.lead {
          color: var(--text);
          font-weight: 700;
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
        .cards-grid.cols-2 {
          grid-template-columns: repeat(2, 1fr);
        }
        .info-card {
          border: 1px solid var(--border);
          border-left: 4px solid var(--accent);
          background: var(--surface);
          padding: 22px 24px;
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
        .info-card p {
          font-size: 0.9rem;
          color: var(--muted);
          margin: 0 0 10px;
        }
        .info-card .quote-line {
          margin: 0 0 10px;
          font-size: 0.92rem;
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
          font-size: 1.25rem;
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
            padding: 44px 0 20px;
          }
          .hero-grid {
            flex-direction: column;
            gap: 28px;
          }
          .hero-grid > div:first-child {
            max-width: none;
          }
          .split {
            padding: 38px 0;
          }
          .cards-section,
          .spotlight {
            padding: 38px 0;
          }
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
        }
        @media (max-width: 480px) {
          .wrap {
            padding: 0 18px;
          }
          .hero h1 {
            font-size: 1.5rem;
          }
          .split h2 {
            font-size: 1.3rem;
          }
          .headline-banner p {
            font-size: 1rem;
          }
          .ph {
            min-height: 280px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="status-badge">
              <span className="dot" />
              Designed &amp; piloted
            </div>
            <p className="eyebrow">Cohesity &middot; AI Sales Enablement Intern</p>
            <h1>Designing Trust Into an Autonomous Reporting Agent</h1>
            <p className="sub">
              An AI agent reports on sales-training completion on its own, and only messages a real person when
              it&apos;s confident enough to be right.
            </p>
            <div className="meta-row">
              <div>
                <span className="label">Role</span>Product Designer
              </div>
              <div>
                <span className="label">Duration</span>12 weeks
              </div>
              <div>
                <span className="label">Team</span>Enablement lead, platform engineer, program owners
              </div>
              <div>
                <span className="label">Tools</span>Automation platform, data warehouse, Slack
              </div>
            </div>
          </div>
          <div className="hero-img shot">
            <div className="email-mock">
              <div className="email-mock-bar">
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="device-dot" />
                <span className="email-mock-title">Training Update</span>
              </div>
              <div className="email-mock-meta">
                <div>
                  <span className="email-mock-label">From</span>Sales Enablement Agent
                  &lt;training-agent@cohesity.com&gt;
                </div>
                <div>
                  <span className="email-mock-label">To</span>Jordan Lee
                </div>
                <div>
                  <span className="email-mock-label">Cc</span>Priya Shah (Enablement Lead)
                </div>
                <div>
                  <span className="email-mock-label">Subject</span>Your training status: Security Fundamentals
                </div>
              </div>
              <div className="email-mock-body">
                <p>Hi Jordan,</p>
                <p>
                  You&apos;re currently at <strong>60% complete</strong> on Security Fundamentals.
                </p>
                <p>Please finish by Friday, June 14.</p>
                <p className="email-mock-footnote">Sent automatically &middot; confidence: high</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="headline-banner">
        <div className="wrap">
          <p>
            The agent decides, on its own,{" "}
            <span className="hl">whether it&apos;s confident enough to message a real person</span>, and refuses to
            guess when it isn&apos;t.
          </p>
        </div>
      </section>

      <section className="split">
        <div className="wrap">
          <p className="kicker">The problem</p>
          <h2>The obvious fix would have broken on contact with reality.</h2>
          <p>
            Enablement specialists manually pulled training-completion data every week, emailing reps about their
            own progress on courses they&apos;d been assigned, and emailing managers about their team&apos;s
            reps&apos; progress on those same courses. My assignment was simple on paper: replace that manual
            process with automation.
          </p>
          <p>
            Instead of building the obvious version right away, I first interviewed the specialists doing this work
            today. Two things they said changed how I approached the whole design:
          </p>
          <ol className="workflow-list">
            <li>
              Trust was uneven. People worried less about the system missing something than about it being
              confidently wrong
            </li>
            <li>
              There was no single schedule. Different programs check in weekly, some monthly, some quarterly, so one
              shared send schedule wouldn&apos;t work for any of them
            </li>
          </ol>
          <p>Those two things shaped almost every decision that followed.</p>
        </div>
      </section>

      <section className="cards-section">
        <div className="wrap">
          <div className="head">
            <p className="kicker">The research</p>
            <h2>Four findings, from interviews and a data audit, that shaped every decision after</h2>
            <p>
              Interviews with the specialists doing this work today, plus a column-by-column audit of the source
              data rather than trusting what its field names claimed.
            </p>
          </div>
          <div className="cards-grid cols-2">
            <div className="info-card">
              <span className="tagline">Insight 1 &middot; trust, not capability</span>
              <div className="quote-line">
                &quot;My worry isn&apos;t that it breaks. It&apos;s that it&apos;s confidently wrong and nobody
                notices until a manager complains.&quot;
              </div>
              <p>
                The strongest pushback wasn&apos;t about what the system could do. It was about trust in something
                unattended.
              </p>
            </div>
            <div className="info-card">
              <span className="tagline">Insight 2 &middot; no single schedule</span>
              <div className="quote-line">
                &quot;Some of my programs check in weekly. Others are a 30-day thing, some are quarterly.
                There&apos;s no one schedule.&quot;
              </div>
              <p>
                A single company-wide send schedule would spam the weekly programs and leave the longer ones silent
                for weeks.
              </p>
            </div>
            <div className="info-card">
              <span className="tagline">Insight 3 &middot; tribal knowledge beats the record</span>
              <div className="quote-line">
                &quot;Honestly, I just know which of these are actually mine at this point. The system hasn&apos;t
                been right in a while.&quot;
              </div>
              <p>
                Specialists&apos; own knowledge of who really owned what was more accurate than the system of
                record.
              </p>
            </div>
            <div className="info-card">
              <span className="tagline">Insight 4 &middot; a wrong send, not a missed one</span>
              <div className="quote-line">
                &quot;The thing I&apos;d actually be embarrassed by is a rep getting told they&apos;re behind on
                something they finished last month.&quot;
              </div>
              <p>People feared one wrong message far more than the system occasionally saying nothing at all.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <p className="kicker">Key decisions</p>
          <h2>Six decisions, each traced back to something someone told me</h2>
          <p>
            Not features that seemed nice to have. Every gate and threshold below answers a specific worry from the
            research above.
          </p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Decision</th>
                  <th>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="lead">One lookup table, not five workarounds</td>
                  <td>
                    A single, specialist-verified source of truth beats patching each data gap on its own. One thing
                    to explain, audit, and hand off.
                  </td>
                </tr>
                <tr>
                  <td className="lead">Confidence score: High or Low, no Medium</td>
                  <td>
                    A gray zone quietly puts a human back in the loop every time it fires. Two states force a real
                    decision up front.
                  </td>
                </tr>
                <tr>
                  <td className="lead">Low confidence escalates, it doesn&apos;t fail silently</td>
                  <td>
                    Nothing sends to any rep or manager. The course owner gets the exact reason instead of a vague
                    failure.
                  </td>
                </tr>
                <tr>
                  <td className="lead">Per-course cadence, not one shared schedule</td>
                  <td>
                    The weekly check only decides when the agent looks. A separate cadence per course decides
                    whether it actually sends.
                  </td>
                </tr>
                <tr>
                  <td className="lead">A single-switch test mode for rollout</td>
                  <td>
                    Every message routes only to the designer until the content earns trust. Going live for real is
                    one flag, not a rebuild.
                  </td>
                </tr>
                <tr>
                  <td className="lead">Deterministic message text, not AI-generated wording</td>
                  <td>
                    Predictable, auditable text comes before a warmer tone. A wrong sentence in a manager&apos;s
                    inbox can&apos;t be unsent.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="wrap">
          <p className="kicker">How it works, end to end</p>
          <h2>The agent re-evaluates itself every run. It never assumes last week still holds.</h2>
          <p>
            Every run wakes up on a fixed schedule, walks every course that&apos;s due through the same pipeline
            below, and logs what happened before going back to sleep. Nothing carries over from the run before it.
          </p>
          <div className="device-frame">
            <div className="device-bar">
              <span className="device-dot" />
              <span className="device-dot" />
              <span className="device-dot" />
              <span className="device-title">System design: the decision flow</span>
            </div>
            <div className="diagram-wrap">
              <svg
                viewBox="0 0 1180 620"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Diagram of the automation system: data inputs feed a decision pipeline that produces rep and manager update messages"
              >
                <defs>
                  <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M0,0 L8,4 L0,8 Z" fill="var(--accent)" />
                  </marker>
                  <marker id="arrowHeadMuted" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M0,0 L8,4 L0,8 Z" fill="var(--muted)" />
                  </marker>
                </defs>

                <text x="20" y="36" fontSize="20" fontWeight="700" fill="var(--text)">
                  Data inputs
                </text>
                <rect
                  x="20"
                  y="56"
                  width="340"
                  height="64"
                  rx="10"
                  fill="var(--accent-tint)"
                  stroke="var(--accent)"
                  strokeOpacity="0.45"
                />
                <text x="190" y="94" textAnchor="middle" fontSize="14.5" fontWeight="600" fill="var(--text)">
                  Training completion records
                </text>

                <rect
                  x="20"
                  y="136"
                  width="340"
                  height="64"
                  rx="10"
                  fill="var(--accent-tint)"
                  stroke="var(--accent)"
                  strokeOpacity="0.45"
                />
                <text x="190" y="160" textAnchor="middle" fontSize="14.5" fontWeight="600" fill="var(--text)">
                  <tspan x="190" dy="0">
                    Manager hierarchy and
                  </tspan>
                  <tspan x="190" dy="18">
                    assigned specialist
                  </tspan>
                </text>

                <text x="190" y="222" textAnchor="middle" fontSize="12.5" fill="var(--muted)">
                  Weekly schedule &middot; joins both sources
                </text>

                <rect
                  x="20"
                  y="248"
                  width="340"
                  height="164"
                  rx="10"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                />
                <text x="40" y="274" fontSize="13.5" fontWeight="700" fill="var(--accent-text)">
                  Course discovery rules
                </text>
                <text x="40" y="300" fontSize="12.5" fill="var(--muted)">
                  <tspan x="40" dy="0">
                    End date passed &rarr; close course, stop
                  </tspan>
                  <tspan x="40" dy="26">
                    100% complete &rarr; close course, stop
                  </tspan>
                  <tspan x="40" dy="26">
                    Renewed or new course &rarr; configure
                  </tspan>
                </text>

                <path d="M360,130 L414,92" fill="none" stroke="var(--accent)" strokeWidth="2" markerEnd="url(#arrowHead)" />
                <path
                  d="M360,330 C395,330 395,182 418,182"
                  fill="none"
                  stroke="var(--muted)"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  markerEnd="url(#arrowHeadMuted)"
                />

                <text x="420" y="36" fontSize="20" fontWeight="700" fill="var(--text)">
                  Decision pipeline
                </text>

                <rect x="420" y="60" width="340" height="64" rx="10" fill="var(--surface)" stroke="var(--border)" />
                <text x="590" y="98" textAnchor="middle" fontSize="14.5" fontWeight="600" fill="var(--text)">
                  1 &middot; Query the data warehouse
                </text>
                <path d="M590,124 L590,148" stroke="var(--accent)" strokeWidth="2" markerEnd="url(#arrowHead)" />

                <rect x="420" y="150" width="340" height="64" rx="10" fill="var(--surface)" stroke="var(--border)" />
                <text x="590" y="188" textAnchor="middle" fontSize="14.5" fontWeight="600" fill="var(--text)">
                  2 &middot; Lifecycle gate
                </text>
                <path d="M590,214 L590,238" stroke="var(--accent)" strokeWidth="2" markerEnd="url(#arrowHead)" />

                <rect x="420" y="240" width="340" height="64" rx="10" fill="var(--surface)" stroke="var(--border)" />
                <text x="590" y="266" textAnchor="middle" fontSize="14.5" fontWeight="600" fill="var(--text)">
                  3 &middot; Confidence scoring
                </text>
                <text x="590" y="286" textAnchor="middle" fontSize="12" fill="var(--muted)">
                  High or Low. No in-between
                </text>
                <path d="M590,304 L590,328" stroke="var(--accent)" strokeWidth="2" markerEnd="url(#arrowHead)" />

                <rect x="420" y="330" width="340" height="64" rx="10" fill="var(--surface)" stroke="var(--border)" />
                <text x="590" y="356" textAnchor="middle" fontSize="14.5" fontWeight="600" fill="var(--text)">
                  4 &middot; Governance gate
                </text>
                <text x="590" y="376" textAnchor="middle" fontSize="12" fill="var(--muted)">
                  High &rarr; proceed &middot; Low &rarr; escalate
                </text>
                <path d="M590,394 L590,418" stroke="var(--accent)" strokeWidth="2" markerEnd="url(#arrowHead)" />

                <rect x="420" y="420" width="340" height="64" rx="10" fill="var(--surface)" stroke="var(--border)" />
                <text x="590" y="458" textAnchor="middle" fontSize="14.5" fontWeight="600" fill="var(--text)">
                  5 &middot; Build message content
                </text>
                <path d="M590,484 L590,508" stroke="var(--accent)" strokeWidth="2" markerEnd="url(#arrowHead)" />

                <rect x="420" y="510" width="340" height="64" rx="10" fill="var(--accent)" />
                <text x="590" y="548" textAnchor="middle" fontSize="14.5" fontWeight="700" fill="#fff">
                  6 &middot; Send and log
                </text>

                <path
                  d="M760,542 C800,542 800,250 818,250"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  markerEnd="url(#arrowHead)"
                />
                <text x="778" y="500" textAnchor="middle" fontSize="11" fill="var(--muted)">
                  output
                </text>

                <text x="820" y="36" fontSize="20" fontWeight="700" fill="var(--text)">
                  Output
                </text>

                <rect x="820" y="56" width="340" height="50" rx="8" fill="var(--accent-tint)" stroke="var(--accent)" />
                <text x="990" y="86" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--accent-text)">
                  CC: enablement lead on every message
                </text>

                <rect x="820" y="128" width="340" height="28" fill="var(--accent)" />
                <text x="836" y="147" fontSize="12.5" fontWeight="700" fill="#fff">
                  REP UPDATE
                </text>
                <rect x="820" y="156" width="340" height="120" fill="var(--accent-tint)" />
                <text x="836" y="180" fontSize="12.5" fill="var(--text)">
                  <tspan x="836" dy="0">
                    Hi [rep name],
                  </tspan>
                  <tspan x="836" dy="20">
                    You&apos;re currently [status] on [course].
                  </tspan>
                  <tspan x="836" dy="20">
                    Please finish by [date].
                  </tspan>
                </text>

                <rect x="820" y="296" width="340" height="28" fill="var(--accent)" />
                <text x="836" y="315" fontSize="12.5" fontWeight="700" fill="#fff">
                  MANAGER UPDATE
                </text>
                <rect x="820" y="324" width="340" height="120" fill="var(--accent-tint)" />
                <text x="836" y="348" fontSize="12.5" fill="var(--text)">
                  <tspan x="836" dy="0">
                    Hi [manager name],
                  </tspan>
                  <tspan x="836" dy="20">
                    Your team is [percent]% complete on [course].
                  </tspan>
                  <tspan x="836" dy="20">
                    Follow up with: [rep names].
                  </tspan>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="wrap">
          <p className="kicker">Shipping without an incident</p>
          <h2>The rollout was its own design problem, not an afterthought</h2>
          <p>
            Because the agent&apos;s entire value is acting without a human checking every message, the path to live
            had to make a bad send structurally impossible, not just unlikely.
          </p>
          <ol className="workflow-list">
            <li>
              Build and prove the full decision path against realistic stand-in data before requesting access to
              any real, sensitive system
            </li>
            <li>Run repeatedly in test mode, reviewing real message output with the enablement lead, before a single real send</li>
            <li>
              Treat every open question, an unverified owner, an unset link, a mismatched date, as a blocker to
              flipping the switch, not a footnote to fix later
            </li>
            <li>
              Design the data source to be swappable, so turning on the real feed changes nothing else in the
              decision logic
            </li>
          </ol>
        </div>
      </section>

      <section className="spotlight">
        <div className="wrap">
          <div className="spotlight-box">
            <div className="spotlight-grid">
              <div>
                <h4>The problem</h4>
                <p>
                  Specialists manually tracked training completion and messaged people about it, by hand, every
                  week, for every course.
                </p>
              </div>
              <div>
                <h4>What I learned</h4>
                <p>
                  The pushback was never about capability. It was about trust in a system that acts without anyone
                  checking each message first.
                </p>
              </div>
              <div>
                <h4>What I built</h4>
                <p>
                  Decision logic that scores its own confidence, only speaks when it&apos;s sure, and tells a human
                  exactly why when it isn&apos;t.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="closer">
        <div className="wrap closer-grid">
          <div>
            <p className="kicker">What this taught me</p>
            <blockquote>
              &quot;The interesting question isn&apos;t whether this can be automated. It&apos;s what the system
              needs to refuse to do, and how loudly it needs to say so when it refuses.&quot;
            </blockquote>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
              Next, if this continued: letting the system draft its own new-course setup requests instead of asking
              a human to type them in, and testing whether a warmer tone changes how people respond, once the plain
              version has earned enough trust to risk it.
            </p>
          </div>
          <div className="stat-mini-row">
            <div className="stat-mini">
              <span className="n">4</span>
              <span className="l">Research insights</span>
            </div>
            <div className="stat-mini">
              <span className="n">6</span>
              <span className="l">Design decisions</span>
            </div>
            <div className="stat-mini">
              <span className="n">2</span>
              <span className="l">Confidence levels, by design</span>
            </div>
            <div className="stat-mini">
              <span className="n">12</span>
              <span className="l">Weeks</span>
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
