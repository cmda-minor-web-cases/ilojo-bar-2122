import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "../../../styles/main/sections/spanish-migrant.module.scss";

// import Images
import Paper from "../../../public/images/paper-effects/paper-rip.svg";
import shipsInSea from "../../../public/images/story-01/story01-photo-01.png";
import receipt01 from "../../../public/images/story-01/story01-photo-04.png";
import receipt02 from "../../../public/images/story-01/story01-photo-03.png";
import receipt03 from "../../../public/images/story-01/story01-photo-02.png";
import imigrants from "../../../public/images/story-01/story01-photo-05.png";

export default function SpanishMigrant() {
  return (
    <section>
      <h4>Late 19th century</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with.
      </p>
      <h2>
        A spanish migrant <span>looking for</span>greener pastures
      </h2>
      <Image src={shipsInSea} alt="Spanish ships in bay" layout="responsive" />
      <ul>
        <li>
          <Image src={receipt01} alt="Receipt 1" layout="responsive" />
        </li>
        <li>
          <Image src={receipt02} alt="Receipt 2" layout="responsive" />
        </li>
        <li>
          <Image src={receipt03} alt="Receipt 3" layout="responsive" />
        </li>
      </ul>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with.
      </p>
      <Image src={imigrants} alt="Portugese imigrants" layout="responsive" />
      <Link href="/about">
        <a>
          <svg
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 22.5C12.7239 22.5 12.5 22.7239 12.5 23C12.5 23.2761 12.7239 23.5 13 23.5V22.5ZM33.3536 23.3536C33.5488 23.1583 33.5488 22.8417 33.3536 22.6464L30.1716 19.4645C29.9763 19.2692 29.6597 19.2692 29.4645 19.4645C29.2692 19.6597 29.2692 19.9763 29.4645 20.1716L32.2929 23L29.4645 25.8284C29.2692 26.0237 29.2692 26.3403 29.4645 26.5355C29.6597 26.7308 29.9763 26.7308 30.1716 26.5355L33.3536 23.3536ZM13 23.5H33V22.5H13V23.5Z"
              fill="#333333"
            />
          </svg>
        </a>
      </Link>
      <div className="paper-rip">
        <div className={styles.papergradient}></div>
        <Image alt="Paper rip" src={Paper} layout="responsive" />
      </div>
    </section>
  );
}
