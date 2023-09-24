import React from 'react'
import Image from 'next/image';
import dayjs from 'dayjs';
import { BlogHighlightData } from '../interfaces/blogInterfaces';

const OtherBlogListing = ({data} : BlogHighlightData) => {
  return (
    <>
      {data.items.map((node, index:number) => {
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
              <div className="self-center text-center font-light">
                <span id={`blog-title${index}`} className="post-title block text-lg font-semibold md:text-2xl py-4 px-2
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
      )}
    </>
  );
};

export default OtherBlogListing;
