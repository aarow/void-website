export const SITE_NAME = "VOID";
export const API_URL =
  "https://api-us-west-2.graphcms.com/v2/cknmqf56zvo9z01uteckkbkch/master";

export const GET_PAGE_LIST_QUERY = `query getPageList {
    pages {
      slug
      title
    }
  }
  `;

export const GET_PAGE_QUERY = `query getPage($slug: String!) {
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
          ... on Article {
            id
            title
            body {
              html
            }
            mainImage {
              url
              alt
            }
          }
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
