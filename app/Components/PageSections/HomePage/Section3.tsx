import Link from "next/link";
import { Blog } from "@/types";
import { getImgUrl } from "@/utils/sanity/getImgUrl";

const Section3 = ({ result, imp }: { result: Blog[]; imp: Blog }) => {
  return (
    <div className="mt-10 md:mt-24 flex flex-col-reverse lg:flex-row justify-between ">
      <div className="w-full lg:w-[75%]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest</h2>
        </div>
        <div className="flex flex-col gap-10">
          {[imp, ...result].map((blog: Blog) => (
            <div key={blog.title} className="">
              <Link
                href={`/blog/${blog.slug.current}`}
                className="w-full flex flex-col lg:flex-row gap-4 lg:gap-8"
              >
                <div className="w-full lg:w-[20em] h-[14em] sm:h-[16em] md:h-[28em] lg:h-[14em] xl:h-[12em]">
                  <img
                    src={getImgUrl(blog.thumbnail).width(400).height(300).url()}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col md:flex-col gap-4 xl:pr-24">
                  <h2 className="font-bold md:text-sm lg:text-xl">
                    {blog.title}
                  </h2>
                  <p className="text-[12px] lg:text-sm line-clamp-3">
                    {blog.description}
                  </p>
                  <div className="flex text-[12px] justify-between md:justify-start md:gap-8">
                    <p className="bg-neutral-content rounded-md text-neutral px-2 font-semibold">
                      {blog.categories.title}
                    </p>
                    <p>{new Date(blog._createdAt).toDateString()}</p>
                  </div>
                </div>
              </Link>
            </div>
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
