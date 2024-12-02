import images from "@/assets/images.json";
import Image from "next/image";

export default function Personas() {
  return (
    <div>
      <section className="p-4">
        <h2 className="text-pink text-[30px] font-normal font-zcool">
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
      </section>
    </div>
  );
}
