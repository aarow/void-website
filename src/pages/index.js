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

export async function getStaticProps() {
  return {
    props: await getPageDetails("void"),
  };
}
