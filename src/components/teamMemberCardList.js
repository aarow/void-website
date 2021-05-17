import { useState, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";

import TeamMemberCard from "./teamMemberCard";
import TeamMemberDetails from "./teamMemberDetails";

const TeamMemberCardList = (props) => {
  const [currentTeamMember, setCurrentTeamMember] = useState(null);
  const [openTeamMemberDetails, setOpenTeamMemberDetails] = useState(false);
  const panelRef = useRef(null);

  const cardList = props.items.map((teamMember) => {
    return (
      <button
        type="button"
        onClick={() => handleShowBiography(teamMember)}
        className="border-0 bg-white px-3"
      >
        <TeamMemberCard {...teamMember} />
      </button>
    );
  });

  function handleShowBiography(teamMember) {
    setCurrentTeamMember(teamMember);
    setOpenTeamMemberDetails(true);
  }

  function handleClose() {
    setOpenTeamMemberDetails(false);
  }

  return (
    <div className="position-relative">
      <Container className="py-5">
        <Row className=" text-center">
          <Col>
            <h2>Team Members</h2>
          </Col>
        </Row>

        <AliceCarousel
          mouseTracking
          items={cardList}
          paddingLeft={100}
          paddingRight={100}
          responsive={{ 0: { items: 1 }, 768: { items: 3 } }}
        />

        <div
          ref={panelRef}
          className={`team-details--overlay py-5 px-6 border-left bg-light ${
            openTeamMemberDetails ? "active" : ""
          }`}
        >
          <div className="overflow-auto w-100 h-100">
            {currentTeamMember && <TeamMemberDetails {...currentTeamMember} />}
          </div>
          <Button
            variant="light"
            aria-label="Close"
            className="close p-3"
            onClick={handleClose}
          >
            <span aria-hidden="true">&times;</span>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default TeamMemberCardList;
