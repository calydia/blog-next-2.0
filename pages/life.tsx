import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import ListingPageTemplate from '../templates/ListingPageTemplate';
import { BlogListing } from '@/interfaces/blogInterfaces';

export default function BlogPage({ page, newest, listing }: BlogListing) {
  return (
    <ListingPageTemplate page={page} newest={newest} listing={listing} />
  );
}

export async function getStaticProps() {
  const page = await client.query({
    query: gql`
      query GetBlogLifeListingPage {
        page(id: 3) {
          title
          content
          metaDescription
        }
      }
    `
  });

  const newest = await client.query({
    query: gql`
      query GetNewestLifeArticle {
        articles(limit: 1, category: 24) {
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
      query GetOtherLifeArticles {
        articles(limit: 100, category: 24, offset: 1) {
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
    },
    revalidate: 60
  };
}
