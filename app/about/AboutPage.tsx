"use client";

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
          <div className="mb-6 text-pink">
            <TypingEffect text="About Me" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-8">
              I am a passionate UI/UX designer with an Artificial Intelligence
              and Machine Learning background. I was born and brought up in
              Hyderabad, and I have always been very fond of art. It all started
              when I was twelve years old and had the wonderful opportunity to
              work with an art gallery that represented my school.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              In my undergraduate journey, I have found the perfect mix of
              technical expertise and creative intuition. Ever since I&apos;ve
              tried to bring together experiences that are simple and intuitive
              helping people have an easier and fun life. I worked updating
              website designs for certain clients at Envox Media and helped in
              boosting traffic to their site and the corporation&apos;s site.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Each of the projects that I have done forms a block and has made
              me appreciate the importance of empathy in design. This Website is
              the manifestation of my narrative – a place where I thought out my
              development, artistry, and commitment to this profession.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              My entrepreneurial journey has also been a driving force in my
              career goals. Having been working as a founder for a fashion
              brand, I found out that product design and management are
              essential to capturing the principles of ideals and usefulness. A
              key goal is to apply HCI principles for improvements in the field
              of user interface design and make my brand&apos;s web presence
              reflect the class and grandeur of its products.
            </p>

            <p className="text-lg leading-relaxed">
              Besides the digital world, my other interests include food,
              traveling, and dancing. I try to find beauty in everyday moments
              that inspire me and my work.
            </p>
          </div>

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
              <EyeCatchingButton className="text-lg px-8 py-4">
                Let&apos;s Connect
              </EyeCatchingButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
