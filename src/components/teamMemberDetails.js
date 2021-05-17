export default function TeamMemberDetails(props) {
  const { name, portrait, position, biography } = props;
  const portraitStyle = { backgroundImage: `url(${portrait.url})` };
  return (
    <>
      <div className="team-member--details p-3">
        <div style={portraitStyle} className="p-5" />
        <div>{name}</div>
        <div>{position}</div>
        <div dangerouslySetInnerHTML={{ __html: biography.html }} />
      </div>
    </>
  );
}
