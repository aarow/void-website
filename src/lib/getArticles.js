import { GraphQLClient } from "graphql-request";
import { API_URL } from "./constants";

const graphcms = new GraphQLClient(API_URL);

export async function getArticles() {
  const { articles } = await graphcms.request(query);

  return {
    articles,
  };
}

const query = `{
  articles {
    tags
    title
    id
    body {
      html
      text
    }
    mainImage {
      url
      alt
    }
    publishDate
    createdAt
  }
}
`;
