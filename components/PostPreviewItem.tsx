import { memo } from 'react';

import Link from 'next/link';

import { IPost } from '../types/post';
import { urlFor } from '../sanity';

interface IPostPreviewItemProps {
  post: IPost;
}

const PostPreviewItem = ({ post: { author, title, description, mainImage, slug } }: IPostPreviewItemProps) => (
  <Link href={`/post/${slug.current}`}>
    <a className="group cursor-pointer border rounded-lg overflow-hidden">
      <img
        className="h-80 md:h-60 w-full object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-200 ease-in-out"
        src={urlFor(mainImage).url() || ''}
        alt={title}
      />

      <div className="p-5 flex justify-between bg-white">
        <div>
          <p className="text-lg font-bold">{title}</p>
          <p className="text-xs">{description} by {author.name}</p>
        </div>

        <img
          className="w-12 h-12 rounded-full"
          src={urlFor(author.image).url() || ''}
          alt={author.name}
        />
      </div>
    </a>
  </Link>
);

export default memo(PostPreviewItem);
