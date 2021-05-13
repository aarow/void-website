import { useState, useEffect } from "react";

export default function TeamMemberDetails(props) {
  const { name, portrait, position, biography, toggleShowBiography } = props;

  const styles = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "#fff",
    zIndex: 10000,
  };

  return (
    <>
      <div style={styles} class="team-member--details position-fixed">
        <div onClick={toggleShowBiography}>Close</div>
        <div>{portrait.url}</div>
        <div>{name}</div>
        <div>{position}</div>
        <div dangerouslySetInnerHTML={{ __html: biography.html }} />
      </div>
    </>
  );
}
