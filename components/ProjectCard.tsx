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
  role?: string;
  extra?: string;
  objectFit?: 'cover' | 'contain';
}

export function ProjectCard({
  src,
  alt,
  title,
  description,
  href,
  index,
  role = '',
  extra = '',
  objectFit = 'cover',
}: ProjectCardProps) {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1,
      }}
    >
      <Link href={href} className="block group h-full">
        <motion.div
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.95 }}
          className="relative rounded-lg aspect-[3/2] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3] overflow-hidden bg-transparent dark:bg-transparent"
        >
          <Image
            src={src}
            alt={alt}
            width={700}
            height={700}
            className={`w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-300 group-hover:scale-105`}
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
          <h2 className="font-zcool text-blackish dark:text-whitish text-2xl leading-tight font-normal mb-2 border-b border-blackish dark:border-pink pb-2">
            {title}
          </h2>
          <div className="flex items-center justify-between">
            <p className="dark:text-neutral-300 text-blackish text-lg">
              {description}
            </p>
            <div className="inline-flex items-baseline space-x-2 ml-auto">
              {role && (
                <span className="text-sm font-medium text-gray-700 dark:text-neutral-300 bg-transparent border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1">
                  {role}
                </span>
              )}
              {extra && (
                <span className="text-sm font-medium text-gray-700 dark:text-neutral-300 bg-transparent border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1">
                  {extra}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
