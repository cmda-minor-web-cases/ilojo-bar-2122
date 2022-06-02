import Image from 'next/image';
import Link from 'next/link'

// import Images
import dummy from '../../../assets/ilojo-bar.jpg'

export default function BotchedDreams() {
  return (
    <section>
        <Image
            src={dummy}
            alt="Picture of the author"
            width="350px"
            height="300px"
        />
        <h4>1950&apos;s</h4>
        <h2>Botched<span>dreams for</span> Ilojo bar</h2>
        <Image
            src={dummy}
            alt="Picture of the author"
            width="350px"
            height="300px"
        />
        <p> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with.
        </p>
        <Image
            src={dummy}
            alt="Picture of the author"
            width="350px"
            height="300px"
        />
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with.
        </p>
    </section>
  );
}