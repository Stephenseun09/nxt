import PostCard from "./PostCard";
import blogImage from "../../public/images/news.png";
import { motion } from "framer-motion";
import { fadeIn } from "../ui/animations";
import Link from "next/link";

const blogData = [
  {
    title: "Hello World",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime numquam rem eligendi totam officiis fugit commodi accusamus nihil ipsum obcaecati!",
    cardImgSrc: blogImage,
    cardImgAlt: "Random image",
  },
  {
    title: "Hello World",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime numquam rem eligendi totam officiis fugit commodi accusamus nihil ipsum obcaecati!",
    cardImgSrc: blogImage,
    cardImgAlt: "Random image",
  },
  {
    title: "Hello World",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime numquam rem eligendi totam officiis fugit commodi accusamus nihil ipsum obcaecati!",
    cardImgSrc: blogImage,
    cardImgAlt: "Random image",
  },
];

const BlogSection = () => {
  return (
    <section className=" bg-[#f2f2f2] pb-8">
      {/* <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-[80px] scale-x-[1] scale-y-[1]">
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
            className="text-[#f2f2f2] fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div> */}
      <div className=" max-w-[86rem] mx-auto px-4 sm:px-5 md:px-7  py-12  sm:py-14 lg:py-20">
        <div className="relative">
          <div className="flex justify-between  mb-5 md:mb-8">
            <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.3rem]    text-black capitalize font-bold  leading-none">
              Blog
            </h2>
            <Link href="#">
              <a
                className="group
          font-semibold py-2 px-3 flex items-center justify-center  transition-all duration-300 ease-in-out"
              >
                See all{" "}
                <svg
                  className="hidden group-hover:inline-flex w-4 h-4 ml-2 font-bold transition duration-200 ease-in-out  "
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <path
                    fill="currentColor"
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
          <div
            className="
            mx-auto space-y-12 md:space-y-0 md:grid md:grid-cols-12 md:gap-8 md:items-center justify-between h-full"
          >
            {blogData.map((post, index) => {
              return (
                <motion.div
                  key={index}
                  className="
                md:col-span-6 lg:col-span-4  h-full
              "
                  variants={fadeIn}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <PostCard {...post} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
