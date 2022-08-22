import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import Link from "next/link";
import nxtLogo from "../../public/nxt-logo.svg";
import MobileNav from "./MobileNav";

const navItems = [
  { name: "csr", href: "#" },
  { name: "careers", href: "#" },
  { name: "blog", href: "#" },
];
const dropdowns = [
  {
    name: "company",
    links: [
      { name: "about us", link: "#" },
      { name: "our team", link: "#" },
    ],
  },
  {
    name: "investment",
    links: [
      { name: "valueplus", link: "#" },
      { name: "betacare", link: "#" },
      { name: "ekoplug", link: "#" },
      { name: "spinlotto", link: "#" },
      { name: "helloBudgie nigeria", link: "#" },
      { name: "madina supermarket", link: "#" },
    ],
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [blurBg, setBlurBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setBlurBg(true);
      } else {
        setBlurBg(false);
      }
    });
  }, []);
  const router = useRouter();

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-[60] ${
        blurBg ? "shadow-sm" : "shadow-none"
      }
      bg-white ${blurBg ? "bg-opacity-80" : "bg-opacity-100"} backdrop-blur-lg`}
    >
      <div className=" relative max-w-[86rem] px-4 sm:px-5 md:px-7 mx-auto z-[60]">
        <div className="relative py-4 lg:py-5 flex items-center justify-between text-slate-700 font-semibold text-base leading-6 ">
          <Image
            src={nxtLogo}
            alt="logo"
            width={130}
            height={47}
            priority
            className="bg-gray-400"
          />
          <div className="flex items-center">
            <div className=" md:hidden ">
              <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>

            <div className="hidden md:flex items-center">
              <nav>
                <ul className="flex items-center md:space-x-1 lg:space-x-2 capitalize text-base ">
                  <>
                    {/* <!-- Dropdown menu --> */}
                    {dropdowns.map((item, index) => (
                      <div className="relative group px-2 py-2 " key={index}>
                        <button
                          className="z-10 flex items-center capitalize text-base font-semibold  text-paragraph transition duration-150 ease-in-out  focus:border-none focus:outline-none"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="true"
                          aria-controls=""
                        >
                          <span className="mr-2">{item.name}</span>
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>

                        <div
                          className="invisible group-hover:visible  absolute min-w-max bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow-lg border-2 my-4 transition-all ease-in
                        origin-top-right"
                        >
                          <div aria-labelledby="" role="menu">
                            <ul className="py-2">
                              {item.links.map((link, index) => (
                                <li key={index} className="">
                                  <Link href="#">
                                    <a className="text-sm hover:bg-gray-100  text-paragraph block px-4 py-2 pr-8">
                                      {link.name}
                                    </a>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}

                    {navItems.map((item, index) => (
                      <li key={index} className="">
                        <Link href={item.href}>
                          <a className="font-semibold  hover:bg-gray-100 text-paragraph px-4 py-2 rounded-lg  transition duration-150 ease-in-out">
                            {item.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href="#">
                        <a className="text-white bg-primary hover:bg-secondary font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">
                          Speak with us
                        </a>
                      </Link>
                    </li>
                  </>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {isOpen && <MobileNav nav={navItems} onClose={() => setIsOpen(false)} />}
    </header>
  );
};

export default Header;
