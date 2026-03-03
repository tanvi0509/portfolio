"use client";

import React from "react";
import Image from "next/image";
import images from "@/assets/images.json";
import { StaggeredFade } from "@/components/ui/typing-effect-2";
import { LettersPullUp } from "@/components/ui/letters-pullup";
import { motion } from "motion/react";

const recensBrandHeroImage = images.recensbrand.heroimage;
const recensHeroImageMobile = images.recensbrand.heroimagemobile;

export default function SwavyaPage() {
  return (
    <main className="w-full dark:text-whitish">
      <section>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="sm:relative w-full h-[60vh] sm:h-[80vh] hidden sm:block"
        >
          <Image
            src={recensBrandHeroImage}
            alt="petals and promises image"
            fill
            objectFit="cover"
            objectPosition="center"
            quality={90}
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="block sm:hidden"
        >
          <Image
            src={recensHeroImageMobile}
            width={420}
            height={420}
            alt="petals and promises image"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            quality={90}
            priority
          />
        </motion.div>
      </section>
      <div
        className="mx-auto max-w-[22em] min-w-[18em] pb-[60px] xl:max-w-[80em] xl:min-w-[30em] h-full xl:mt-0
        sm:max-w-[60em] sm:min-w-[10em]"
      >
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 max-w-5xl w-full mx-auto items-center text-center">
          <div className="flex flex-col items-center">
            <StaggeredFade text="Type" className="text-blackish dark:text-pink" />
            <LettersPullUp text="Brand Work" />
          </div>
          <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-blackish dark:border-pink md:pl-4">
            <StaggeredFade text="Tools" className="text-blackish dark:text-pink" />
            <LettersPullUp text="Figma, Canva, Adobe Illustrator" />
          </div>
          <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-blackish dark:border-pink md:pl-4">
            <StaggeredFade text="Timeline" className="text-blackish dark:text-pink" />
            <LettersPullUp text="Ongoing" />
          </div>
        </section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 px-4 max-w-4xl mx-auto"
        >
          <h2 className="text-[48px] sm:text-[68px] font-bold leading-tight">
            Engineering Confidence.
            <br />
            Dismantling Size Anxiety.
          </h2>
          <p className="mt-6 text-[20px] sm:text-[26px] leading-relaxed text-gray-600 dark:text-gray-300">
            How a proprietary Dual Height-Tier sizing model reduced return rates by 28% and how brand ambassadors concept increased sales.
          </p>
        </motion.section>
        <div className="mt-6 px-4 max-w-4xl mx-auto">
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[20px] sm:text-[22px] text-black dark:text-whitish">url</span>
              <div className="w-28 sm:w-40 h-px bg-black dark:bg-pink" />
            </div>
            <a
              href="https://recens.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[20px] sm:text-[24px] text-black dark:text-whitish hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3h6v6" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14L21 3" />
              </svg>
              recens.co.in
            </a>
          </div>
        </div>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 px-4 max-w-4xl mx-auto"
        >
          <p className="text-[16px] sm:text-[18px] text-black dark:text-whitish">
            At a Glance
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight">
            Three numbers that prove the design worked.
          </h2>
          <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            Before I explain how, here&apos;s what changed after shipping the
            redesign. These aren&apos;t vanity metrics. Each one maps directly
            to a design decision I made.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-stretch">
            <div className="flex-1 bg-white border border-gray-300 rounded-lg sm:rounded-r-none p-6 flex flex-col items-center text-center">
              <p className="text-[36px] sm:text-[48px] font-bold text-black">28%</p>
              <p className="mt-2 text-[14px] sm:text-[16px] text-gray-600">Reduction in return rates, the core business goal</p>
            </div>
            <div className="flex-1 bg-white border border-gray-300 sm:border-l-0 border-t-0 sm:border-t rounded-lg sm:rounded-none p-6 flex flex-col items-center text-center">
              <p className="text-[36px] sm:text-[48px] font-bold text-black">45%</p>
              <p className="mt-2 text-[14px] sm:text-[16px] text-gray-600">Surge in community interaction via Ambassador program</p>
            </div>
            <div className="flex-1 bg-white border border-gray-300 sm:border-l-0 border-t-0 sm:border-t rounded-lg sm:rounded-l-none p-6 flex flex-col items-center text-center">
              <p className="text-[36px] sm:text-[48px] font-bold text-black">8.9/10</p>
              <p className="mt-2 text-[14px] sm:text-[16px] text-gray-600">Fit-certainty score, up from 4.2 in usability testing</p>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 px-4 max-w-4xl mx-auto"
        >
          <p className="text-[16px] sm:text-[18px] text-black dark:text-whitish">
            The Problem
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight">
            It wasn&apos;t a sizing problem.
            <br />
            It was a trust problem.
          </h2>
          <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            Recens sells 100% polyester-free western wear to conscious indian consumers.
            Our sustainability mission depended on low return rates, every
            returned parcel has a carbon footprint. But we had a hidden leak.
          </p>
          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            Users were abandoning carts. Not because they didn&apos;t want the
            product. Because they didn&apos;t trust that it would fit.
          </p>
          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            The standard industry response is &quot;just add a size chart.&quot;
            We had one. It wasn&apos;t working. So before touching the UI, I
            needed to understand why.
          </p>
          <div className="mt-10">
            <div className="w-full bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="text-[20px] sm:text-[24px] font-bold text-black">Problem Statement</h3>
              <p className="mt-3 text-[14px] sm:text-[16px] text-gray-600 leading-relaxed">
                How might we give users virtual fit confidence, without adding friction to the checkout journey, in a way that directly reduces the environmental cost of returns?
              </p>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 px-4 max-w-4xl mx-auto"
        >
          <p className="text-[16px] sm:text-[18px] text-black dark:text-whitish">
            Research
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight">
            40 interviews. One surprising insight.
          </h2>
          <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            I ran 40+ qualitative interviews with users across different body
            types, heights, and shopping habits. I wasn&apos;t just asking
            &quot;what&apos;s wrong with sizing?&quot; I was mapping the
            emotional arc from discovery to return.
          </p>
          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            I expected to hear about waist measurements. Instead, I kept hearing
            about height.
          </p>
          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            The real insight: users weren&apos;t just Small or Large, they were
            &quot;Short-Small&quot; or &quot;Tall-Medium.&quot; Standard charts
            only measured width. They completely ignored the vertical dimension
            of fit.
          </p>
          <div className="mt-10 flex flex-col gap-6">
            <div className="w-full bg-white border border-gray-300 rounded-lg p-6">
              <p className="text-[15px] sm:text-[17px] italic text-gray-700 leading-relaxed">
                &quot;I&apos;m 5&apos;8&quot;, and I usually have to buy a Large just for the length, even though my waist is a Small. It ends up looking like a tent on me.&quot;
              </p>
              <div className="mt-4 border-l-4 border-black pl-4">
                <p className="text-[13px] sm:text-[14px] font-semibold text-gray-500 uppercase tracking-wide">Design pivot this triggered</p>
                <p className="mt-1 text-[14px] sm:text-[16px] text-gray-700 leading-relaxed">
                  Creation of the Dual Height-Tier System, separating Under 5&apos;6&quot; from 5&apos;6&quot;+ to ensure vertical proportionality.
                </p>
              </div>
            </div>
            <div className="w-full bg-white border border-gray-300 rounded-lg p-6">
              <p className="text-[15px] sm:text-[17px] italic text-gray-700 leading-relaxed">
                &quot;I&apos;ve been burned by &apos;cotton blends&apos; that feel like plastic. If I can&apos;t feel the fabric, I&apos;m hesitant to pay a premium price.&quot;
              </p>
              <div className="mt-4 border-l-4 border-black pl-4">
                <p className="text-[13px] sm:text-[14px] font-semibold text-gray-500 uppercase tracking-wide">Design pivot this triggered</p>
                <p className="mt-1 text-[14px] sm:text-[16px] text-gray-700 leading-relaxed">
                  Story-Driven Specs: replacing dry material labels with tactile language like &quot;100% Cotton&quot; and &quot;CARE FOR ME FOREVER&quot; copy to close the fabric trust gap
                </p>
              </div>
            </div>
            <div className="w-full bg-white border border-gray-300 rounded-lg p-6">
              <p className="text-[15px] sm:text-[17px] italic text-gray-700 leading-relaxed">
                &quot;I don&apos;t want to answer ten questions about my body shape just to find a size. I just want to know if the dress will fit my height.&quot;
              </p>
              <div className="mt-4 border-l-4 border-black pl-4">
                <p className="text-[13px] sm:text-[14px] font-semibold text-gray-500 uppercase tracking-wide">Design pivot this triggered</p>
                <p className="mt-1 text-[14px] sm:text-[16px] text-gray-700 leading-relaxed">
                  Rejection of Option C (Sizing Quiz) entirely. Users wanted instant answers, not a diagnostic tool at the point of purchase.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 px-4 max-w-4xl mx-auto"
        >
          <p className="text-[16px] sm:text-[18px] text-black dark:text-whitish">
            Design Process
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight">
            Three paths. One winner. Here&apos;s how I chose.
          </h2>
          <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            Good design decisions aren&apos;t gut feelings, they&apos;re
            testable hypotheses. I framed each option as a hypothesis and
            stress-tested it against what I&apos;d heard in research.
          </p>
          <div className="mt-10 overflow-x-auto rounded-lg border border-gray-300">
            <table className="w-full text-left text-[14px] sm:text-[15px] text-black">
              <thead>
                <tr className="bg-gray-100 text-black">
                  <th className="p-4 border-b border-gray-300 font-semibold">Option</th>
                  <th className="p-4 border-b border-gray-300 font-semibold">Hypothesis</th>
                  <th className="p-4 border-b border-gray-300 font-semibold">Research Signal</th>
                  <th className="p-4 border-b border-gray-300 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-4 border-b border-gray-300 align-top font-medium">A) Static Chart</td>
                  <td className="p-4 border-b border-gray-300 align-top">Standard charts provide lowest friction but fail to address vertical proportionality, leading to high returns.</td>
                  <td className="p-4 border-b border-gray-300 align-top">Already failing. Users confirmed this was the source of 80% of fit-related returns.</td>
                  <td className="p-4 border-b border-gray-300 align-top">Control</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 border-b border-gray-300 align-top font-medium">B) Dual Height-Tier</td>
                  <td className="p-4 border-b border-gray-300 align-top">Splitting sizes by height tier (Under / Over 5&apos;6&quot;) reduces fit anxiety with minimal clicks, targeting a 20%+ drop in returns.</td>
                  <td className="p-4 border-b border-gray-300 align-top">Directly addressed the &quot;Vertical Gap&quot; insight from interviews. Minimum clicks = minimum friction.</td>
                  <td className="p-4 border-b border-gray-300 align-top font-semibold">Winner</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 border-b border-gray-300 align-top font-medium">C) Sizing Quiz</td>
                  <td className="p-4 border-b border-gray-300 align-top">A multi-step quiz offers highest accuracy but creates a friction barrier that decreases checkout conversion by 10–15%.</td>
                  <td className="p-4 border-b border-gray-300 align-top">Users explicitly said they didn&apos;t want to &quot;answer ten questions.&quot; Tool Fatigue risk was too high.</td>
                  <td className="p-4 border-b border-gray-300 align-top">Rejected</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <div className="w-full bg-white border border-gray-300 rounded-lg p-4">
              <h3 className="text-[16px] sm:text-[18px] font-bold text-black">The trade-off I made consciously</h3>
              <p className="mt-2 text-[14px] sm:text-[16px] text-gray-600 leading-relaxed">
                Option C would have been more technically impressive. But it solved a problem users didn&apos;t have (accuracy) by creating a problem they explicitly told me they hated (friction). Option B was the right call, not the flashiest one.
              </p>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 px-4 max-w-4xl mx-auto"
        >
          <h2 className="text-[32px] sm:text-[40px] font-bold leading-tight">
            How it evolved through two real iterations
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            Neither version came out fully formed. Here&apos;s the honest iteration arc:
          </p>
          <div className="mt-12 relative">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-gray-300"></div>

            {/* Iteration 01 */}
            <div className="relative pl-10 pb-14">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-pink bg-black dark:bg-white z-10"></div>
              <p className="text-[14px] sm:text-[15px] text-black dark:text-pink font-medium">Iteration 01</p>
              <h3 className="mt-2 text-[24px] sm:text-[28px] font-bold leading-tight">
                The Digital Sizing Calculator
              </h3>
              <p className="mt-3 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
                My first instinct was a sizing quiz, ask users a series of
                questions, return a personalized recommendation. Technically
                elegant. Users hated it.
              </p>
              <div className="mt-6 w-full bg-white border border-gray-300 rounded-lg p-5">
                <p className="text-[14px] sm:text-[16px] text-gray-700 leading-relaxed">
                  <span className="font-semibold">Feedback:</span> &quot;I just
                  want to know if it fits. Why is this so complicated?&quot;
                  Users felt like they were doing homework before shopping.
                </p>
              </div>
            </div>

            {/* Iteration 02 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-pink bg-black dark:bg-white z-10"></div>
              <p className="text-[14px] sm:text-[15px] text-black dark:text-pink font-medium">Iteration 02</p>
              <h3 className="mt-2 text-[24px] sm:text-[28px] font-bold leading-tight">
                The Dual Height-Tier Chart
              </h3>
              <p className="mt-3 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
                I stripped the quiz entirely. Instead of asking users questions,
                I gave them a single binary choice: your height range. Under
                5&apos;6&quot; or 5&apos;6&quot;+. One click. Instant clarity.
              </p>
              <div className="mt-6 w-full bg-white border border-gray-300 rounded-lg p-5">
                <p className="text-[14px] sm:text-[16px] text-gray-700 leading-relaxed">
                  The design challenge was keeping the table scannable, not
                  letting it feel like a &quot;dense spreadsheet.&quot; I used
                  visual hierarchy and tight copy to make each cell feel like a
                  direct answer, not a data point.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 px-4 max-w-4xl mx-auto"
        >
          <p className="text-[16px] sm:text-[18px] text-black dark:text-whitish">
            The Solution
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight">
            Three interlocking design decisions.
          </h2>
          <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            The final product wasn&apos;t one big feature, it was three smaller
            decisions that reinforced each other. Remove any one of them and the
            system breaks.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-300 rounded-lg p-6 min-h-[220px] h-full">
              <p className="text-[32px]">📐</p>
              <h3 className="mt-3 text-[20px] sm:text-[22px] font-bold text-black">Dual Height-Tier Sizing</h3>
              <p className="mt-2 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                XS–XL split across two height bands (Under 5&apos;6&quot; and 5&apos;6&quot;+). Users filter by height first, then width, aligning silhouette before they see a single measurement.
              </p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-6 min-h-[220px] h-full">
              <p className="text-[32px]">✍️</p>
              <h3 className="mt-3 text-[20px] sm:text-[22px] font-bold text-black">Story-Driven Technical Specs</h3>
              <p className="mt-2 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                As a Co-founder of Recens, I recognized that transparency is our most effective sales tool. When a user can mentally &apos;feel&apos; the fabric through the Composition and visualize the scale via the Model Information, the &apos;Trust Gap&apos; disappears. We aren&apos;t just selling clothes; we are engineering a sense of physical security in a digital space.
              </p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-6 min-h-[220px] h-full">
              <p className="text-[32px]">🤝</p>
              <h3 className="mt-3 text-[20px] sm:text-[22px] font-bold text-black">Ambassador Program Flow</h3>
              <p className="mt-2 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                &quot;Spread the Recens love, earn a commission on every dress you sell.&quot; A commission-based program nested in the footer, accessible to power users, invisible to casual shoppers.
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="overflow-hidden rounded-lg w-full max-w-md">
              <Image
                src="/recensintialwireframe.jpeg"
                alt="Recens initial wireframe"
                width={480}
                height={270}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-2">Initial wireframe of product page</p>
          <div className="mt-6 flex justify-center">
            <div className="overflow-hidden rounded-lg w-full max-w-md">
              <Image
                src="/recensiteratedwireframe.jpeg"
                alt="Recens iterated wireframe"
                width={480}
                height={270}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-2">Wireframe of product page after research</p>
          <div className="mt-6 flex flex-col gap-6">
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-lg w-full max-w-md">
                <Image
                  src="/productpage1.jpeg"
                  alt="Product page 1"
                  width={480}
                  height={320}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-lg w-full max-w-md">
                <Image
                  src="/productpage2.jpeg"
                  alt="Product page 2"
                  width={480}
                  height={320}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">Final Hi‑Fi prototypes of product page</p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 px-4 max-w-4xl mx-auto"
        >
          <p className="text-[16px] sm:text-[18px] text-black dark:text-whitish">
            Impact
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight">
            What actually changed.
          </h2>
          <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            The usability study used a within-subjects design with
            counterbalancing to mitigate learning effects. Users tested Version A
            (static chart) and Version B (dual-tier) in randomized order.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="overflow-hidden rounded-lg w-full max-w-xl">
              <Image
                src="/linegraphwhite.png"
                alt="Study line graph"
                width={600}
                height={180}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
          {/* Rectangles/stat blocks removed as requested */}
          <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            The 28% return reduction wasn&apos;t just a business win, it was the
            sustainability mission made measurable. Every return avoided is
            packaging saved, a delivery truck trip removed from the equation.
          </p>
          <div className="mt-8 flex flex-col gap-6">
            <div className="overflow-hidden rounded-lg w-full max-w-3xl mx-auto">
              <Image src="/fun1.png" alt="fun 1" width={800} height={480} className="object-cover w-full h-auto" priority />
            </div>
            <div className="overflow-hidden rounded-lg w-full max-w-3xl mx-auto">
              <Image src="/fun2.png" alt="fun 2" width={800} height={480} className="object-cover w-full h-auto" priority />
            </div>
            <div className="overflow-hidden rounded-lg w-full max-w-3xl mx-auto">
              <Image src="/fun3.png" alt="fun 3" width={800} height={480} className="object-cover w-full h-auto" priority />
            </div>
          </div>
          <p className="mt-4 text-center text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            The website features a glassmorphic header and a redesigned footer for streamlined access to key information, leveraging modern UI layouts to deliver a high-end aesthetic with intuitive usability
          </p>
          
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 px-4 max-w-4xl mx-auto"
        >
          <p className="text-[16px] sm:text-[18px] text-black dark:text-whitish">
            Reflection
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight">
            What I&apos;d do differently, and what&apos;s next.
          </h2>
          <div className="mt-10 w-full bg-white border border-gray-300 rounded-lg p-6">
            <h3 className="text-[20px] sm:text-[24px] font-bold text-black">What I learned</h3>
            <p className="mt-3 text-[14px] sm:text-[16px] text-gray-600 leading-relaxed">
              The most important design decision I made on this project wasn&apos;t the UI. It was choosing to reject Option C. The pressure to build the more technically impressive solution is real, especially as a founder trying to prove competence. But the interviews were clear, and I trusted them over my own instinct to over-engineer.
            </p>
            <p className="mt-4 text-[14px] sm:text-[16px] text-gray-600 leading-relaxed">
              I also learned that UX is inseparable from business strategy. Every pixel I changed served a measurable goal. That&apos;s the kind of designer I want to be at scale.
            </p>
            <div className="mt-5 inline-block bg-gray-100 border border-gray-300 rounded-full px-4 py-2">
              <p className="text-[13px] sm:text-[14px] text-gray-700 font-medium">Strategic Pragmatism: The skill only a Designer-Founder develops</p>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 px-4 max-w-4xl mx-auto"
        >
          <h2 className="text-[32px] sm:text-[40px] font-bold leading-tight">
            What I might build next
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-stretch gap-6">
            <div className="flex-1 bg-white border border-gray-300 rounded-lg p-6 flex flex-col">
              <p className="text-[28px] sm:text-[32px] font-bold text-black">01</p>
              <h3 className="mt-2 text-[18px] sm:text-[20px] font-bold text-black">AR Fabric Viewer</h3>
              <p className="mt-2 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                Let users see the weave and texture of 100% cotton at zoom, closing the tactile trust gap that copy alone can&apos;t fully bridge.
              </p>
            </div>
            <div className="flex-1 bg-white border border-gray-300 rounded-lg p-6 flex flex-col">
              <p className="text-[28px] sm:text-[32px] font-bold text-black">02</p>
              <h3 className="mt-2 text-[18px] sm:text-[20px] font-bold text-black">Camera-to-Size Mapping</h3>
              <p className="mt-2 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                AI-driven body measurement via phone camera, the logical next step from the dual-tier model to true personalized fit confidence.
              </p>
            </div>
            <div className="flex-1 bg-white border border-gray-300 rounded-lg p-6 flex flex-col">
              <p className="text-[28px] sm:text-[32px] font-bold text-black">03</p>
              <h3 className="mt-2 text-[18px] sm:text-[20px] font-bold text-black">Ambassador Analytics Dashboard</h3>
              <p className="mt-2 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                Give ambassadors visibility into their community impact, conversion data, social reach, commission trends, to deepen the retention loop.
              </p>
            </div>
          </div>
          
        </motion.section>
      </div>
    </main>
  );
}

