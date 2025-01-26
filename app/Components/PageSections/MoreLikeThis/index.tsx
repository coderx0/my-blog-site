import { client } from "@/utils/sanity/client";
import Link from "next/link";
import HoverCard from "../../HoverCard";
import { Blog } from "@/types";
import { MoreLikeThisBlog } from "@/Queries/queries";

type Props = {
  category: string;
  slug: string;
};
const MoreLikeThisSection = async (props: Props) => {
  const results = await client.fetch(MoreLikeThisBlog, {
    categoryId: props.category,
    slug: props.slug,
  });

  return (
    <div className="mt-6">
      <div className="flex flex-col md:flex-row gap-8">
        {results.map((blog: Blog) => (
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
  );
};

export default MoreLikeThisSection;
