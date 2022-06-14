import Image from 'next/image';
import Link from 'next/link'

// Styles
import styles from '../../../styles/main/sections/botched-dreams.module.scss'

// import Images
import Paper from "../../../public/images/paper-effects/paper-botched.svg"
import dirtyIlojo from '../../../public/images/story-07/story07-photo-01.png'
import cleanIlojo from '../../../public/images/story-07/story07-photo-02.png'
import statue from '../../../public/images/story-07/story07-photo-03.png'

export default function BotchedDreams() {
  return (
    <section className={styles.botched}>
        <Image
            src={dirtyIlojo}
            alt="Picture of the author"
            layout="responsive"
        />
        <h4>1950&apos;s</h4>
        <h2>Botched<span>dreams for</span> Ilojo bar</h2>
        <Image
            src={cleanIlojo}
            alt="Picture of the author"
            layout="responsive"
        />
        <p> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with.
        </p>
        <Image
            src={statue}
            alt="Picture of the author"
            layout="responsive"
        />
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with.
        </p>
        <div className="paper-rip">
          <Image
            alt="Paper rip"
            src={Paper}
            layout="responsive"
          />
        </div>
    </section>
    
  );
}