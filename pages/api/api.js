import { gql } from "@apollo/client";
import client from "../../apolloClient";

export async function getHeaderContent() {
  const { data } = await client.query({
    query: gql`
      query {
        headers {
          heading
        }
      }
    `,
  });
  const { headers } = data;
  return {
    props: {
      headers,
    },
  };
}
