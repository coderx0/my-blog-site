import React from "react";
import Link from "next/link";
import { Blog } from "@/types";
import HoverCard from "../../HoverCard";

const Section1 = ({ result, imp }: { result: Blog[]; imp: Blog }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 xl:gap-8">
      <div className="lg:w-[55%] xl:w-[60%]">
        <Link href={`/blog/${imp.slug.current}`}>
          <HoverCard
            cardDetails={imp}
            containerClass=""
            imgContainerClass="w-full h-[14em] md:h-[20em] xl:h-[30em]"
            textContainerClass="mt-4 xl:mt-8"
            imgDimenion={{ width: 600, height: 400 }}
            headerClass="font-semibold text-[18px] xl:text-[24px]"
            descClass="text-[14px] xl:text-[16px] mt-2 text-base-content/80 line-clamp-3"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-8 lg:w-[45%] xl:w-[40%]">
        {[imp, ...result].map((blog: Blog) => (
          <Link
            key={blog.title}
            href={`/blog/${blog.slug.current}`}
            className=""
          >
            <HoverCard
              cardDetails={blog}
              containerClass="w-full flex flex-col lg:flex-row lg:gap-4"
              imgContainerClass="lg:flex-1 w-full lg:w-[50em] h-[14em] sm:h-[16em] md:h-[28em] lg:h-[10em] xl:h-[12em]"
              textContainerClass="mt-4 lg:mt-0 flex-1 flex flex-col gap-2 md:gap-4"
              imgDimenion={{ width: 400, height: 300 }}
              headerClass="font-semibold line-clamp-3 text-[18px]"
              descClass="text-[14px] mt-2 line-clamp-2 text-base-content/80"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Section1;
