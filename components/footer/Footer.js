import Image from "next/image";

// Styles
import styles from "../../styles/footer/Footer.module.scss";

// Images
import Dummy from "../../assets/ilojo-bar-1946.jpg";
import Paper from "../../assets/ilojo-bar.jpg";

export default function Footer() {
  return (
    <footer>
      <h2>
        The ilojo bar<span>In {`it's`} full glory</span>
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
