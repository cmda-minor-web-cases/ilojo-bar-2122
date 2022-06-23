import Image from 'next/image';

// Styles
import styles from '../../styles/header/Header.module.scss';

// Context
import React, { useContext } from 'react';
import { Context } from '../../context/state';

export default function Header() {
  const [context] = useContext(Context);
  const headerContent = context.header;
  return (
    <header className={styles.header}>
      {/*Top images*/}
      <div>
        <div
          className={`border ${styles.image}`}
          key={headerContent.image[1].id}
        >
          <Image
            src={headerContent.image[1].url}
            alt='foto'
            layout='responsive'
            width='100%'
            height='100%'
            objectFit='cover'
          />
        </div>
        <div
          className={`border ${styles.image}`}
          key={headerContent.image[0].id}
        >
          <Image
            src={headerContent.image[0].url}
            alt='foto'
            layout='responsive'
            width='100%'
            height='100%'
            objectFit='cover'
          />
        </div>
      </div>
      <h1>{headerContent.heading}</h1>
      {/*Bottom images*/}
      <div className={`border ${styles.image}`} key={headerContent.image[2].id}>
        <Image
          src={headerContent.image[2].url}
          alt='foto'
          layout='responsive'
          width='100%'
          height='100%'
          objectFit='cover'
        />
      </div>
      <div className={`border ${styles.image}`} key={headerContent.image[3].id}>
        <Image
          src={headerContent.image[3].url}
          alt='foto'
          layout='responsive'
          width='100%'
          height='100%'
          objectFit='cover'
        />
      </div>
    </header>
  );
}

export async function getStaticProps() {
  const stories = (await getAllStories()) || [];
  return {
    props: { stories },
  };
}
