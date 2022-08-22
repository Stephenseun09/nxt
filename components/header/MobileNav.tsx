import { motion } from "framer-motion";
import { useRouter } from "next/router";
import type { NextRouter } from "next/router";
import Link from "next/link";

const navVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {},
  },
};
const ulVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};
const listVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.2,
    },
  }),
  exit: (index: number) => ({
    y: -20,
    opacity: 0,
    transition: {
      delay: index * 0.2,
    },
  }),
};

const navItems = [
  { name: "company", href: "#" },
  { name: "investments", href: "#" },
  { name: "csr", href: "#" },
  { name: "careers", href: "#" },
  { name: "blog", href: "#" },
];

interface List {
  name?: string;
  href?: string;
}

interface Props {
  nav?: List[];
  onClose?: () => void;
}

const MobileNav = ({ onClose }: Props) => {
  return (
    <motion.nav
      className="md:hidden h-screen w-full  fixed inset-0  
    border-opacity-10 bg-[#f2f2f2]  backdrop-blur-lg  z-50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.ul
        className="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-paragraph text-2xl uppercase font-bold tracking-widest space-y-6 "
        variants={ulVariants}
      >
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            className="list-none"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            custom={index}
            onClick={onClose}
          >
            <Link href={item.href}>
              <a className="inline-block border-b-4 border-transparent hover:text-primary hover:border-primary transition-all">
                {item.name}
              </a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default MobileNav;
