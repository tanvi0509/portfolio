"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import images from "@/assets/images.json";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { StaggeredFade } from "@/components/ui/typing-effect-2";
import { LettersPullUp } from "@/components/ui/letters-pullup";
// SwipeCarousel and EyeCatchingButton removed — unused in this page

const envoxheroimage = images.envox.heroimage;
const envoxheroimagemobile = images.envox.heroimagemobile;

export default function EnvoxPage() {
  return (
    <main className="dark:text-whitish w-full">
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
            src={envoxheroimage}
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
            src={envoxheroimagemobile}
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
        className="mx-auto max-w-[22em] min-w-[18em] pb-[60px] xl:max-w-[80em] xl:min-w-[30em] h-full xl:mx-auto xl:mt-0 sm:max-w-[60em] sm:min-w-[10em] sm:mx-auto"
      >
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 max-w-5xl w-full mx-auto items-center text-center"
        >
          <div className="flex flex-col items-center">
            <StaggeredFade text="Type" className="text-pink" />
            <LettersPullUp text="Intership" />
          </div>
          <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-pink md:pl-4">
            <StaggeredFade text="Tools" className="text-pink" />
            <LettersPullUp text="Figma, Canva, Adobe Illustrator" />
          </div>
          <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-pink md:pl-4">
            <StaggeredFade text="Timeline" className="text-pink" />
            <LettersPullUp text="2 May - 2 August 2024" />
          </div>
        </motion.section>

        

        

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 px-4 max-w-4xl mx-auto"
        >
          <h2 className="text-[48px] sm:text-[68px] font-bold leading-tight text-[#3A9AFF]">
            From Dead Ends to a Conversion Engine.
          </h2>
          <p className="mt-6 text-[20px] sm:text-[26px] leading-relaxed text-gray-600 dark:text-gray-300">
            How a mobile-first redesign eliminated &quot;Tech Overwhelm,&quot; built instant credibility, and drove a 40% surge in engagement for Envox Media.
          </p>
        </motion.section>

        {/* The Problem */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 px-4 max-w-4xl mx-auto"
        >
          <p className="text-[16px] sm:text-[18px] text-[#3A9AFF]">The Problem</p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight">
            A "bland" site was actively losing high-value leads.
          </h2>
          <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            Envox Media had real capability. The website didn't reflect it. High-value leads, time-constrained entrepreneurs, were bouncing before ever reaching the agency's strongest work. This wasn't a visual polish problem. It was a trust architecture problem.
          </p>
          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            The risk wasn't just aesthetic. Every "dead end" in the navigation was a missed contract.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch"
          >
            <div className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col justify-center h-40 sm:h-48 text-black">
              <div className="text-[28px]">🌀</div>
              <h4 className="mt-2 text-[18px] sm:text-[20px] font-semibold">Tech Overwhelm</h4>
              <p className="mt-2 text-[14px] sm:text-[15px] text-gray-600">
                A fragmented 8-item menu created decision paralysis for mobile users already context-switching on the go.
              </p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col justify-center h-40 sm:h-48 text-black">
              <div className="text-[28px]">🚪</div>
              <h4 className="mt-2 text-[18px] sm:text-[20px] font-semibold">Dead Ends</h4>
              <p className="mt-2 text-[14px] sm:text-[15px] text-gray-600">
                No &quot;next step&quot; after viewing work. Users who wanted to explore further had nowhere to go, and bounced.
              </p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col justify-center h-40 sm:h-48 text-black">
              <div className="text-[28px]">🕳️</div>
              <h4 className="mt-2 text-[18px] sm:text-[20px] font-semibold">Trust Gap</h4>
              <p className="mt-2 text-[14px] sm:text-[15px] text-gray-600">
                Social proof (testimonials) lived on a separate page. By the time users found it, they'd already lost confidence.
              </p>
            </div>
          </motion.div>

          <div className="mt-10">
            <div className="w-full bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="text-[22px] sm:text-[26px] font-bold font-roboto text-black">How Might We</h3>
              <p className="mt-3 text-[16px] sm:text-[18px] text-gray-600 leading-relaxed">
                How might we create a high-conversion engine that builds immediate trust for mobile-first, time-constrained entrepreneurs, without sacrificing the aesthetic sophistication that proves Envox's worth?
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
          <p className="text-[16px] sm:text-[18px] text-[#3A9AFF]">The Users</p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight">
            Two personas. A genuine tension between their needs.
          </h2>
          <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            Stakeholder interviews surfaced two primary archetypes. Their requirements pulled in opposite directions, the design challenge was resolving that tension, not picking a side.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start max-w-6xl mx-auto"
          >
            <div className="flex flex-col items-stretch gap-0">
              <Image
                src="/advaita.png"
                alt="Advaita persona"
                width={1200}
                height={900}
                className="w-full h-auto max-h-[36rem] md:max-h-[56rem] object-contain rounded-lg"
              />
              <div className="p-4 mt-6">
                <h3 className="text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">Her UX Requirement</h3>
                <h4 className="text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">The &quot;Wow&quot; Factor</h4>
                <p className="mt-2 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
                  She needs to see high-fidelity animations and a sleek mobile flow to believe Envox is modern enough for her brand.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-0">
              <Image
                src="/deep.png"
                alt="Deep persona"
                width={1200}
                height={900}
                className="w-full h-auto max-h-[36rem] md:max-h-[56rem] object-contain rounded-lg"
              />
              <div className="p-4 mt-6">
                <h3 className="text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">His UX Requirement</h3>
                <h4 className="text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">The &quot;Two-Tap&quot; IA &amp; Social Proof</h4>
                <p className="mt-2 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
                  He needs simplified navigation to find the Services page instantly and a Testimonial section to bridge his trust gap.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <div className="my-8 max-w-4xl mx-auto px-4">
          <div className="w-full bg-pink/10 dark:bg-pink/20 rounded-lg border border-pink/20 p-6">
            <p className="text-[12px] sm:text-[13px] text-pink font-semibold">Note</p>
            <p className="mt-2 text-[14px] sm:text-[16px] leading-relaxed text-gray-700 dark:text-gray-200">
              The tension I had to resolve: Advaita needs visual richness. Deep needs speed and clarity. Over-engineering for Advaita kills Deep's experience. Under-designing loses Advaita immediately. The solution had to be high-fidelity and frictionless, not a compromise, but a synthesis.
            </p>
          </div>
        </div>

        

        <section className="mt-16 px-4 max-w-4xl mx-auto">
          <p className="text-[16px] sm:text-[18px] text-[#3A9AFF]">The Exploartion</p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight mb-3">
            Three questions I couldn't answer yet, and how I worked through them.
          </h2>
          <p className="text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
            This is the phase most portfolios skip. Before touching Figma, I sat with three design questions that didn't have obvious answers. Working through each one shaped every downstream decision.
          </p>
          <div className="mt-4 space-y-3">
            <details className="bg-white/5 p-4 rounded-md min-h-[4rem]">
              <summary className="cursor-pointer font-semibold text-lg">How might we deliver a high-energy &quot;wow&quot; factor without triggering &quot;tech overwhelm&quot;?</summary>
              <div className="mt-2 text-base">We achieved this by prioritizing purposeful motion. Instead of decorative clutter, I used performance-optimized animations to guide the user’s eye toward key information, ensuring the visuals acted as a bridge to engagement rather than a barrier.</div>
            </details>

            <details className="bg-white/5 p-4 rounded-md min-h-[4rem]">
              <summary className="cursor-pointer font-semibold text-lg">Why did the design pivot from a feature-rich desktop layout to a streamlined, single-column flow?</summary>
              <div className="mt-2 text-base">The original brief implied desktop-first. I almost built it. Then stakeholder interviews with the CEO and Analytics team changed everything, the majority of potential clients were accessing the site via mobile devices while on the go. A feature-rich desktop layout would have been technically impressive and functionally wrong for the actual audience.</div>
            </details>

            <details className="bg-white/5 p-4 rounded-md min-h-[4rem]">
              <summary className="cursor-pointer font-semibold text-lg">How did you restructure the IA to balance visual flair with technical efficiency?</summary>
              <div className="mt-2 text-base">The competitor audit of 5 rival agencies revealed a consistent market pattern: agencies chose between being memorable or being usable. The memorable ones had chaotic navigation. The usable ones were forgettable. This gap set the design constraint precisely, Envox needed to own the overlap.</div>
            </details>
          </div>
        </section>

        

        <section className="mt-16 px-4 max-w-4xl mx-auto">
          <p className="text-[16px] sm:text-[18px] text-[#3A9AFF]">The Research</p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight">
            Two data sources. Each one changed the direction of the design.
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 grid grid-cols-1 gap-4"
          >
            <div className="w-full rounded-lg overflow-hidden border border-gray-300 shadow-sm">
              <div className="bg-[#3A9AFF] text-white px-6 py-3 flex items-center justify-between">
                <div className="uppercase text-[12px] tracking-widest opacity-90">THE "WHY"</div>
                <div className="bg-[#24324d] text-white text-xs font-medium px-3 py-1 rounded-md">STAKEHOLDER DATA</div>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-[22px] sm:text-[26px] font-bold font-roboto text-black">The Mobile-First Pivot</h3>
                <p className="mt-3 text-[16px] sm:text-[18px] text-gray-600 leading-relaxed">
                  Through interviews with the CEO and Analytics team, I identified that the primary users were entrepreneurs accessing the site via mobile devices while on the go. This single data point invalidated the existing desktop-first layout and forced a complete rethink. Stakeholder data isn’t a substitute for user research, but it can surface constraints that change everything before you’ve wasted time on the wrong approach.
                </p>
              </div>
            </div>

            <div className="w-full rounded-lg overflow-hidden border border-gray-300 shadow-sm">
              <div className="bg-[#3A9AFF] text-white px-6 py-3 flex items-center justify-between">
                <div className="uppercase text-[12px] tracking-widest opacity-90">COMPETITIVE LENS</div>
                <div className="bg-[#24324d] text-white text-xs font-medium px-3 py-1 rounded-md">5-AGENCY AUDIT</div>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-[22px] sm:text-[26px] font-bold font-roboto text-black">The Memorability Gap</h3>
                <p className="mt-3 text-[16px] sm:text-[18px] text-gray-600 leading-relaxed">
                  My competitor audit showed that rivals were too simple to be memorable, or too visually complex to convert. Envox needed a bold identity that didn't sacrifice usability. Every rival had chosen one or the other. That gap was the strategic opening: high-fidelity aesthetics paired with radical functional simplicity. Not a middle ground, both at once.
                </p>

                <div className="mt-6">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                    <Link
                      href="https://docs.google.com/spreadsheets/d/1akK4aqlcHsP0_6vSQpfVVoNOmBKzs8cvDXQlsWWMvhs/edit?usp=sharing&resourcekey=0-uo35i9PnKke6CZ0VNJgHcQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="rounded-md bg-[#3A9AFF] text-white px-5 py-3 sm:px-6 sm:py-4 text-base sm:text-lg font-semibold shadow-lg">
                        Check it Out!
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          
        </section>

        

        <section className="mt-16 px-4 max-w-4xl mx-auto">
          <p className="text-[16px] sm:text-[18px] text-[#3A9AFF]">Information Architecture</p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight">
            Rebuilding the system from three failure points up.
          </h2>

          <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300 font-semibold">
            Each structural problem required its own fix. I didn't redesign the site, I redesigned the logic underneath it.
          </p>

          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300 font-semibold">
            Navigation: 8 items → 5 pillars
          </p>

          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            I condensed the fragmented 8-menu hierarchy into a single, intuitive hamburger menu with 5 core pillars: Home, About, Services, Work, Contact. Strategic consolidation to ensure a "two-tap" journey to any destination, satisfying Deep's efficiency requirement without sacrificing Advaita's clean mobile experience.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex justify-center mt-4"
          >
            <div className="w-full max-w-6xl">
              <Image
                src="/Architecture.png"
                alt="Information architecture diagram"
                width={2000}
                height={1200}
                className="object-contain w-full h-auto max-h-[80vh]"
              />
            </div>
          </motion.div>
        </section>

        

        <section className="mt-16 px-4 max-w-4xl mx-auto">
          <p className="text-[16px] sm:text-[18px] text-[#3A9AFF]">Wireframes</p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight">
            Lo-fi to Hi-fi, the structural logic made visible.
          </h2>

          <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            Wireframes were used to test the IA before committing to visual design. The goal was to validate the two-tap journey and the Conversational Loop before aesthetics entered the picture.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col md:flex-row justify-center items-center gap-2 md:space-x-0 mt-10"
          >
            <div className="flex-1 max-w-full shadow-xl transform transition-all duration-300 ease-in-out md:hover:scale-110 md:hover:z-10">
              <Image
                src="/wireframe1.webp"
                alt="wireframe 1"
                width={499}
                height={743}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="flex-1 max-w-full shadow-2xl transform transition-all duration-300 ease-in-out md:hover:scale-110 md:hover:z-10">
              <Image
                src="/wireframe2.webp"
                alt="wireframe 2"
                width={334}
                height={598}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="flex-1 max-w-full shadow-2xl transform transition-all duration-300 ease-in-out md:hover:scale-110 md:hover:z-10">
              <Image
                src="/wireframe3.webp"
                alt="wireframe 3"
                width={415}
                height={692}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="flex-1 max-w-full shadow-2xl transform transition-all duration-300 ease-in-out md:hover:scale-110 md:hover:z-10">
              <Image
                src="/wireframe4.webp"
                alt="wireframe 4"
                width={476}
                height={714}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="flex-1 max-w-full shadow-2xl transform transition-all duration-300 ease-in-out md:hover:scale-110 md:hover:z-10">
              <Image
                src="/wireframe5.webp"
                alt="wireframe 5"
                width={411}
                height={687}
                className="object-contain w-full h-auto"
              />
            </div>
          </motion.div>
        </section>

        <div className="my-8 max-w-4xl mx-auto px-4">
          <div className="w-full bg-pink/10 dark:bg-pink/20 rounded-lg border border-pink/20 p-6">
            <p className="text-[12px] sm:text-[13px] text-pink font-semibold">Note</p>
            <p className="mt-2 text-[14px] sm:text-[16px] leading-relaxed text-gray-700 dark:text-gray-200">
              Wireframes focused on interaction cost, not aesthetics. The primary test: can Deep reach Services in 2 taps from any entry point? Can Advaita scan the homepage in under 5 seconds and form a "this is premium" impression?
            </p>
          </div>
        </div>

        {/* Navigation Block */}
        

        <section className="mt-16 px-4 max-w-4xl mx-auto">
          <p className="text-[16px] sm:text-[18px] text-[#3A9AFF]">The Solution</p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight text-pink text-left mb-4">
            Navigation
          </h2>
          <h3 className="text-[20px] font-medium mb-6 text-left">The Mobile Command Center</h3>

          <div className="flex flex-col md:flex-row gap-8 items-center ml-2">
            {/* Info - Left */}
            <div className="md:w-1/2 space-y-4">
              <p className="text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
                I condensed a fragmented 8-menu hierarchy into a single, intuitive Hamburger Menu to minimize interaction cost for users on the move.
              </p>
              <p className="text-[16px] sm:text-[18px] leading-relaxed">
                <strong>Strategic Consolidation:</strong> <span className="text-gray-600 dark:text-gray-300">Prioritized 5 core pillars, Home, About, Services, Work, and Contact, ensuring a &quot;two-tap&quot; journey to any destination.</span>
              </p>
              <p className="text-[16px] sm:text-[18px] leading-relaxed">
                <strong>The Logic:</strong> <span className="text-gray-600 dark:text-gray-300">Optimized the menu&apos;s technical performance to ensure a zero-lag experience, satisfying Advaita&apos;s need for high-speed efficiency.</span>
              </p>
              <p className="text-[16px] sm:text-[18px] leading-relaxed">
                <strong>UX Win:</strong> <span className="text-gray-600 dark:text-gray-300">Reduced &quot;Tech Overwhelm&quot; by providing a clean, persistent entry point that respects the user&apos;s mobile-first context.</span>
              </p>
            </div>
            {/* Image - Right */}
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/envoxheromockup.PNG"
                  alt="Navigation design"
                  width={600}
                  height={400}
                  className="rounded-lg object-contain"
                />
              </div>
          </div>
        </section>

        {/* Placement Block */}
        

        <section className="mt-16 px-4 max-w-4xl mx-auto">
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight text-pink text-left mb-4">
            Placement
          </h2>
          <h3 className="text-[20px] font-medium mb-6 text-left">Solving for the &quot;Trust Gap&quot;</h3>

          <div className="flex flex-col md:flex-row gap-8 items-center ml-2">
            {/* Image - Left */}
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/envoxworkmockup.PNG"
                  alt="Placement design"
                  width={600}
                  height={400}
                  className="rounded-lg object-contain"
                />
              </div>
            {/* Info - Right */}
            <div className="md:w-1/2 space-y-4">
              <p className="text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
                To solve the &quot;Trust Gap&quot; for users like Deep, I engineered a UI pattern that presents evidence exactly where it matters most: alongside the work.
              </p>
              <p className="text-[16px] sm:text-[18px] leading-relaxed">
                <strong>Layered Validation:</strong> <span className="text-gray-600 dark:text-gray-300">Client testimonials play directly on top of work images with a timed delay.</span>
              </p>
              <p className="text-[16px] sm:text-[18px] leading-relaxed">
                <strong>Frictionless Context:</strong> <span className="text-gray-600 dark:text-gray-300">By merging proof and output into a single Snippet, I eliminated the need for users to navigate away to a separate testimonials page.</span>
              </p>
              <p className="text-[16px] sm:text-[18px] leading-relaxed">
                <strong>The Loop:</strong> <span className="text-gray-600 dark:text-gray-300">Each snippet concludes with an &quot;Explore&quot; CTA, proactively guiding the user into the next phase of the brand narrative without hitting a dead end.</span>
              </p>
            </div>
          </div>
        </section>

        

        <section className="mt-16 px-4 max-w-4xl mx-auto">
          {/* The Reflection headings removed per request */}
          {/* SwipeCarousel removed per request */}
        </section>

        

        <section className="mt-16 px-4 max-w-4xl mx-auto">
          <p className="text-[16px] sm:text-[18px] text-[#3A9AFF]">The Impact</p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight">
            Three outcomes. Each traced to a design decision.
          </h2>

          <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            The redesign moved the metrics that matter for a B2B agency. I don't report numbers without tracing them to the decision that produced them.
          </p>

          {/* Impact outcomes removed per request */}
        </section>

        <div className="mt-8 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <div className="w-full bg-white border border-gray-300 rounded-lg p-8 min-h-[12rem]">
              <h4 className="text-[20px] sm:text-[22px] font-semibold text-black">40%</h4>
              <p className="mt-3 text-[16px] sm:text-[18px] text-gray-600">Surge in user engagement. Attributed to the Conversational Loop, users who previously hit dead ends now complete the full brand narrative through to Contact.</p>
            </div>
            <div className="w-full bg-white border border-gray-300 rounded-lg p-8 min-h-[12rem]">
              <h4 className="text-[20px] sm:text-[22px] font-semibold text-black">8→5</h4>
              <p className="mt-3 text-[16px] sm:text-[18px] text-gray-600">Navigation items consolidated. Eliminated decision paralysis. Deep reaches Services in 2 taps. Advaita gets a clean, uncluttered mobile entry point.</p>
            </div>
            <div className="w-full bg-white border border-gray-300 rounded-lg p-8 min-h-[12rem]">
              <h4 className="text-[20px] sm:text-[22px] font-semibold text-black">0</h4>
              <p className="mt-3 text-[16px] sm:text-[18px] text-gray-600">Dead ends in the user journey. Every page exits into the next phase. The site now functions as an active lead-nurturing sequence.</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto px-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="https://www.figma.com/proto/hcBmhqCOrmw4dRg5xg0vV2/home-page?node-id=2-2&t=MtfPBwUAYJceMe5B-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-md bg-[#3A9AFF] text-white px-5 py-3 sm:px-6 sm:py-4 text-base sm:text-lg font-semibold shadow-lg">
                Check it Out!
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="my-8 max-w-4xl mx-auto px-4">
          <div className="w-full bg-pink/10 dark:bg-pink/20 rounded-lg border border-pink/20 p-6">
            <p className="text-[12px] sm:text-[13px] text-pink font-semibold">Note</p>
            <p className="mt-2 text-[14px] sm:text-[16px] leading-relaxed text-gray-700 dark:text-gray-200">
              The 40% engagement increase came from structural change, not cosmetic polish. The same users who were bouncing at dead ends are now completing the full brand narrative, from entry to Contact.
            </p>
          </div>
        </div>

        <section className="mt-8 px-4 max-w-4xl mx-auto">
          <p className="text-[16px] sm:text-[18px] text-[#3A9AFF]">Reflection</p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight">
            What I learned. What I'd do differently..
          </h2>
          <div className="mt-6">
            <div className="w-full bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-[22px] sm:text-[26px] font-bold font-roboto text-black dark:text-white">What I Learned</h3>
              <p className="mt-3 text-[16px] sm:text-[18px] leading-relaxed text-gray-900 dark:text-gray-200">
                The most important skill this project built wasn't visual, it was diagnostic. I had to resist the instinct to start in Figma and instead map the system failure first. The three root causes (navigation overload, displaced proof, dead-end pages) would have been invisible to a designer who opened Figma on day one.
              </p>

              <p className="mt-3 text-[16px] sm:text-[18px] leading-relaxed text-gray-900 dark:text-gray-200">
                I also learned that stakeholder data is a design constraint, not background context. The CEO's mobile analytics were the single most important input on this project. Without them, I might have built a technically impressive desktop experience for an audience that accesses the site entirely on mobile.
              </p>

              <p className="mt-3 text-[16px] sm:text-[18px] leading-relaxed text-gray-900 dark:text-gray-200">
                I bridge the gap between HCI research and technical development, delivering products that hit business goals and user needs simultaneously.
              </p>

              <p className="mt-4 text-[12px] sm:text-[13px] uppercase tracking-wider text-gray-500 dark:text-gray-400">SYSTEMS THINKING + STAKEHOLDER INTEGRATION</p>
            </div>
          </div>
        </section>

        <section className="mt-12 px-4 max-w-4xl mx-auto">
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold leading-tight">
            Next Steps: ranked by expected impact
          </h2>

          <div className="mt-6 space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-[18px] font-semibold">01 Animation Speed A/B Test</h3>
              <p className="mt-2 text-[16px] sm:text-[18px] leading-relaxed">
                Test 3 animation durations (150ms / 300ms / 500ms) against CTA click-through. Hypothesis: faster transitions increase conversion for high-speed users without sacrificing perceived quality.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold">02 Moderated Usability Study</h3>
              <p className="mt-2 text-[16px] sm:text-[18px] leading-relaxed">
                Validate the "two-tap to Services" hypothesis with observed behavior, not just analytics. Specifically test whether Deep's archetype finds testimonials inline or still seeks a dedicated proof page.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold">03 Personalized Entry Routing</h3>
              <p className="mt-2 text-[16px] sm:text-[18px] leading-relaxed">
                A micro-interaction at first load to route Advaita-type users toward portfolio-first and Deep-type users toward case studies with proof. Reduces time-to-relevant-content for both personas.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
