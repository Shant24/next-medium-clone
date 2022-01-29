import { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { IPost } from '../../types/post';
import { SANITY_QUERIES } from '../../utils/constants';
import { sanityClient, urlFor } from '../../sanity';
import Layout from '../../components/Layout';
import AuthorInformation from '../../components/AuthorInformation';
import PortableBody from '../../components/PortableBody';
import WriteCommentForm from '../../components/WriteCommentForm';
import Comments from '../../components/Comments';

interface IPostProps {
  post: IPost;
}

const Post: NextPage<IPostProps> = ({ post }) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const { _id, author, title, description, mainImage, comments, body, _createdAt } = post;

  return (
    <Layout title={title}>
      <img className="w-full h-40 object-cover" src={urlFor(mainImage).url()!} alt={title} />

      <article className="max-w-3xl mx-auto p-5">
        <h1 className="mt-10 mb-3 text-3xl">{title}</h1>
        <h2 className="mb-2 text-xl font-light text-gray-500">{description}</h2>

        <AuthorInformation author={author} _createdAt={_createdAt} />

        <div className="mt-10">
          <PortableBody body={body} />
        </div>

        <hr className="max-w-lg my-5 mx-auto border border-yellow-500" />

        {isSubmitted ? (
          <div className="max-w-2xl my-10 mx-auto p-10 flex flex-col bg-yellow-500 text-white">
            <h3 className="text-3xl font-bold">Thank you for submitting your comment!</h3>
            <p>Once it has been approved, it will appear below!</p>
          </div>
        ) : (
          <WriteCommentForm postId={_id} setIsSubmitted={setIsSubmitted} />
        )}

        <Comments comments={comments} />
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: IPost[] = await sanityClient.fetch(SANITY_QUERIES.postSlugs);

  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await sanityClient.fetch(SANITY_QUERIES.postBySlug, { slug: params?.slug });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 60,
  };
};

export default Post;
