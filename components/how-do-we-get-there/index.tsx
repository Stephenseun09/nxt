import Image from "next/image";
import { motion } from "framer-motion";
import howDoWeGetThere from "../../public/images/how-do-we-get-there.svg";
import { fadeInBottom, slideInLeft, slideInRight } from "../ui/animations";

const HowDoWeGetThere = () => {
  return (
    <section className="">
      <div className="relative max-w-[86rem] mx-auto px-4 sm:px-5 md:px-7 py-8  sm:py-12 lg:py-16">
        <div className=" relative mx-auto lg:grid lg:grid-cols-12 space-y-8 md:space-y-0 lg:items-center lg:grid-flow-col-dense  h-full">
          <div className="mt-8 sm:mx-0 lg:mt-0 lg:col-span-5 xl:col-span-6 lg:col-start-7 lg:col-end-13 xl:col-start-7 xl:col-end-13    col-span-4 h-full flex flex-col space-y-5 md:space-y-8  justify-center">
            <motion.h2
              className="text-[1.5rem] md:text-[2rem] lg:text-[2.3rem] text-black capitalize font-bold  leading-none"
              variants={fadeInBottom}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
            >
              How do we get there
            </motion.h2>
            <motion.p
              className="text-paragraph text-md  md:text-lg lg:text-xl max-w-[50ch]"
              variants={fadeInBottom}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              By utilizing cutting-edge technologies and providing the greatest
              value, we are dedicated to bringing our clients creative
              solutions. <br /> <br /> We are making sure that there is a
              service and solution that can be used by all industries and
              addresses at least 10 SDGs.
            </motion.p>
          </div>

          <div className="lg:col-span-7 xl:col-span-6  lg:col-start-1 lg:col-end-6 xl:col-start-1 xl:col-end-6 ">
            <motion.div
              className="lg:bg-white"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className=" overflow-hidden flex justify-center lg:justify-start  scale-x-[-1] transition-all">
                <Image src={howDoWeGetThere} alt="member1" className="" />
              </div>
            </motion.div>
          </div>

          <motion.div
            className={`hidden lg:block absolute -top-10 -bottom-10 right-0  left-10 rounded-r-2xl bg-[#f2f2f2] 
          before:block before:absolute before:-left-6 before:top-0 before:w-1/5 before:h-full  before:bg-white  
          -z-10 `}
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default HowDoWeGetThere;
