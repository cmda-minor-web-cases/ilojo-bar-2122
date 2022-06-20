import React, { useContext } from 'react';
import { Context } from '../../context/state';
import Image from 'next/image';

// Styles
import styles from '../../styles/footer/Footer.module.scss';

export default function Footer() {
  const [context] = useContext(Context);
  return <footer className={styles.footer}></footer>;
}

export async function getStaticProps() {
  const footer = (await getAllFooterData()) || [];
  return {
    props: { footer },
  };
}
