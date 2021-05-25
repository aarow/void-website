import { Card } from "react-bootstrap";

const TeamMemberCard = (props) => {
  const { name = "", portrait, position = "" } = props;

  const buttonClassSupplemental =
    "team-member--image bg-center-cover m-auto border transition-400";

  const imageStyle = {
    backgroundImage: portrait ? `url(${portrait.url})` : "",
  };

  return (
    <>
      <Card className={`team-member h-100 border-0 bg-transparent`}>
        <div style={imageStyle} className={buttonClassSupplemental} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{position}</Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
};

export default TeamMemberCard;
