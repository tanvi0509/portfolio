"use client";
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { motion } from "motion/react";
import images from "@/assets/images.json";
import Image from "next/image";
import { TypingEffect } from "@/components/ui/typing-effect";
import { EyeCatchingButton } from "@/components/ui/ShinningButton";
import Link from "next/link";

const aboutImage = images.about.mainimage;

export default function AboutPage() {
  return (
    <main className="dark:text-whitish text-blackish container mx-auto px-4 py-16 min-h-screen">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-start">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full sm:w-1/3 flex-shrink-0"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src={aboutImage}
              alt="Portrait photograph"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
              priority
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <div className="mb-6">
            <TypingEffect
              text="About Me"
              className="text-[29px] text-black dark:text-whitish sm:text-[46px] font-normal"
              style={{ fontFamily: "Roboto, sans-serif" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="prose prose-xl dark:prose-invert max-w-none"
          >
            <p className="text-xl leading-relaxed mb-8">
              <span className="opacity-40">Hi, I&apos;m a</span>{" "}
              <span>UI/UX designer</span>{" "}
              <span className="opacity-40">who started in</span>{" "}
              <span>Artificial Intelligence</span>{" "}
              <span className="opacity-40">and somehow ended up caring way more about</span>{" "}
              humans{" "}
              <span className="opacity-40">than machines (no offense to machines). I found my place in</span>{" "}
              <span>Human-Computer Interaction</span>
              <span className="opacity-40">, where I get to obsess over how people think, behave, and occasionally rage-click buttons.</span>
            </p>

            <p className="text-xl leading-relaxed mb-8">
              <span className="opacity-40">I&apos;m very</span>{" "}
              <span>research-driven</span>{" "}
              <span className="opacity-40">and very</span>{" "}
              <span>product-minded</span>
              <span className="opacity-40">, I talk to users, sit with messy insights, and turn them into designs that actually make sense.</span>{" "}
              <span className="opacity-40">I&apos;ve</span>{" "}
              <span>interviewed users, built brands from scratch, designed AI-powered systems</span>{" "}
              <span className="opacity-40">and worked across teams to make decisions rooted in</span>{" "}
              <span>empathy, psychology</span>
              <span className="opacity-40">, and</span>{" "}
              <span>data</span>
              <span className="opacity-40">, not just "this feels right."</span>
            </p>

            <p className="text-xl leading-relaxed mb-8">
              <span className="opacity-40">Whether I&apos;m</span>{" "}
              <span>mapping user journeys or designing interfaces</span>
              <span className="opacity-40"> my goal is simple: build experiences that feel</span>{" "}
              <span>intuitive, useful</span>
              <span className="opacity-40">, and unmistakably</span>{" "}
              <span>human</span>
              <span className="opacity-40">. If someone doesn&apos;t need a tutorial, I consider it a win.</span>
            </p>

            <p className="text-xl leading-relaxed mb-8">
              <span className="opacity-40">I&apos;m currently pursuing my</span>{" "}
              <span>Master&apos;s in HCI</span>{" "}
              <span className="opacity-40">and working toward becoming a</span>{" "}
              <span>product designer in big tech</span>{" "}
              <span className="opacity-40">focused on creating</span>{" "}
              <span>intelligent products</span>{" "}
              <span className="opacity-40">that genuinely improve how people</span>{" "}
              <span>live, learn, and work</span>
            </p>

            <p className="text-xl leading-relaxed">
              <span className="opacity-40">Basically, I design so technology behaves itself, and people don&apos;t have to fight it.</span>
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
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
        </motion.div>
      </div>
    </main>
  );
}
