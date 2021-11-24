import { GraphQLClient, gql } from "graphql-request";
import { API_URL } from "./constants";

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
      pageSections {
        id
        items {
          __typename
          ... on TeamMember {
            id
            name
            biography {
              html
            }
            biographyExcerpt
            portrait {
              url(transformation: { image: { resize: { width: 512 } } })
            }
            position
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
        }
      }
    }
  }
`;
