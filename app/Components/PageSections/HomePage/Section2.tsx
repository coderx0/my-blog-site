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

const GameBlogs = async () => {
  const gameBlogs = await client.fetch(QUERY, { categoryTitle: "Games" });
  const developmentBlogs = await client.fetch(QUERY, {
    categoryTitle: "Personal Development",
  });

  return (
    <div className=" mt-16 lg:mt-40 flex flex-col-reverse justify-between lg:flex-row">
      <div className="w-full lg:w-[75%] flex flex-col gap-12 lg:gap-24">
        <div className="">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-md md:text-3xl font-bold">Games</h2>
            <Link href={"/category/Games"}>
              <p className="flex gap-2">
                <span className="text-sm">View More</span>
                <RightArrow />
              </p>
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {gameBlogs.map((blog: Blog) => (
              // <Card2 blog={blog} key={blog.title} />
              <Link
                href={`/blog/${blog.slug.current}`}
                key={blog.title}
                className="lg:w-[40em]"
              >
                <HoverCard
                  cardDetails={blog}
                  containerClass=""
                  imgContainerClass="`w-full h-[14em] sm:h-[16em] md:h-[28em] lg:h-[10em] xl:h-[12em]"
                  textContainerClass="flex flex-col gap-2 h-full mt-4"
                  imgDimenion={{ width: 400, height: 300 }}
                  showDesc={false}
                  showDate={true}
                  headerClass="font-bold md:text-[18px] lg:text-[14px] xl:text-[18px] line-clamp-2"
                  descClass="text-[14px] xl:text-[16px] mt-2 text-base-content/80 line-clamp-3"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-ms md:text-3xl font-bold">
              Personal Development
            </h2>
            <Link href={"/category/Personal Development"}>
              <p className="flex gap-2">
                <span className="text-sm">View More</span>
                <RightArrow />
              </p>
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {developmentBlogs.map((blog: Blog) => (
              <Link
                href={`/blog/${blog.slug.current}`}
                key={blog.title}
                className="lg:w-[40em]"
              >
                <HoverCard
                  cardDetails={blog}
                  containerClass=""
                  imgContainerClass="w-full h-[14em] sm:h-[16em] md:h-[28em] lg:h-[10em] xl:h-[12em]"
                  textContainerClass="flex flex-col gap-2 h-full mt-4"
                  imgDimenion={{ width: 400, height: 300 }}
                  showDesc={false}
                  showDate={true}
                  headerClass="font-bold md:text-[18px] lg:text-[14px] xl:text-[18px] line-clamp-2"
                  descClass="text-[14px] xl:text-[16px] mt-2 text-base-content/80 line-clamp-3"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[22%] h-[200px] lg:h-[800px] bg-red-100 text-3xl flex justify-center items-center font-bold text-black mb-8">
        {" "}
        AD
      </div>
    </div>
  );
};

export default GameBlogs;
