"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface IntroImageProps {
  src: string;
  alt: string;
}

export function IntroImage({ src, alt }: IntroImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className="relative w-full max-w-[760px] mx-auto"
    >
      <div className="relative aspect-square rounded-full overflow-hidden mt-8 shadow-[0_20px_40px_rgba(2,6,23,0.12)] dark:shadow-[0_20px_40px_rgba(255,255,255,0.04)]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          quality={90}
        />
      </div>
    </motion.div>
  );
}
