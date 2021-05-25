export default function TeamMemberDetails(props) {
  const { name = "", portrait, position = "", biography } = props;

  return (
    <>
      <div className="team-member--details">
        <p className="team-member--details--portrait d-block rounded-circle border transition-400 m-auto">
          <img src={portrait ? portrait.url : ""} alt={name} />
        </p>

        <h1 className="h3 text-center">{name}</h1>
        <p className="h5 text-center text-uppercase text-muted">{position}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: biography ? biography.html : "(bio coming soon)",
          }}
        />
      </div>
    </>
  );
}
