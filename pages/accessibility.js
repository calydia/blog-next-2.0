import { gql } from '@apollo/client';
import { client } from '../../lib/apollo';
import Head from 'next/head';
import Image from 'next/image';
import dayjs from 'dayjs';

export default function BlogPage({ page, newest, listing }) {
  return (
      <main>
        <Head>
          <title>{ `${page.title} | Blog - Sanna Mäkinen` }</title>
          <meta name="Description" content={page.metaDescription} />
          <meta
            property="og:description"
            content={page.metaDescription}
          />
          <meta property="og:title" content={ page.title } />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content="Blog - Sanna Mäkinen" />
          <meta property="og:image" content="https://blog.sanna.ninja/images/osiris.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Head>
        <div>
          <h1 id="skip-target">{ page.title }</h1>
          <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
        </div>
        <div>
          Tänne sisällöt
        </div>
      </main>
  );
}

export async function getStaticProps() {
  const page = await client.query({
    query: gql`
      query GetBlogA11yListingPage {
        page(id: 41) {
          title
          content
          metaDescription
        }
      }
    `
  });

  const newest = await client.query({
    query: gql`
      query GetNewestA11yArticle {
        articles(limit: 1, category: 5) {
          items {
            title
            slug
            date
            listingImage
            category
          }
        }
      }
    `
  });

  const listing = await client.query({
    query: gql`
      query GetOtherA11yArticles {
        articles(limit: 100, category: 5, offset: 1) {
          items {
            title
            slug
            date
            listingImage
            category
          }
        }
      }
    `
  });

  return {
    props: {
      page: page.data.page,
      newest: newest.data.articles,
      listing: listing.data.articles
    }
  };
}
