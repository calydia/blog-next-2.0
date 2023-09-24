import React from 'react'
import Image from 'next/image';
import dayjs from 'dayjs';
import { BlogHighlightData } from '../interfaces/blogInterfaces';

const NewestBlogListing = ({data}: BlogHighlightData) => {
  return (
    <>
      {data.items.map((node, index: number) => {
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
                <div className="self-center text-center font-light">
                  <span id={`first-blog-title${index}`} className="post-title block text-lg font-semibold md:text-3xl lg:text-4xl py-4 px-2
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
      )}
    </>
  );
};

export default NewestBlogListing;
