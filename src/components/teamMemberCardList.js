import { Container, Row, Col, CardDeck } from "react-bootstrap";
import TeamMemberCard from "./teamMemberCard";

const TeamMemberCardList = (props) => {
  return (
    <div className="">
      <Container className="py-5">
        <Row className=" text-center">
          <Col>
            <h2>Team Members</h2>
          </Col>
        </Row>

        <Row as="ul" className="list-unstyled mt-5 justify-content-center">
          {props.items.map((teamMember) => {
            return (
              <Col
                key={teamMember.id}
                as="li"
                xs="12"
                md="6"
                lg="4"
                xl="3"
                className="mb-4"
              >
                <TeamMemberCard {...teamMember} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default TeamMemberCardList;
