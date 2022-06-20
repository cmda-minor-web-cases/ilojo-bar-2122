import Image from 'next/image';

// Styles
import styles from '../../styles/header/Header.module.scss';

// Images
import architectTop from '../../public/images/home/home-photo-01.png';
import architectSide from '../../public/images/home/home-photo-02.png';
import oldBuilding from '../../public/images/home/home-photo-03.png';
import newBuilding from '../../public/images/home/home-photo-04.png';

// Context 
import React, { useContext } from 'react';
import { Context } from '../../context/state';

export default function Header() {
  const [context] = useContext(Context);
  return (
    <header className={styles.header}>
      {/*Top images*/}
      <div>
        <div className={`border ${styles.image}`}>
          <Image
            alt='Ilojo bar top view'
            src={architectTop}
            layout='responsive'
          />
        </div>
        <div className={`border ${styles.image}`}>
          <Image
            alt='Ilojo bar side view'
            src={architectSide}
            layout='responsive'
          />
        </div>
      </div>
      <h1>Telling the stories of Ilojo Bar</h1>
      {/*Bottom images*/}
      <div className={`border ${styles.image}`}>
        <Image
          alt='The ilojo in 20th century'
          src={newBuilding}
          layout='responsive'
        />
      </div>
      <div className={`border ${styles.image}`}>
        <Image
          alt='The ilojo bar in 19th century'
          src={oldBuilding}
          layout='responsive'
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