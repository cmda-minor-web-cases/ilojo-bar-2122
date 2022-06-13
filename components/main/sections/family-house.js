import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "../../../styles/main/sections/family-house.module.scss";

// import Images
import olaiya from "../../../public/images/story-05/story05-photo-01.png";
import receipt from "../../../public/images/story-05/story05-photo-02.png";
import cover1 from "../../../public/images/story-05/story05-photo-03.png";
import cover2 from "../../../public/images/story-05/story05-photo-04.png";
import tinubuSquare from "../../../public/images/story-05/story05-photo-05.png";
import cover3 from "../../../public/images/story-05/story05-photo-06.png";

export default function FamilyHouse() {
  return (
    <section>
      <h4>1950&apos;s</h4>
      <h2>
        A family house for <span>the Olayias</span>
      </h2>
      <Image src={olaiya} alt="Mister Olaiya" layout="responsive" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with.
      </p>
      <ul>
        <li>
          <Image src={receipt} alt="Receipt" layout="responsive" />
        </li>
        <li>
          <Image src={cover1} alt="Music cover" layout="responsive" />
        </li>
        <li>
          <Image src={cover2} alt="Music cover" layout="responsive" />
        </li>
        <li>
          <Image src={tinubuSquare} alt="Tinubu square" layout="responsive" />
        </li>
        <li>
          <Image src={cover3} alt="Music cover" layout="responsive" />
        </li>
      </ul>
      <button>
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.73381 11.2546C2.12147 11.2546 1.6039 11.0432 1.18109 10.6204C0.758279 10.1976 0.546875 9.68003 0.546875 9.06769C0.546875 8.45535 0.758279 7.93777 1.18109 7.51496C1.6039 7.09215 2.12147 6.88075 2.73381 6.88075C3.00597 6.88075 3.25139 6.91963 3.47008 6.99739C3.68878 7.07515 3.88074 7.18206 4.04598 7.31814V0.757324H7.4576V2.72557H4.92075V9.06769C4.92075 9.68003 4.70935 10.1976 4.28654 10.6204C3.86373 11.0432 3.34616 11.2546 2.73381 11.2546Z"
            fill="black"
          />
        </svg>
      </button>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with.
      </p>
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
    </section>
  );
}
