"use client";

import React from "react";
import { motion } from "motion/react";
import { TypingEffect } from "./ui/typing-effect";
import { EyeCatchingButton } from "./ui/ShinningButton";
import Link from "next/link";

export function IntroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-col items-start space-y-2"
    >
      <div className="max-w-2xl text-pink">
        <TypingEffect
          text="Hey, This is Tanvi, a UI/UX designer.
          I Design for the future of Technology"
        />
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link
          href="https://www.linkedin.com/in/ktanvireddy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EyeCatchingButton className="font-zcool text-lg px-8 py-2">
            Let&apos;s Connect
          </EyeCatchingButton>
        </Link>
      </motion.div>
    </motion.div>
  );
}
