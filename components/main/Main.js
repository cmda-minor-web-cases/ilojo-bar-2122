// Styles
import styles from "../../styles/main/Main.module.scss";
import Image from "next/image";

import { getAllStories } from "../../pages/api/api.js";

export default function Main({stories}) {
  return (
    <main>
      {/* Intro */}
      {/* Loop door stories */}
      <div>
      </div>
      
    </main>
  );
}

export async function getStaticProps() {
  const stories = (await getAllStories()) || [];
  return {
    props: { stories },
  };
}

