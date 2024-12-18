"use client";

import React from "react";
import images from "@/assets/images.json";
import { motion } from "motion/react";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    src: images.projectSection.recensBrand,
    alt: "Recens Logo",
    title: "therecens.com",
    description: "Best Shopping Experience",
    href: "/recensshop",
  },
  {
    src: images.projectSection.recens,
    alt: "Recens Brand",
    title: "Recens Visual Identity Kit",
    description: "Fashion Brand Aesthetics",
    href: "/recens",
  },
  {
    src: images.projectSection.petalsandpromises,
    alt: "Petal and Promises image",
    title: "Petals and Promises",
    description: "Buying Flowers Made Easy",
    href: "/petalsnpromises",
  },
  {
    src: images.projectSection.envox,
    alt: "Envox Picture",
    title: "Envox",
    description: "Revamping the Envox Website",
    href: "/envoxwork",
  },
  {
    src: images.projectSection.swavya,
    alt: "Swavya Image",
    title: "Swavya",
    description: "Health Web Application",
    href: "/swavya",
  },
];

export default function Work() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-zcool container mx-auto px-4 py-16"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </motion.main>
  );
}
