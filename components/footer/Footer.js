import React, { useContext } from 'react';
import { Context } from '../../context/state';
import Image from 'next/image';

// Styles
import styles from '../../styles/footer/Footer.module.scss';

export default function Footer() {
  const [context] = useContext(Context);
  const footerContent = context.footer;
  console.log(footerContent.image.url);
  return (
    <footer className={styles.footer}>
      <h2>{footerContent.title}</h2>
      <div key={footerContent.image.id} className={styles.image}>
        <Image
          src={footerContent.image.url}
          alt='foto'
          layout='responsive'
          width='100%'
          height='100%'
          objectFit='cover'
        />
      </div>
    </footer>
  );
}

export async function getStaticProps() {
  const stories = (await getAllStories()) || [];
  return {
    props: { stories },
  };
}
