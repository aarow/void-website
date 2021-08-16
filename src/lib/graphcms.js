import { GraphQLClient } from "graphql-request";
import { GET_PAGE_QUERY, GET_PAGE_LIST_QUERY } from "./constants";

const graphcms = new GraphQLClient(
  "https://api-us-west-2.graphcms.com/v2/cknmqf56zvo9z01uteckkbkch/master"
);

export async function getPageRoutes() {
  const { pages } = await graphcms.request(GET_PAGE_LIST_QUERY);

  return {
    props: {
      pages,
    },
  };
}

export async function getPage(slugName) {
  const variables = {
    slug: slugName,
  };

  const { page } = await graphcms.request(GET_PAGE_QUERY, variables);

  return {
    props: {
      page,
    },
  };
}
