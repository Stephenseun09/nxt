import Image from "next/image";
import { images } from "./images";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Marquee from "react-fast-marquee";

const variants: Variants = {
  visible: {
    x: ["0vw", "-105vw"], // move to the right
    transition: {
      duration: 12,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const OurPartners = () => {
  return (
    <section className="relative ">
      <div className="relative max-w-[86rem] py-12 mx-auto px-4 sm:px-5 md:px-7 sm:py-14 lg:py-20 space-y-4 md:space-y-6">
        <h2 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.3rem]   text-black capitalize font-bold  leading-none">
          Our Partners
        </h2>
        <Marquee
          pauseOnHover
          speed={30}
          // gradient={false}
          style={{ maxWidth: "1500px", marginInline: "auto" }}
        >
          {images.map((logo, index) => (
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.alt === "Betway" ? 100 : 130}
              height={logo.alt === "Betway" ? 30 : 70}
              key={index}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default OurPartners;
