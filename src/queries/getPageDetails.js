import { GraphQLClient, gql } from "graphql-request";
import { API_URL } from "../lib/constants";

const graphcms = new GraphQLClient(API_URL);

export async function getPageDetails(slugName) {
  const variables = {
    slug: slugName,
  };

  const { page } = await graphcms.request(pageDetailsQuery, variables);

  return {
    page,
  };
}

const pageDetailsQuery = gql`
  query pageDetailsQuery($slug: String!) {
    page(where: { slug: $slug }) {
      pageTemplate
      title
      subtitle
      id
      content {
        html
      }
      markdownContent
      sections {
        __typename
        ... on Cta {
          id
          ctaType
          header
          title
          header
          subHeader
          content
          centered
          icon {
            url
          }
          linkUrl
          linkTitle
          backgroundColor {
            hex
          }
          textColor {
            hex
          }
          whiteText
        }
        ... on Hero {
          id
          content {
            html
          }
          plainTextContent
          height
          title
          backgroundImage {
            url
          }
          backgroundVideo {
            url
          }
          cssClass
        }
        ... on PageSection {
          id
          richContent {
            html
          }
          markdownContent
          textColor {
            hex
          }
          backgroundColor {
            hex
          }
          items {
            ... on SectionColumn {
              id
              title
              content {
                html
              }
              icon {
                url
                alt
              }
            }
          }
        }
        ... on Article {
          id
          title
          mainImage {
            url
          }
          body {
            html
          }
        }
      }
    }
  }
`;
