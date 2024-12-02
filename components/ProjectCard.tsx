"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

interface ProjectCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

export function ProjectCard({
  src,
  alt,
  title,
  description,
  href,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1,
      }}
    >
      <Link href={href} className="block group">
        <motion.div
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.95 }}
          className="relative rounded-lg"
        >
          <Image
            src={src}
            alt={alt}
            width={700}
            height={700}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            quality={90}
            priority={index < 2}
          />
        </motion.div>

        <motion.div
          className="px-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          <h2 className="font-zcool text-blackish dark:text-whitish text-2xl leading-tight font-normal mb-2 border-b border-pink pb-2">
            {title}
          </h2>
          <p className="dark:text-neutral-300 text-blackish text-lg">
            {description}
          </p>
        </motion.div>
      </Link>
    </motion.div>
  );
}
