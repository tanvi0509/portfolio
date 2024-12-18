"use client";

import React from "react";
import Image from "next/image";
import images from "@/assets/images.json";
import { StaggeredFade } from "@/components/ui/typing-effect-2";
import { LettersPullUp } from "@/components/ui/letters-pullup";
import { motion } from "motion/react";
import SwavyaVideo from "./SwavyaVideo";

const swavyaheroimage = images.swavya.heroimage;
const swavyaheroimagemobile = images.swavya.heroimagemobile;

export default function SwavyaPage() {
  return (
    <main className="w-full dark:text-whitish">
      <section>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="sm:relative w-full h-[60vh] sm:h-[80vh] hidden sm:block"
        >
          <Image
            src={swavyaheroimage}
            alt="petals and promises image"
            fill
            objectFit="cover"
            objectPosition="center"
            quality={90}
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="block sm:hidden"
        >
          <Image
            src={swavyaheroimagemobile}
            width={420}
            height={420}
            alt="petals and promises image"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            quality={90}
            priority
          />
        </motion.div>
      </section>
      <div
        className="max-w-[22em] min-w-[18em] pb-[60px] xl:max-w-[80em] xl:min-w-[30em] h-full xl:mx-auto xl:mt-0
        sm:max-w-[60em] sm:min-w-[10em] sm::mx-auto"
      >
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 max-w-5xl w-full mx-auto items-center">
          <div className="flex flex-col items-start">
            <StaggeredFade text="Type" className="text-pink" />
            <LettersPullUp text="Hackathon" />
          </div>
          <div className="flex flex-col items-start border-t md:border-t-0 md:border-l border-brown md:pl-4">
            <StaggeredFade text="Tools" className="text-pink" />
            <LettersPullUp text="HTML, CSS, Javascript" />
          </div>
          <div className="flex flex-col items-start border-t md:border-t-0 md:border-l border-brown md:pl-4">
            <StaggeredFade text="Timeline" className="text-pink" />
            <LettersPullUp text="24hrs" />
          </div>
        </section>
        <div className="my-8 border-t border-pink"></div>
        <section className="-2">
          <StaggeredFade
            text="Swavya"
            className="text-[30px] mt-9 ml-4 text-pink"
          />
          <p className="pt-4 px-4 text-[20px]">
            Swavya is a holistic health web application designed to integrate
            personalized exercise routines and diet plans with an innovative
            chatbot feature to guide users through their fitness journey. This
            solution is aimed at individuals seeking a tailored health
            improvement plan that adapts to their specific dietary needs and
            fitness goals.
          </p>
        </section>
        <section className="flex items-center justify-center px-2 m-2">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl ml-4">
            <SwavyaVideo />
          </div>
        </section>
        <section>
          <p className="pt-4 px-4 text-[20px]">
            Since this was my first project in the ui/ux field, it has a special
            place in my career. Working on this during an ACM hackathon sparked
            my interest in this topic. I later received a lot of appreciation
            from my peers and the jury for my problem-solving and design skills.
          </p>
        </section>
      </div>
    </main>
  );
}
