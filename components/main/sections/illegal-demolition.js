import Image from "next/image";

// Styles
import styles from "../../../styles/main/sections/illegal-demolition.module.scss";

// Images
import Paper from "../../../public/images/paper-effects/paper-rip.svg";
import ilojoBalcon from "../../../public/images/story-09/story09-photo-01.png";
import wreckingBall from "../../../public/images/story-09/story09-photo-02.png";
import excavator from "../../../public/images/story-09/story09-photo-04.png";

export default function IllegalDemolition() {
  return (
    <section>
      <h4>2016</h4>
      <h2>
        <span>Illegal</span> Demolition
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolorum
        porro reiciendis unde similique in aperiam, autem facilis laudantium
        impedit nostrum cumque ratione minus error totam rem natus dolor omnis!
      </p>
      {/*Ripped Photo*/}

      <Image
        alt="Balconies of Ilojo bar"
        src={ilojoBalcon}
        layout="responsive"
      />
      <Image alt="Wrecking ball" src={wreckingBall} layout="responsive" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        tempore ex harum velit est. Aspernatur dolorem aliquam voluptatibus
        molestias sit eum ab id! Doloremque, vero quam voluptatem repellendus
        dolore reiciendis.
      </p>
      {/* 
        Video of demolition
      */}
      <Image alt="Excavator" src={excavator} layout="responsive" />
      {/*Paper rip*/}
      <div className="paper-rip">
        <div className={styles.papergradient}></div>
        <Image alt="Paper rip" src={Paper} layout="responsive" />
      </div>
    </section>
  );
}
