import Link from "next/link";
import { Blog } from "@/types";
import HoverCard from "../../HoverCard";

const Section3 = ({ result, imp }: { result: Blog[]; imp: Blog }) => {
  return (
    <div className="mt-10 md:mt-24 flex flex-col-reverse lg:flex-row justify-between ">
      <div className="w-full lg:w-[75%]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest</h2>
        </div>
        <div className="flex flex-col gap-10">
          {[imp, ...result].map((blog: Blog) => (
            <Link
              href={`/blog/${blog.slug.current}`}
              key={blog.title}
              className=""
            >
              <HoverCard
                cardDetails={blog}
                containerClass="w-full flex flex-col lg:flex-row gap-4 lg:gap-8"
                imgContainerClass="w-full lg:w-[20em] h-[14em] sm:h-[16em] md:h-[26em] lg:h-[14em] xl:h-[12em]"
                imgDimenion={{ width: 400, height: 300 }}
                textContainerClass="flex-1 flex flex-col md:flex-col gap-4 xl:pr-24"
                headerClass="font-bold md:text-sm lg:text-xl"
                descClass="text-[12px] lg:text-sm line-clamp-3"
                showTagandDate={true}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full h-[200px] lg:h-[620px] lg:w-[22%] bg-red-100 mb-10">
        <h2>AD</h2>
      </div>
    </div>
  );
};

export default Section3;
