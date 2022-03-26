import Link from 'next/link';
import ActiveLink from './ActiveLink'

const Header = () => {

  return (
      <div className="text-center py-8">
        <Link className="home-main" href="/" passHref>
          <a className="inline-block p-[24px] hover:decoration-2 hover:underline-offset-4 focus:outline-8 focus:outline-offset-8">
            <span className="block text-3xl font-title text-black dark:text-white dark:text-shadow-text">Sanna Mäkinen</span>
            <span className="block text-lg mt-2 font-title leading-none text-black dark:text-white dark:text-shadow-text">Blog</span>
          </a>
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap justify-center mt-8 p-0 mb-0">
            <li className="m-3.5">
              <ActiveLink activeClassName="underline text-lt-blue-dark dark:text-dk-blue-light" href="/cats">
                <a className="text-xl p-1 text-black dark:text-white dark:text-shadow-text hover:decoration-2 hover:underline-offset-4 focus:outline-8 focus:outline-offset-8">Cats</a>
              </ActiveLink>
            </li>
            <li className="m-3.5">
              <ActiveLink activeClassName="underline text-lt-blue-dark dark:text-dk-blue-light" href="/life">
                <a className="text-xl p-1 text-black dark:text-white dark:text-shadow-text hover:decoration-2 hover:underline-offset-4 focus:outline-8 focus:outline-offset-8">Life</a>
              </ActiveLink>
            </li>
            <li className="m-3.5">
              <ActiveLink activeClassName="underline text-lt-blue-dark dark:text-dk-blue-light" href="/games">
                <a className="text-xl p-1 text-black dark:text-white dark:text-shadow-text hover:decoration-2 hover:underline-offset-4 focus:outline-8 focus:outline-offset-8">Games</a>
              </ActiveLink>
            </li>
            <li className="m-3.5">
              <ActiveLink activeClassName="underline text-lt-blue-dark dark:text-dk-blue-light" href="/tech">
                <a className="text-xl p-1 text-black dark:text-white dark:text-shadow-text hover:decoration-2 hover:underline-offset-4 focus:outline-8 focus:outline-offset-8">Tech</a>
              </ActiveLink>
            </li>
            <li className="m-3.5">
              <ActiveLink activeClassName="underline text-lt-blue-dark dark:text-dk-blue-light" href="/accessibility">
                <a className="text-xl p-1 text-black dark:text-white dark:text-shadow-text hover:decoration-2 hover:underline-offset-4 focus:outline-8 focus:outline-offset-8">Accessibility</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default Header;
