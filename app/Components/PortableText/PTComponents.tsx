import Image from "next/image";
import { getImgUrl } from "@/utils/sanity/getImgUrl";
import {
  PortableText,
  PortableTextMarkComponentProps,
} from "@portabletext/react";

const ptComponents = {
  types: {
    image: ({ value }: { value: PortableTextMarkComponentProps["value"] }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="w-full flex justify-center items-center my-6 h-[220px]">
          <Image
            alt={value.alt || " "}
            loading="lazy"
            src={getImgUrl(value)
              .width(800)
              .height(520)
              .fit("max")
              .auto("format")
              .url()}
            className="w-full h-full object-cover"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: PortableTextMarkComponentProps["children"];
      value: PortableTextMarkComponentProps["value"];
    }) => {
      return (
        <a
          href={value?.href}
          rel={"noindex nofollow"}
          target="_blank"
          className="text-blue-400"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: PortableTextMarkComponentProps) => (
      <em className="font-semibold">{children}</em>
    ),
    underline: ({ children }: PortableTextMarkComponentProps) => (
      <u className="font-semibold block my-2">{children}</u>
    ),
  },
  list: {
    bullet: ({ children }: PortableTextMarkComponentProps) => (
      <ul className="mt-xl px-8">{children}</ul>
    ),
    number: ({ children }: PortableTextMarkComponentProps) => (
      <ol className="mt-lg pl-6 md:pl-12 flex flex-col gap-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: PortableTextMarkComponentProps) => (
      <li style={{ listStyleType: "disc" }}>{children}</li>
    ),
    number: ({ children }: PortableTextMarkComponentProps) => (
      <li className="" style={{ listStyleType: "decimal" }}>
        {children}
      </li>
    ),
  },
  block: {
    h3: ({ children }: PortableTextMarkComponentProps) => (
      <h3 className="text-2xl text-primary mt-8">{children}</h3>
    ),
    h4: ({ children }: PortableTextMarkComponentProps) => (
      <h4 className="text-2xl text-primary mt-8">{children}</h4>
    ),
  },
};

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
}

const PTrenderer = ({ content }: Props) => {
  //@ts-expect-error PortableText component does not support 'any' type for content
  return <PortableText value={content} components={ptComponents} />;
};

export default PTrenderer;
