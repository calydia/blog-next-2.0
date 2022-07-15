import { gql } from '@apollo/client';
import { client } from '../../lib/apollo';
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
      <div className="grid custom-grid max-w-[1564px] mx-auto md:px-8-px">
        <div className="grid col-span-2">
          <Image
            src={post.mainImage}
            alt=""
            width={1500}
            height={600}
            layout="intrinsic"
          />
        </div>
        <div className="text-lt-gray dark:text-dk-gray py-2 px-4-px max-w-xl mx-auto col-span-2 md:col-span-1 md:m-0 md:py-6 md:px-8 lg:max-w-4xl">
          <h1 id="skip-target" className="text-3xl font-bold mt-4 mb-2 lg:text-4xl">{ post.title }</h1>
          <span className="text-base">
            {dayjs(post.date).format(`MMMM DD, YYYY`)}{' '}
            | {post.category}
          </span>
          {post.boxContent ?
            <div className="box grid gap-6 border-solid border-4 p-8-px my-8 bg-lt-code-bg border-lt-code-border dark:bg-dk-code-bg dark:border-dk-code-border">
              <h2 className="m-0">{post.boxTitle}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.boxContent }}></div>
            </div>
          : null }
          <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-xl bodytext"></div>
          <div dangerouslySetInnerHTML={{ __html: post.imageCredits }} className="text-base"></div>
        </div>
        <aside className="mt-36 col-span-2 md:col-span-1 md:w-[280px] md:mx-auto">
          <article>
            <div className="p-[12px] md:p-8 text-center text-lg bg-lt-blue-light text-lt-gray dark:bg-dk-purple dark:text-white">
              <div className="mb-6 -mt-28">
                <Image
                  src={post.authorImage}
                  alt=""
                  width={150}
                  height={150}
                  layout="fixed"
                  className="rounded-full"
                />
              </div>
              <span className="font-title text-xl">{ post.authorName }</span>
              <div dangerouslySetInnerHTML={{ __html: post.authorContent }} className="text-lg max-w-xl mx-auto"></div>
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
    query GetBlogPosts {
      articles {
        items {
          slug
          category
        }
      }
    }
    `
  });

  const paths = result.data.articles.items.map(({ slug, category }) => {
    return {
      params: { slug: slug.substring(1), category: category.toLowerCase()  }
    }
  });

  return {
    paths,
    fallback: 'blocking'
  }
};

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const result = await client.query({
    query: gql`
      query GetBlog($slug: String!) {
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
          boxTitle
          boxContent
        }
      }

    `,
    variables: { slug }
  });

  return {
    props: {
      post: result.data.articleSlug,
    },
    revalidate: 60
  };
}
