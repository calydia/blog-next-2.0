import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import Head from 'next/head';
import Breadcrumb from '../components/Breadcrumb';
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
          <Breadcrumb current={page.title} />
          <h1 id="skip-target" className="block px-4-px font-bold text-center mt-8 lg:mt-16 mb-4 lg:mb-8 text-4xl md:text-6xl text-lt-gray dark:text-white">{ page.title }</h1>
          <div dangerouslySetInnerHTML={{ __html: page.content }} className="text-xl text-center mb-6 lg:mb-12 text-lt-gray dark:text-white"></div>
        </div>
        <div className="mx-4-px max-w-7xl xl:my-0 xl:mx-auto">
          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-8 lg:gap-12" role="list">
            {newest.items.map((node, index) => {
                  return (
                    <li key={`list-item${index}`} className="
                    p-2 md:col-span-2 lg:col-span-3 border-solid border-4 gradient-border-light bg-lt-blue-light text-lt-gray
                    dark:gradient-border-dark dark:bg-dk-purple dark:text-white">
                      <a key={index} className="block border-2 border-transparent md:grid md:grid-cols-2 md:gap-8 post-link focus:outline focus:outline-4 focus:outline-offset-15	focus:outline-black dark:focus:outline-white hover:border-lt-purple dark:hover:border-dk-blue-light" href={`/${node.category.toLowerCase()}${node.slug}`}>
                        <Image
                          src={node.listingImage}
                          alt=""
                          width={690}
                          height={404}
                        />
                        <div className="self-center text-center">
                          <span id={`first-blog-title${index}`} className="post-title block text-lg font-bold md:text-3xl lg:text-4xl py-4 px-2
                          after:bg-black after:h-0.5 after:block after:w-10 after:mt-4 after:mb-0 after:mx-auto after:content-['']
                          dark:after:bg-white
                          ">
                            {node.title}
                          </span>
                          <span className="sr-only">on</span>
                          <span className="block text-base md:text-xl lg:text-2xl pb-4">
                          {dayjs(node.date)
                              .format(`MMMM DD, YYYY`)}{' '}
                            <span aria-hidden="true">|</span> <span className="sr-only">in category</span> {node.category}
                          </span>
                        </div>
                      </a>
                    </li>
                  );
                }
              )
            }
            {listing.items.map((node, index) => {
                  return (
                    <li key={`list-item${index}`} className="grid items-stretch p-2 border-solid border-4 gradient-border-light bg-lt-blue-light text-lt-gray
                    dark:gradient-border-dark dark:bg-dk-purple dark:text-white
                    ">
                      <a key={index} href={`/${node.category.toLowerCase()}${node.slug}`} className="post-link border-2 border-transparent focus:outline focus:outline-4 focus:outline-offset-15	focus:outline-black dark:focus:outline-white hover:border-lt-purple dark:hover:border-dk-blue-light">
                        <Image
                          src={node.listingImage}
                          alt=""
                          width={690}
                          height={404}
                        />
                        <div className="self-center text-center">
                          <span id={`blog-title${index}`} className="post-title block text-lg font-bold md:text-2xl py-4 px-2
                          after:bg-black after:h-0.5 after:block after:w-10 after:mt-4 after:mb-0 after:mx-auto after:content-['']
                          dark:after:bg-white">
                            {node.title}
                          </span>
                          <span className="sr-only">on</span>
                          <span className="block text-base md:text-xl pb-4">
                            {dayjs(node.date)
                              .format(`MMMM DD, YYYY`)}{' '}
                            <span aria-hidden="true">|</span> <span className="sr-only">in category</span> {node.category}
                          </span>
                        </div>
                      </a>
                    </li>
                  );
                }
              )
            }
            </ul>
        </div>
      </main>
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
