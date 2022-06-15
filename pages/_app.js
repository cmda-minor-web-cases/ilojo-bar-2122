import "../styles/globals.scss";
import { AppProvider } from "../context/state";

function MyApp({ Component, pageProps }) {
  const { stories } = pageProps;
  return (
    <AppProvider value={{ stories }}>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
