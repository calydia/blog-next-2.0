import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import dayjs from 'dayjs';
import Image from 'next/image';
import Head from 'next/head';

export default function BlogPage({ post }) {

  return (
    <main>
      <Head>
        <title>{post.title} | Blog - Sanna Mäkinen</title>
        <meta name="Description" content={post.metaDescription} />
        <meta
          property="og:description"
          content={post.metaDescription}
        />
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Blog - Sanna Mäkinen" />
        <meta property="og:image" content={post.mainImage} />
      </Head>
      <div className="grid-cols-[1fr 280px]">
        <div className="grid-cols-1 md:grid-cols-2">
          <Image
            src={post.mainImage}
            alt=""
            width={1500}
            height={600}
            layout="intrinsic"
          />
        </div>
        <div className="text-lt-gray dark:text-dk-gray py-2 px-4-px lg:py-6 lg:px-8">
          <h1 id="skip-target" className="text-3xl lg:text-4xl">{ post.title }</h1>
          <span className="text-base">
            {dayjs(post.date).format(`MMMM DD, YYYY`)}{' '}
            | {post.category}
          </span>
          <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-xl"></div>
          <div dangerouslySetInnerHTML={{ __html: post.imageCredits }} className="text-base"></div>
        </div>
        <aside className="w-[280px]">
          <article>
            <div className="p-[12px] lg:p-8 text-center text-lg">
              <div className="mb-6 -mt-28">
                <Image
                  src={post.authorImage}
                  alt=""
                  width={150}
                  height={150}
                  layout="fixed"
                />
              </div>
              <span className="font-title text-xl">{ post.authorName }</span>
              <div dangerouslySetInnerHTML={{ __html: post.authorContent }} className="text-lg"></div>
            </div>
          </article>
        </aside>
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const result = await client.query({
    query: gql`
    query GetTechBlogs {
      articles(category: 1, limit: 100) {
        items {
          slug
        }
      }
    }
    `
  });

  return {
    paths: result.data.articles.items.map(({ slug }) => {
      return {
        params: { slug }
      }
    }),
    fallback: false
  }
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const result = await client.query({
    query: gql`
      query GetTechBlog($slug: String!) {
        articleSlug(slug: $slug) {
          title
          authorContent
          authorImage
          authorName
          category
          content
          date
          id
          imageCredits
          slug
          published
          mainImage
          listingImage
          metaDescription
        }
      }

    `,
    variables: { slug }
  });

  return {
    props: {
      post: result.data.articleSlug
    }
  };
}
