import Head from "next/head";

import { Container, Row, Col } from "react-bootstrap";
import { GraphQLClient } from "graphql-request";
import { API_URL, SITE_NAME } from "../../lib/constants";

import Layout from "../../components/layout";

const graphcms = new GraphQLClient(API_URL);

export async function getStaticProps({ params }) {
  const { article } = await graphcms.request(
    `
    query ArticleQuery($slug: ID!) {
      article(where: { id: $slug } ) {
          id
          title
        }
      }      
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const { articles } = await graphcms.request(`
    {
      articles {
        id
        title
        body {
          html
        }
      }
    }
  `);

  return {
    paths: articles.map(({ id }) => ({
      params: { slug: id },
    })),
    fallback: false,
  };
}

export default function ArticleDetailPage(props) {
  console.log(props);
  const {
    article: { title, body },
  } = props;

  return (
    <Layout>
      <Head>
        <title>
          {title} | {SITE_NAME}
        </title>
      </Head>

      <section>
        <article>
          <Container className="text-center">
            <h1>{title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: body ? body.html : "(no content)",
              }}
            />
          </Container>
        </article>
      </section>
    </Layout>
  );
}
