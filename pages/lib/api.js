import {
  GraphQLClient,
  gql
} from "graphql-request";
const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT);
let mains;
let blocks;

export async function getAllStories() {
  const query = gql `
    {
      mains {
        blocks {
          ... on Story {
            id
            bodytext01 {
              text
            }
            bodytext02 {
              text
            }
            images {
              id
              url
            }
            title
            subtitle
          }
        }
      }
    }
  `;

  const results = await graphcms.request(query);
  mains = results.mains;
  mains.forEach((item) => {
    blocks = item.blocks;
  });
  return blocks;
}