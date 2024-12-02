import Image from "next/image";

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
