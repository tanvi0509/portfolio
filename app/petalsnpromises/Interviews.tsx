import Image from "next/image";
import React from "react";

const images = [
  { src: "/response1.webp", alt: "response image 1" },
  { src: "/response2.webp", alt: "response image 2" },
  { src: "/response3.webp", alt: "response image 3" },
  { src: "/response4.webp", alt: "response image 4" },
  { src: "/response5.webp", alt: "response image 5" },
];

export default function Interview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 ml-4 mt-4">
      {images.map((image, index) => (
        <div key={index} className="flex-1 max-w-full shadow-xl">
          <Image
            src={image.src}
            alt={image.alt}
            width={420}
            height={420}
            className="object-contain w-full h-auto"
            loading="lazy" // Optional: Makes images load lazily for better performance
          />
        </div>
      ))}
    </div>
  );
}
