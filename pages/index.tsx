import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { IPost } from '../types/post';
import { SANITY_QUERIES } from '../utils/constants';
import { sanityClient } from '../sanity';
import Layout from '../components/Layout';
import PrimaryBanner from '../components/PrimaryBanner';
import PostPreviewItem from '../components/PostPreviewItem';

interface IHomeProps {
  posts: IPost[];
}

const Home: NextPage<IHomeProps> = ({ posts }) => (
  <Layout className="mx-auto max-w-7xl">
    <Head>
      <title>Medium Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <PrimaryBanner />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
      {posts.map((post) => (
        <PostPreviewItem key={post._id} post={post} />
      ))}
    </div>
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await sanityClient.fetch(SANITY_QUERIES.posts);

  return {
    props: { posts },
  };
};

export default Home;
