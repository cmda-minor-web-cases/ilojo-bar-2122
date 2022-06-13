import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "../../../styles/main/sections/macaulay-connection.module.scss";

// Images
import Paper from "../../../public/images/paper-effects/paper-rip.svg";
import macaulay from "../../../public/images/story-04/story04-photo-01.png";
import table from "../../../public/images/story-04/story04-photo-02.png";
import brothers from "../../../public/images/story-04/story04-photo-03.png";

export default function MacaulayConnection() {
  return (
    <section>
      <Image alt="Photo of Macaulay" src={macaulay} layout="responsive" />
      <h4>1907 - 1913</h4>
      <h2>
        The <span>Macaulay</span> Connection
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        deserunt sit inventore neque asperiores ullam, natus excepturi,
        accusamus corrupti rem nobis pariatur recusandae reiciendis! Beatae
        tenetur iste ab ducimus veritatis.
      </p>
      {/*Photo*/}
      <Image alt="Brothers" src={brothers} layout="responsive" />
      {/*3d table*/}
      <Image alt="3d render of table" src={table} layout="responsive" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolorum
        porro reiciendis unde similique in aperiam, autem facilis laudantium
        impedit nostrum cumque ratione minus error totam rem natus dolor omnis!
      </p>
      <Link href="/">
        <a>
          <svg
            width="22"
            height="8"
            viewBox="0 0 22 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM21.3536 4.35355C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464466C17.9763 0.269204 17.6597 0.269204 17.4645 0.464466C17.2692 0.659728 17.2692 0.976311 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53553C17.6597 7.7308 17.9763 7.7308 18.1716 7.53553L21.3536 4.35355ZM1 4.5H21V3.5H1V4.5Z"
              fill="red"
            />
          </svg>
        </a>
      </Link>
      {/*Paper rip*/}
      <div className="paper-rip">
        <div className={styles.papergradient}></div>
        <Image alt="Paper rip" src={Paper} layout="responsive" />
      </div>
    </section>
  );
}
