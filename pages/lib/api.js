import {
  GraphQLClient,
  gql
} from 'graphql-request';
const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT);
let mains;
let blocks;
let header;
let footer;

export async function getAllStories(section) {
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
      headersConnection {
        edges {
          node {
            heading
            id
            image {
              url
              id
            }
          }
        }
      }
      footersConnection {
        edges {
          node {
            title
            image {
              url
              id
            }
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
  results.headersConnection.edges.forEach((result) => {
    header = result.node;
  });
  results.footersConnection.edges.forEach((result) => {
    footer = result.node;
    console.log(footer);
  });

  const sections = {
    blocks,
    header,
    footer,
  };
  return sections;
}