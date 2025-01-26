import { getImgUrl } from "@/utils/sanity/getImgUrl";

type ImageProps = {
  imgSrc: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  width: number;
  height: number;
  animate?: boolean;
};

const ImageComponent = ({ imgSrc, height, width }: ImageProps) => {
  return (
    <img
      src={getImgUrl(imgSrc).width(width).height(height).auto("format").url()}
      alt=""
      className={`w-full h-full object-cover `}
      height={height}
      width={width}
    />
  );
};

export default ImageComponent;
