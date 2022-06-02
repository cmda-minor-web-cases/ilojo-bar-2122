import Image from 'next/image';
import Link from 'next/link'

// import Images
import dummy from '../../../assets/ilojo-bar.jpg'

export default function Returnees() {
  return (
    <section>
        {/*Paper rip for end of section*/}
        <Image
            src={dummy}
            alt="Picture of the author"
            width="350px"
            height="300px"
        />
        <h4>19th century</h4>
        <h2>The returnees <span>from Brazil who</span> changed Lagos</h2>
        <ul>
            <li> 
                <Image
                    src={dummy}
                    alt="Picture of the author"
                    width="350px"
                    height="300px"
                />
            </li>
            <li> 
                <Image
                    src={dummy}
                    alt="Picture of the author"
                    width="350px"
                    height="300px"
                />
            </li>
            <li> 
                <Image
                    src={dummy}
                    alt="Picture of the author"
                    width="350px"
                    height="300px"
                />
            </li>
            <li> 
                <Image
                    src={dummy}
                    alt="Picture of the author"
                    width="350px"
                    height="300px"
                />
            </li>
        </ul>
        <p> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with.
        </p>
        <Link href="/about">
            <a>  
            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 22.5C12.7239 22.5 12.5 22.7239 12.5 23C12.5 23.2761 12.7239 23.5 13 23.5V22.5ZM33.3536 23.3536C33.5488 23.1583 33.5488 22.8417 33.3536 22.6464L30.1716 19.4645C29.9763 19.2692 29.6597 19.2692 29.4645 19.4645C29.2692 19.6597 29.2692 19.9763 29.4645 20.1716L32.2929 23L29.4645 25.8284C29.2692 26.0237 29.2692 26.3403 29.4645 26.5355C29.6597 26.7308 29.9763 26.7308 30.1716 26.5355L33.3536 23.3536ZM13 23.5H33V22.5H13V23.5Z" fill="#333333"/>
            </svg>
            </a>
        </Link>
        {/*Paper rip for end of section*/}
        <Image
            src={dummy}
            alt="Picture of the author"
            width="350px"
            height="300px"
        />
    </section>
  );
}
