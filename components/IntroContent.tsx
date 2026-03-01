"use client";

import React from "react";
import { motion } from "motion/react";
import { EyeCatchingButton } from "./ui/ShinningButton";
import { Typewriter } from "./ui/Typewriter";
import Link from "next/link";

export function IntroContent() {
  return (
    <div className="flex flex-col items-start h-full justify-between">
      <div className="max-w-2xl text-blackish dark:text-pink">
        {/* 1) "Product Designer" appears first */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-7xl sm:text-8xl font-inter font-bold mt-8 mb-4 text-blackish dark:text-whitish tracking-normal uppercase"
        >
          Product <span className="block text-blackish/45 dark:text-whitish/45">Designer</span>
        </motion.h1>

        {/* 2) Quote appears second */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="mb-6 min-h-[72px] lg:min-h-[88px]"
        >
          <div className="border-l-4 border-blackish dark:border-pink inline-block pl-3">
            <Typewriter
              text={"\"Design is more than pixels; it's the bridge between algorithmic logic and human empathy.\""}
              className="text-xl lg:text-2xl font-inter tracking-normal font-bold"
              speed={30}
            />
          </div>
        </motion.div>

        {/* 3) Bio paragraph appears third */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5, ease: "easeOut" }}
          className="bio-small text-xl sm:text-2xl font-semibold font-inter tracking-normal text-gray-700 dark:text-gray-200"
        >
          <span className="text-blackish dark:text-whitish font-bold text-2xl sm:text-3xl">I&apos;m Tanvi,</span> a <span className="text-blackish dark:text-whitish">UI/UX Designer</span> with a foundation in <span className="text-blackish dark:text-whitish">AI/ML</span> Engineering and a <span className="text-blackish dark:text-whitish">Master&apos;s in HCI</span> at <span className="text-blackish dark:text-whitish">UC Santa Cruz</span>. I specialize in translating complex, <span className="text-blackish dark:text-whitish">data-heavy systems</span> into intuitive digital experiences. I don&apos;t just move pixels; I architect with an <span className="text-blackish dark:text-whitish">&quot;under-the-hood&quot; understanding</span> of the full-stack from backend data logic to frontend accessibility. By leveraging <span className="text-blackish dark:text-whitish">AI optimally</span> as both a design tool and a functional engine, I build strategies that ensure <span className="text-blackish dark:text-whitish">high-fidelity aesthetics</span> are always grounded in <span className="text-blackish dark:text-whitish">technical feasibility.</span>
        </motion.p>
      </div>

      {/* 4) Button appears last */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 3.2, ease: "easeOut" }}
        className="mt-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="https://www.linkedin.com/in/ktanvireddy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EyeCatchingButton className="rounded-full px-6 py-5 sm:px-8 sm:py-6 border border-brown text-xl sm:text-2xl transition-all duration-300 ease-in-out hover:bg-hovercolor hover:text-brown">
            Let&apos;s Connect
          </EyeCatchingButton>
        </Link>
      </motion.div>
    </div>
  );
}
