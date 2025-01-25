import { BodyFont } from "@/fonts";
import { Blog } from "@/types";
import { getImgUrl } from "@/utils/sanity/getImgUrl";
import React from "react";

interface HoverCardProps {
  cardDetails: Blog;
  containerClass: string;
  imgContainerClass: string;
  textContainerClass: string;
  imgDimenion: {
    width: number;
    height: number;
  };
  headerClass: string;
  descClass: string;
  showDesc?: boolean;
  showDate?: boolean;
  showTagandDate?: boolean;
}
const HoverCard = ({
  cardDetails,
  imgContainerClass,
  containerClass,
  textContainerClass,
  imgDimenion,
  headerClass,
  descClass,
  showDesc = true,
  showDate = false,
  showTagandDate = false,
}: HoverCardProps) => {
  return (
    <div className="group overflow-hidden">
      <div className={containerClass}>
        <div className={`${imgContainerClass} rounded-2xl overflow-hidden`}>
          <img
            src={getImgUrl(cardDetails.thumbnail)
              .width(imgDimenion.width)
              .height(imgDimenion.height)
              .auto("format")
              .url()}
            alt=""
            className="w-full h-full object-cover group-hover:scale-[1.05] transition duration-200"
          />
        </div>
        <div className={textContainerClass}>
          <h3 className={`${headerClass} relative`}>
            {showDate && (
              <p className="text-[12px] font-normal mb-4">
                {new Date(cardDetails._createdAt).toDateString()}
              </p>
            )}
            <span className="group-hover:text-info transition-[color] duration-200">
              {cardDetails.title}
            </span>
            {/* <div className="absolute inset-0 w-0 text-accent overflow-hidden group-hover:w-full transition-[width] duration-200">
              {cardDetails.title}
            </div> */}
          </h3>
          {showDesc && (
            <p className={`${descClass} ${BodyFont.className}`}>
              {cardDetails.description}
            </p>
          )}
          {showTagandDate && (
            <div className="flex text-[12px] justify-between md:justify-start md:gap-8">
              <p className="bg-neutral-content rounded-md text-neutral px-2 font-semibold">
                {cardDetails.categories.title}
              </p>
              <p>{new Date(cardDetails._createdAt).toDateString()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
