import { getHeaderContent } from "./api/api";

export default function Test({ headers }) {
  return (
    <div>
      {headers &&
        headers.map((header, i) => (
          <div key={i}>
            <h1>{header.heading}</h1>
          </div>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  const headers = (await getHeaderContent()) || [];

  return {
    props: { headers },
  };
}
