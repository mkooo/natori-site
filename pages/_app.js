import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Head from 'next/head';
import Script from 'next/script';
import * as gtag from '../lib/gtag';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             
             gtag('config', '${gtag.GA_MEASUREMENT_ID}');
          `,
        }}
      />
      <Head>
        <title>クリプト集落 NATORIプロジェクト</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
