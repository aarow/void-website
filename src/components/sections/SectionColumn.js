export default function SectionColumn(props) {
  const {
    icon,
    title,
    content: { html },
  } = props;

  return (
    <div>
      {/* <div class="text-center">
        <span class="block--decoration d-inline-block border-left border-secondary pt-5"></span>
      </div> */}
      <div className="text-center mb-4">
        {!!icon && <img src={icon.url} alt={icon.alt} className="w-25" />}
      </div>
      <h3 className="text-center mb-4">{title}</h3>
      <div className="small" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
