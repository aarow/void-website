import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

import TeamMemberDetails from "./teamMemberDetails";

const TeamMemberCard = (props) => {
  const {
    name,
    portrait: { url },
    position,
    biography,
  } = props;

  const [openDetails, setOpenDetails] = useState(false);
  const [buttonClass, setButtonClass] = useState("border-light");
  const buttonClassSupplemental =
    "team-member--image bg-center-cover m-auto border transition-400";

  // useEffect(() => {
  //   if (openBiography && currentBiography === biography) {
  //     setButtonClass("border-primary active");
  //   } else {
  //     setButtonClass("border-light");
  //   }
  // }, [openBiography, currentBiography]);

  const imageStyle = {
    backgroundImage: `url(${url})`,
  };

  function toggleShowBiography() {
    setOpenDetails(!openDetails);
  }

  return (
    <>
      <Card className={`team-member h-100 border-0 bg-transparent`}>
        <button
          onClick={toggleShowBiography}
          style={imageStyle}
          className={`${buttonClass} ${buttonClassSupplemental}`}
        />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{position}</Card.Subtitle>
        </Card.Body>
      </Card>
      {openDetails && (
        <TeamMemberDetails
          {...props}
          toggleShowBiography={toggleShowBiography}
        />
      )}
    </>
  );
};

export default TeamMemberCard;
