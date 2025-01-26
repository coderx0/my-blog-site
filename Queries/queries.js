export const BlogsByCategory = `*[_type == "post" && categories->title == $categoryTitle] | order(_createdAt desc)[0...10]{
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

export const BlogBySlug = `*[_type == "post" && slug.current == $slug][0]{
    title,
    description,
    slug,
    content,
    authorName,
    tags,
    thumbnail,
    categories->{
    ...,
    }
  }
  `;

export const MoreLikeThisBlog = `*[_type == "post" && categories._ref == $categoryId && slug.current != $slug] | order(_createdAt desc)[0...3]{
    title,
    slug,
    thumbnail,
    description,
    _createdAt
  }`;
