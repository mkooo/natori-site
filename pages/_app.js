import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Head from 'next/head'
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
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
