import Image from "next/image";

// Images
import Dummy from "../../../assets/ilojo-bar-1946.jpg";
import Paper from "../../../assets/ilojo-bar.jpg";

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
        alt="The guitarist in the concert."
        src={Dummy}
        layout="responsive"
      />
      {/*Wrecking ball*/}
      <Image
        alt="The guitarist in the concert."
        src={Dummy}
        layout="responsive"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        tempore ex harum velit est. Aspernatur dolorem aliquam voluptatibus
        molestias sit eum ab id! Doloremque, vero quam voluptatem repellendus
        dolore reiciendis.
      </p>
      {/*Paper rip*/}
      <Image
        alt="The guitarist in the concert."
        src={Dummy}
        layout="responsive"
      />
    </section>
  );
}
