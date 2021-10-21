import { useState, useEffect } from "react";
import Head from "next/head";
const ReactMarkdown = require("react-markdown");
import rehypeRaw from 'rehype-raw'

import { Container } from "react-bootstrap";
import { getPage } from "../lib/getPage";
import { SITE_NAME } from "../lib/constants";
import Layout from "../components/layout";
import PageSection from "../components/pageSection";

export async function getStaticProps() {
  return {
    props: {
      ...(await getPage("one-pill-can-kill")),
    },
  };
}

export default function MediaPage(props) {
  const {
    page: { title, subtitle, id, content, markdownContent, pageSections = [] },
  } = props;
  // console.log(props);

  return (
    <Layout topPadding>
      <Head>
        <title>
          {title} | {SITE_NAME}
        </title>
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
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdownContent}</ReactMarkdown>
          </section>
        </Container>
      </article>

      {pageSections.map((pageSection) => (
        <section key={pageSection.id} className="page-section">
          <PageSection {...pageSection} />
        </section>
      ))}
    </Layout>
  );
}
