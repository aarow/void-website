import Head from "next/head";

import { getPage, getPageRoutes } from "../lib/graphcms";
import PageSection from "../components/pageSection";
import { SITE_NAME } from "../lib/constants";
import Layout from "../components/layout";

export async function getStaticProps() {
  return await getPage("home");
}

export default function Index({ page }) {
  return (
    <Layout isHome={true} topPadding={false}>
      <Head>
        <title>{SITE_NAME}: Victims Of Illicit Drugs</title>
      </Head>

      {page.pageSections.map((pageSection) => (
        <section key={pageSection.id} className="page-section">
          <PageSection {...pageSection} />
        </section>
      ))}
    </Layout>
  );
}
