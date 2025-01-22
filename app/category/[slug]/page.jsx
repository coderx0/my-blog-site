import ImageComponent from "@/app/Components/ImageComponent/Image";
import { client } from "../../../utils/sanity/client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogsByCategory } from "../../../Queries/queries";
const validCategories = ["Tech", "Games", "Personal Development"];

const BlogDetails = async ({ params }) => {
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
          {result.map((blog) => (
            <div
              key={blog.title}
              className="flex flex-col md:flex-row gap-4 lg:gap-12"
            >
              <Link
                href={`/blog/${blog.slug.current}`}
                className="w-full md:max-w-[35%]"
              >
                <ImageComponent
                  imgSrc={blog.thumbnail}
                  height={240}
                  width={400}
                />
              </Link>
              <div className="flex flex-col-reverse md:flex-col gap-4">
                <Link
                  href={`/blog/${blog.slug.current}`}
                  className="flex flex-col gap-2 md:gap-4"
                >
                  <h2 className="font-bold md:text-sm lg:text-xl">
                    {blog.title}
                  </h2>
                  <p className="text-[12px] lg:text-sm">{blog.description}</p>
                </Link>
                <div className="flex text-[12px] justify-between md:justify-start md:gap-8">
                  {blog.tags?.map((tag) => (
                    <p
                      key={tag}
                      className="bg-neutral-content rounded-md text-neutral px-2 font-semibold"
                    >
                      {tag}
                    </p>
                  ))}
                  <p>{new Date(blog._createdAt).toDateString()}</p>
                </div>
              </div>
            </div>
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
