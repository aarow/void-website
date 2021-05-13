import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-us-west-2.graphcms.com/v2/cknmqf56zvo9z01uteckkbkch/master"
);

export async function getPage(slug) {
  const { page } = await graphcms.request(
    `{
      page(where: {slug: "home"}) {
        title
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
              title
              centered
              linkUrl
              linkTitle
              content {
                html
              }
              backgroundColor {
                hex
              }
              textColor {
                hex
              }
            }
          }
        }
      }
    }
    
    
      `
  );

  return {
    props: {
      page,
    },
  };
}
