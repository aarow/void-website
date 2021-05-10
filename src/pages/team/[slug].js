import { GraphQLClient } from "graphql-request";

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
          biography
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

const TeamMember = ({ teamMember }) => (
  <div>
    <img
      src={teamMember.portrait.url}
      alt={teamMember.portrait.alt}
      width="300"
    />
    <h1>{teamMember.name}</h1>
    <div>{teamMember.biography}</div>
  </div>
);

export default TeamMember;
