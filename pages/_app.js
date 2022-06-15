import "../styles/globals.scss"

function MyApp({ Component, pageProps }) {
  const { stories } = pageProps;
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
