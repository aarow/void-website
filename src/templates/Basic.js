import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Container } from "react-bootstrap";
import Layout from "../components/layout";

export default function BannerTemplate(props) {
  const {
    page: { title, content, sections, markdownContent, subtitle },
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

          {sections.map((section) => (
            <section key={section.id} className="page-section">
              asdf
            </section>
          ))}
        </Container>
      </article>
    </Layout>
  );
}
