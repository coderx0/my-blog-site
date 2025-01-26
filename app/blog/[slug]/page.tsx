import ImageComponent from "@/app/Components/ImageComponent/Image";
import { client } from "../../../utils/sanity/client";
import { BodyFont } from "@/fonts";
import MoreLikeThisSection from "@/app/Components/PageSections/MoreLikeThis";
import { notFound } from "next/navigation";
import { getImgUrl } from "@/utils/sanity/getImgUrl";
import PTrenderer from "../../Components/PortableText/PTComponents";
import { BlogBySlug } from "@/Queries/queries";

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post"][0...100].slug.current`);

  return slugs.map((slug: string) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await client.fetch(BlogBySlug, { slug: slug });

  // const previousImages = (await parent).openGraph?.images || []
  if (!result) {
    return {
      title: "Blog not found",
      description: "The blog you are looking for does not exist",
    };
  }

  return {
    title: result.title,
    description: result.description,
    openGraph: {
      images: [
        getImgUrl(result.thumbnail)
          .width(500)
          .height(320)
          .fit("max")
          .auto("format")
          .url(),
      ],
    },
  };
}
//@ts-nocheck
const BlogDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const result = await client.fetch(BlogBySlug, { slug: slug });

  if (!result) {
    notFound();
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:gap-8 mt-12">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{result.title}</h2>
          <div className="my-12 md:px-12">
            <ImageComponent
              imgSrc={result.thumbnail}
              width={700}
              height={400}
              animate={false}
            />
          </div>
          <div
            className={` text-lg lg:text-xl flex flex-col gap-4 ${BodyFont.className}`}
          >
            <PTrenderer content={result.content} />
          </div>
        </div>
        <div className="w-full lg:w-[30%] bg-blue-100 mt-20">Hello wolrd</div>
      </div>
      <div className="mt-12 lg:mt-24">
        <h2 className="text-xl font-bold">More Like This</h2>
        <MoreLikeThisSection
          category={result.categories._id}
          slug={result.slug.current}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
