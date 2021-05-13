import { useState } from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import TeamMemberCard from "./teamMemberCard";

const TeamMemberCardList = (props) => {
  const [currentBiography, setCurrentBiography] = useState("null");
  const [openBiography, setOpenBiography] = useState(false);

  function handleShowBiography(teamMember) {
    if (!!teamMember.biography !== false) {
      if (currentBiography == teamMember.biography.html) {
        setOpenBiography(!openBiography);
      } else {
        setCurrentBiography(teamMember.biography.html);
        setOpenBiography(true);
      }
    }
  }

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
                {/* <TeamMemberCard
                  {...teamMember}
                  handleShowBiography={() => handleShowBiography(teamMember)}
                  currentBiography={currentBiography}
                  openBiography={openBiography}
                /> */}
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Collapse in={openBiography} className="biography-block">
              <div dangerouslySetInnerHTML={{ __html: currentBiography }}></div>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeamMemberCardList;
