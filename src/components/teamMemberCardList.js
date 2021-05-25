import { useState, useRef } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";

import TeamMemberCard from "./teamMemberCard";
import TeamMemberDetails from "./teamMemberDetails";

export default function TeamMemberCardList(props) {
  const teamMemberList = props.items;
  const [currentTeamMemberIndex, setCurrentTeamMemberIndex] = useState(null);
  const [currentTeamMember, setCurrentTeamMember] = useState(null);
  const [openTeamMemberDetails, setOpenTeamMemberDetails] = useState(false);

  function handleShowBiography(teamMember, index) {
    setCurrentTeamMemberIndex(index);
    setCurrentTeamMember(teamMember);
    setOpenTeamMemberDetails(true);
  }

  function handleClose() {
    setOpenTeamMemberDetails(false);
  }

  function handleSlide(increment) {
    // return if no change
    if (increment === 0) return;

    // get new index
    let newIndex = currentTeamMemberIndex + increment;

    // is new index in bounds?
    if (newIndex < 0) {
      newIndex = teamMemberList.length - 1;
    } else if (newIndex >= teamMemberList.length) {
      newIndex = 0;
    }

    // store new index
    setCurrentTeamMemberIndex(newIndex);

    // set new team member
    setCurrentTeamMember(teamMemberList[newIndex]);
  }

  return (
    <div className="position-relative">
      <Container className="py-5">
        <Row className="justify-content-md-center">
          {teamMemberList.map((teamMember, index) => (
            <Col key={teamMember.id} xs="6" md="4" lg="3">
              <button
                type="button"
                onClick={() => handleShowBiography(teamMember, index)}
                className="border-0 bg-white px-3"
              >
                <TeamMemberCard {...teamMember} />
              </button>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal
        scrollable
        show={openTeamMemberDetails}
        onHide={handleClose}
        dialogClassName="modal-full"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs="12" md="8" xl="6" className="order-3 order-md-2">
                <TeamMemberDetails {...currentTeamMember} />
              </Col>

              <Col
                xs="6"
                md="2"
                xl="3"
                className="order-1  order-md-1 text-right"
              >
                <Button
                  onClick={() => handleSlide(-1)}
                  type="button"
                  variant="link"
                  className="prev p-3 mt-md-10 text-decoration-none"
                  aria-label="Previous"
                >
                  <span className="h3">&larr;</span>
                </Button>
              </Col>

              <Col
                xs="6"
                md="2"
                xl="3"
                className="order-2 order-md-3 text-left"
              >
                <Button
                  onClick={() => handleSlide(1)}
                  type="button"
                  variant="link"
                  className="next p-3 mt-md-10 text-decoration-none"
                  aria-label="Next"
                >
                  <span className="h3">&rarr;</span>
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
