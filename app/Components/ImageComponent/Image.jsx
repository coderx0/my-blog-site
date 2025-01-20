import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../utils/sanity/client";
// import Image from "next/image";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// type ImageProps = {
//   imgSrc: {
//     _type: string,
//     asset: {
//       _ref: string,
//       _type: string,
//     },
//   },
//   width: number,
//   height: number,
//   animate?: boolean,
// };

const ImageComponent = ({ imgSrc, height, width, animate = true }) => {
  return (
    <img
      src={urlFor(imgSrc).width(width).height(height).auto("format").url()}
      alt=""
      className={`w-full h-full object-cover ${
        animate ? "hover:brightness-75 transition duration-200 ease-in-out" : ""
      }`}
      height={height}
      width={width}
    />
  );
};

export default ImageComponent;
