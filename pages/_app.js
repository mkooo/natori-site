import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
