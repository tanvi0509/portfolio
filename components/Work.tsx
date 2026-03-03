"use client";

import React from "react";
import images from "@/assets/images.json";
import { motion } from "motion/react";
import { ProjectCard } from "@/components/ProjectCard";

const projects: { src: string; alt: string; title: string; description: string; href: string; objectFit?: 'cover' | 'contain'; role?: string; extra?: string; }[] = [
  {
    src: images.projectSection.recensBrand,
    alt: "Recens Logo",
    title: "Recens",
    description: "Best Shopping Experience",
    role: "Co-Founder",
    extra: "UI/UX Designer",
    href: "/recensshop",
  },
    {
    src: images.projectSection.envox,
    alt: "Envox Picture",
    title: "Envox",
    description: "Revamping the Envox Website",
      role: "UX Designer",
      extra: "Web Developer",
    href: "/envoxwork",
    objectFit: "contain",
  },
  {
    src: images.projectSection.petalsandpromises,
    alt: "Petal and Promises image",
    title: "Petals and Promises",
    description: "Buying Flowers Made Easy",
    role: "UI/UX Designer",
    href: "/petalsnpromises",
  },
  {
    src: images.projectSection.recens,
    alt: "Recens Brand",
    title: "Recens Visual Identity Kit",
    description: "Fashion Brand Aesthetics",
    role: "Co-Founder",
    extra: "Graphic Designer",
    href: "/recens",
  },
  {
    src: images.projectSection.swavya,
    alt: "Swavya Image",
    title: "Swavya",
    description: "Health Web Application",
    role: "UI/UX Designer",
    extra: "Web Developer",
    href: "/swavya",
  },
];

export default function Work() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-roboto container mx-auto px-4 py-16"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          project.title === "Recens" ? (
            <div id="recens" key={index}>
              <ProjectCard {...project} index={index} />
            </div>
          ) : (
            <ProjectCard key={index} {...project} index={index} />
          )
        ))}
      </div>
    </motion.main>
  );
}
