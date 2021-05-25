import { GraphQLClient } from "graphql-request";
import { API_URL } from "./constants";

const graphcms = new GraphQLClient(API_URL);

export async function getPage(slugName) {
  const variables = {
    slug: slugName,
  };

  const { page } = await graphcms.request(query, variables);

  return {
    page,
  };
}

const query = `query getPage($slug: String!) {
  page(where: {slug: $slug}) {
    title
    subtitle
    id
    content {
      html
    }
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
            url(transformation: {image: {resize: {width: 512}}})
          }
          position
        }
        ... on Hero {
          id
          content {
            html
          }
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
