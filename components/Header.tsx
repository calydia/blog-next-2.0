import Link from 'next/link';
import { useRouter } from 'next/router';
import  {UseDarkMode} from './UseDarkMode';
import Toggle from './Toggler';

const Header = () => {

  const [theme, themeToggler] = UseDarkMode();

  const { asPath } = useRouter();

  const menuLinks = [
    {
      url: '/cats',
      text: 'Cats'
    },
    {
      url: '/life',
      text: 'Life'
    },
    {
      url: '/games',
      text: 'Games'
    },
    {
      url: '/tech',
      text: 'Tech'
    },
    {
      url: '/accessibility',
      text: 'Accessibility'
    },
  ];

  return (
    <header className="bg-gradient-to-r from-lt-perfume via-lt-blue-light to-lt-perfume
    dark:from-dk-purple-header dark:via-dk-blue-header dark:to-dk-purple-header">
      <Link href="#skip-target" id="skip" className="sr-only focus:not-sr-only focus:absolute focus:top-8 focus:left-8 text-xl focus:p-4 text-black bg-lt-blue-light dark:bg-dk-purple dark:text-white dark:text-shadow-text hover:text-lt-purple dark:hover:text-dk-blue-light hover:underline hover:decoration-2 hover:underline-offset-2 focus:outline focus:outline-2 focus:outline-black dark:focus:outline-white">
        Skip to content
      </Link>
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <div className="text-center pt-2 pb-8 lg:py-4 clear-both lg:clear:none">
        <Link href="/" passHref
          className="home-main inline-block p-4-px lg:p-6-px border-y-4 border-transparent hover:decoration-2 hover:underline-offset-4 hover:border-y-4 hover:border-lt-purple dark:hover:border-dk-blue-light focus:outline focus:outline-2 lg:focus:outline-offset-4	focus:outline-black dark:focus:outline-white"
        >
          <span className="block text-3xl font-title text-black dark:text-white dark:text-shadow-text">Sanna Mäkinen</span>
          <span className="block text-lg mt-2 font-title leading-none text-black dark:text-white dark:text-shadow-text">Blog</span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap justify-center lg:mt-4 p-0 mb-0">

          {menuLinks.map((item, index) => {

            const activeClass = (asPath === item.url) ? 'active-link': 'non-active-link';
            {/* aria-current should be true when the menu parent is active */}
            const ariaCurrentPath = (asPath.includes(item.url) && item.url !== '/') ? true : undefined;
            {/* aria-current should be "page" when the actual page is active */}
            const ariaCurrentPage = (asPath === item.url) ? 'page' : undefined;
            {/* if the page is active, we want to use that, otherwise check for menu parent */}
            const ariaCurrent = ariaCurrentPage ? ariaCurrentPage : ariaCurrentPath;

            return (
              <li key={`menu-item${index}`} className="m-3.5">
                <Link
                className={`text-xl p-1 dark:text-shadow-text hover:text-lt-purple dark:hover:text-dk-blue-light hover:underline hover:decoration-2 hover:underline-offset-4 selection:focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-black dark:focus:outline-white ${activeClass}`}
                href={item.url} aria-current={ariaCurrent}>
                  {item.text}
                </Link>
              </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
