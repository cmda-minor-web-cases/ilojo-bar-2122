import Image from "next/image";

// Images
import Dummy from "../../assets/ilojo-bar-1946.jpg";
import Paper from "../../assets/ilojo-bar.jpg";
import architectTop from "../../public/images/home/home-photo-01.png"
import architectSide from "../../public/images/home/home-photo-02.png"
import oldBuilding from "../../public/images/home/home-photo-03.png"
import newBuilding from "../../public/images/home/home-photo-04.png"


export default function Header() {
  return (
    <header>
      {/*Top images*/}
      <div>
        <Image
          alt="Ilojo bar top view"
          src={architectTop}
          layout="responsive"
        />
        <Image
          alt="Ilojo bar side view"
          src={architectSide}
          layout="responsive"
        />
      </div>
      <h1>
        Telling<span> the stories of</span> Ilojo Bar
      </h1>
      {/*Bottom images*/}
      <div>
        <Image
          alt="The ilojo in 20th century"
          src={newBuilding}
          layout="responsive"
        />
        <Image
          alt="The ilojo bar in 19th century"
          src={oldBuilding}
          layout="responsive"
        />
      </div>
      {/*Paper rip*/}
      <div>
        <Image
          alt="The guitarist in the concert."
          src={Paper}
          layout="responsive"
        />
      </div>
    </header>
  );
}
