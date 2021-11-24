import Head from "next/head";

import { getPage, getPageRoutes } from "../lib/graphcms";
import PageSection from "../components/pageSection";
import { SITE_NAME } from "../lib/constants";
import Layout from "../components/layout";
import BasicTemplate from "../templates/Basic";
import BannerTemplate from "../templates/Banner";
import { getPageDetails } from "../queries";

export default function Index(props) {
  const {
    page: { pageTemplate },
  } = props;

  let PageTemplate = BasicTemplate;

  switch (pageTemplate) {
    case "Banner":
      PageTemplate = BannerTemplate;
      break;
  }

  return <PageTemplate {...props} />;
}

export async function getStaticProps({ params }) {
  return {
    props: await getPageDetails(params.slug),
  };
}

export async function getStaticPaths() {
  const paths = await getPageRoutes().then((data) =>
    data.props.pages.map((page) => ({
      params: {
        page: page.title,
        slug: page.slug,
      },
    }))
  );
  return { paths, fallback: false };
}
