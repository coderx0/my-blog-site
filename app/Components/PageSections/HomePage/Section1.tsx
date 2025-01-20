import React from "react";
import Link from "next/link";
import { Blog } from "@/types";
import { BodyFont } from "@/fonts";
import { getImgUrl } from "../../../../utils/sanity/getImgUrl";

const Section1 = ({ result, imp }: { result: Blog[]; imp: Blog }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 xl:gap-8">
      <div className="lg:w-[55vw] xl:w-[60vw]">
        <div className="w-full h-[14em] md:h-[20em] xl:h-[30em]">
          <img
            src={getImgUrl(imp.thumbnail)
              .width(600)
              .height(400)
              .auto("format")
              .url()}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4 xl:mt-8">
          <h3 className=" font-semibold  hover:text-base-content/75 transition duration-200 text-[18px] xl:text-[24px]">
            {imp.title}
          </h3>
          <p
            className={`text-[14px] xl:text-[16px] mt-2 text-base-content/80 line-clamp-3 ${BodyFont.className}`}
          >
            {imp.description}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:w-[45vw] xl:w-[40vw]">
        {[imp, ...result].map((blog: Blog) => (
          <div key={blog.title} className=" ">
            <Link
              href={`/blog/${blog.slug.current}`}
              className="w-full flex flex-col lg:flex-row lg:gap-4"
            >
              <div className="lg:flex-1 w-full lg:w-[50em] h-[14em] sm:h-[16em] md:h-[28em] lg:h-[10em] xl:h-[12em]">
                <img
                  src={getImgUrl(blog.thumbnail)
                    .width(400)
                    .height(300)
                    .auto("format")
                    .url()}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 lg:mt-0 flex-1 flex flex-col gap-2 md:gap-4">
                <h3 className="font-semibold line-clamp-3  hover:text-base-content/75 transition duration-200 text-[18px]">
                  {blog.title}
                </h3>
                <p
                  className={`text-[14px] mt-2 line-clamp-2 text-base-content/80 ${BodyFont.className}`}
                >
                  {blog.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
