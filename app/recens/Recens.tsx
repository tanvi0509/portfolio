"use client";

import React from "react";
import Image from "next/image";
import images from "@/assets/images.json";
import { motion } from "motion/react";
import { StaggeredFade } from "@/components/ui/typing-effect-2";
import { LettersPullUp } from "@/components/ui/letters-pullup";

const recensboard = images.recens.heroimage;
const secOne = images.recens.recenslogowhite;
const secTwo = images.recens.recenslogoblack;
const secThree = images.recens.recenspackage1;
const secFour = images.recens.recenspackage2;
const secFive = images.recens.recensthankyou1;
const secSix = images.recens.recensthankyou2;
const secSeven = images.recens.recenstag;
const secEight = images.recens.recenstag2;

export default function Recens() {
  return (
    <main className="dark:text-whitish">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden"
      >
        <Image
          src={recensboard}
          alt="Recens Storefront Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={90}
          priority
        />
      </motion.div>
      <div
        className="max-w-[22em] min-w-[18em] pb-[60px] xl:max-w-[80em] xl:min-w-[30em] h-full xl:mx-auto xl:mt-0
        sm:max-w-[60em] sm:min-w-[10em] sm::mx-auto"
      >
        {/* Hero Image */}
        {/* Text Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 max-w-5xl w-full mx-auto items-center">
          <div className="flex flex-col items-start">
            <StaggeredFade text="Type" className="text-pink" />
            <LettersPullUp text="Brand Work" />
          </div>
          <div className="flex flex-col items-start border-t md:border-t-0 md:border-l border-pink md:pl-4">
            <StaggeredFade text="Tools" className="text-pink" />
            <LettersPullUp text="Figma, Canva, Adobe Illustrator" />
          </div>
          <div className="flex flex-col items-start border-t md:border-t-0 md:border-l border-pink md:pl-4">
            <StaggeredFade text="Timeline" className="text-pink" />
            <LettersPullUp text="1 November - 7 November 2024" />
          </div>
        </section>
        <div className="my-8 border-t border-pink"></div>
        <p className="p-4 text-[20px]">
          In this section, I have illustrated how creativity and strategic
          design led us to our logo, thank-you cards, tags, and stickers. I
          enjoy discovering Recens&apos;s essence as much as I enjoyed creating
          it.
        </p>

        <section className="p-4 ml-4">
          <h2 className="text-[30px] font-normal font-zcool text-pink">
            Logo & Tagline
          </h2>
          <p className="font-zcool text-[20px]">
            The Recens logo utilizes Tenor Sans to convey a sense of modern
            sophistication, while the tagline &quot;One of a Kind&quot; is
            elegantly presented in Monterchi Sans, highlighting the brand&apos;s
            uniqueness and artistic flair. These typefaces were selected to
            enhance the visual appeal and ensure that every aspect of Recens’
            identity resonates with our core values of elegance and
            individuality.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-[150px] mt-10">
            <div className="flex-1 max-w-md shadow-2xl">
              <Image
                src={secOne}
                alt="recens logo"
                width={400}
                height={400}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-md shadow-2xl">
              <Image
                src={secTwo}
                alt="recens logo"
                width={400}
                height={400}
                className="object-contain w-auto h-full"
              />
            </div>
          </div>
        </section>
        <div className="my-8 border-t border-pink"></div>
        <section className="p-4 ml-4">
          <h2 className="text-[30px] font-normal font-zcool text-pink">
            Package Designing
          </h2>
          <p className="font-zcool text-[20px]">
            Crafting understated elegance, my design for budget friendly Recens
            corrugated boxes combines minimalism with functional luxury,
            emphasizing a clean, sophisticated aesthetic.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-[150px] mt-10">
            <div className="flex-1 max-w-md shadow-lg">
              <Image
                src={secThree}
                alt="recens logo"
                width={800}
                height={800}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-md shadow-2xl">
              <Image
                src={secFour}
                alt="recens logo"
                width={800}
                height={800}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </section>
        <div className="my-8 border-t border-pink"></div>
        <section className="p-4 ml-4">
          <h2 className="text-[30px] font-normal font-zcool text-pink">
            Thank-You Cards
          </h2>
          <p className="font-zcool text-[20px]">
            My Design for Recens&apos; thank you cards embodies gratitude with
            style. It blends minimalism with a personal touch, ensuring each
            recipient feels uniquely appreciated.
          </p>
          <div className="flex flex-col md:flex-col justify-center items-center space-y-4 md:space-y-[40px] md:space-x-0 mt-10">
            <div className="flex-1 max-w-full shadow-2xl">
              <Image
                src={secFive}
                alt="recens logo"
                width={1080}
                height={786}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-full shadow-2xl">
              <Image
                src={secSix}
                alt="recens logo"
                width={1080}
                height={786}
                className="object-contain w-auto h-full"
              />
            </div>
          </div>
        </section>
        <div className="my-8 border-t border-pink"></div>
        <section className="p-4 ml-4">
          <h2 className="text-[30px] font-normal font-zcool text-pink">
            Tags & Stickers
          </h2>
          <div className="flex flex-col md:flex-col justify-center items-center space-y-4 md:space-y-[40px] md:space-x-0 mt-10">
            <div className="flex-1 max-w-full shadow-2xl">
              <Image
                src={secSeven}
                alt="recens logo"
                width={1080}
                height={786}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex-1 max-w-full shadow-2xl">
              <Image
                src={secEight}
                alt="recens logo"
                width={1080}
                height={786}
                className="object-contain w-auto h-full"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
