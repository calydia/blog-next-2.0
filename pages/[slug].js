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
      <div>
        <div className="blog-main-image-wrapper">
          <Image
            src={post.mainImage}
            alt=""
            width={1500}
            height={600}
            layout="intrinsic"
          />
        </div>
        <div className="text-lt-gray dark:text-dk-gray">
          <h1 id="skip-target" className="text-3xl lg:text-4xl">{ post.title }</h1>
          <span className="text-base">
            {dayjs(post.date).format(`MMMM DD, YYYY`)}{' '}
            | {post.category}
          </span>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          <div dangerouslySetInnerHTML={{ __html: post.imageCredits }}></div>
        </div>
        <aside>
          <article className="info-box">
            <div className="info-content">
              <div className="writer-image-wrapper">
                <Image
                  src={post.authorImage}
                  alt=""
                  width={150}
                  height={150}
                  layout="fixed"
                  className="writer-image"
                />
              </div>
              <span className="name">{ post.authorName }</span>
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
