import Main from "../components/main/Main";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { getAllStories } from "./api/api.js";

export default function Home() {
  // console.log(stories);
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const stories = (await getAllStories()) || [];

  return {
    props: { stories },
  };
}
