import { useState, useEffect } from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import { getPage } from "../../lib/getPage";
import { getArticles } from "../../lib/getArticles";
import { SITE_NAME } from "../../lib/constants";
import Layout from "../../components/layout";
import ArticleList from "../../components/ArticleList";
import PageSection from "../../components/pageSection";

export async function getStaticProps() {
  return {
    props: {
      ...(await getPage("articles")),
      // ...(await getArticles({ orderBy: "publishDate", orderByMethod: "DESC" })),
      ...(await getArticles()),
    },
  };
}

export default function ArticlePage(props) {
  const {
    articles,
    page: { title, subtitle, id, content, pageSections = [] },
  } = props;
  // console.log(articles);

  return (
    <Layout>
      <Head>
        <title>
          {title} | {SITE_NAME}
        </title>
      </Head>

      <section>
        <Container className="text-center">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div
            dangerouslySetInnerHTML={{ __html: content ? content.html : "" }}
          />
        </Container>
      </section>

      <section>
        <Container>
          <ArticleList articles={articles} />
        </Container>
      </section>

      {pageSections.map((pageSection) => (
        <section key={pageSection.id} className="page-section">
          <PageSection {...pageSection} />
        </section>
      ))}
    </Layout>
  );
}
