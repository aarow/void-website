import { GraphQLClient } from "graphql-request";
import { Container, Row, Col } from "react-bootstrap";

const graphcms = new GraphQLClient(
  "https://api-us-west-2.graphcms.com/v2/cknmqf56zvo9z01uteckkbkch/master"
);

export async function getStaticProps({ params }) {
  const { teamMember } = await graphcms.request(
    `
    query TeamMemberQuery($slug: ID!) {
        teamMember(where: { id: $slug } ) {
          id
          name
          biography {
            html
          }
          portrait {
            url
            alt
          }
        }
      }      
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      teamMember,
    },
  };
}

export async function getStaticPaths() {
  const { teamMembers } = await graphcms.request(`
    {
      teamMembers {
        id
        name
      }
    }
  `);

  console.log(teamMembers);

  return {
    paths: teamMembers.map(({ id }) => ({
      params: { slug: id },
    })),
    fallback: false,
  };
}

export default function TeamMember(props) {
  const { teamMember } = props;
  return (
    <Container>
      <Row>
        <Col xs="2">
          <img
            src={teamMember.portrait.url}
            alt={teamMember.portrait.alt}
            style={{ width: "100%" }}
          />
        </Col>
        <Col>
          <h1>{teamMember.name}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: teamMember.biography ? teamMember.biography.html : "",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
