import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Section from "../components/sections/Section";
import Layout from "../components/layout";

export default function BannerTemplate(props) {
  const {
    page: { title, sections, markdownContent, content },
  } = props;
  return (
    <Layout isHome={true} topPadding={false}>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content="#151515" />
      </Head>
      <article>
        {sections.map((section) => (
          <Section key={section.id} {...section} />
        ))}
      </article>
    </Layout>
  );
}
