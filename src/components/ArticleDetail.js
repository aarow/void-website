export default function ArticleDetail(props) {
  const { name, portrait, position, biography } = props;
  const bio = biography ? biography.html : "(bio coming soon)";
  const portraitUrl = portrait ? portrait.url : "";
  return (
    <>
      <div className="team-member--details">
        <p className="text-center">
          <div className="team-member--details--portrait d-inline-block rounded-circle border transition-400">
            <img src={portraitUrl} />
          </div>
        </p>

        <h1 className="h3 text-center">{name}</h1>
        <p className="h5 text-center text-uppercase text-muted">{position}</p>
        <div dangerouslySetInnerHTML={{ __html: bio }} />
      </div>
    </>
  );
}
