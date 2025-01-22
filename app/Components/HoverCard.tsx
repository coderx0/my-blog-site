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
}
const HoverCard = ({
  cardDetails,
  imgContainerClass,
  containerClass,
  textContainerClass,
  imgDimenion,
  headerClass,
  descClass,
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
            <span className="group-hover:text-info transition-[color] duration-200">
              {cardDetails.title}
            </span>
            {/* <div className="absolute inset-0 w-0 text-accent overflow-hidden group-hover:w-full transition-[width] duration-200">
              {cardDetails.title}
            </div> */}
          </h3>
          <p className={`${descClass} ${BodyFont.className}`}>
            {cardDetails.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
