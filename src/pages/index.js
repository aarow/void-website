import Head from "next/head";

import { getPage } from "../lib/graphcms";
import * as Blocks from "../components";
import { SITE_NAME } from "../lib/constants";
import Layout from "../components/layout";

export async function getStaticProps() {
  return await getPage("home");
}

const Index = ({ page }) => {
  // console.log(page.pageSections);
  return (
    <Layout>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>

      {page.pageSections.map((pageSection) => (
        <section key={pageSection.id} className="page-section">
          <PageSection {...pageSection} />
        </section>
      ))}
    </Layout>
  );
};

const PageSection = (props) => {
  // console.log(props);
  const Component =
    props.items[0].__typename === "TeamMember"
      ? Blocks["TeamMemberCardList"]
      : Blocks[props.items[0].__typename];

  return (
    <>
      {props.items[0].__typename !== "TeamMember" &&
        props.items.map((item) => {
          return <Component key={item.id} {...item} />;
        })}
      {props.items[0].__typename === "TeamMember" && (
        <Component items={props.items} />
      )}
    </>
  );
};

export default Index;
