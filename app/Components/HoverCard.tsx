import { BodyFont } from "@/fonts";
import { Blog } from "@/types";
import { getImgUrl } from "@/utils/sanity/getImgUrl";
import React from "react";
import CursorFollower from "./CursorFollower";

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
    <CursorFollower
      FollowerComponent={
        <button className="bg-green-600 text-sm py-1 px-3 flex items-center gap-1 rounded-full text-white">
          <span className="font-semibold">Read more</span>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
      }
    >
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
    </CursorFollower>
  );
};

export default HoverCard;
