"use client";

import React from "react";
import Link from "next/link";

const HERO_IMAGE_LIGHT = "/designforaccessheroimagelight.png";
const HERO_IMAGE_DARK = "/designforaccessheroimagedark.png";

export default function YouTubeASL() {
  return (
    <div className="asl-case">
      <style jsx>{`
        .asl-case {
          --bg: #ffffff;
          --surface: #ffffff;
          --text: #000000;
          --muted: #55575c;
          --accent: #ff0000;
          --accent-tint: #ffebeb;
          --border: #dcdce0;
          --ph-a: #ffe8e8;
          --ph-b: #ffd0d0;
          --card-bg: #fff1f1;
          --card-text: #14151a;
          --serif: Georgia, "Iowan Old Style", serif;
          --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background: var(--bg);
          color: var(--text);
          font-family: var(--sans);
          line-height: 1.55;
          transition: background 0.25s ease, color 0.25s ease;
          padding-top: 84px;
        }
        :global(html.dark) .asl-case,
        :global(.dark) .asl-case {
          --bg: #000000;
          --surface: #000000;
          --text: #ffffff;
          --muted: #b6b6bf;
          --accent: #ff0000;
          --accent-tint: #2a0a0a;
          --border: rgba(255, 255, 255, 0.18);
          --ph-a: #240c0c;
          --ph-b: #3a1212;
          --card-bg: #ffffff;
          --card-text: #14151a;
        }
        .wrap {
          max-width: 1760px;
          margin: 0 auto;
          padding: 0 clamp(16px, 2.4vw, 56px);
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
          min-height: 600px;
        }
        .eyebrow {
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 700;
          margin: 0 0 16px;
          letter-spacing: 0.02em;
        }
        .hero h1 {
          font-family: var(--sans);
          font-weight: 800;
          color: var(--text);
          font-size: clamp(2rem, 2.2vw + 1.2rem, 3rem);
          line-height: 1.15;
          margin: 0 0 18px;
          letter-spacing: -0.01em;
        }
        .hero h1 em {
          color: var(--accent);
          font-style: normal;
        }
        .meta-row {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          margin-bottom: 32px;
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
          font-weight: 700;
        }
        .hero-quote {
          border-left: 4px solid var(--accent);
          background: var(--accent-tint);
          padding: 22px 28px;
          border-radius: 0 10px 10px 0;
        }
        .hero-quote p {
          font-family: var(--serif);
          font-style: italic;
          font-size: 1.25rem;
          margin: 0;
          color: var(--text);
          line-height: 1.5;
        }
        .ph {
          position: relative;
          background: var(--surface);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 340px;
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
        .hero-photo {
          border-color: transparent;
          padding: 0;
          overflow: hidden;
          display: block;
        }
        .hero-photo img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 41% center;
          display: block;
        }
        .hero-photo .hero-dark {
          display: none;
          width: 90%;
          height: 90%;
          margin: auto;
          object-fit: contain;
          object-position: center;
        }
        .hero-photo .hero-light {
          width: 90%;
          height: 90%;
          margin: auto;
          object-fit: contain;
          object-position: center;
        }
        :global(html.dark) .hero-photo .hero-light,
        :global(.dark) .hero-photo .hero-light {
          display: none;
        }
        :global(html.dark) .hero-photo .hero-dark,
        :global(.dark) .hero-photo .hero-dark {
          display: block;
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
          background: transparent;
          object-position: top center;
        }
        .ph-img.natural {
          height: auto;
          object-fit: contain;
          display: block;
        }
        .ph-img.hifi-top {
          object-fit: cover;
          object-position: top center;
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
        .split h2,
        .cards-section .head h2,
        .timeline-section h2 {
          font-family: var(--sans);
          font-weight: 800;
          font-size: clamp(1.5rem, 1.5vw + 1rem, 2.1rem);
          margin: 0 0 18px;
        }
        .split .kicker {
          font-size: 0.82rem;
          color: var(--accent);
          margin: 0 0 10px;
          font-weight: 700;
        }
        .split p,
        .cards-section .head p,
        .timeline-intro,
        .process-step p {
          color: var(--muted);
          margin: 0 0 16px;
        }
        .cards-section,
        .timeline-section,
        .spotlight {
          padding: 52px 0;
          border-bottom: 1px solid var(--border);
        }
        .cards-section .head {
          max-width: 70ch;
          margin: 0 auto 40px;
        }
        .cards-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: repeat(2, 1fr);
        }
        .info-card {
          border: 1px solid var(--border);
          border-left: 4px solid var(--accent);
          background: var(--surface);
          padding: 24px 26px;
        }
        .icon-badge {
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
        .timeline-section .wrap {
          max-width: 1760px;
        }
        .timeline-head {
          max-width: 820px;
        }
        .timeline-intro {
          font-size: 1.02rem;
          margin: 0 0 40px;
        }
        .process-steps {
          display: flex;
          flex-direction: column;
        }
        .process-step {
          padding: 36px 0;
          border-bottom: 1px solid var(--border);
        }
        .process-step:first-child {
          padding-top: 0;
        }
        .process-step:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .step-head {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 14px;
        }
        .step-num {
          font-family: var(--sans);
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--accent);
          flex-shrink: 0;
        }
        .process-step h3 {
          font-family: var(--sans);
          font-weight: 700;
          font-size: 1.2rem;
          margin: 0;
          color: var(--text);
        }
        .process-step p {
          font-size: 0.98rem;
          max-width: 760px;
          margin: 0 0 24px;
        }
        .step-shots {
          display: flex;
          gap: 20px;
        }
        .step-shots .ph {
          flex: 1 1 0;
          aspect-ratio: 16 / 9;
          min-height: 0;
        }
        .step-main {
          display: flex;
          gap: 36px;
          align-items: flex-start;
        }
        .step-text {
          flex: 0.8 1 280px;
        }
        .step-main > .ph {
          flex: 1.4 1 420px;
          aspect-ratio: 5 / 4;
          min-height: 0;
        }
        .step-main > .ph.lofi-main {
          aspect-ratio: 16 / 9;
        }
        .step-main > .ph.hifi-main {
          aspect-ratio: 16 / 9;
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
        .step-extra.tight-top {
          margin-top: 20px;
        }
        .step-extra.hifi-tight {
          margin-top: 20px;
        }
        .step-extra .ph {
          aspect-ratio: 16 / 9;
          min-height: 0;
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
        .spotlight-box p {
          color: var(--bg);
          opacity: 0.82;
          font-size: 0.98rem;
          line-height: 1.65;
          margin: 0 0 14px;
        }
        .spotlight-box p:last-child {
          margin-bottom: 0;
        }
        .back-link {
          display: inline-block;
          margin-top: 24px;
          color: var(--muted);
          text-decoration: none;
          font-size: 0.9rem;
        }
        .back-link:hover {
          color: var(--text);
        }
        @media (max-width: 860px) {
          .wrap {
            padding: 0 20px;
          }
          .hero {
            padding: 44px 0 36px;
          }
          .asl-case {
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
          .cards-grid {
            grid-template-columns: 1fr;
          }
          .step-main {
            flex-direction: column;
            gap: 20px;
          }
          .step-text,
          .step-main > .ph {
            flex: 1 1 auto;
            width: 100%;
          }
          .spotlight-box {
            padding: 30px 28px;
          }
        }
        @media (max-width: 480px) {
          .wrap {
            padding: 0 18px;
          }
          .hero h1 {
            font-size: 1.6rem;
          }
          .asl-case {
            padding-top: 68px;
          }
          .step-shots {
            flex-direction: column;
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
            <p className="eyebrow">HCI Coursework · UX Design</p>
            <h1>
              Design for Access: <em>YouTube ASL Translations</em>
            </h1>
            <div className="meta-row">
              <div>
                <span className="label">Team</span>
                Alison, Cynthia, Ian, Lilly, Tanvi
              </div>
              <div>
                <span className="label">Course</span>
                Design for Access
              </div>
            </div>
            <div className="hero-quote">
              <p>What if YouTube didn&apos;t just caption the world, but signed it, too?</p>
            </div>
          </div>
          <div className="ph hero-photo">
            <img className="hero-light" src={HERO_IMAGE_LIGHT} alt="Design for Access hero light mode" />
            <img className="hero-dark" src={HERO_IMAGE_DARK} alt="Design for Access hero dark mode" />
          </div>
        </div>
      </section>

      <section className="split">
        <div className="wrap">
          <p className="kicker">The problem worth solving</p>
          <h2>Captions are not the same as inclusion.</h2>
          <p>
            Closed captions have long been treated as the accessibility solution for Deaf viewers online. But captions
            are an accommodation rooted in the hearing world, they translate spoken language into text without honoring
            the richness of Deaf communication. For the culturally Deaf community, American Sign Language (ASL) is not
            just an alternative to English; it is a distinct, living language tied to identity, history, and
            community.
          </p>
          <p>
            Our team asked: what would it look like to build something that did not just make YouTube accessible, but
            made it genuinely inclusive? Something that gave Deaf users a real choice in how they experience content
            online?
          </p>
        </div>
      </section>

      <section className="cards-section">
        <div className="wrap">
          <div className="head">
            <h2>What we were designing for</h2>
            <p>
              Before sketching a single wireframe, we grounded ourselves in values. Not every dimension needed
              redesigning, we identified what we wanted to actively push on versus what we&apos;d acknowledge but set
              aside for this iteration.
            </p>
          </div>
          <div className="cards-grid">
            <div className="info-card">
              <div className="icon-badge">🔊</div>
              <h3>Empowerment, voice and choice</h3>
              <p>
                Give Deaf users agency over how they watch, centering them as creators and consumers alike, not as edge
                cases to accommodate.
              </p>
            </div>
            <div className="info-card">
              <div className="icon-badge">🌍</div>
              <h3>Cultural and historical values</h3>
              <p>
                Build something that respects the diversity of the Deaf community, across race, gender, and sign
                language backgrounds globally.
              </p>
            </div>
            <div className="info-card">
              <div className="icon-badge">🔒</div>
              <h3>Access and safety</h3>
              <p>
                Already strong, this feature expands content access without being invasive. We kept it, but did not
                need to redesign it.
              </p>
            </div>
            <div className="info-card">
              <div className="icon-badge">🔄</div>
              <h3>Areas we flagged, not fixed</h3>
              <p>
                Peer support, creator feedback loops, and interpreter vetting transparency, real gaps we acknowledged
                for future iterations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="wrap">
          <div className="timeline-head">
            <h2>From napkin sketch to hi-fi</h2>
            <p className="timeline-intro">
              Our design process moved through three distinct phases, and each one sharpened a different aspect of the
              feature.
            </p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-head">
                <span className="step-num">01</span>
                <h3>Individual lo-fi sketches</h3>
              </div>
              <p>
                Each team member independently explored the UI, where does a sign language toggle live? Is it a pip
                window? A settings panel? Seeing five different interpretations of the same problem immediately
                surfaced the key tensions: visibility versus intrusiveness, flexibility versus simplicity.
              </p>
              <div className="step-extra no-top">
                <div className="ph">
                  <img className="ph-img" src="/designforaccesssketch.png" alt="Lo-fi sketches" />
                </div>
              </div>
            </div>

            <div className="process-step">
              <div className="step-main">
                <div className="step-text">
                  <div className="step-head">
                    <span className="step-num">02</span>
                    <h3>Collaborative lo-fi Figma prototype</h3>
                  </div>
                  <p>
                    We converged on a concept: a lightweight control bar embedded in YouTube&apos;s existing player UI,
                    with an ASL toggle surfaced directly alongside the CC button. A picture-in-picture interpreter
                    window could be dragged and resized, giving users full control over placement without obscuring
                    content.
                  </p>
                </div>
                <div className="ph plain lofi-main">
                  <img className="ph-img contain" src="/designforaccesslofi1.png" alt="Collaborative lo-fi 1" />
                </div>
              </div>
              <div className="step-extra tight-top">
                <div className="ph">
                  <img className="ph-img" src="/designforaccesslofi2.png" alt="Collaborative lo-fi 2" />
                </div>
                <div className="ph">
                  <img className="ph-img" src="/designforaccesslofi3.png" alt="Collaborative lo-fi 3" />
                </div>
              </div>
            </div>

            <div className="process-step">
              <div className="step-main">
                <div className="step-text">
                  <div className="step-head">
                    <span className="step-num">03</span>
                    <h3>Hi-fi Figma prototype</h3>
                  </div>
                  <p>
                    We rebuilt the prototype on a real YouTube page. The "Interpretations" sub-menu (nestled under
                    Subtitles/CC) offered multiple sign languages, ASL, BSL, LSF, CSL, ISPL, making it clear this was
                    not just an American feature. The pip window defaulted to the top-right corner but was fully
                    movable and resizable.
                  </p>
                </div>
                <div className="ph plain hifi-main">
                  <img className="ph-img hifi-top" src="/designforaccesshifi1.png" alt="Hi-fi prototype 1" />
                </div>
              </div>
              <div className="step-extra hifi-tight">
                <div className="ph">
                  <img className="ph-img" src="/designforaccesshifi2.png" alt="Hi-fi prototype 2" />
                </div>
                <div className="ph">
                  <img className="ph-img" src="/designforaccesshifi3.png" alt="Hi-fi prototype 3" />
                </div>
                <div className="ph">
                  <img className="ph-img" src="/designforaccesshifi4.png" alt="Hi-fi prototype 4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spotlight">
        <div className="wrap">
          <div className="spotlight-box">
            <h3>The design decision I keep thinking about</h3>
            <p>
              One of our most deliberate choices was where to place the ASL option in the UI. Putting it under
              "Subtitles/CC" was intentional but also complicated, it signals that sign language is a form of
              captioning, which is not quite right culturally. We labeled it "Interpretations" as a sub-category to
              begin drawing that distinction, but it is a conversation that deserves more iteration.
            </p>
            <p>
              It is a small detail that carries a lot of weight: how you categorize something shapes how people
              understand it. UI is never neutral.
            </p>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="wrap">
          <p className="kicker">What I took away</p>
          <h2>Accessible opens the door. Inclusive redesigns the building.</h2>
          <p>
            This project pushed me to think about the difference between accessible and inclusive. Accessible means the
            door is open. Inclusive means you were considered when the building was designed. For Deaf users on
            YouTube, captions are an open door, but this feature is about redesigning the building.
          </p>
          <p>
            Working on a team with five people also reinforced how much richer design gets when you allow divergence
            before convergence. Our lo-fi sketches looked nothing alike, and that was the point. The best ideas in the
            final prototype came from friction between different mental models.
          </p>
          <p>
            If I were to take this further, I&apos;d want to explore community-submitted interpretations, letting Deaf
            creators themselves contribute ASL videos for existing content, building both a feedback loop and a
            platform for Deaf voices. That is the version that would feel truly mutual.
          </p>
          <Link href="/playground" className="back-link">
            Back to Playground
          </Link>
        </div>
      </section>
    </div>
  );
}
