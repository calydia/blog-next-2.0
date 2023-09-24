import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import ListingPageTemplate from '../templates/ListingPageTemplate';
import { BlogListing } from '@/interfaces/blogInterfaces';

export default function Home({ page, newest, listing }: BlogListing) {
  return (
    <ListingPageTemplate page={page} newest={newest} listing={listing}/>
  )
}

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query GetBlogFrontPage {
        page(id: 1) {
          title
          metaDescription
          content
        }
      }
    `
  });

  const newest = await client.query({
    query: gql`
      query GetNewestArticle {
        articles(limit: 1) {
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
      query GetOtherArticles {
        articles(limit: 100, offset: 1) {
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
      page: result.data.page,
      newest: newest.data.articles,
      listing: listing.data.articles
    },
    revalidate: 60
  };
}
