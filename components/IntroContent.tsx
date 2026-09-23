"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

export function IntroContent() {
  return (
    <div className="flex flex-col items-start w-full pt-1 lg:pt-2 pb-2">
      <div className="max-w-4xl text-blackish dark:text-whitish">
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-6 sm:mt-8 lg:mt-10 mb-5 sm:mb-6 text-lg sm:text-xl font-roboto font-medium tracking-tight text-blackish/65 dark:text-whitish/70"
        >
          Hi, I&apos;m <span className="text-[#FF3E88] font-bold">Tanvi.</span>
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="mt-1 mb-6 sm:mb-8 text-[3.2rem] sm:text-[5.5rem] leading-[0.95] font-roboto font-bold tracking-tight"
        >
          <span className="block text-blackish dark:text-whitish">I used to build</span>
          <span className="block text-blackish dark:text-whitish">the AI.</span>
          <span className="block text-blackish/40 dark:text-whitish/60">Now I design how</span>
          <span className="block text-blackish/40 dark:text-whitish/60">people use it.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
          className="max-w-4xl mt-1 mb-4 sm:mb-5 text-lg sm:text-xl font-medium font-roboto leading-[1.35] text-blackish/70 dark:text-whitish/60"
        >
          <span className="text-[#FF3E88] font-semibold">Product Designer &amp; Developer</span> with a background in
          CS &amp; AI/ML engineering and an MS HCI candidate at UC Santa Cruz, most recently a AI UX Intern at Sales
          Enablement Team at Cohesity.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.7, ease: "easeOut" }}
        className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4"
      >
        <Link href="#work">
          <button className="rounded-full bg-[#FF3E88] px-7 py-3.5 sm:px-9 sm:py-4 text-lg sm:text-[2rem] font-bold text-blackish transition-all duration-300 ease-in-out hover:opacity-90 hover:-translate-y-0.5">
            See the work
          </button>
        </Link>

        <Link
          href="https://www.linkedin.com/in/ktanvireddy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="rounded-full px-7 py-3.5 sm:px-9 sm:py-4 border border-blackish/20 dark:border-whitish/20 text-lg sm:text-[2rem] font-bold text-blackish dark:text-whitish bg-transparent transition-all duration-300 ease-in-out hover:bg-blackish/5 dark:hover:bg-whitish/10 hover:-translate-y-0.5">
            Let&apos;s connect
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
