export const APP_CONFIGS = {
  environment: process.env.NODE_ENV || 'development',
  envIsDev: (process.env.NODE_ENV || 'development') === 'development',
};

export const SANITY_CONFIGS = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  useCdn: !APP_CONFIGS.envIsDev,
  token: process.env.SANITY_API_TOKEN || '',
};

export const SANITY_QUERIES = {
  posts: `*[_type == 'post']{
    _id,
    title,
    author-> {
      _id,
      name,
      image,
    },
    description,
    mainImage,
    slug,
    _createdAt,
  }`,
  postSlugs: `*[_type == 'post']{
    _id,
    slug,
  }`,
  postBySlug: `*[_type == 'post' && slug.current == $slug][0]{
    _id,
    title,
    author-> {
      _id,
      name,
      image,
    },
    "comments": *[_type == 'comment' && post._ref == ^._id && approved == true],
    description,
    mainImage,
    slug,
    body,
    _createdAt,
  }`,
  example: `*[_type == "post"]{
    ...,
    "author": author->{
      ...,
      "bio": bio.text,
      "image": image.asset->url
    }
  }`,
};

// "comments": *[_type == 'comment' && references(^._id)],
// "comments": *[_type == 'comment' && post._ref == ^._id && approved == true],
