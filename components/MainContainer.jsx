import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function MainContainer({ title, children }) {
  return (
    <>
      <Head>
        <title>{title} - NIHONDE</title>
        <meta charSet='UTF-8' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {/* fonts */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
      </Head>
      <div className='wrapper'>
        <Header />
        <main className='page'>
          <section className='home'>
            <div className='home__container'>{children}</div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
