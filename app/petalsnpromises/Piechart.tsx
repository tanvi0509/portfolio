"use client";

import Image from "next/image";
import { motion } from "motion/react";

const images = [
  { src: "/survey1.webp", alt: "survey image 1" },
  { src: "/survey2.webp", alt: "survey image 2" },
  { src: "/survey3.webp", alt: "survey image 3" },
  { src: "/survey4.webp", alt: "survey image 4" },
  { src: "/survey5.webp", alt: "survey image 5" },
];
export default function Pie() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2 ml-2">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1 max-w-full shadow-xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={420}
            height={420}
            className="object-contain w-full h-auto"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}
