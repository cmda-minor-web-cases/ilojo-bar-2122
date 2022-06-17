import Image from "next/image";

// Styles
import styles from "../../styles/footer/Footer.module.scss";

// Images
import Dummy from "../../assets/ilojo-bar-1946.jpg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>
        The ilojo bar in it&#39;s full glory
      </h2>
      {/*3D Ilojo Bar*/}
      <Image
        alt="The guitarist in the concert."
        src={Dummy}
        layout="responsive"
      />
    </footer>
  );
}
