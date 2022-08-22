import type { NextPage } from "next";
import BlogSection from "../components/blog";
import Counter from "../components/counter";
import Hero from "../components/Hero/Hero";
import HowDoWeGetThere from "../components/how-do-we-get-there";
import OurBigPicture from "../components/our-big-picture";
import OurPartners from "../components/our-partners";
import Test from "../components/test";
import WhoWeAre from "../components/who-we-are";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Counter />
      <WhoWeAre />
      {/* <Test /> */}
      <OurBigPicture />
      <HowDoWeGetThere />
      <OurPartners />
      <BlogSection />
    </div>
  );
};

export default Home;
