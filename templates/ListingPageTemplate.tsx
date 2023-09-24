import React from 'react';
import Head from 'next/head';
import NewestBlogListing from '../components/NewestBlogListing';
import OtherBlogListing from '../components/OtherBlogListing';
import PageContent from '../components/PageContent';
import { BlogListing } from '@/interfaces/blogInterfaces';

export default function ListingPageTemplate({ page, newest, listing }: BlogListing) {
  return (
      <main>
        <Head>
          <title>{ `${page.title} | Blog - Sanna Mäkinen` }</title>
          <meta name="description" content={page.metaDescription} />
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
        <PageContent title={page.title} content={page.content} />
        <div className="max-w-7xl mx-4-px xl:my-0 xl:mx-auto">
          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
          <ul className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12" role="list">
            <NewestBlogListing data={newest} />
            <OtherBlogListing data={listing} />
          </ul>
        </div>
      </main>
  );
}
