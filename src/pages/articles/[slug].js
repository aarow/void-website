import Head from "next/head";

import { format } from "date-fns";
import { Container, Row, Col } from "react-bootstrap";
import { GraphQLClient } from "graphql-request";
import { API_URL, SITE_NAME } from "../../lib/constants";

import Layout from "../../components/layout";

const graphcms = new GraphQLClient(API_URL);

export async function getStaticProps({ params }) {
  const { article } = await graphcms.request(
    `
    query ArticleQuery($slug: String!) {
      article(where: { slug: $slug } ) {
        id
        title
        mainImage {
          url(
            transformation: {
              image: { resize: { width: 1920, fit: clip } }
            }
          )
        }
        ogImage:mainImage {
          url(transformation: {image: {resize: {width: 1200}}})
          id
          handle
        }
        slug
        externalArticle
        author {
          name
        }
        createdAt
        publishDate
        publishTime
        body {
          html
        }
        excerpt
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
        slug
        author {
          name
        }
        externalArticle
      }
    }
  `);

  return {
    paths: articles.map(({ slug }) => ({
      params: { slug: slug },
    })),
    fallback: false,
  };
}

export default function ArticleDetailPage(props) {
  // console.log(props);
  const {
    article: {
      id,
      title,
      excerpt,
      body,
      mainImage,
      publishTime,
      createdAt,
      author,
      externalArticle,
      ogImage,
    },
  } = props;

  const publishedTime = format(
    new Date(publishTime ? publishTime : createdAt),
    "d MMM yyyy"
  );

  return (
    <Layout topPadding={false}>
      <Head>
        <title>
          {title} | {SITE_NAME}
        </title>
        <meta property="og:title" content={`${title} | {SITE_NAME}`} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={ogImage.url} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <section>
        <article className="article--wrapper">
          <div className="article--main-image">
            <img src={mainImage.url} alt="" />
          </div>
          <Container>
            <Row className="justify-content-center">
              <Col md="12" lg="10" xl="7">
                <div className="article--main mt-n10 bg-white position-relative pt-5 pb-5 px-5">
                  <p className="text-muted text-center m-0">
                    {publishedTime} | {author.name}
                  </p>
                  <h1 className=" text-center mt-3 letter-spacing-2">
                    {title}
                  </h1>

                  <p className="text-muted">
                    <em>Summary: {excerpt}</em>
                  </p>

                  {externalArticle && (
                    <a href={externalArticle} target="_blank">
                      asdf
                    </a>
                  )}

                  <div
                    dangerouslySetInnerHTML={{
                      __html: body ? body.html : "(no content)",
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </article>
      </section>
    </Layout>
  );
}
