import Head from "next/head";
import { Container } from "react-bootstrap";
import rehypeRaw from "rehype-raw";

import ReactMarkdown from "react-markdown";
import PageSection from "../components/pageSection";
import Layout from "../components/layout";
import { getPage, getPageRoutes } from "../lib/graphcms";
import { SITE_NAME } from "../lib/constants";
import { getPageDetails } from "../lib";

export async function getStaticProps() {
  return {
    props: await getPageDetails("one-pill-can-kill"),
  };
}

export default function Index(props) {
  console.log(props);
  const {
    page: { title, content, pageSections, markdownContent, subtitle },
  } = props;
  return (
    <Layout isHome={false} topPadding={true}>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <Container>
          <section className="text-center">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </section>

          <section
            dangerouslySetInnerHTML={{ __html: content ? content.html : "" }}
          />
          <section>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {markdownContent}
            </ReactMarkdown>
          </section>
        </Container>
        {pageSections.map((pageSection) => (
          <section key={pageSection.id} className="page-section">
            <PageSection {...pageSection} />
          </section>
        ))}
      </article>
    </Layout>
  );
}
