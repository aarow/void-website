import { GraphQLClient } from "graphql-request";
import { API_URL } from "./constants";

const graphcms = new GraphQLClient(API_URL);

export async function getArticles(options) {
  const orderBy = options && options.orderBy ? options.orderBy : "publishDate";
  const orderByMethod =
    options && options.orderByMethod ? options.orderByMethod : "DESC";

  const query = `{
    articles(orderBy: ${orderBy}_${orderByMethod}) {
      tags
      title
      id
      excerpt
      body {
        html
        text
      }
      mainImage {
        alt
        url(
          transformation: {
            image: { resize: { width: 512, height: 512, fit: clip } }
          }
        )
      }
      publishDate
      createdAt
      slug
      externalArticle
      author {
        name
      }
    }
  }
  `;

  const { articles } = await graphcms.request(query);

  return {
    articles,
  };
}
