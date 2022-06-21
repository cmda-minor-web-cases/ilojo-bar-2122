// Styles
import styles from '../../styles/main/Main.module.scss';
import Image from 'next/image';

import React, { useContext } from 'react';
import { Context } from '../../context/state';

export default function Main() {
  const [context] = useContext(Context);
  const stories = context.blocks;
  return (
    <main className={styles.main}>
      {stories.map((ctx, i) => (
        <article key={i}>
          {ctx.subtitle !== null ? <h4>{ctx.subtitle}</h4> : ''}
          <h2>{ctx.title}</h2>
          {ctx.bodytext01.text !== '' ? <p>{ctx.bodytext01.text}</p> : ''}
          {ctx.bodytext02.text !== '' ? <p>{ctx.bodytext02.text}</p> : ''}
          {ctx.images.map((image) => {
            return (
              <div key={image.id} className='article-img'>
                <Image
                  src={image.url}
                  alt='foto'
                  layout='responsive'
                  width='100%'
                  height='100%'
                  objectFit='contain'
                />
              </div>
            );
          })}
        </article>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const stories = (await getAllStories()) || [];
  return {
    props: { stories },
  };
}
