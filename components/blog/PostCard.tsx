import { motion } from "framer-motion";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  title: string;
  excerpt: string;
  cardImgSrc: StaticImageData;
  cardImgAlt: string;
}

const PostCard = ({ cardImgSrc, cardImgAlt, title, excerpt }: Props) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className=" flex-col overflow-hidden rounded-lg w-full h-full border">
      <div className="relative overflow-hidden h-[220px] w-full">
        <Image
          layout="fill"
          className="bg-gray-400 h-full absolute  object-cover"
          objectFit="cover"
          src={cardImgSrc}
          alt={cardImgAlt}
        />
      </div>
      <div className="flex flex-col flex-grow gap-4 justify-between p-4 pb-10 overflow-hidden bg-white">
        <div className="flex flex-col gap-4  justify-between mb-2 pb-10  flex-grow ">
          {title && (
            <h3 className="text-xl md:text-2xl font-semibold leading-tight text-gray-900">
              {title}
            </h3>
          )}
          {excerpt && <p className="text-[14.7px] lg:text-[16px]">{excerpt}</p>}
        </div>

        <Link href="#">
          <a
            className="group
          leading-tight bg-[#f2f2f2] text-paragraph font-semibold h-12 py-2 px-3 rounded-[10rem] w-[100%] flex items-center justify-center  transition-all duration-300 ease-in-out"
          >
            Continue Reading{" "}
            <svg
              className="w-4 h-4 ml-4 font-bold transition-all ease-in-out group-hover:ml-6 "
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
    </div>
  );
};

export default PostCard;
