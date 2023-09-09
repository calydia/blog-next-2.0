import Head from 'next/head';

export default function Custom404() {
  return (
    <main>
    <Head>
      <title>{ `Page not found | Blog - Sanna Mäkinen` }</title>
    </Head>
    <div>
      <h1 id="skip-target" className="block px-4-px font-bold text-center mt-8 lg:mt-16 mb-4 lg:mb-8 text-4xl md:text-6xl text-lt-gray dark:text-white">
        Page not found
      </h1>
      <div className="text-xl text-center mb-6 lg:mb-12 text-lt-gray dark:text-white">
        Apologies, the page you were looking for cannot be found.
      </div>
    </div>
  </main>
  );
}
