"use client";

import images from "@/assets/images.json";
import Image from "next/image";
import { motion } from "motion/react";

export default function Personas() {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="p-4"
      >
        <h2 className="text-[30px] font-normal font-roboto text-black dark:text-whitish">
          User Personas
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-[40px] mt-10 ml-4">
          <div className="flex-1 max-w-full shadow-xl transform transition-all duration-300 ease-in-out hover:scale-150 hover:z-10">
            <Image
              src={images.petals.userpersona1}
              alt="user persona 1"
              width={1748}
              height={1240}
              className="object-contain w-auto h-full"
            />
          </div>
          <div className="flex-1 max-w-full shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-150 hover:z-10">
            <Image
              src={images.petals.userpersona2}
              alt="user persona 2"
              width={1748}
              height={1240}
              className="object-contain w-auto h-full"
            />
          </div>
          <div className="flex-1 max-w-full shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-150 hover:z-10">
            <Image
              src={images.petals.userpersona3}
              alt="user persona 3"
              width={1748}
              height={1240}
              className="object-contain w-auto h-full"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
