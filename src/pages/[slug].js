import Head from "next/head";
import { useRouter } from "next/router";
import { getPage, getPageRoutes } from "../lib/graphcms";
import PageSection from "../components/pageSection";
import { SITE_NAME } from "../lib/constants";
import Layout from "../components/layout";
import BasicTemplate from "../templates/Basic";
import BannerTemplate from "../templates/Banner";
import { getPageDetails } from "../queries";

export default function Index(props) {
  console.log("[slug] page");
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
  // const router = useRouter();
  // const {
  //   query: { slug },
  // } = router;
  return {
    props: await getPageDetails(params.slug),
  };
}

export async function getStaticPaths() {
  const noGoPaths = ["team", "articles", "void"];
  const paths = await getPageRoutes().then((data) =>
    data.props.pages
      .filter((page) => {
        return !!page.slug && noGoPaths.indexOf(page.slug) === -1;
      })
      .map((page) => ({
        params: {
          page: page.title,
          slug: page.slug,
        },
      }))
  );
  console.log("paths: ", paths);
  return { paths, fallback: false };
}
