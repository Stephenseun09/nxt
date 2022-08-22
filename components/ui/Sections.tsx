import Image from "next/image";
import { motion } from "framer-motion";
import howDoWeGetThere from "../../public/images/how-do-we-get-there.svg";
import { slideInRight } from "./animations";

const Sections = () => {
  return (
    <section className="">
      <div className="relative max-w-[82rem] mx-auto px-4 sm:px-5 md:px-7 py-10  sm:py-12 lg:py-16">
        <div className=" relative mx-auto lg:grid lg:grid-cols-12 space-y-8 md:space-y-0 lg:items-center lg:grid-flow-col-dense  h-full">
          <div className="mt-8 sm:mx-0 lg:mt-0 lg:col-span-5 xl:col-span-6 lg:col-start-7 lg:col-end-13 xl:col-start-7 xl:col-end-13    col-span-4 h-full flex flex-col space-y-8 justify-center">
            <h2 className="text-[1.8rem] sm:text-[2rem] md:text-[2.3rem]  lg:text-[2.6rem] xl:text-[2.8rem]  text-black uppercase font-bold  leading-none">
              How do we get there
            </h2>
            <p className="text-paragraph text-md  md:text-lg lg:text-xl max-w-[50ch]">
              By utilizing cutting-edge technologies and providing the greatest
              value, we are dedicated to bringing our clients creative
              solutions. <br /> <br /> We are making sure that there is a
              service and solution that can be used by all industries and
              addresses at least 10 SDGs.
            </p>
          </div>

          <div className="lg:col-span-7 xl:col-span-6  lg:col-start-1 lg:col-end-6 xl:col-start-1 xl:col-end-6 ">
            <div className="relative bg-white   transition-[filter] duration-500 rounded-lg">
              <div className=" overflow-hidden flex justify-center lg:justify-start  scale-x-[-1] transition-all">
                <Image src={howDoWeGetThere} alt="member1" className="" />
              </div>
            </div>
          </div>

          <motion.div
            className={` absolute -top-10 -bottom-10 right-10  left-10 bg-[#f2f2f2] 
          before:block before:absolute before:-left-6 before:top-0 before:w-1/5 before:h-full  before:bg-white  
          -z-10 `}
            initial={{ x: "-100%" }}
            whileInView={slideInRight}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  )
}

export default Sections