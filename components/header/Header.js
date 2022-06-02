import Image from "next/image";

// Images
import Dummy from "../../assets/ilojo-bar-1946.jpg";
import Paper from "../../assets/ilojo-bar.jpg";

export default function Header() {
  return (
    <header>
      {/*Top images*/}
      <div>
        <Image
          alt="The guitarist in the concert."
          src={Dummy}
          layout="responsive"
        />
        <Image
          alt="The guitarist in the concert."
          src={Dummy}
          layout="responsive"
        />
      </div>
      <h1>
        Telling<span> the stories of</span> Ilojo Bar
      </h1>
      {/*Bottom images*/}
      <div>
        <Image
          alt="The guitarist in the concert."
          src={Dummy}
          layout="responsive"
        />
        <Image
          alt="The guitarist in the concert."
          src={Dummy}
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
