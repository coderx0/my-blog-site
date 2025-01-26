// import ImageComponent from "@/app/Components/ImageComponent/Image";
import { client } from "../../../utils/sanity/client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogsByCategory } from "../../../Queries/queries";
import HoverCard from "@/app/Components/HoverCard";
import { Blog } from "@/types";
const validCategories = ["Tech", "Games", "Personal Development"];

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const formattedSlug = slug.replace("%20", " ");

  if (!validCategories.includes(formattedSlug)) {
    return notFound();
  }

  const result = await client.fetch(BlogsByCategory, {
    categoryTitle: decodeURI(formattedSlug),
  });

  return (
    <div className="mt-10 flex flex-col lg:flex-row justify-between ">
      <div className="w-full lg:w-[75%]">
        <div className="flex justify-between items-center mb-6 lg:mb-12">
          <h2 className="text-2xl font-bold">Blogs in {decodeURI(slug)}</h2>
        </div>
        <div className="flex flex-col gap-8">
          {result.map((blog: Blog) => (
            <Link
              href={`/blog/${blog.slug.current}`}
              key={blog.title}
              className=""
            >
              <HoverCard
                cardDetails={blog}
                containerClass="w-full flex flex-col lg:flex-row gap-4 lg:gap-12"
                imgContainerClass="w-full lg:w-[22em] h-[14em] sm:h-[16em] md:h-[26em] lg:h-[14em] xl:h-[14em]"
                imgDimenion={{ width: 400, height: 300 }}
                textContainerClass=" flex-1 flex flex-col md:flex-col gap-4"
                headerClass="font-bold md:text-sm lg:text-xl"
                descClass="text-[12px] lg:text-sm line-clamp-3"
                showTagandDate={true}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full h-[200px] lg:h-[620px] lg:w-[20%] bg-red-100 mt-10">
        <h2>AD</h2>
      </div>
    </div>
  );
};

export default BlogDetails;
