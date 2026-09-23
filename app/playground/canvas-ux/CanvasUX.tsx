"use client";

import React from "react";

export default function CanvasUX() {
  return (
    <div className="canvas-case">
      <style jsx>{`
        .canvas-case {
          --bg: #ffffff;
          --surface: #ffffff;
          --text: #000000;
          --muted: #55575c;
          --accent: #fdc700;
          --accent-text: #8a6500;
          --accent-tint: #fff8dc;
          --border: #dcdce0;
          --ph-a: #fff6d6;
          --ph-b: #ffecab;
          --card-bg: #fff8dc;
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
        :global(html.dark) .canvas-case,
        :global(.dark) .canvas-case {
          --bg: #000000;
          --surface: #000000;
          --text: #ffffff;
          --muted: #b6b6bf;
          --accent: #fdc700;
          --accent-text: #fdc700;
          --accent-tint: #332900;
          --border: rgba(255, 255, 255, 0.18);
          --ph-a: #241f00;
          --ph-b: #3d3300;
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
        .ph-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .ph-img.contain {
          object-fit: contain;
          object-position: center top;
          background: transparent;
        }
        .ph-img.fit {
          object-fit: contain;
          object-position: center top;
          background: transparent;
        }
        .ph-img.natural {
          height: auto;
          object-fit: contain;
          object-position: top center;
        }
        .ph.plain {
          background: transparent;
          border: none;
        }
        .ph.plain.natural {
          min-height: 0;
          display: block;
          aspect-ratio: auto;
        }
        .ph-note {
          display: inline-block;
          margin-top: 8px;
          padding: 6px 10px;
          border: 1px dashed var(--accent);
          background: color-mix(in srgb, var(--surface) 86%, transparent);
          color: var(--muted);
          font-size: 0.78rem;
          letter-spacing: 0.03em;
          line-height: 1;
        }
        .ph-note-wrap {
          text-align: right;
        }
        .hero-photo {
          background: transparent;
          border: none;
          padding: 0;
          overflow: hidden;
          display: block;
        }
        .hero-photo img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center top;
          display: block;
        }
        .hero {
          padding: 56px 0;
          border-bottom: 1px solid var(--border);
        }
        .hero .wrap {
          max-width: 1760px;
          margin: 0 auto;
          text-align: left;
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
          font-size: clamp(1.9rem, 2.1vw + 1.2rem, 2.8rem);
          line-height: 1.18;
          margin: 0 0 12px;
          letter-spacing: -0.01em;
        }
        .hero h1 em {
          color: var(--accent-text);
          font-style: normal;
          display: block;
        }
        .hero .sub {
          font-size: 1.05rem;
          color: var(--muted);
          margin: 0 0 24px;
        }
        .hero-quote {
          border-left: 4px solid var(--accent);
          background: var(--accent-tint);
          padding: 20px 26px;
          border-radius: 0 10px 10px 0;
        }
        .hero-quote p {
          font-size: 0.98rem;
          margin: 0;
          color: var(--text);
          line-height: 1.6;
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
        .split h2 {
          font-family: var(--sans);
          font-weight: 800;
          font-size: clamp(1.5rem, 1.5vw + 1rem, 2.1rem);
          margin: 0 0 18px;
        }
        .kicker {
          font-size: 0.82rem;
          color: var(--accent-text);
          margin: 0 0 10px;
          font-weight: 700;
        }
        .split p {
          color: var(--muted);
          margin: 0 0 16px;
        }
        .split .lead {
          font-family: var(--sans);
          font-weight: 700;
          color: var(--text);
          margin: 32px 0 8px;
          font-size: 1.05rem;
        }
        .formula {
          background: var(--surface);
          border: 1px solid var(--border);
          border-left: 4px solid var(--accent);
          padding: 16px 20px;
          font-family: "Courier New", monospace;
          font-size: 0.92rem;
          margin: 0 0 16px;
          color: var(--text);
        }
        .cards-section {
          padding: 52px 0;
          border-bottom: 1px solid var(--border);
        }
        .cards-section .head {
          max-width: 70ch;
          margin: 0 auto 40px;
        }
        .cards-section .head h2 {
          font-family: var(--sans);
          font-weight: 800;
          font-size: clamp(1.5rem, 1.5vw + 1rem, 2.1rem);
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
          padding: 24px 26px;
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
          margin-bottom: 14px;
        }
        .info-card h3 {
          font-family: var(--sans);
          font-weight: 700;
          font-size: 1.05rem;
          margin: 0 0 8px;
        }
        .info-card p {
          font-size: 0.92rem;
          color: var(--muted);
          margin: 0;
        }
        .split.wide .wrap {
          max-width: 1760px;
          padding: 0 clamp(16px, 2.4vw, 56px);
        }
        .split.wide .inner-text {
          max-width: 760px;
        }
        .step-main {
          display: flex;
          gap: 36px;
          align-items: flex-start;
        }
        .step-text {
          flex: 0.8 1 280px;
        }
        .step-text p {
          margin: 0;
        }
        .step-main > .ph {
          flex: 1.4 1 420px;
          aspect-ratio: 5 / 4;
          min-height: 0;
        }
        .step-extra {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 20px;
        }
        .step-extra.no-top {
          margin-top: 0;
        }
        .step-extra .ph {
          aspect-ratio: 16 / 9;
          min-height: 0;
        }
        .step-extra.hifi-alt {
          margin-top: -110px;
        }
        .step-extra.hifi-alt .ph {
          width: min(72%, 920px);
        }
        .step-extra.hifi-alt .ph.left {
          align-self: flex-start;
        }
        .step-extra.hifi-alt .ph.right {
          align-self: flex-end;
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
          font-size: 0.92rem;
        }
        th,
        td {
          text-align: left;
          padding: 14px 12px;
          border-bottom: 1px solid var(--border);
          vertical-align: top;
        }
        th {
          font-size: 0.8rem;
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
          max-width: 820px;
          margin: 0 auto;
        }
        .spotlight-box {
          background: var(--text);
          color: var(--bg);
          border-radius: 14px;
          padding: 40px 44px;
        }
        .spotlight-box h3 {
          font-family: var(--serif);
          font-style: italic;
          font-weight: 400;
          color: var(--accent);
          font-size: 1.4rem;
          margin: 0 0 18px;
        }
        .spotlight-box ul {
          margin: 0 0 16px;
          padding: 0;
          list-style: none;
        }
        .spotlight-box li {
          color: var(--bg);
          opacity: 0.85;
          font-size: 0.98rem;
          line-height: 1.65;
          margin: 0 0 12px;
          padding-left: 22px;
          position: relative;
        }
        .spotlight-box li::before {
          content: "✦";
          position: absolute;
          left: 0;
          color: var(--accent);
        }
        .spotlight-box p {
          color: var(--bg);
          opacity: 0.85;
          font-size: 0.98rem;
          line-height: 1.65;
          margin: 16px 0 0;
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
          .canvas-case {
            padding-top: 72px;
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
          .step-extra.hifi-alt .ph {
            width: 100%;
          }
          .step-extra.hifi-alt {
            margin-top: 20px;
          }
          .spotlight-box {
            padding: 30px 28px;
          }
        }
        @media (max-width: 480px) {
          .wrap {
            padding: 0 18px;
          }
          .canvas-case {
            padding-top: 68px;
          }
          .hero {
            padding: 36px 0 28px;
          }
          .hero h1 {
            font-size: 1.5rem;
          }
          .split {
            padding: 36px 0;
          }
          .split h2 {
            font-size: 1.35rem;
          }
          .cards-section,
          .spotlight {
            padding: 36px 0;
          }
          .cards-section .head h2 {
            font-size: 1.35rem;
          }
          .spotlight-box {
            padding: 24px 20px;
          }
          .spotlight-box h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">HCI Methods + UX Quant</p>
            <h1>
              Fixing Canvas, <em>Felt and Measured.</em>
            </h1>
            <p className="sub">A tale of sticky notes, spreadsheets, and one very opinionated AI bot.</p>
            <div className="hero-quote">
              <p>
                It&apos;s 11:47 PM. You&apos;re pretty sure you have something due tomorrow, but you can&apos;t figure out where on
                Canvas it lives. You&apos;ve clicked through three modules, checked the calendar, and opened four different
                course pages. You find it. It was due at 11:59 PM. Tonight. If this has ever happened to you, welcome.
                This is the story of how I tried to fix it. Twice.
              </p>
            </div>
          </div>
          <div className="ph hero-photo">
            <img src="/canvashero.png" alt="Canvas case study hero" />
          </div>
        </div>
      </section>

      <section className="split">
        <div className="wrap">
          <p className="kicker">01 · Round one: Community design project</p>
          <h2>We actually talked to people. (Wild concept.)</h2>
          <p>
            The first time I tackled Canvas was in my HCI Methods course. Our team, Laney, Ian, Lilly, and myself,
            picked UCSC undergrads as our community. Not exactly a hard sell. We all knew Canvas was a mess. But
            knowing something and proving it are very different things.
          </p>
          <p>
            We ran user surveys, conducted interviews, and threw everything into a Miro board for affinity mapping.
            What came back was a clean signal buried under a noisy interface:
          </p>
        </div>
      </section>

      <section className="cards-section">
        <div className="wrap">
          <div className="cards-grid cols-2">
            <div className="info-card">
              <div className="icon-badge">📊</div>
              <h3>High confidence, low results</h3>
              <p>Students rated themselves 4 or 5 out of 5 on Canvas confidence, yet were still missing deadlines.</p>
            </div>
            <div className="info-card">
              <div className="icon-badge">📋</div>
              <h3>The To-Do list workaround</h3>
              <p>The To-Do list sidebar was the most popular workaround, people were hacking the system.</p>
            </div>
            <div className="info-card">
              <div className="icon-badge">📅</div>
              <h3>Manual planner copying</h3>
              <p>Many students were manually copying due dates into personal planners.</p>
            </div>
            <div className="info-card">
              <div className="icon-badge">📢</div>
              <h3>Lost announcements</h3>
              <p>Announcements were getting lost in the noise; inconsistent instructor organization was recurring.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="wrap">
          <p>
            A classic case of a system that technically works but creates enormous cognitive overhead. Students were
            not failing Canvas, Canvas was failing them.
          </p>
        </div>
      </section>

      <section className="split wide">
        <div className="wrap">
          <div className="inner-text">
            <p className="kicker">02 · What we designed</p>
            <h2>Four requirements. One bot that stole the show.</h2>
          </div>
          <div className="step-main">
            <div className="step-text">
              <p>
                Based on our research, we focused on four core requirements: Organization, Customization, Calendar
                Integration, and a Bot. We iterated from rough sketches, to low-fi wireframes, to higher-fidelity
                prototypes.
              </p>
            </div>
            <div className="ph plain natural">
              <img className="ph-img natural" src="/canvas_sketch.png" alt="Canvas early sketches" />
              <div className="ph-note-wrap">
                <span className="ph-note">Sketches</span>
              </div>
            </div>
          </div>
          <div className="step-extra no-top">
            <div className="ph plain">
              <img className="ph-img fit" src="/2canvaslofi1.png" alt="Low-fi wireframes 1" />
            </div>
            <div className="ph plain">
              <img className="ph-img fit" src="/2canvaslofi2.png" alt="Low-fi wireframes 2" />
            </div>
            <div className="ph plain">
              <img className="ph-img fit" src="/2canvaslofi3.png" alt="Low-fi wireframes 3" />
            </div>
            <div className="ph-note-wrap">
              <span className="ph-note">Lo-Fi Dashboards</span>
            </div>
          </div>
          <div className="inner-text" style={{ marginTop: "40px" }}>
            <p className="lead" style={{ marginTop: 0 }}>
              The Bot, friendly, zero judgment, lots of answers
            </p>
          </div>
        </div>
      </section>

      <section className="cards-section">
        <div className="wrap">
          <div className="cards-grid cols-2">
            <div className="info-card">
              <div className="icon-badge">📌</div>
              <h3>This week&apos;s deadlines</h3>
              <p>Across all courses, sorted and readable.</p>
            </div>
            <div className="info-card">
              <div className="icon-badge">🔍</div>
              <h3>Find hidden assignments</h3>
              <p>Ones instructors forgot to add to the calendar.</p>
            </div>
            <div className="info-card">
              <div className="icon-badge">📝</div>
              <h3>Summarize announcements</h3>
              <p>So you&apos;re not drowning in notifications.</p>
            </div>
            <div className="info-card">
              <div className="icon-badge">📍</div>
              <h3>Pin to dashboard</h3>
              <p>One tap to surface what matters.</p>
            </div>
          </div>
          <div style={{ maxWidth: "820px", margin: "36px auto 0" }}>
            <div className="hero-quote">
              <p>
                &quot;Hi Tanvi! I&apos;m your helpful FAQ bot. Let me know how I can help you?&quot; No
                passive-aggressive reminder emails. No guilt. Just useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="split wide">
        <div className="wrap">
          <div className="step-main">
            <div className="step-text">
              <p>
                The redesigned dashboard got a proper To-Do list with filters (by class, due date, content type),
                theme customization, dark mode, and a Google Calendar import button that Canvas has absolutely no
                business not having already.
              </p>
            </div>
            <div className="ph plain natural">
              <img className="ph-img natural" src="/3canvashifi1.png" alt="Redesigned dashboard" />
            </div>
          </div>
          <div className="step-extra hifi-alt">
            <div className="ph plain left">
              <img className="ph-img fit" src="/3canvashifi2.png" alt="To-do list with filters" />
            </div>
            <div className="ph plain right">
              <img className="ph-img fit" src="/3canvashifi3.png" alt="Theme customization" />
            </div>
            <div className="ph plain left">
              <img className="ph-img fit" src="/3canvashifi4.png" alt="The bot in action" />
            </div>
            <div className="ph plain right">
              <img className="ph-img fit" src="/3canvashifi5.png" alt="Hi-fi prototype 5" />
            </div>
            <div className="ph plain left">
              <img className="ph-img fit" src="/3canvashifi6.png" alt="Hi-fi prototype 6" />
            </div>
            <div className="ph-note-wrap">
              <span className="ph-note">Hi-Fi Dashboards</span>
            </div>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="wrap">
          <p className="kicker">03 · Round two: The online experiment</p>
          <h2>Designing is fun. Measuring whether it works? That&apos;s where it gets interesting.</h2>
          <p>
            For CMPM 290, my partner Sonia and I asked: can we quantify the impact of an AI assistant on student
            assignment completion? Students with the AI assistant will miss fewer assignments and complete work on
            time.
          </p>

          <p className="lead">The Metric</p>
          <div className="formula">On-time rate = Assignments submitted on time ÷ Total assignments due</div>

          <p className="lead">Running the Numbers</p>
          <p>
            We set a baseline on-time rate of 70% and targeted a 5 percentage point improvement to 75%. Using the
            standard power analysis formula (alpha = 0.05, power = 0.80, variance = 0.21):
          </p>
          <div className="formula">n ~ 16 sigma^2 / delta^2 = (16 x 0.21) / (0.05)^2 = 1,344 students per group</div>
          <p>
            Rounded up: 1,350 per group, 2,700 total participants, about 9% of a 30,000-student university, rounded
            to a clean 10% rollout.
          </p>

          <p className="lead">The A/B Comparison</p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Current Canvas</th>
                  <th>Proposed experience</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Manual navigation</td>
                  <td>Intelligent, conversational guidance</td>
                </tr>
                <tr>
                  <td>Static calendar due dates</td>
                  <td>Prioritized task list</td>
                </tr>
                <tr>
                  <td>No detection of missed work</td>
                  <td>Alerts for unseen assignments</td>
                </tr>
                <tr>
                  <td>No reminders</td>
                  <td>Personalized, proactive reminders</td>
                </tr>
                <tr>
                  <td>No planning help</td>
                  <td>Automated or manual work schedule</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="cards-section">
        <div className="wrap">
          <div className="head">
            <p className="kicker">04 · Risks we took seriously</p>
            <h2>We did not just hype the solution. We stress-tested it.</h2>
          </div>
          <div className="cards-grid cols-2">
            <div className="info-card">
              <div className="icon-badge">⚠️</div>
              <h3>Over-reliance</h3>
              <p>Would students stop self-regulating entirely?</p>
            </div>
            <div className="info-card">
              <div className="icon-badge">🔔</div>
              <h3>Notification fatigue</h3>
              <p>Could the bot become the very annoyance it was solving?</p>
            </div>
            <div className="info-card">
              <div className="icon-badge">🔒</div>
              <h3>Privacy</h3>
              <p>Academic data is sensitive; AI access to it requires careful governance.</p>
            </div>
            <div className="info-card">
              <div className="icon-badge">⚖️</div>
              <h3>Bias in prioritization</h3>
              <p>Would the algorithm favor certain types of assignments unfairly?</p>
            </div>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="wrap">
          <p>These are not hypothetical worries. They are the kinds of issues that sink real product launches.</p>
        </div>
      </section>

      <section className="spotlight">
        <div className="wrap">
          <div className="spotlight-box">
            <h3>Good UX is both felt and measured.</h3>
            <ul>
              <li>
                The community design project gave us the why: students are not disorganized, they are navigating a
                system that buries information and offers no intelligent guidance.
              </li>
              <li>
                The online experiment gave us the how much: a 5-point lift in on-time rates, across thousands of
                students, is worth building for.
              </li>
              <li>
                Doing the same problem twice, once through a qualitative, community-centered lens and once through a
                quantitative, experimental lens, taught me something a single course never could.
              </li>
              <li>Neither answer is complete without the other.</li>
            </ul>
            <p>
              And Canvas really needs a Google Calendar import button. I&apos;ve now said this in two academic
              presentations and a blog post. I&apos;m manifesting it.
            </p>
          </div>
        </div>
      </section>

      <footer className="case-footer">© 2026 Kamanuri Tanvi Reddy</footer>
    </div>
  );
}
