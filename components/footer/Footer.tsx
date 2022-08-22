import Image from "next/image";
import nxtLogo from "../../public/nxt-logo-white.svg";
import Left from "./Left";
import Right from "./Right";

const Footer = () => {
  return (
    <footer className="relative bg-[#0e1428]">
      <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-[80px] scale-x-[-1]">
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-[#0e1428] fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className=" max-w-[86rem] mx-auto px-4 sm:px-5 md:px-7 pt-10 sm:pt-12 lg:pt-16 pb-5  sm:pb-6 ">
        <div className="relative">
          <div className="mb-6">
            <Image
              src={nxtLogo}
              alt="logo"
              width={140}
              height={47}
              className="bg-gray-400"
            />
          </div>
          <div className=" grid md:grid-cols-12  gap-12 ">
            <Left />
            <Right />
            {/*  */}
          </div>

          <hr className="  mt-12 md:mt-14 border-slate-400" />
          <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-white text-center  mt-8 md:mt-12 opacity-60">
            © 2022 NXT, Inc. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
