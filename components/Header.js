import Link from 'next/link';
import ActiveLink from './ActiveLink'

const Header = () => {

  return (
      <div className="text-center pt-2 pb-8 lg:py-8 clear-both lg:clear:none">
        <Link className="home-main" href="/" passHref>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="inline-block p-4-px lg:p-6-px border-y-4 border-transparent
            hover:decoration-2 hover:underline-offset-4 hover:border-y-4 hover:border-lt-purple dark:hover:border-dk-blue-light
            focus:outline focus:outline-2 lg:focus:outline-offset-4	focus:outline-black dark:focus:outline-white">
            <span className="block text-3xl font-title text-black dark:text-white dark:text-shadow-text">Sanna Mäkinen</span>
            <span className="block text-lg mt-2 font-title leading-none text-black dark:text-white dark:text-shadow-text">Blog</span>
          </a>
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap justify-center lg:mt-8 p-0 mb-0">
            <li className="m-3.5">
              <ActiveLink activeClassName="underline decoration-2 underline-offset-4 text-lt-purple dark:text-dk-blue-light" href="/cats">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="text-xl p-1 text-black dark:text-white dark:text-shadow-text
                hover:text-lt-purple dark:hover:text-dk-blue-light hover:underline hover:decoration-2 hover:underline-offset-4
                focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-black dark:focus:outline-white">Cats</a>
              </ActiveLink>
            </li>
            <li className="m-3.5">
              <ActiveLink activeClassName="underline decoration-2 underline-offset-4 text-lt-purple dark:text-dk-blue-light" href="/life">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="text-xl p-1 text-black dark:text-white dark:text-shadow-text
                hover:text-lt-purple dark:hover:text-dk-blue-light hover:underline hover:decoration-2 hover:underline-offset-4
                focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-black dark:focus:outline-white">Life</a>
              </ActiveLink>
            </li>
            <li className="m-3.5">
              <ActiveLink activeClassName="underline decoration-2 underline-offset-4 text-lt-purple dark:text-dk-blue-light" href="/games">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="text-xl p-1 text-black dark:text-white dark:text-shadow-text
                hover:text-lt-purple dark:hover:text-dk-blue-light hover:underline hover:decoration-2 hover:underline-offset-4
                focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-black dark:focus:outline-white">Games</a>
              </ActiveLink>
            </li>
            <li className="m-3.5">
              <ActiveLink activeClassName="underline decoration-2 underline-offset-4 text-lt-purple dark:text-dk-blue-light" href="/tech">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="text-xl p-1 text-black dark:text-white dark:text-shadow-text
                hover:text-lt-purple dark:hover:text-dk-blue-light hover:underline hover:decoration-2 hover:underline-offset-4
                focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-black dark:focus:outline-white">Tech</a>
              </ActiveLink>
            </li>
            <li className="m-3.5">
              <ActiveLink activeClassName="underline decoration-2 underline-offset-4 text-lt-purple dark:text-dk-blue-light" href="/accessibility">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="text-xl p-1 text-black dark:text-white dark:text-shadow-text
                hover:text-lt-purple dark:hover:text-dk-blue-light hover:underline hover:decoration-2 hover:underline-offset-4
                focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-black dark:focus:outline-white">Accessibility</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default Header;
