import { gql } from "@apollo/client";
import client from "../../apolloClient";

export default function sectionPage({ section }) {
  return (
    <div>
      <h1>{section.title}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        sections {
          slug
        }
      }
    `,
  });
  const { sections } = data;
  const paths = sections.map((section) => ({
    params: { slug: [section.slug] },
  }));
  console.log(paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params.slug[0];
  const { data } = await client.query({
    query: gql`
      query SectionBySlug($slug: String!) {
        sections(where: { slug: $slug }) {
          title
        }
      }
    `,
    variables: { slug },
  });
  const { sections } = data;
  const section = sections[0];
  console.log(section);
  return { props: { section } };
}
