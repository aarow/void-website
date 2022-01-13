import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Container } from "react-bootstrap";
import Layout from "../components/layout";

export default function BannerTemplate(props) {
  const {
    page: { title, content, markdownContent },
  } = props;
  return (
    <Layout isHome={false} topPadding={true}>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <Container>
          <section
            dangerouslySetInnerHTML={{ __html: content ? content.html : "" }}
          />
          <section>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {markdownContent}
            </ReactMarkdown>
          </section>
        </Container>
      </article>
    </Layout>
  );
}
