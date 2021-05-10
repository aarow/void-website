import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

const TeamMemberCard = ({
  name,
  biography,
  biographyExcerpt,
  portrait: { url },
  position,
}) => {
  const imageStyle = {
    backgroundImage: `url(${url})`,
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const BiographyModal = () => (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{biography}</Modal.Body>
    </Modal>
  );

  return (
    <>
      <Card className="team-member h-100 border-0 bg-transparent">
        <button
          onClick={handleShow}
          style={imageStyle}
          className="team-member--image bg-center-cover m-auto border border-light transition-400"
        />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{position}</Card.Subtitle>
          <Card.Text>{biographyExcerpt}</Card.Text>
        </Card.Body>
      </Card>
      <BiographyModal />
    </>
  );
};

export default TeamMemberCard;
