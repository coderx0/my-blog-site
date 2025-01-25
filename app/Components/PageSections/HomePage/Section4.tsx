import { Blog } from "@/types";
import RightArrow from "@/Icons/rightArrow";

import { client } from "../../../../utils/sanity/client";
import Link from "next/link";
import HoverCard from "../../HoverCard";

const QUERY = `*[_type == "post" && categories->title == $categoryTitle] | order(_createdAt desc)[0...3]{
  title,
  slug,
  author->{
    name
  },
  thumbnail,
  tags,
  description,
  categories->{
    title
  },
  _createdAt
}`;

const TechBlogs = async () => {
  const result = await client.fetch(QUERY, { categoryTitle: "Tech" });

  return (
    <>
      <div className="mt-24">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Tech</h2>
          <Link href={"/category/Tech"}>
            <p className="flex gap-2">
              <span>View More</span>
              <RightArrow />
            </p>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-8">
          {result.map((blog: Blog) => (
            <Link
              href={`/blog/${blog.slug.current}`}
              key={blog.title}
              className="lg:w-[40em]"
            >
              <HoverCard
                cardDetails={blog}
                containerClass=""
                imgContainerClass="`w-full h-[14em] sm:h-[16em] md:h-[26em] lg:h-[10em] xl:h-[18em]"
                textContainerClass="flex flex-col gap-2 h-full mt-4"
                imgDimenion={{ width: 400, height: 400 }}
                showDesc={false}
                showDate={true}
                headerClass="font-bold md:text-[18px] lg:text-[14px] xl:text-[18px] line-clamp-2"
                descClass="text-[14px] xl:text-[16px] mt-2 text-base-content/80 line-clamp-3"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechBlogs;
