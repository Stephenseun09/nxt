import Image from "next/future/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

import whoWeAreMember1 from "../../public/images/whoWeAreMember1.png";
import whoWeAreMember2 from "../../public/images/whoWeAreMember2.png";
import {
  fadeInBottom,
  slideInLeft,
  slideInRight,
  slideOutRight,
} from "../ui/animations";
import { useEffect, useRef, useState } from "react";

const WhoWeAre = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const translateY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleScrollAnimation = () => {
    if (ref.current) {
      // const position = ref.current.scrollTop;
      const position = window.pageYOffset / 3;
      setScrollPosition(position);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollAnimation);

    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  return (
    <section ref={ref} className="">
      <div className="relative max-w-[86rem] mx-auto px-4 sm:px-5 md:px-7 pt-20 sm:pt-24 lg:pt-32 pb-10  sm:pb-12 lg:pb-16">
        {/*  */}
        <div className="relative lg:grid lg:grid-cols-12 lg:gap-8 gap-8 lg:items-center ">
          <div className="lg:col-span-7 xl:col-span-6 ">
            <motion.div className="relative  col-start-2 col-end-4  transition-[filter] duration-500">
              <motion.div className="flex gap-4">
                {[whoWeAreMember1, whoWeAreMember2].map((img, i) => (
                  <motion.div
                    key={i}
                    className={`relative h-fit shadow-lg overflow-hidden`}
                    variants={slideInLeft}
                    custom={i++}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Image
                      src={img}
                      alt={`member${i}`}
                      className={`block rounded-lg  ${
                        i == 1 ? "mt-4" : "mt-0"
                      } ${i == 1 ? "lg:mt-10" : "lg:mt-0"} object-cover `}
                    />
                    <motion.div
                      className={`absolute inset-0 bg-[#4b4b4c] ${
                        i == 1 ? "mt-4" : "mt-0"
                      } ${
                        i == 1 ? "lg:mt-10" : "lg:mt-0"
                      } before:block before:absolute before:-right-6 before:top-0 before:w-20 before:h-full  before:bg-white before:-skew-x-6`}
                      variants={slideOutRight}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="mt-16  sm:mx-0 lg:mt-0 lg:col-span-5 xl:col-span-6 xl:col-start-8 h-full flex flex-col space-y-5 md:space-y-8 justify-center ">
            <motion.h2
              className="text-[1.5rem] md:text-[2rem] lg:text-[2.3rem]  text-black capitalize font-bold leading-none"
              variants={fadeInBottom}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
            >
              Who We are
            </motion.h2>
            <motion.h3
              variants={fadeInBottom}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
              className="text-primary text-[1.2rem] lg:text-[1.5rem] leading-tight lg:max-w-[37ch]"
            >
              NXT is a developing company with a remarkable group of young
              people
            </motion.h3>
            <motion.p
              className="text-paragraph text-md  md:text-lg lg:text-xl lg:max-w-[45ch]"
              variants={fadeInBottom}
              initial="hidden"
              whileInView="visible"
              custom={1.5}
              viewport={{ once: true }}
            >
              who are driven to use technology to develop the finest solutions,
              provide world-class digital transformation, address business
              issues, and raise consumer happiness.
            </motion.p>
            <motion.div
              className=" text-sm sm:text-lg pt-8"
              variants={fadeInBottom}
              initial="hidden"
              whileInView="visible"
              custom={1.5}
              viewport={{ once: true }}
            >
              <Link href="#">
                <a className="hover:bg-primary hover:text-white mx-auto md:mx-0  h-12 lg:h-13 text-primary font-semibold px-6 w-[70%] border-2 border-primary rounded flex items-center justify-center transition ease-in-out duration-300 ">
                  Read more
                </a>
              </Link>
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
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
