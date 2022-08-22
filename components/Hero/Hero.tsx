import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeInBottom } from "../ui/animations";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="relative pt-[5.9rem] pb-12 sm:pb-24 lg:pb-20 bg-gradient-to-t from-[#fbfbfb] to-[#ffffff]">
        {/* <div className="bg-[url('/images/hero-bg.jpg')] bg-cover absolute inset-0 bg-no-repeat opacity-30 backdrop-blur-lg" /> */}
        <svg
          className="absolute top-20 -right-[30rem] hidden w-screen max-w-3xl -mt-[16rem] -ml-12 lg:block"
          viewBox="0 0 818 815"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="c">
              <stop stopColor="#0a014f" offset="0%"></stop>
              <stop stopColor="#0a014f" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="f">
              <stop stopColor="#73ceee" offset="0%"></stop>
              <stop stopColor="#3ec5f0" offset="100%"></stop>
            </linearGradient>
            <filter
              x="-4.7%"
              y="-3.3%"
              width="109.3%"
              height="109.3%"
              filterUnits="objectBoundingBox"
              id="a"
            >
              <feOffset
                dy="8"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="8"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              ></feGaussianBlur>
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                in="shadowBlurOuter1"
              ></feColorMatrix>
            </filter>
            <filter
              x="-4.7%"
              y="-3.3%"
              width="109.3%"
              height="109.3%"
              filterUnits="objectBoundingBox"
              id="d"
            >
              <feOffset
                dy="8"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="8"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              ></feGaussianBlur>
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                in="shadowBlurOuter1"
              ></feColorMatrix>
            </filter>
            <path
              d="M160.52 108.243h497.445c17.83 0 24.296 1.856 30.814 5.342 6.519 3.486 11.635 8.602 15.12 15.12 3.487 6.52 5.344 12.985 5.344 30.815v497.445c0 17.83-1.857 24.296-5.343 30.814-3.486 6.519-8.602 11.635-15.12 15.12-6.52 3.487-12.985 5.344-30.815 5.344H160.52c-17.83 0-24.296-1.857-30.814-5.343-6.519-3.486-11.635-8.602-15.12-15.12-3.487-6.52-5.343-12.985-5.343-30.815V159.52c0-17.83 1.856-24.296 5.342-30.814 3.486-6.519 8.602-11.635 15.12-15.12 6.52-3.487 12.985-5.343 30.815-5.343z"
              id="b"
            ></path>
            <path
              d="M159.107 107.829H656.55c17.83 0 24.296 1.856 30.815 5.342 6.518 3.487 11.634 8.602 15.12 15.12 3.486 6.52 5.343 12.985 5.343 30.816V656.55c0 17.83-1.857 24.296-5.343 30.815-3.486 6.518-8.602 11.634-15.12 15.12-6.519 3.486-12.985 5.343-30.815 5.343H159.107c-17.83 0-24.297-1.857-30.815-5.343-6.519-3.486-11.634-8.602-15.12-15.12-3.487-6.519-5.343-12.985-5.343-30.815V159.107c0-17.83 1.856-24.297 5.342-30.815 3.487-6.519 8.602-11.634 15.12-15.12 6.52-3.487 12.985-5.343 30.816-5.343z"
              id="e"
            ></path>
          </defs>
          <g fill="none" fillRule="evenodd" opacity=".9">
            <g transform="rotate(65 416.452 409.167)">
              <use fill="#000" filter="url(#a)" xlinkHref="#b"></use>
              <use fill="url(#c)" xlinkHref="#b"></use>
            </g>
            <g transform="rotate(29 421.929 414.496)">
              <use fill="#000" filter="url(#d)" xlinkHref="#e"></use>
              <use fill="url(#f)" xlinkHref="#e"></use>
            </g>
          </g>
        </svg>
        <svg
          className="absolute -bottom-[20rem] -left-[36rem] hidden w-screen max-w-3xl  lg:block"
          viewBox="0 0 818 815"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="c">
              <stop stopColor="#73ceee" offset="0%"></stop>
              <stop stopColor="#73ceee" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="f">
              <stop stopColor="#ffffff" offset="0%"></stop>
              <stop stopColor="#ffffff" offset="100%"></stop>
            </linearGradient>
            <filter
              x="-4.7%"
              y="-3.3%"
              width="109.3%"
              height="109.3%"
              filterUnits="objectBoundingBox"
              id="a"
            >
              <feOffset
                dy="8"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="8"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              ></feGaussianBlur>
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                in="shadowBlurOuter1"
              ></feColorMatrix>
            </filter>
            <filter
              x="-4.7%"
              y="-3.3%"
              width="109.3%"
              height="109.3%"
              filterUnits="objectBoundingBox"
              id="d"
            >
              <feOffset
                dy="8"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="8"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              ></feGaussianBlur>
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                in="shadowBlurOuter1"
              ></feColorMatrix>
            </filter>
            <path
              d="M160.52 108.243h497.445c17.83 0 24.296 1.856 30.814 5.342 6.519 3.486 11.635 8.602 15.12 15.12 3.487 6.52 5.344 12.985 5.344 30.815v497.445c0 17.83-1.857 24.296-5.343 30.814-3.486 6.519-8.602 11.635-15.12 15.12-6.52 3.487-12.985 5.344-30.815 5.344H160.52c-17.83 0-24.296-1.857-30.814-5.343-6.519-3.486-11.635-8.602-15.12-15.12-3.487-6.52-5.343-12.985-5.343-30.815V159.52c0-17.83 1.856-24.296 5.342-30.814 3.486-6.519 8.602-11.635 15.12-15.12 6.52-3.487 12.985-5.343 30.815-5.343z"
              id="b"
            ></path>
            <path
              d="M159.107 107.829H656.55c17.83 0 24.296 1.856 30.815 5.342 6.518 3.487 11.634 8.602 15.12 15.12 3.486 6.52 5.343 12.985 5.343 30.816V656.55c0 17.83-1.857 24.296-5.343 30.815-3.486 6.518-8.602 11.634-15.12 15.12-6.519 3.486-12.985 5.343-30.815 5.343H159.107c-17.83 0-24.297-1.857-30.815-5.343-6.519-3.486-11.634-8.602-15.12-15.12-3.487-6.519-5.343-12.985-5.343-30.815V159.107c0-17.83 1.856-24.297 5.342-30.815 3.487-6.519 8.602-11.634 15.12-15.12 6.52-3.487 12.985-5.343 30.816-5.343z"
              id="e"
            ></path>
          </defs>
          <g fill="none" fillRule="evenodd" opacity=".9">
            <g transform="rotate(65 416.452 409.167)">
              <use fill="#000" filter="url(#a)" xlinkHref="#b"></use>
              <use fill="url(#c)" xlinkHref="#b"></use>
            </g>
            <g transform="rotate(29 421.929 414.496)">
              <use fill="#000" filter="url(#d)" xlinkHref="#e"></use>
              <use fill="url(#f)" xlinkHref="#e"></use>
            </g>
          </g>
        </svg>

        <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto bg-transparent">
          <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
            <motion.h1 className="text-primary font-bold text-4xl sm:text-4xl md:text-5xl  lg:text-7xl  text-center md:max-w-[80%] md:mx-auto">
              <motion.span
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                We
              </motion.span>{" "}
              <motion.span
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                custom={1}
                viewport={{ once: true }}
              >
                Incubate,
              </motion.span>{" "}
              <motion.span
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                custom={3.5}
                viewport={{ once: true }}
              >
                Invest
              </motion.span>{" "}
              <motion.span
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                custom={4.5}
                viewport={{ once: true }}
              >
                &
              </motion.span>{" "}
              <motion.span
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                custom={5.5}
                viewport={{ once: true }}
              >
                Drive
              </motion.span>{" "}
              <motion.span
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                custom={6.5}
                viewport={{ once: true }}
                className="relative"
              >
                value
                <motion.svg
                  viewBox="0 0 325 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-2 left-0 w-[120%] "
                >
                  <motion.path
                    d="M26.4077 2.94882C87.5077 2.94882 148.608 2.94882 209.708 2.94882C246.895 2.94882 285.77 6.18928 322.72 1.57063C327.735 0.943761 312.612 1.69859 307.56 1.80033C260.341 2.75104 213.114 3.82554 165.912 5.39895C118.566 6.97712 70.2554 8.45946 23.345 15.9651C20.7143 16.386 -0.958846 20.7667 1.60018 19.4872"
                    stroke="#3EC5F0"
                    strokeWidth="3.00622"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 0.9,
                      delay: 7 * 0.2,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    }}
                  />
                </motion.svg>
              </motion.span>
            </motion.h1>
            <motion.p
              className="mt-6 md:mt-8  text-md  md:text-lg lg:text-2xl text-black text-center max-w-[60ch] mx-auto"
              variants={fadeInBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={7.5}
            >
              Creating a wealth of opportunities to scale sustainable impact
              providing world class solution to every sector of the african
              market.
            </motion.p>
            <motion.div
              variants={fadeInBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={8.5}
              className="mt-6 md:mt-8  text-sm md:text-base pt-8"
            >
              <Link href="#">
                <a className="hover:bg-secondary hover:text-white  sm:w-[30%] mx-auto lg:h-14 text-white bg-primary font-semibold h-12 px-6  w-[60%]  rounded flex items-center justify-center shadow-lg  transition-all ease-linear ">
                  Speak with us
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="relative  overflow-hidden lg:z-[-1] bg-[#fbfbfb]">
        <motion.div
          className="flex justify-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={9}
        >
          <Image
            src="/images/landing-page.gif"
            alt="hero image"
            className="object-cover mx-auto bg-gray-400"
            width={1080}
            height={608}
            priority
          />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
