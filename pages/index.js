import Main from '../components/main/Main';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Context } from '../context/state';
import React, { useState } from 'react';
import { getAllStories } from './lib/api.js';
import Script from 'next/script';

export default function Home({ stories }) {
  const [context, setContext] = useState(stories);

  return (
    <Context.Provider value={[context, setContext]}>
      <div>
        <Header />
        <Main />
        <Footer />
        <Script strategy='lazyOnload' async src='/js/generateHeading.js' />
        <Script strategy='lazyOnload' async src='/js/ScrollJacking.js' />
        <Script strategy='lazyOnload' async src='/js/InView.js' />
      </div>
    </Context.Provider>
  );
}

export async function getStaticProps() {
  const stories = (await getAllStories()) || [];

  return {
    props: { stories },
  };
}
