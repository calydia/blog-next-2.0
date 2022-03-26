import Link from 'next/link';
import ActiveLink from './ActiveLink'

const Header = () => {

  return (
      <div className="text-center py-8">
        <Link className="home-main" href="/" passHref>
          <a className="inline-block p-[24px] border-y-4 border-transparent
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
                <a className="text-xl p-1 text-black dark:text-white dark:text-shadow-text
                hover:text-lt-purple dark:hover:text-dk-blue-light hover:underline hover:decoration-2 hover:underline-offset-4
                focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-black dark:focus:outline-white">Cats</a>
              </ActiveLink>
            </li>
            <li className="m-3.5">
              <ActiveLink activeClassName="underline decoration-2 underline-offset-4 text-lt-purple dark:text-dk-blue-light" href="/life">
                <a className="text-xl p-1 text-black dark:text-white dark:text-shadow-text
                hover:text-lt-purple dark:hover:text-dk-blue-light hover:underline hover:decoration-2 hover:underline-offset-4
                focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-black dark:focus:outline-white">Life</a>
              </ActiveLink>
            </li>
            <li className="m-3.5">
              <ActiveLink activeClassName="underline decoration-2 underline-offset-4 text-lt-purple dark:text-dk-blue-light" href="/games">
                <a className="text-xl p-1 text-black dark:text-white dark:text-shadow-text
                hover:text-lt-purple dark:hover:text-dk-blue-light hover:underline hover:decoration-2 hover:underline-offset-4
                focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-black dark:focus:outline-white">Games</a>
              </ActiveLink>
            </li>
            <li className="m-3.5">
              <ActiveLink activeClassName="underline decoration-2 underline-offset-4 text-lt-purple dark:text-dk-blue-light" href="/tech">
                <a className="text-xl p-1 text-black dark:text-white dark:text-shadow-text
                hover:text-lt-purple dark:hover:text-dk-blue-light hover:underline hover:decoration-2 hover:underline-offset-4
                focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-black dark:focus:outline-white">Tech</a>
              </ActiveLink>
            </li>
            <li className="m-3.5">
              <ActiveLink activeClassName="underline decoration-2 underline-offset-4 text-lt-purple dark:text-dk-blue-light" href="/accessibility">
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
