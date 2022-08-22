import Image from "next/image";
import { motion } from "framer-motion";

import ourBigPicture from "../../public/images/our-big-picture.svg";
import { fadeInBottom } from "../ui/animations";

const OurBigPicture = () => {
  return (
    <section className="">
      <div className="relative max-w-[86rem] mx-auto px-4 sm:px-5 md:px-7 py-10  sm:py-12 lg:py-16">
        {/*  */}
        <div className="relative mx-auto lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center h-full ">
          <div className="mt-8 sm:mx-0 lg:mt-0 lg:col-span-5 xl:col-span-6  h-full flex flex-col space-y-5 md:space-y-8 justify-center">
            <motion.h2
              className="text-[1.5rem] md:text-[2rem] lg:text-[2.3rem]  text-black capitalize font-bold  leading-none"
              variants={fadeInBottom}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
            >
              Our big picture
            </motion.h2>
            <motion.p
              className="text-paragraph text-md  md:text-lg lg:text-xl max-w-[50ch]"
              variants={fadeInBottom}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              We envision becoming recognized as a brand that offers solutions
              to businesses and end users in every sector of life irrespective
              of race, tribe, or nationality.
            </motion.p>
          </div>
          <div className="lg:col-span-4 xl:col-span-5  ">
            <motion.div className="lg:scale-x-[-1]  transition-all">
              <Image
                src={ourBigPicture}
                alt="member1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        <motion.div className="bg-[url('/images/audio-bar.svg')]  absolute left-0 bottom-10 right-0 h-28  bg-contain opacity-30 backdrop-blur-lg -z-10" />
      </div>
    </section>
  );
};

export default OurBigPicture;
