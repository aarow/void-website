import SectionColumn from "./SectionColumn";

export default function PageSection(props) {
  const { id, items, backgroundColor, textColor } = props;

  let columnClass = `px-lg-5 col-md-4 col-lg-${12 / items.length}`;

  function Style() {
    return (
      <style>
        {`
          #section-${id} {
            background-color: ${backgroundColor.hex};
            // font-size: 0.8rem;
          }
  
          #section-${id} * {
            color: ${textColor.hex};
          }
        `}
      </style>
    );
  }

  return (
    <>
      <Style />
      <section id={`section-${id}`}>
        <div className="container">
          <div className="row py-7">
            {items.map((item) => (
              <div key={item.id} className={columnClass}>
                <SectionColumn {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
