import Head from "next/head";

import { getPage } from "../lib/graphcms";
import * as Blocks from "../components";
import PageSection from "../components/pageSection";
import { SITE_NAME } from "../lib/constants";
import Layout from "../components/layout";

export async function getStaticProps() {
  return await getPage("home");
}

export default function Index({ page }) {
  return (
    <Layout isHome={true}>
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
}
