import Main from '../components/main/Main';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Context } from '../context/state';
import React, { useState } from 'react';
import { getAllStories } from '../lib/api';
import Script from 'next/script';

export default function Home({ stories }) {
  const [context, setContext] = useState(stories);

  return (
    <Context.Provider value={[context, setContext]}>
      <div>
        <div className='grain'></div>
        <Header />
        <Main />
        <Footer />
        <Script strategy='lazyOnload' src='/js/generateHeading.js' />
        <Script strategy='lazyOnload' src='/js/scrollJacking.js' />
        <Script strategy='lazyOnload' src='/js/InView.js' />
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
