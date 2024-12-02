"use client";

import React from "react";
import { motion } from "motion/react";
import images from "@/assets/images.json";
import { IntroImage } from "./IntroImage";
import { IntroContent } from "./IntroContent";

const cartoonTanvi = images.homepage.cartoonTanvi;

export default function Intro() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto min-h-[calc(100vh-12rem)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-center px-4 pt-16 pb-8">
        <div className="order-1 lg:order-1 lg:mt-[90px] lg:ml-[60px]">
          <IntroImage src={cartoonTanvi} alt="Tanvi's portrait illustration" />
        </div>

        <div className="order-2 lg:order-2 flex flex-col justify-center mt-8 lg:mt-12">
          <IntroContent />
        </div>
      </div>
    </motion.main>
  );
}
