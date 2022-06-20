import '../styles/globals.scss';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/generateHeading'),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <DynamicComponentWithNoSSR />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
