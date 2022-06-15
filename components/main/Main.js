// Styles
import styles from "../../styles/main/Main.module.scss";
import Image from "next/image";

import React, { useContext } from "react";
import { Context } from "../../context/state";

export default function Main() {
  const [context] = useContext(Context);

  return (
    <main>
      {context.map((ctx, i) => (
        <article key={i}>
          <h4>{ctx.subtitle}</h4>
          <h2>{ctx.title}</h2>
          <p>{ctx.bodytext01.text}</p>
          <p>{ctx.bodytext02.text}</p>
          {ctx.images.map((image) => {
            return (
              <div key={image.id}>
                <Image
                  src={image.url}
                  alt="foto"
                  layout="responsive"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </div>
            );
          })}
        </article>
      ))}
      {/* Intro */}
      {/* Loop door stories */}
    </main>
  );
}
