import { Blog } from "@/types";
import Link from "next/link";
import React from "react";
// import ImageComponent from "../ImageComponent/Image";
import { getImgUrl } from "@/utils/sanity/getImgUrl";

const Card2 = ({
  blog,
  imgWidth,
  imgHeight,
  customImgContainerClass,
}: {
  blog: Blog;
  imgWidth?: number;
  imgHeight?: number;
  customImgContainerClass?: string;
}) => {
  return (
    <>
      <div className="lg:w-[40em]">
        <Link href={`/blog/${blog.slug.current}`} className="w-full">
          <div
            className={`w-full h-[14em] sm:h-[16em] md:h-[28em] lg:h-[10em] xl:h-[12em] ${customImgContainerClass}`}
          >
            <img
              src={getImgUrl(blog.thumbnail)
                .width(imgWidth || 400)
                .height(imgHeight || 300)
                .url()}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 h-full mt-4">
            <p className="text-[12px]">
              {new Date(blog._createdAt).toDateString()}
            </p>
            <h2 className="font-bold md:text-[18px] lg:text-[14px] xl:text-[18px] line-clamp-2 hover:text-base-content/75 transition duration-200">
              {blog.title}
            </h2>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card2;
