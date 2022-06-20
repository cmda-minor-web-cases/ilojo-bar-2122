import '../styles/globals.scss';
import generateHeading from '../components/generateHeading';

function MyApp({ Component, pageProps }) {
  generateHeading();
  return <Component {...pageProps} />;
}

export default MyApp;
