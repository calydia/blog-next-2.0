import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';
import { useState, useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { Rock_Salt, Inter } from 'next/font/google'


const rockSalt = Rock_Salt({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rock-salt'
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-inter'
})

function MyApp({ Component, pageProps }: AppProps) {

  const [isMounted, setIsMounted] = useState<Boolean>(false);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ApolloProvider client={client}>
      <div className={`${rockSalt.className} ${inter.className} ${rockSalt.variable} ${inter.variable}`}>
        <Header />
        <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                window.__onThemeChange = function() {};
                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.body.className = newTheme;
                  window.__onThemeChange(newTheme);
                }
                var preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }
                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }
                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                });
                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();
            `,
            }}
          />
        {isMounted && <Component {...pageProps} />}
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
