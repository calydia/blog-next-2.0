import Link from 'next/link'

const Breadcrumb = ({ current, extraLevel, extraLevelName, extraLevelPath }) => {



  return (
    <nav aria-label="Breadcrumb" className="col-span-2 w-full max-w-[1564px] p-4-px pb-0 mx-auto text-lt-gray dark:text-white md:px-8-px">
      <ul className="block list-none m-0 p-0">
        <li className="inline">
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="
              underline underline-offset-4 decoration-2 text-lt-blue-dark dark:text-dk-blue-light
            hover:text-lt-purple hover:decoration-4 dark:hover:text-wheat
            focus:text-lt-purple dark:focus:text-wheat focus:outline-2 focus:outline-offset-8 focus:no-underline focus:outline-lt-purple dark:focus:outline-wheat">
              Home
            </a>
          </Link>
        </li>
        {extraLevel ?
          <li className="inline">
            <span className="mx-2">/</span>
            <Link href={ extraLevelPath }>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="
              underline underline-offset-4 decoration-2 text-lt-blue-dark dark:text-dk-blue-light
            hover:text-lt-purple hover:decoration-4 dark:hover:text-wheat
            focus:text-lt-purple dark:focus:text-wheat focus:outline-2 focus:outline-offset-8 focus:no-underline focus:outline-lt-purple dark:focus:outline-wheat">
                { extraLevelName }
              </a>
            </Link>
          </li>
        : null }
        <li className="inline">
          <span className="mx-2">/</span>
          { current }
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
