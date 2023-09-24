import React from 'react'
import Breadcrumb from './Breadcrumb';
import { PageContentInterface } from '../interfaces/pageContentInterface';

const PageContent = ({title, content} : PageContentInterface) => {
  return (
    <div className="max-w-4xl mx-4-px xl:my-0 lg:mx-auto">
      <Breadcrumb current={title} />
      <h1 id="skip-target" className="block px-4-px font-bold text-center mt-8 lg:mt-16 mb-4 lg:mb-8 text-4xl md:text-6xl text-lt-gray dark:text-white">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} className="mx-4-px lead-content text-xl text-center mb-6 lg:mb-12 text-lt-gray dark:text-white"></div>
    </div>
  );
};

export default PageContent;
