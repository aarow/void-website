import Head from "next/head";
import { getPage } from "../../lib/graphcms";
import { SITE_NAME } from "../../lib/constants";
import Layout from "../../components/layout";
import PageSection from "../../components/pageSection";

export async function getStaticProps(foo) {
  console.log("foo: ", foo);
  return await getPage("team");
}

export default function TeamPage(props) {
  const {
    page: { title, subtitle, id, content, pageSections },
  } = props;

  return (
    <Layout>
      <Head>
        <title>
          {title} | {SITE_NAME}
        </title>
      </Head>

      <section>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </section>

      {pageSections.map((pageSection) => (
        <section key={pageSection.id} className="page-section">
          <PageSection {...pageSection} />
        </section>
      ))}
    </Layout>
  );
}
