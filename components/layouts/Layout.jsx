import ScrolltoTop from "../ui/ScrollToTop";
import Header from "../header/Header";
// import Footer from "../footer/Footer";

import { useRouter } from "next/router";
import Footer from "../footer/Footer";

const variants = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.1, ease: "easeIn" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1, ease: "easeOut" },
  },
};

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="antialiased font-fontPrimary scroll-smooth overflow-x-hidden">
      <Header />

      <div>
        {children}
        <ScrolltoTop />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
