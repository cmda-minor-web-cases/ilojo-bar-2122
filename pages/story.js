import Image from "next/image";
import { getAllStories } from "./lib/api";

export default function Story({ stories }) {
  console.log(stories);
  return (
    <div>
      {stories.map((item, i) => (
        <div key={i}>
          <h4>{item.subtitle}</h4>
          <h2>{item.title}</h2>
          <p>{item.bodytext01.text}</p>
          <p>{item.bodytext02.text}</p>
          {item.images.map((image) => {
            return (
              <div key={image.id}>
                <Image
                  src={image.url}
                  alt="foto"
                  layout="responsive"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const stories = (await getAllStories()) || [];

  return {
    props: { stories },
  };
}
